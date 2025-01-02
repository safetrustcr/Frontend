// queryToProperty.ts
import { Property } from '@/@types/property';

export const transformQueryToProperties = (queryResults: any[]): Property[] => {
  return queryResults.map((result) => {
    return {
      image:
        result.apartment_images.length > 0
          ? result.apartment_images[0]
          : '/img/house1.jpg', // Imagen predeterminada si no existe
      title: result.name || result.title, // Usa `name` si no existe `title`
      // Concatenamos la dirección a partir de los campos individuales de `address`
      address: result.address
        ? `${result.address.street}, ${result.address.neighborhood}, ${result.address.city}, ${result.address.country} - ${result.address.postal_code}`
        : 'Dirección no disponible', // Direccion predeterminada si no hay datos
      price: result.price?.toString() || '0',
      promoted: result.is_available ?? true, // Asegúrate de que es un valor booleano
      beds: result.beds || 2, // Valor por defecto si no existe
      baths: result.baths || 3, // Valor por defecto si no existe
      petFriendly: result.petFriendly ?? true, // Asegúrate de que es un valor booleano
    };
  });
};
