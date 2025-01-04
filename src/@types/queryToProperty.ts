// queryToProperty.ts
import { Property } from '@/@types/property';

export const transformQueryToProperties = (queryResults: any[]): Property[] => {
  return queryResults.map((result) => {
    return {
      image:
        result.apartment_images.length > 0
          ? result.apartment_images[0]
          : '/img/house1.jpg', // Default image if none exists
      title: result.name || result.title, // Use `name` if `title` does not exist
      //Concatenate the address from individual address fields
      address: result.address
        ? `${result.address.street}, ${result.address.neighborhood}, ${result.address.city}, ${result.address.country} - ${result.address.postal_code}`
        : 'Dirección no disponible', //Default address if no data is available
      price: result.price?.toString() || '0',
      promoted: result.is_available ?? true,
      beds: result.beds || 2, // Default value if no data is available
      baths: result.baths || 3, // Default value if no data is available
      petFriendly: result.petFriendly ?? true,
    };
  });
};
