interface VisionApiResponse {
  responses: Array<{
    labelAnnotations?: Array<{
      description: string;
      score: number;
    }>;
    textAnnotations?: Array<{
      description: string;
    }>;
    error?: {
      code: number;
      message: string;
    };
  }>;
}

interface ImageAnalysis {
  labels: Array<{
    description: string;
    confidence: number;
  }>;
  text?: string;
  error?: string;
}

export class GoogleVisionService {
  private apiKey: string;
  private baseUrl = "https://vision.googleapis.com/v1/images:annotate";

  constructor(apiKey: string) {
    this.apiKey = apiKey;
  }

  async analyzeImage(imageUrl: string): Promise<ImageAnalysis> {
    try {
      const response = await fetch(`${this.baseUrl}?key=${this.apiKey}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          requests: [
            {
              image: {
                source: {
                  imageUri: imageUrl,
                },
              },
              features: [
                {
                  type: "LABEL_DETECTION",
                  maxResults: 10,
                },
                {
                  type: "TEXT_DETECTION",
                  maxResults: 1,
                },
              ],
            },
          ],
        }),
      });

      if (!response.ok) {
        throw new Error(`API request failed: ${response.status} ${response.statusText}`);
      }

      const data: VisionApiResponse = await response.json();
      const result = data.responses[0];

      if (result.error) {
        throw new Error(`Vision API error: ${result.error.message}`);
      }

      return {
        labels:
          result.labelAnnotations?.map((label) => ({
            description: label.description.toLowerCase(),
            confidence: label.score,
          })) || [],
        text: result.textAnnotations?.[0]?.description || undefined,
      };
    } catch (error) {
      console.error("Error analyzing image:", error);
      return {
        labels: [],
        error: error instanceof Error ? error.message : "Unknown error occurred",
      };
    }
  }

  async analyzeImages(imageUrls: string[]): Promise<ImageAnalysis[]> {
    // Process images in batches to avoid rate limits
    const batchSize = 5;
    const results: ImageAnalysis[] = [];

    for (let i = 0; i < imageUrls.length; i += batchSize) {
      const batch = imageUrls.slice(i, i + batchSize);
      const batchPromises = batch.map((url) => this.analyzeImage(url));
      const batchResults = await Promise.all(batchPromises);
      results.push(...batchResults);

      // Add small delay between batches to respect rate limits
      if (i + batchSize < imageUrls.length) {
        await new Promise((resolve) => setTimeout(resolve, 100));
      }
    }

    return results;
  }
}
