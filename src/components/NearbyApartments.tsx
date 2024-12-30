'use client';

import React from 'react';
import { useGetNearbyApartmentsQuery } from '../graphql/generated/graphql';

interface NearbyApartmentsProps {
  coordinates: [number, number];
  radius: number;
  minPrice: number;
  maxPrice: number;
}

const NearbyApartments: React.FC<NearbyApartmentsProps> = ({
  coordinates,
  radius,
  minPrice,
  maxPrice,
}) => {
  const { data, loading, error } = useGetNearbyApartmentsQuery({
    variables: { coordinates, radius, minPrice, maxPrice },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <ul>
      {data?.apartments.map((apartment) => (
        <li key={apartment.id} className="mb-4">
          <p className="text-gray-800 dark:text-white font-medium">
            {apartment.name} - ${apartment.price}
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Disponible: {apartment.is_available ? 'Sí' : 'No'}
          </p>
        </li>
      ))}
    </ul>
  );
};

export default NearbyApartments;
