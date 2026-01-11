import { useTheme } from '../../contexts/ThemeContext';
import { Calendar, MapPin, Eye } from 'lucide-react';
import { Link } from 'react-router-dom';
import { getImageUrl } from '../../utils/image';
import { slugify } from '../../utils/slugify';

interface ResultImage {
  filename: string;
  gallerySlug: string;
  galleryTitle: string;
  createDate?: string;
  latitude?: number;
  longitude?: number;
  aiAnalysis?: {
    labels: Array<{
      description: string;
      confidence: number;
    }>;
  };
}

interface ResultsDisplayProps {
  images: ResultImage[];
  message: string;
}

const ResultsDisplay: React.FC<ResultsDisplayProps> = ({ images, message }) => {
  const { theme } = useTheme();

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('de-DE', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    });
  };

  if (images.length === 0) {
    return (
      <div className={`text-center py-8 ${theme === 'light' ? 'text-gray-500' : 'text-gray-400'}`}>
        <p>{message}</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {message && (
        <div className={`p-3 border ${
          theme === 'dark' ? '' : ''
        }`}>
          <p className="font-medium">
            {message}
          </p>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {images.map((image, index) => (
          <div
            key={`${image.gallerySlug}-${image.filename}-${index}`}
            className={`border overflow-hidden ${
              theme === 'dark' ? 'bg-black border-white' : 'bg-white border-black'
            }`}
          >
            <Link to={`/gallery/${image.gallerySlug}/image/${slugify(image.filename.replace(/\.[^/.]+$/, ''))}`}>
              <div className="aspect-square overflow-hidden">
                <img
                  src={getImageUrl(image.gallerySlug, image.filename, 380)}
                  alt={image.filename}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
            </Link>
            
            <div className="p-3 space-y-2">
              <h3 className={`font-medium text-sm truncate ${
                theme === 'dark' ? 'text-white' : 'text-black'
              }`}>
                {image.filename.replace(/\.[^/.]+$/, '')}
              </h3>
              
              <Link
                to={`/gallery/${image.gallerySlug}`}
                className={`text-xs underline ${
                  theme === 'dark' ? 'text-red-400 hover:text-red-300' : 'text-red-600 hover:text-red-700'
                }`}
              >
                {image.galleryTitle}
              </Link>

              <div className="flex flex-wrap gap-2 text-xs">
                {image.createDate && (
                  <div className={`flex items-center gap-1 ${
                    theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    <Calendar size={12} />
                    {formatDate(image.createDate)}
                  </div>
                )}
                
                {image.latitude && image.longitude && (
                  <div className={`flex items-center gap-1 ${
                    theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    <MapPin size={12} />
                    GPS
                  </div>
                )}
              </div>

              {image.aiAnalysis && image.aiAnalysis.labels.length > 0 && (
                <div className="space-y-1">
                  <div className={`flex items-center gap-1 text-xs ${
                    theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    <Eye size={12} />
                    AI erkannt:
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {image.aiAnalysis.labels.slice(0, 3).map((label, idx) => (
                      <span
                        key={idx}
                        className={`px-2 py-1 text-xs border ${
                          theme === 'dark' 
                            ? 'border-white text-white' 
                            : 'border-black text-black'
                        }`}
                      >
                        {label.description}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResultsDisplay;
