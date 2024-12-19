import React from 'react';
import Header from '@/layouts/Header';
import PropertyList from '@/components/home/PropertyList';
import Sidebar from '@/layouts/Sidebar';

const Home: React.FC = () => {
  return (
    <div className="bg-gray-100 min-h-screen dark:bg-dark-background">
      <Header />
      <div className="flex flex-col lg:flex-row">
        <Sidebar />
        <div className="flex-grow p-4">
          <PropertyList />
        </div>
      </div>
    </div>
  );
};

export default Home;
