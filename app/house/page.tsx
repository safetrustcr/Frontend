'use client';
import React from 'react';
import Header from '@/layouts/Header';
import Sidebar from '@/layouts/house/Sidebar';
import PropertyDetails from '@/components/house/PropertyDetails';

const Home: React.FC = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Header />
      <div className="flex flex-col lg:flex-row">
        <div className="order-2 lg:order-1">
          <Sidebar />
        </div>
        <div className="flex-grow order-1 lg:order-2">
          <PropertyDetails />
        </div>
      </div>
    </div>
  );
};

export default Home;
