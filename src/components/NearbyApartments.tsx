import { useGetNearbyApartmentsQuery } from '../graphql/generated/graphql';

interface GetNearbyApartmentsProps {
  coordinates: [number, number];
  radius: number;
  minPrice: number;
  maxPrice: number;
}

export const NearbyApartments = ({
  coordinates,
  radius,
  minPrice,
  maxPrice,
}: GetNearbyApartmentsProps) => {
  const { data, loading, error } = useGetNearbyApartmentsQuery({
    variables: { coordinates, radius, minPrice, maxPrice },
  });
  return { data, loading, error };
};

export default NearbyApartments;
