import { gql } from '@apollo/client';

export const GET_NEARBY_APARTMENTS = gql`
query GetNearbyApartments(
    $coordinates: point!,
    $radius: float!,
    $minPrice: numeric,
    $maxPrice: numeric,
    $category: [String!],
    $bedrooms: Int
   ) {
    find_nearby_apartments(
      args: {
        search_location: $coordinates,
        radius_meters: $radius,
        min_price: $minPrice,
        max_price: $maxPrice
      }
    ) {
      id
      name
      price
      distance
      coordinates
      # Additional fields through relationships
      apartment_images(where: {is_primary: {_eq: true}}) {
        url
      }
      bedrooms
      bathrooms
      is_pet_friendly
      promoted
    }
   }
`;
