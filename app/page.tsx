import React from 'react';
import Header from '@/layouts/Header';
import PropertyList from '@/components/home/PropertyList';
import Sidebar from '@/layouts/Sidebar';
// import NearbyApartments from '@/components/NearbyApartments';

const Home: React.FC = () => {
  return (
    <div className="bg-gray-100 min-h-screen dark:bg-dark-background">
      <Header />
      <div className="flex flex-col lg:flex-row">
        {/* Sidebar con los apartamentos cercanos */}
        <div className="w-full lg:w-1/4 bg-white dark:bg-dark-sidebar p-4">
          <Sidebar />
        </div>
        <div className="flex-grow p-4">
          <PropertyList />
        </div>
      </div>
    </div>
  );
};

export default Home;
