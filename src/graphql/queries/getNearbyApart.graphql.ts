import { gql } from '@apollo/client';

export const GET_NEARBY_APARTMENTS = gql`
  query GetNearbyApartments(  
  $coordinates: point!,   
  $radius: Float!,   
  $minPrice: numeric,   
  $maxPrice: numeric  
  ) {  
    apartments(where: {  
      price: {  
        _gte: $minPrice,  
        _lte: $maxPrice  
      },  
      location_area: {  
        _st_d_within: {  
          distance: $radius,  
          from: {  
            type: "Point",  
            coordinates: $coordinates  
          }  
        }  
      }  
    }) {
      id
      name
      price
      is_available
      location_area
      coordinates
      apartment_images {
        image_url
      }
      apartment_images_aggregate {
        nodes {
          image_url
        }
      }
    }
  }
`;
