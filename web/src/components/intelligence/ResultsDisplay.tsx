import { useTheme } from '../../contexts/ThemeContext';
import { Calendar, MapPin, Eye } from 'lucide-react';
import { Link } from 'react-router-dom';
import { getImageUrl } from '../../utils/imageUtils';

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
      <div className={`p-3 rounded-lg ${theme === 'light' ? 'bg-blue-50 border border-blue-200' : 'bg-blue-900/20 border border-blue-800'}`}>
        <p className={`font-medium ${theme === 'light' ? 'text-blue-800' : 'text-blue-300'}`}>
          {message}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {images.map((image, index) => (
          <div
            key={`${image.gallerySlug}-${image.filename}-${index}`}
            className={`rounded-lg border overflow-hidden ${theme === 'light' ? 'bg-white border-gray-200' : 'bg-gray-800 border-gray-700'}`}
          >
            <Link to={`/gallery/${image.gallerySlug}/image/${encodeURIComponent(image.filename.replace(/\.[^/.]+$/, ''))}`}>
              <div className="aspect-square overflow-hidden">
                <img
                  src={getImageUrl(image.gallerySlug, image.filename, '380')}
                  alt={image.filename}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
            </Link>
            
            <div className="p-3 space-y-2">
              <h3 className={`font-medium text-sm truncate ${theme === 'light' ? 'text-gray-900' : 'text-gray-100'}`}>
                {image.filename.replace(/\.[^/.]+$/, '')}
              </h3>
              
              <Link
                to={`/gallery/${image.gallerySlug}`}
                className={`text-xs ${theme === 'light' ? 'text-blue-600 hover:text-blue-800' : 'text-blue-400 hover:text-blue-200'}`}
              >
                {image.galleryTitle}
              </Link>

              <div className="flex flex-wrap gap-2 text-xs">
                {image.createDate && (
                  <div className={`flex items-center gap-1 ${theme === 'light' ? 'text-gray-600' : 'text-gray-400'}`}>
                    <Calendar size={12} />
                    {formatDate(image.createDate)}
                  </div>
                )}
                
                {image.latitude && image.longitude && (
                  <div className={`flex items-center gap-1 ${theme === 'light' ? 'text-gray-600' : 'text-gray-400'}`}>
                    <MapPin size={12} />
                    GPS
                  </div>
                )}
              </div>

              {image.aiAnalysis && image.aiAnalysis.labels.length > 0 && (
                <div className="space-y-1">
                  <div className={`flex items-center gap-1 text-xs ${theme === 'light' ? 'text-gray-600' : 'text-gray-400'}`}>
                    <Eye size={12} />
                    AI erkannt:
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {image.aiAnalysis.labels.slice(0, 3).map((label, idx) => (
                      <span
                        key={idx}
                        className={`px-2 py-1 text-xs rounded-full ${
                          theme === 'light' 
                            ? 'bg-gray-100 text-gray-700' 
                            : 'bg-gray-700 text-gray-300'
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
