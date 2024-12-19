import React from 'react';
import Header from '@/layouts/Header';
import PropertyList from '@/components/home/PropertyList';
import Sidebar from '@/layouts/Sidebar';

const Home: React.FC = () => {
  return (
    <div className="bg-gray-100 min-h-screen dark:bg-dark-background">
      <Header />
      <div className="flex">
        <div className="flex-grow">
          <PropertyList />
        </div>
      </div>
    </div>
  );
};

export default Home;
