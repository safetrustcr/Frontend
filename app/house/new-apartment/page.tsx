'use client';

import Header from '@/layouts/Header';
import Sidebar from '@/layouts/Sidebar';
import Bounded from '@/components/Bounded';
import FormNewApartment from '@/components/house/new-apartment/Form';

const Home: React.FC = () => {
  return (
    <div className="bg-light-secondary dark:bg-dark-background min-h-screen">
      <Header />
      <div className="flex flex-col lg:flex-row">
        <Sidebar />
        <div className="flex-1 p-6">
          <Bounded title="New Apartment">
            <FormNewApartment />
          </Bounded>
        </div>
      </div>
    </div>
  );
};

export default Home;
