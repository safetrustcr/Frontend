// queryToProperty.ts
import { Property } from '@/@types/property';

export const transformQueryToProperties = (queryResults: any[]): Property[] => {
  return queryResults.map((result) => {
    return {
      image:
        result.apartment_images.length > 0
          ? result.apartment_images[0]
          : '/img/house1.jpg',
      title: result.name || result.title,
      address: result.address
        ? `${result.address.street}, ${result.address.neighborhood}, ${result.address.city}, ${result.address.country} - ${result.address.postal_code}`
        : 'Dirección no disponible',
      price: result.price?.toString() || '0',
      promoted: result.is_available ?? true,
      beds: result.beds || 2,
      baths: result.baths || 3,
      petFriendly: result.petFriendly ?? true,
    };
  });
};
