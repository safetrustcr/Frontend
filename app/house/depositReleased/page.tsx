import React from 'react';
import Header from '@/layouts/Header';
import PendingHeader from '@/layouts/house/depositReleased/Header';
import Details from '@/components/house/depositReleased/Details';
import Notes from '@/components/house/depositReleased/Notes';
import Process from '@/components/house/depositReleased/Process';

const DepostBlocked: React.FC = () => {
  return (
    <div className="bg-light-secondary dark:bg-dark-background min-h-screen">
      <Header />
      <div className="w-full bg-light-secondary dark:bg-dark-background px-6 sm:px-10 py-8">
        <PendingHeader />
        <div className="grid grid-cols-1 sm:grid-cols-12 gap-6">
          <div className="sm:col-span-8">
            <Details />
          </div>
          <div className="sm:col-span-4">
            <Notes />
            <h3 className="text-lg font-bold text-light-secondary dark:text-dark-primary mt-4 sm:mt-0">
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
