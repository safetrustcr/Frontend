import type React from 'react';
import Image from 'next/image';
import { Bed, Bath } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import dynamic from 'next/dynamic';
import 'leaflet/dist/leaflet.css';

const MapComponent = dynamic(() => import('@/components/hotels/payment/Map'), {
  ssr: false,
  loading: () => <p>Loading map...</p>,
});

interface HotelDetailsProps {
  hotelName: string;
  description: string;
  details: string;
  goodToKnow: string;
  location: string;
  coordinates: [number, number];
  rating: number;
  beds: number;
  baths: number;
  imageUrl: string;
}

const HotelDetails: React.FC<HotelDetailsProps> = ({
  hotelName,
  description,
  details,
  goodToKnow,
  location,
  coordinates,
  rating,
  beds,
  baths,
  imageUrl,
}) => {
  return (
    <div className="space-y-6">
      <div className="flex items-start gap-4">
        <div className="relative w-40 h-40 flex-shrink-0">
          <Image
            src={imageUrl}
            alt={`${hotelName} room view`}
            fill
            className="object-cover rounded-lg"
          />
        </div>
        <div>
          <h2 className="text-2xl font-semibold dark:text-gray-300">
            {hotelName}
          </h2>
          <p className="text-gray-600 dark:text-gray-400">{description}</p>
          <div className="flex items-center gap-2 mt-2">
            {[...Array(5)].map((_, i) => (
              <svg
                key={`star-${i}`}
                className={`w-5 h-5 ${
                  i < rating ? 'text-yellow-400' : 'text-gray-300'
                }`}
                fill="currentColor"
                viewBox="0 0 20 20"
                aria-hidden="true"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
            <span className="text-yellow-400 ml-1">{rating.toFixed(1)}</span>
          </div>
          <div className="flex items-center gap-4 mt-4">
            <div className="flex items-center gap-2 dark:text-gray-400">
              <Bed
                className="text-blue-500 dark:text-blue-400"
                size={20}
                aria-hidden="true"
              />
              <span>
                {beds} Beds
              </span>
            </div>
            <div className="flex items-center gap-2 dark:text-gray-400">
              <Bath
                className="text-blue-500 dark:text-blue-400"
                size={18}
                aria-hidden="true"
              />
              <span>
                {baths} Baths
              </span>
            </div>
          </div>
        </div>
      </div>

      <Card className="dark:border-gray-700">
        <CardHeader>
          <CardTitle className="dark:text-gray-300">
            Details
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600 dark:text-gray-400">{details}</p>
        </CardContent>
      </Card>

      <Card className="dark:border-gray-700">
        <CardHeader>
          <CardTitle className="dark:text-gray-300">
            Location
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600 dark:text-gray-400">{location}</p>
          <div className="h-64 rounded-lg overflow-hidden relative z-0">
            <MapComponent coordinates={coordinates} hotelName={hotelName} />
          </div>
        </CardContent>
      </Card>

      <Card className="dark:border-gray-700">
        <CardHeader>
          <CardTitle className="dark:text-gray-300">
            Good to Know:
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600 dark:text-gray-400">{goodToKnow}</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default HotelDetails;
