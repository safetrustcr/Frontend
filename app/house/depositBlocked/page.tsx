import React from 'react';
import Header from '@/layouts/Header';
import PendingHeader from '@/layouts/house/depositBlocked/Header';
import Details from '@/components/house/depositBlocked/Details';
import Notes from '@/components/house/depositBlocked/Notes';
import Process from '@/components/house/depositBlocked/Process';

const DepostBlocked: React.FC = () => {
  return (
    <div className="bg-gray-100 min-h-screen dark:bg-dark-background">
      <Header />
      <div className="w-full bg-light-secondary dark:bg-dark-background px-10 py-8">
        <PendingHeader />
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          <Details />
          <div className="col-span-1 md:col-span-4">
            <Notes />
            <h3 className="text-lg font-bold text-light-primary dark:text-dark-primary">
              Process
            </h3>
            <Process />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DepostBlocked;
