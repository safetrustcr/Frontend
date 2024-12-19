'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { BsSortDownAlt } from 'react-icons/bs';
import PropertyCard from './PropertyCard';
import { useTranslation } from 'react-i18next';
import { MOCK_DATA_PROPERTY_LIST } from '@/mockData/tableData';
import { Property } from '@/@types/property';

const properties = [
  {
    image: '/img/house1.jpg',
    title: 'La sabana sur',
    address: '329 Calle Curridabat, patio estación, San José',
    price: '4058',
    promoted: true,
    beds: 2,
    baths: 1,
    petFriendly: true,
  },
  {
    image: '/img/house1.jpg',
    title: 'La sabana sur',
    address: '329 Calle Curridabat, patio estación, San José',
    price: '4058',
    promoted: false,
    beds: 2,
    baths: 1,
    petFriendly: true,
  },
  {
    image: '/img/house1.jpg',
    title: 'La sabana sur',
    address: '329 Calle Curridabat, patio estación, San José',
    price: '4058',
    promoted: false,
    beds: 2,
    baths: 1,
    petFriendly: true,
  },
  {
    image: '/img/house1.jpg',
    title: 'La sabana sur',
    address: '329 Calle Curridabat, patio estación, San José',
    price: '4058',
    promoted: true,
    beds: 2,
    baths: 1,
    petFriendly: true,
  },
  {
    image: '/img/house1.jpg',
    title: 'Playa Hermosa Beachfront Villa',
    address: '123 Playa Hermosa Road, Guanacaste',
    price: '2200',
    promoted: false,
    beds: 3,
    baths: 2,
    petFriendly: true,
  },
  {
    image: '/img/house1.jpg',
    title: 'Limón Downtown Apartment',
    address: '455 Puerto Viejo Main Street, Limón',
    price: '750',
    promoted: false,
    beds: 2,
    baths: 1,
    petFriendly: true,
  },
  {
    image: '/img/house1.jpg',
    title: 'Los Yoses Urban Living',
    address: '467 Los Yoses Este, San José',
    price: '1500',
    promoted: false,
    beds: 2,
    baths: 2,
    petFriendly: false,
  },
  {
    image: '/img/house1.jpg',
    title: 'Tamarindo Beach Condo',
    address: ' 223 Tamarindo Beach Road, Guanacaste',
    price: '1800',
    promoted: false,
    beds: 2,
    baths: 2,
    petFriendly: true,
  },
  {
    image: '/img/house1.jpg',
    title: 'Cartago Historic District',
    address: '789 Central Cartago, Cartago',
    price: '900',
    promoted: true,
    beds: 2,
    baths: 1,
    petFriendly: false,
  },
  {
    image: '/img/house1.jpg',
    title: 'Jacó Beach Resort',
    address: '445 Jacó Beach Boulevard, Puntarenas',
    price: '1700',
    promoted: false,
    beds: 2,
    baths: 2,
    petFriendly: true,
  },
  {
    image: '/img/house1.jpg',
    title: 'Alajuela City Center',
    address: '890 Central Alajuela, Alajuela',
    price: '850',
    promoted: false,
    beds: 1,
    baths: 1,
    petFriendly: true,
  },
  {
    image: '/img/house1.jpg',
    title: 'Monteverde Mountain Retreat',
    address: '234 Cloud Forest Road, Puntarenas',
    price: '1100',
    promoted: false,
    beds: 2,
    baths: 1,
    petFriendly: true,
  },
  {
    image: '/img/house1.jpg',
    title: 'Heredia Modern Complex',
    address: '678 Heredia Centro, Heredia',
    price: ' 1150',
    promoted: false,
    beds: 2,
    baths: 2,
    petFriendly: false,
  },
];

const sortByPrice = (propertyA: Property, propertyB: Property) => {
  return parseInt(propertyA.price) - parseInt(propertyB.price);
};

const sortByPriceReverse = (propertyA: Property, propertyB: Property) => {
  return parseInt(propertyB.price) - parseInt(propertyA.price);
};

const sortByRelevance = (propertyA: Property, propertyB: Property) => {
  if (propertyA.promoted) return -1;
  if (propertyB.promoted) return 1;
  return 0;
};

interface sortListInterface {
  id: number;
  name: string;
  sortFn: ((propertyA: Property, propertyB: Property) => number) | undefined;
}

const sortList: sortListInterface[] = [
  { id: 1, name: 'propertyList.sortBy.orderOne', sortFn: sortByRelevance },
  { id: 2, name: 'propertyList.sortBy.orderTwo', sortFn: sortByPrice },
  { id: 3, name: 'propertyList.sortBy.orderThree', sortFn: sortByPriceReverse },
  { id: 4, name: 'propertyList.sortBy.orderFour', sortFn: undefined },
];

const PropertyList: React.FC = () => {
  const { t } = useTranslation();
  const router = useRouter();
  const [sortOption, setSortOption] = useState<sortListInterface>(sortList[0]);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [propertySort, setPropertySort] = useState<
    ((propertyA: any, propertyB: any) => number) | undefined
  >(() => (a: Property, b: Property) => sortByRelevance(a, b));

  const handleCardClick = () => {
    router.push('/house');
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleSortOptionChange = (option: sortListInterface) => {
    setSortOption(option);
    setDropdownOpen(false);
    setPropertySort(() => option.sortFn);
  };

  return (
    <div className="px-4 py-8 sm:px-12">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
        <div>
          <h2 className="text-xl sm:text-2xl text-black dark:text-gray-200">
            {t('propertyList.title')}{' '}
            <span className="text-black font-bold dark:text-gray-200">
              {t('propertyList.subtitle')}
            </span>
          </h2>
          <p className="text-gray-500 dark:text-gray-200">
            {t('propertyList.unitsAvailable')}
          </p>
        </div>

        <div className="relative mt-4 sm:mt-0">
          <button
            onClick={toggleDropdown}
            className="flex items-center text-gray-500 dark:text-gray-200 text-sm focus:outline-none"
          >
            <BsSortDownAlt className="text-lg mr-2 dark:text-gray-200" />
            {t('propertyList.sortBy.title')}{' '}
            <span className="text-default-color cursor-pointer hover:underline ml-1">
              {t(sortOption.name)}
            </span>
          </button>
          {dropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-10">
              <ul className="py-1">
                <li
                  className="px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 cursor-pointer"
                  onClick={() =>
                    handleSortOptionChange(t('propertyList.sortBy.orderOne'))
                  }
                >
                  {t('propertyList.sortBy.orderOne')}
                </li>
                <li
                  className="px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 cursor-pointer"
                  onClick={() =>
                    handleSortOptionChange(t('propertyList.sortBy.orderTwo'))
                  }
                >
                  {t('propertyList.sortBy.orderTwo')}
                </li>
                <li
                  className="px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 cursor-pointer"
                  onClick={() =>
                    handleSortOptionChange(t('propertyList.sortBy.orderThree'))
                  }
                >
                  {t('propertyList.sortBy.orderThree')}
                </li>
                <li
                  className="px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 cursor-pointer"
                  onClick={() =>
                    handleSortOptionChange(t('propertyList.sortBy.orderFour'))
                  }
                >
                  {t('propertyList.sortBy.orderFour')}
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>

      <div className="flex flex-wrap justify-start sm:space-x-2 mb-8">
        <button className="px-4 py-2 text-sm border border-gray-300 dark:text-gray-200 rounded-full text-gray-500 hover:bg-gray-100 dark:hover:text-black mb-2 sm:mb-0">
          {t('propertyList.filterOne')}
        </button>
        <button className="px-4 py-2 text-sm border border-gray-300 rounded-full text-gray-500 dark:text-gray-200 hover:bg-gray-100 dark:hover:text-black mb-2 sm:mb-0">
          {t('propertyList.filterTwo')}
        </button>
        <button className="px-4 py-2 text-sm border border-gray-300 dark:text-gray-200 rounded-full text-gray-500 hover:bg-gray-100 dark:hover:text-black mb-2 sm:mb-0">
          {t('propertyList.filterThree')}
        </button>
        <button className="px-4 py-2 text-sm border border-gray-300 dark:text-gray-200 rounded-full text-gray-500 hover:bg-gray-100 dark:hover:text-black">
          {t('propertyList.filterFour')}
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {properties.map((property, index) => (
          <div
            key={property.title}
            onClick={handleCardClick}
            className="transform transition-transform hover:scale-105 hover:shadow-lg duration-300 ease-in-out cursor-pointer"
          >
            <PropertyCard
              image={property.image}
              title={property.title}
              address={property.address}
              price={property.price}
              promoted={property.promoted}
              beds={property.beds}
              baths={property.baths}
              petFriendly={property.petFriendly}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PropertyList;
