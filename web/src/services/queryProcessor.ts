import { galleries } from "../galleries";
import { GoogleVisionService } from "./googleVision";

interface QueryResult {
  type: "images" | "galleries" | "text";
  items: any[];
  message: string;
  totalFound: number;
}

interface QueryContext {
  dateRange?: { start: Date; end: Date };
  location?: string;
  content?: string[];
  galleryNames?: string[];
  limit?: number;
  random?: boolean;
  intent?: 'search' | 'browse' | 'filter' | 'show';
  confidence?: number;
}

interface QueryIntent {
  type: 'search' | 'browse' | 'filter' | 'show';
  confidence: number;
  entities: {
    dates?: string[];
    locations?: string[];
    objects?: string[];
    galleries?: string[];
    quantities?: number[];
    modifiers?: string[];
  };
}

export class QueryProcessor {
  private visionService: GoogleVisionService;
  private analysisCache: Map<string, any> = new Map();

  constructor(apiKey: string) {
    this.visionService = new GoogleVisionService(apiKey);
    this.loadCachedAnalysis();
  }

  private loadCachedAnalysis() {
    try {
      const cached = localStorage.getItem("vision-analysis-cache");
      if (cached) {
        const data = JSON.parse(cached);
        this.analysisCache = new Map(data);
      }
    } catch (error) {
      console.error("Error loading cached analysis:", error);
    }
  }

  private saveCachedAnalysis() {
    try {
      const data = Array.from(this.analysisCache.entries());
      localStorage.setItem("vision-analysis-cache", JSON.stringify(data));
    } catch (error) {
      console.error("Error saving cached analysis:", error);
    }
  }

  async processQuery(query: string): Promise<QueryResult> {
    const intent = this.analyzeIntent(query);
    const context = this.parseNaturalLanguage(query, intent);

    // Get all images from all galleries
    const allImages = galleries.flatMap((gallery) =>
      gallery.images.map((image) => ({
        ...image,
        gallerySlug: gallery.slug,
        galleryTitle: gallery.title,
      }))
    );

    let filteredImages = [...allImages];

    // Filter by date range
    if (context.dateRange) {
      filteredImages = filteredImages.filter((image) => {
        if (!image.createDate) return false;
        const imageDate = new Date(image.createDate);
        return imageDate >= context.dateRange!.start && imageDate <= context.dateRange!.end;
      });
    }

    // Filter by location (basic implementation using existing GPS data)
    if (context.location) {
      const locationLower = context.location.toLowerCase();
      filteredImages = filteredImages.filter((image) => {
        // Check if location matches gallery tags or title
        const gallery = galleries.find((g) => g.slug === image.gallerySlug);
        if (gallery?.tags) {
          return gallery.tags.some((tag) => tag.toLowerCase().includes(locationLower));
        }
        return gallery?.title.toLowerCase().includes(locationLower) || false;
      });
    }

    // Filter by gallery names
    if (context.galleryNames && context.galleryNames.length > 0) {
      filteredImages = filteredImages.filter((image) => {
        const gallery = galleries.find((g) => g.slug === image.gallerySlug);
        return context.galleryNames!.some((name) => gallery?.title.toLowerCase().includes(name) || gallery?.slug.toLowerCase().includes(name));
      });
    }

    // Filter by content (requires AI analysis)
    if (context.content && context.content.length > 0) {
      filteredImages = await this.filterByContent(filteredImages, context.content);
    }

    // Apply random selection if requested
    if (context.random && context.limit) {
      filteredImages = this.getRandomItems(filteredImages, context.limit);
    } else if (context.limit) {
      filteredImages = filteredImages.slice(0, context.limit);
    }

    return {
      type: "images",
      items: filteredImages,
      message: this.generateResponseMessage(filteredImages.length, context, query),
      totalFound: filteredImages.length,
    };
  }

  private analyzeIntent(query: string): QueryIntent {
    const lowerQuery = query.toLowerCase();
    
    // Enhanced intent detection patterns with better German support
    const searchPatterns = [
      /\b(find|search|look for|show me|get|where|what|which|can you find|i want to see)\b/,
      /\b(suche|finde|zeige|wo|was|welche|kannst du finden|ich möchte sehen|ich will sehen|zeig mir)\b/
    ];
    
    const browsePatterns = [
      /\b(browse|explore|see|view|display|all|give me)\b/,
      /\b(durchsuchen|erkunden|ansehen|alle|anzeigen|gib mir|lass mich sehen)\b/
    ];
    
    const filterPatterns = [
      /\b(filter|only|just|exclude|without)\b/,
      /\b(filtern|nur|ohne|ausschließen)\b/
    ];
    
    let intent: QueryIntent = {
      type: 'search',
      confidence: 0.5,
      entities: {}
    };
    
    // Determine primary intent
    if (searchPatterns.some(p => p.test(lowerQuery))) {
      intent.type = 'search';
      intent.confidence = 0.8;
    } else if (browsePatterns.some(p => p.test(lowerQuery))) {
      intent.type = 'browse';
      intent.confidence = 0.7;
    } else if (filterPatterns.some(p => p.test(lowerQuery))) {
      intent.type = 'filter';
      intent.confidence = 0.7;
    }
    
    // Extract entities
    intent.entities = this.extractEntities(query);
    
    return intent;
  }
  
  private extractEntities(query: string) {
    const entities: any = {};
    const lowerQuery = query.toLowerCase();
    
    // Extract dates with flexible parsing
    entities.dates = this.extractDates(query);
    
    // Extract locations
    entities.locations = this.extractLocations(lowerQuery);
    
    // Extract objects/content
    entities.objects = this.extractObjects(lowerQuery);
    
    // Extract galleries
    entities.galleries = this.extractGalleries(lowerQuery);
    
    // Extract quantities
    entities.quantities = this.extractQuantities(lowerQuery);
    
    // Extract modifiers (random, recent, etc.)
    entities.modifiers = this.extractModifiers(lowerQuery);
    
    return entities;
  }
  
  private extractDates(query: string): string[] {
    const dates: string[] = [];
    const lowerQuery = query.toLowerCase();
    
    // Relative dates - enhanced German support
    const relativeDates = [
      { pattern: /\b(today|heute)\b/, value: 'today' },
      { pattern: /\b(yesterday|gestern)\b/, value: 'yesterday' },
      { pattern: /\b(last week|letzte woche|vergangene woche)\b/, value: 'last_week' },
      { pattern: /\b(last month|letzten monat|vergangenen monat)\b/, value: 'last_month' },
      { pattern: /\b(last year|letztes jahr|vergangenes jahr)\b/, value: 'last_year' },
      { pattern: /\b(this week|diese woche)\b/, value: 'this_week' },
      { pattern: /\b(this month|diesen monat)\b/, value: 'this_month' },
      { pattern: /\b(this year|dieses jahr)\b/, value: 'this_year' },
      { pattern: /\b(recent|recently|kürzlich|neulich)\b/, value: 'last_week' }
    ];
    
    relativeDates.forEach(({ pattern, value }) => {
      if (pattern.test(lowerQuery)) {
        dates.push(value);
      }
    });
    
    // Specific dates (keep existing patterns but make them more flexible)
    const datePatterns = [
      /(\d{1,2})[.\/\s]+(\d{1,2})[.\/\s]+(\d{4})/g,
      /(\d{1,2})[.\/\s]+(januar|februar|märz|april|mai|juni|juli|august|september|oktober|november|dezember)[.\/\s]*(\d{4})/gi,
      /(januar|februar|märz|april|mai|juni|juli|august|september|oktober|november|dezember)\s+(\d{4})/gi
    ];
    
    datePatterns.forEach(pattern => {
      const matches = [...query.matchAll(pattern)];
      matches.forEach(match => {
        dates.push(match[0]);
      });
    });
    
    return dates;
  }
  
  private extractLocations(query: string): string[] {
    const locations: string[] = [];
    
    // Common location indicators
    const locationWords = [
      'wien', 'vienna', 'salzburg', 'burghausen', 'österreich', 'austria',
      'deutschland', 'germany', 'schweiz', 'swiss', 'zürich', 'zurich',
      'berlin', 'karlsruhe', 'bern', 'munich', 'münchen', 'innsbruck'
    ];
    
    locationWords.forEach(location => {
      if (query.includes(location)) {
        locations.push(location);
      }
    });
    
    // Extract locations after prepositions
    const locationPattern = /\b(?:in|at|from|aus|von|bei)\s+([a-zA-ZäöüÄÖÜß\s]+?)\b/gi;
    const matches = [...query.matchAll(locationPattern)];
    matches.forEach(match => {
      const location = match[1].trim();
      if (location.length > 2) {
        locations.push(location);
      }
    });
    
    return locations;
  }
  
  private extractObjects(query: string): string[] {
    const objects: string[] = [];
    
    // Expanded object vocabulary with synonyms
    const objectMap = {
      // Nature
      'tree': ['tree', 'trees', 'baum', 'bäume'],
      'flower': ['flower', 'flowers', 'blume', 'blumen'],
      'sky': ['sky', 'himmel', 'clouds', 'wolken'],
      'water': ['water', 'wasser', 'sea', 'meer', 'lake', 'see'],
      'mountain': ['mountain', 'mountains', 'berg', 'berge'],
      'forest': ['forest', 'wald', 'woods'],
      
      // Architecture
      'building': ['building', 'buildings', 'haus', 'häuser', 'gebäude'],
      'bridge': ['bridge', 'brücke'],
      'church': ['church', 'kirche'],
      'castle': ['castle', 'schloss'],
      
      // Transportation
      'car': ['car', 'cars', 'auto', 'autos'],
      'train': ['train', 'zug', 'trains', 'züge'],
      'bike': ['bike', 'bicycle', 'fahrrad'],
      
      // People & Animals
      'person': ['person', 'people', 'menschen', 'man', 'woman', 'child'],
      'animal': ['animal', 'animals', 'tier', 'tiere', 'dog', 'cat', 'bird'],
      
      // Objects
      'table': ['table', 'tables', 'tisch', 'tische'],
      'chair': ['chair', 'chairs', 'stuhl', 'stühle'],
      'lamp': ['lamp', 'lamps', 'lampe', 'lampen'],
      'glass': ['glass', 'glasses', 'glas', 'gläser']
    };
    
    Object.entries(objectMap).forEach(([key, synonyms]) => {
      synonyms.forEach(synonym => {
        const regex = new RegExp(`\\b${synonym}\\b`, 'i');
        if (regex.test(query)) {
          objects.push(key);
        }
      });
    });
    
    return [...new Set(objects)];
  }
  
  private extractGalleries(query: string): string[] {
    const galleryNames: string[] = [];
    
    // Extract quoted gallery names
    const quotedPattern = /["']([^"']+)["']/g;
    const quotedMatches = [...query.matchAll(quotedPattern)];
    quotedMatches.forEach(match => {
      galleryNames.push(match[1]);
    });
    
    // Known gallery names
    const knownGalleries = ['öffis', 'arsenal', 'wien'];
    knownGalleries.forEach(gallery => {
      if (query.includes(gallery)) {
        galleryNames.push(gallery);
      }
    });
    
    return galleryNames;
  }
  
  private extractQuantities(query: string): number[] {
    const quantities: number[] = [];
    
    // Extract numbers
    const numberPattern = /\b(\d+)\b/g;
    const matches = [...query.matchAll(numberPattern)];
    matches.forEach(match => {
      const num = parseInt(match[1]);
      if (num > 0 && num < 1000) { // Reasonable limits
        quantities.push(num);
      }
    });
    
    return quantities;
  }
  
  private extractModifiers(query: string): string[] {
    const modifiers: string[] = [];
    
    const modifierPatterns = [
      { pattern: /\b(random|zufällig)\b/i, value: 'random' },
      { pattern: /\b(recent|newest|latest|neueste)\b/i, value: 'recent' },
      { pattern: /\b(old|oldest|älteste)\b/i, value: 'oldest' },
      { pattern: /\b(best|favorite|lieblings)\b/i, value: 'best' }
    ];
    
    modifierPatterns.forEach(({ pattern, value }) => {
      if (pattern.test(query)) {
        modifiers.push(value);
      }
    });
    
    return modifiers;
  }
  
  private parseNaturalLanguage(_query: string, intent: QueryIntent): QueryContext {
    const context: QueryContext = {
      intent: intent.type,
      confidence: intent.confidence
    };
    
    // Process dates
    if (intent.entities.dates && intent.entities.dates.length > 0) {
      context.dateRange = this.processDates(intent.entities.dates);
    }
    
    // Process locations
    if (intent.entities.locations && intent.entities.locations.length > 0) {
      context.location = intent.entities.locations[0];
    }
    
    // Process objects/content
    if (intent.entities.objects && intent.entities.objects.length > 0) {
      context.content = intent.entities.objects;
    }
    
    // Process galleries
    if (intent.entities.galleries && intent.entities.galleries.length > 0) {
      context.galleryNames = intent.entities.galleries;
    }
    
    // Process quantities and modifiers
    if (intent.entities.quantities && intent.entities.quantities.length > 0) {
      context.limit = intent.entities.quantities[0];
    }
    
    if (intent.entities.modifiers && intent.entities.modifiers.includes('random')) {
      context.random = true;
    }
    
    return context;
  }
  
  private processDates(dateStrings: string[]): { start: Date; end: Date } | undefined {
    const now = new Date();
    
    for (const dateStr of dateStrings) {
      switch (dateStr) {
        case 'today':
          return {
            start: new Date(now.getFullYear(), now.getMonth(), now.getDate(), 0, 0, 0),
            end: new Date(now.getFullYear(), now.getMonth(), now.getDate(), 23, 59, 59)
          };
        case 'yesterday':
          const yesterday = new Date(now);
          yesterday.setDate(yesterday.getDate() - 1);
          return {
            start: new Date(yesterday.getFullYear(), yesterday.getMonth(), yesterday.getDate(), 0, 0, 0),
            end: new Date(yesterday.getFullYear(), yesterday.getMonth(), yesterday.getDate(), 23, 59, 59)
          };
        case 'last_week':
          const weekStart = new Date(now);
          weekStart.setDate(weekStart.getDate() - 7);
          weekStart.setHours(0, 0, 0, 0);
          return {
            start: weekStart,
            end: now
          };
        case 'this_week':
          const thisWeekStart = new Date(now);
          thisWeekStart.setDate(thisWeekStart.getDate() - now.getDay());
          thisWeekStart.setHours(0, 0, 0, 0);
          return {
            start: thisWeekStart,
            end: now
          };
        case 'last_month':
          const lastMonth = new Date(now);
          lastMonth.setMonth(lastMonth.getMonth() - 1);
          lastMonth.setDate(1);
          lastMonth.setHours(0, 0, 0, 0);
          return {
            start: lastMonth,
            end: now
          };
        case 'this_month':
          const thisMonthStart = new Date(now.getFullYear(), now.getMonth(), 1, 0, 0, 0);
          return {
            start: thisMonthStart,
            end: now
          };
        case 'last_year':
          const lastYear = new Date(now);
          lastYear.setFullYear(lastYear.getFullYear() - 1);
          lastYear.setMonth(0);
          lastYear.setDate(1);
          lastYear.setHours(0, 0, 0, 0);
          return {
            start: lastYear,
            end: now
          };
        case 'this_year':
          const thisYearStart = new Date(now.getFullYear(), 0, 1, 0, 0, 0);
          return {
            start: thisYearStart,
            end: now
          };
        default:
          // Try to parse specific dates
          const parsed = this.parseSpecificDate(dateStr);
          if (parsed) return parsed;
      }
    }
    
    return undefined;
  }
  
  private parseSpecificDate(dateStr: string): { start: Date; end: Date } | undefined {
    // Try various date formats
    const formats = [
      /^(\d{1,2})[.\/](\d{1,2})[.\/](\d{4})$/,
      /^(\d{1,2})\s+(januar|februar|märz|april|mai|juni|juli|august|september|oktober|november|dezember)\s+(\d{4})$/i,
      /^(januar|februar|märz|april|mai|juni|juli|august|september|oktober|november|dezember)\s+(\d{4})$/i
    ];
    
    for (const format of formats) {
      const match = dateStr.match(format);
      if (match) {
        try {
          let date: Date;
          
          if (format.source.includes('januar')) {
            // Month name format
            const monthMap: { [key: string]: number } = {
              januar: 0, februar: 1, märz: 2, april: 3, mai: 4, juni: 5,
              juli: 6, august: 7, september: 8, oktober: 9, november: 10, dezember: 11
            };
            
            if (match[3]) {
              // Day + Month + Year
              const day = parseInt(match[1]);
              const month = monthMap[match[2].toLowerCase()];
              const year = parseInt(match[3]);
              date = new Date(year, month, day);
            } else {
              // Month + Year (entire month)
              const month = monthMap[match[1].toLowerCase()];
              const year = parseInt(match[2]);
              return {
                start: new Date(year, month, 1),
                end: new Date(year, month + 1, 0, 23, 59, 59)
              };
            }
          } else {
            // Numeric format
            const day = parseInt(match[1]);
            const month = parseInt(match[2]) - 1;
            const year = parseInt(match[3]);
            date = new Date(year, month, day);
          }
          
          return {
            start: new Date(date.getFullYear(), date.getMonth(), date.getDate(), 0, 0, 0),
            end: new Date(date.getFullYear(), date.getMonth(), date.getDate(), 23, 59, 59)
          };
        } catch (e) {
          continue;
        }
      }
    }
    
    return undefined;
  }

  private async filterByContent(images: any[], contentKeywords: string[]): Promise<any[]> {
    const filteredImages = [];
    const maxImagesToAnalyze = 50; // Prevent infinite loops
    const imagesToProcess = images.slice(0, maxImagesToAnalyze);

    for (const image of imagesToProcess) {
      const cacheKey = `${image.gallerySlug}/${image.filename}`;

      let analysis = this.analysisCache.get(cacheKey);
      if (!analysis) {
        try {
          // Analyze image with Google Vision
          const imageUrl = `https://photos.lucamack.at/content/galleries/${image.gallerySlug}/${encodeURI(image.filename.replaceAll(" ", "_"))}`;
          analysis = await this.visionService.analyzeImage(imageUrl);

          if (!analysis.error) {
            this.analysisCache.set(cacheKey, analysis);
            this.saveCachedAnalysis();
          } else {
            // Cache failed analysis to avoid retrying
            this.analysisCache.set(cacheKey, { labels: [], error: analysis.error });
            continue;
          }
        } catch (error) {
          console.error(`Failed to analyze image ${cacheKey}:`, error);
          // Cache error to prevent retry loops
          this.analysisCache.set(cacheKey, { labels: [], error: 'Analysis failed' });
          continue;
        }
      }

      // Skip if analysis failed
      if (analysis.error) {
        continue;
      }

      if (analysis && analysis.labels) {
        // More flexible matching with lower confidence threshold
        const hasContent = contentKeywords.some((keyword) =>
          analysis.labels.some((label: any) => {
            const labelDesc = label.description.toLowerCase();
            const translatedLabel = this.translateContent(labelDesc);
            const keywordLower = keyword.toLowerCase();

            // Lower confidence threshold and more flexible matching
            return label.confidence > 0.5 && (
              labelDesc === keywordLower || 
              translatedLabel === keywordLower || 
              labelDesc.includes(keywordLower) || 
              translatedLabel.includes(keywordLower) ||
              keywordLower.includes(labelDesc) ||
              keywordLower.includes(translatedLabel)
            );
          })
        );

        if (hasContent) {
          filteredImages.push({
            ...image,
            aiAnalysis: analysis,
          });
        }
      }
    }

    return filteredImages;
  }

  private translateContent(englishLabel: string): string {
    const translations: { [key: string]: string } = {
      tree: "baum",
      building: "haus",
      house: "haus",
      car: "auto",
      vehicle: "auto",
      person: "person",
      people: "menschen",
      human: "mensch",
      sky: "himmel",
      water: "wasser",
      flower: "blume",
      plant: "pflanze",
      animal: "tier",
      dog: "hund",
      cat: "katze",
      bird: "vogel",
      food: "essen",
      table: "tisch",
      chair: "stuhl",
      window: "fenster",
      door: "tür",
      street: "straße",
      road: "straße",
      bridge: "brücke",
      mountain: "berg",
      forest: "wald",
      lake: "see",
      river: "fluss",
      // Reverse translations
      baum: "tree",
      haus: "building",
      auto: "car",
      mensch: "person",
      menschen: "people",
      himmel: "sky",
      wasser: "water",
      blume: "flower"
    };

    return translations[englishLabel.toLowerCase()] || englishLabel;
  }

  private getRandomItems<T>(array: T[], count: number): T[] {
    const shuffled = [...array].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  }

  private generateResponseMessage(count: number, context: QueryContext, originalQuery: string): string {
    // Detect if query is in German or English
    const isGerman = /\b(zeige|finde|suche|bilder|fotos|aus|von|mit|der|die|das)\b/i.test(originalQuery);
    
    if (count === 0) {
      if (isGerman) {
        return `Keine Bilder gefunden für "${originalQuery}". Versuche eine andere Suchanfrage.`;
      } else {
        return `No images found for "${originalQuery}". Try a different search query.`;
      }
    }

    let message: string;
    if (isGerman) {
      message = `${count} Bild${count === 1 ? "" : "er"} gefunden`;
      
      if (context.dateRange) {
        const dateStr = context.dateRange.start.toLocaleDateString("de-DE");
        message += ` vom ${dateStr}`;
      }

      if (context.location) {
        message += ` aus ${context.location}`;
      }

      if (context.content && context.content.length > 0) {
        message += ` mit ${context.content.join(", ")}`;
      }

      if (context.galleryNames && context.galleryNames.length > 0) {
        message += ` aus der "${context.galleryNames.join('", "')}" Galerie`;
      }
    } else {
      message = `Found ${count} image${count === 1 ? "" : "s"}`;
      
      if (context.dateRange) {
        const dateStr = context.dateRange.start.toLocaleDateString("en-US");
        message += ` from ${dateStr}`;
      }

      if (context.location) {
        message += ` from ${context.location}`;
      }

      if (context.content && context.content.length > 0) {
        message += ` with ${context.content.join(", ")}`;
      }

      if (context.galleryNames && context.galleryNames.length > 0) {
        message += ` from "${context.galleryNames.join('", "')}" gallery`;
      }
    }

    return message + ".";
  }
}
