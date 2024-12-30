import React from 'react';
import Header from '@/layouts/Header';
import PropertyList from '@/components/home/PropertyList';
import Sidebar from '@/layouts/Sidebar';
import NearbyApartments from '@/components/NearbyApartments';

const Home: React.FC = () => {
  // Datos de entrada para la consulta
  const coordinates: [number, number] = [-84.0807, 9.9282]; // Coordenadas (latitud, longitud)
  const radius = 1000; // Radio en metros
  const minPrice = 1000; // Precio mínimo
  const maxPrice = 3000; // Precio máximo

  return (
    <div className="bg-gray-100 min-h-screen dark:bg-dark-background">
      <Header />
      <div className="flex flex-col lg:flex-row">
        {/* Sidebar con los apartamentos cercanos */}
        <div className="w-full lg:w-1/4 bg-white dark:bg-dark-sidebar p-4">
          <h2 className="text-xl font-semibold text-gray-700 dark:text-white mb-4">
            Apartamentos Cercanos
          </h2>
          <NearbyApartments
            coordinates={coordinates}
            radius={radius}
            minPrice={minPrice}
            maxPrice={maxPrice}
          />
        </div>

        {/* Contenido principal */}
        <div className="flex-grow p-4">
          <PropertyList />
        </div>
      </div>
    </div>
  );
};

export default Home;
