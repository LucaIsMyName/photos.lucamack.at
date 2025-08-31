import { galleries } from '../galleries';
import { GoogleVisionService } from './googleVision';

interface QueryResult {
  type: 'images' | 'galleries' | 'text';
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
      const cached = localStorage.getItem('vision-analysis-cache');
      if (cached) {
        const data = JSON.parse(cached);
        this.analysisCache = new Map(data);
      }
    } catch (error) {
      console.error('Error loading cached analysis:', error);
    }
  }

  private saveCachedAnalysis() {
    try {
      const data = Array.from(this.analysisCache.entries());
      localStorage.setItem('vision-analysis-cache', JSON.stringify(data));
    } catch (error) {
      console.error('Error saving cached analysis:', error);
    }
  }

  async processQuery(query: string): Promise<QueryResult> {
    const context = this.parseQuery(query.toLowerCase());
    
    // Get all images from all galleries
    const allImages = galleries.flatMap(gallery => 
      gallery.images.map(image => ({
        ...image,
        gallerySlug: gallery.slug,
        galleryTitle: gallery.title
      }))
    );

    let filteredImages = [...allImages];

    // Filter by date range
    if (context.dateRange) {
      filteredImages = filteredImages.filter(image => {
        if (!image.createDate) return false;
        const imageDate = new Date(image.createDate);
        return imageDate >= context.dateRange!.start && imageDate <= context.dateRange!.end;
      });
    }

    // Filter by location (basic implementation using existing GPS data)
    if (context.location) {
      const locationLower = context.location.toLowerCase();
      filteredImages = filteredImages.filter(image => {
        // Check if location matches gallery tags or title
        const gallery = galleries.find(g => g.slug === image.gallerySlug);
        if (gallery?.tags) {
          return gallery.tags.some(tag => tag.toLowerCase().includes(locationLower));
        }
        return gallery?.title.toLowerCase().includes(locationLower) || false;
      });
    }

    // Filter by gallery names
    if (context.galleryNames && context.galleryNames.length > 0) {
      filteredImages = filteredImages.filter(image => {
        const gallery = galleries.find(g => g.slug === image.gallerySlug);
        return context.galleryNames!.some(name => 
          gallery?.title.toLowerCase().includes(name) || 
          gallery?.slug.toLowerCase().includes(name)
        );
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
      type: 'images',
      items: filteredImages,
      message: this.generateResponseMessage(filteredImages.length, context, query),
      totalFound: filteredImages.length
    };
  }

  private parseQuery(query: string): QueryContext {
    const context: QueryContext = {};

    // Parse date patterns - order matters, most specific first
    const datePatterns = [
      // DD. Month YYYY (e.g., "1. mai 2025", "20. april 2025")
      /(\d{1,2})\.?\s+(januar|februar|märz|april|mai|juni|juli|august|september|oktober|november|dezember)\s*(\d{4})/gi,
      // DD.MM.YYYY or DD MM YYYY
      /(\d{1,2})\.?\s*(\d{1,2})\.?\s*(\d{4})/g,
      // YYYY-MM-DD
      /(\d{4})-(\d{1,2})-(\d{1,2})/g,
      // Month YYYY only (entire month)
      /^.*(januar|februar|märz|april|mai|juni|juli|august|september|oktober|november|dezember)\s*(\d{4}).*$/gi
    ];

    for (const pattern of datePatterns) {
      const matches = [...query.matchAll(pattern)];
      if (matches.length > 0) {
        const match = matches[0];
        
        // DD. Month YYYY format (most specific)
        if (match[3] && match[2] && match[1]) {
          const day = parseInt(match[1]);
          const monthName = match[2].toLowerCase();
          const year = parseInt(match[3]);
          const monthMap: { [key: string]: number } = {
            'januar': 0, 'februar': 1, 'märz': 2, 'april': 3, 'mai': 4, 'juni': 5,
            'juli': 6, 'august': 7, 'september': 8, 'oktober': 9, 'november': 10, 'dezember': 11
          };
          const month = monthMap[monthName];
          if (month !== undefined) {
            const date = new Date(year, month, day);
            // Single day range
            context.dateRange = { 
              start: new Date(date.getFullYear(), date.getMonth(), date.getDate(), 0, 0, 0),
              end: new Date(date.getFullYear(), date.getMonth(), date.getDate(), 23, 59, 59)
            };
            break;
          }
        }
        // DD.MM.YYYY format
        else if (match[3] && !isNaN(parseInt(match[1])) && !isNaN(parseInt(match[2]))) {
          const day = parseInt(match[1]);
          const month = parseInt(match[2]) - 1;
          const year = parseInt(match[3]);
          const date = new Date(year, month, day);
          // Single day range
          context.dateRange = { 
            start: new Date(date.getFullYear(), date.getMonth(), date.getDate(), 0, 0, 0),
            end: new Date(date.getFullYear(), date.getMonth(), date.getDate(), 23, 59, 59)
          };
          break;
        }
        // YYYY-MM-DD format
        else if (match[1] && match[2] && match[3] && match[1].length === 4) {
          const year = parseInt(match[1]);
          const month = parseInt(match[2]) - 1;
          const day = parseInt(match[3]);
          const date = new Date(year, month, day);
          // Single day range
          context.dateRange = { 
            start: new Date(date.getFullYear(), date.getMonth(), date.getDate(), 0, 0, 0),
            end: new Date(date.getFullYear(), date.getMonth(), date.getDate(), 23, 59, 59)
          };
          break;
        }
        // Month Year format (entire month) - only if no day specified
        else if (match[2] && !isNaN(parseInt(match[2]))) {
          const year = parseInt(match[2]);
          const monthName = match[1].toLowerCase();
          const monthMap: { [key: string]: number } = {
            'januar': 0, 'februar': 1, 'märz': 2, 'april': 3, 'mai': 4, 'juni': 5,
            'juli': 6, 'august': 7, 'september': 8, 'oktober': 9, 'november': 10, 'dezember': 11
          };
          const month = monthMap[monthName];
          if (month !== undefined) {
            context.dateRange = {
              start: new Date(year, month, 1),
              end: new Date(year, month + 1, 0, 23, 59, 59)
            };
            break;
          }
        }
      }
    }

    // Parse location
    const locationPatterns = [
      /(?:aus|von|in)\s+(wien|vienna|österreich|austria)/gi,
      /wien|vienna/gi,
      /(\d+)\s*km\s*(?:um|around)/gi
    ];

    for (const pattern of locationPatterns) {
      const match = query.match(pattern);
      if (match) {
        context.location = match[0].replace(/(?:aus|von|in)\s+/gi, '').trim();
        break;
      }
    }

    // Parse gallery names - be more strict about exact matches
    const galleryPatterns = [
      // Quoted gallery names: "galerie name" galerie/gallery
      /(?:aus|von)\s+(?:der\s+)?["']([^"']+)["']\s*(?:galerie|gallery)/gi,
      /["']([^"']+)["']\s*(?:galerie|gallery)/gi,
      // Specific known galleries (exact matches only)
      /\b(öffis|arsenal)\b(?:\s+(?:galerie|gallery))?\b/gi,
      // Wien gallery (be more specific)
      /\bwien\s+(?:galerie|gallery)\b/gi
    ];

    const foundGalleryNames: string[] = [];
    for (const pattern of galleryPatterns) {
      const matches = [...query.matchAll(pattern)];
      if (matches.length > 0) {
        matches.forEach(match => {
          const galleryName = (match[1] || match[0]).toLowerCase().replace(/\s+(?:galerie|gallery)/, '').trim();
          if (galleryName && !foundGalleryNames.includes(galleryName)) {
            foundGalleryNames.push(galleryName);
          }
        });
      }
    }
    
    if (foundGalleryNames.length > 0) {
      context.galleryNames = foundGalleryNames;
    }

    // Parse content keywords - use word boundaries for exact matches
    const contentKeywords = [
      'baum', 'bäume', 'tree', 'trees',
      'regenbogen', 'rainbow',
      'auto', 'car', 'cars',
      'haus', 'häuser', 'house', 'houses', 'building',
      'person', 'menschen', 'people',
      'himmel', 'sky',
      'wasser', 'water',
      'blume', 'blumen', 'flower', 'flowers'
    ];

    const foundContent = contentKeywords.filter(keyword => {
      const regex = new RegExp(`\\b${keyword}\\b`, 'i');
      return regex.test(query);
    });
    
    if (foundContent.length > 0) {
      context.content = foundContent;
    }

    // Parse quantity and random - be more strict about patterns
    const quantityMatch = query.match(/(\d+)\s*(?:zufällige|random)\s*(?:bilder|fotos|images)/i);
    if (quantityMatch) {
      context.limit = parseInt(quantityMatch[1]);
      context.random = true;
    } else {
      // Also check for non-random quantity requests
      const simpleQuantityMatch = query.match(/(\d+)\s*(?:bilder|fotos|images)/i);
      if (simpleQuantityMatch) {
        context.limit = parseInt(simpleQuantityMatch[1]);
        context.random = false;
      }
    }

    return context;
  }

  private async filterByContent(images: any[], contentKeywords: string[]): Promise<any[]> {
    const filteredImages = [];

    for (const image of images) {
      const cacheKey = `${image.gallerySlug}/${image.filename}`;
      
      let analysis = this.analysisCache.get(cacheKey);
      if (!analysis) {
        // Analyze image with Google Vision
        const imageUrl = `https://photos.lucamack.at/content/galleries/${image.gallerySlug}/${encodeURI(image.filename.replaceAll(" ", "_"))}`;
        analysis = await this.visionService.analyzeImage(imageUrl);
        
        if (!analysis.error) {
          this.analysisCache.set(cacheKey, analysis);
          this.saveCachedAnalysis();
        }
      }

      if (analysis && analysis.labels) {
        // Be more strict - require higher confidence and exact keyword matches
        const hasContent = contentKeywords.some(keyword => 
          analysis.labels.some((label: any) => {
            const labelDesc = label.description.toLowerCase();
            const translatedLabel = this.translateContent(labelDesc);
            const keywordLower = keyword.toLowerCase();
            
            // Require higher confidence (>0.7) and exact word matches
            return label.confidence > 0.7 && (
              labelDesc === keywordLower || 
              translatedLabel === keywordLower ||
              labelDesc.includes(keywordLower) ||
              translatedLabel.includes(keywordLower)
            );
          })
        );

        if (hasContent) {
          filteredImages.push({
            ...image,
            aiAnalysis: analysis
          });
        }
      }
    }

    return filteredImages;
  }

  private translateContent(englishLabel: string): string {
    const translations: { [key: string]: string } = {
      'tree': 'baum',
      'building': 'haus',
      'car': 'auto',
      'person': 'person',
      'sky': 'himmel',
      'water': 'wasser',
      'flower': 'blume'
    };

    return translations[englishLabel.toLowerCase()] || englishLabel;
  }

  private getRandomItems<T>(array: T[], count: number): T[] {
    const shuffled = [...array].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  }

  private generateResponseMessage(count: number, context: QueryContext, originalQuery: string): string {
    if (count === 0) {
      return `Keine Bilder gefunden für "${originalQuery}". Versuche eine andere Suchanfrage.`;
    }

    let message = `${count} Bild${count === 1 ? '' : 'er'} gefunden`;

    if (context.dateRange) {
      const dateStr = context.dateRange.start.toLocaleDateString('de-DE');
      message += ` vom ${dateStr}`;
    }

    if (context.location) {
      message += ` aus ${context.location}`;
    }

    if (context.content && context.content.length > 0) {
      message += ` mit ${context.content.join(', ')}`;
    }

    if (context.galleryNames && context.galleryNames.length > 0) {
      message += ` aus der "${context.galleryNames.join('", "')}" Galerie`;
    }

    return message + '.';
  }
}
