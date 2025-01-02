'use client';
import React, { useState } from 'react';
import Header from '@/layouts/Header';
import PropertyList from '@/components/home/PropertyList';
import Sidebar from '@/layouts/Sidebar';

const Home: React.FC = () => {
  const [minPrice, setMinPrice] = useState(1200);
  const [maxPrice, setMaxPrice] = useState(206000);
  const [selectedLocation, setSelectedLocation] = useState<string>('San José');

  const handleMinPriceChange = (value: number) => {
    setMinPrice(value);
  };

  const handleMaxPriceChange = (value: number) => {
    setMaxPrice(value);
  };

  const handleLocationChange = (location: string) => {
    setSelectedLocation(location);
  };

  return (
    <div className="bg-gray-100 min-h-screen dark:bg-dark-background">
      <Header />
      <div className="flex flex-col lg:flex-row">
        <div className="w-full lg:w-1/4 bg-white dark:bg-dark-sidebar p-4">
          <Sidebar
            minPrice={minPrice}
            maxPrice={maxPrice}
            selectedLocation={selectedLocation}
            onMinPriceChange={handleMinPriceChange}
            onMaxPriceChange={handleMaxPriceChange}
            onLocationChange={handleLocationChange}
          />
        </div>
        <div className="flex-grow p-4">
          <PropertyList
            minPrice={minPrice}
            maxPrice={maxPrice}
            selectedLocation={selectedLocation}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
