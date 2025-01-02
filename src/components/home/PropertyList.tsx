'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { BsSortDownAlt } from 'react-icons/bs';
import PropertyCard from './PropertyCard';
import { useTranslation } from 'react-i18next';
import { MOCK_DATA_PROPERTY_LIST } from '@/mockData/tableData';
import { Property } from '@/@types/property';
import NearbyApartments from '@/components/NearbyApartments';
import { transformQueryToProperties } from '@/@types/queryToProperty';

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

interface PropertyListProps {
  minPrice: number;
  maxPrice: number;
  selectedLocation: string;
}

const PropertyList: React.FC<PropertyListProps> = ({
  minPrice,
  maxPrice,
  selectedLocation,
}) => {
  const { t } = useTranslation();
  const router = useRouter();
  const [sortOption, setSortOption] = useState<sortListInterface>(sortList[0]);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [properties, setProperties] = useState<Property[]>([]);
  const [propertySort, setPropertySort] = useState<
    ((propertyA: Property, propertyB: Property) => number) | undefined
  >(() => sortByRelevance);
  const [filterOption, setFilterOption] = useState<string>(
    'Todos los apartamentos'
  );

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

  const handleFilterChange = (filter: string) => {
    setFilterOption(filter);
  };

  // Obtener las coordenadas de la ubicación seleccionada
  const locations: Record<string, [number, number]> = {
    'San José': [-84.0807, 9.9282],
    Heredia: [-84.1207, 9.9782],
    Alajuela: [-84.2113, 10.0175],
    Cartago: [-83.9186, 9.8647],
    Puntarenas: [-84.6307, 9.6182],
    Guanacaste: [-85.595, 10.4915],
    Limón: [-83.032, 9.9828],
  };

  const coordinates: [number, number] = locations[selectedLocation]; // Coordenadas por defecto
  // const coordinates: [number, number] = [-84.6307, 9.6182]; // Coordenadas de ejemplo (Nueva York)

  const radius = 50; // si desea un busqueda mas exacta bajarle el valor al radio de busqueda

  // Uso del hook para obtener los apartamentos cercanos
  const { data, loading, error } = NearbyApartments({
    coordinates,
    radius, // Radio de búsqueda en metros
    minPrice,
    maxPrice,
  });

  useEffect(() => {
    if (data) {
      // Transformar los datos obtenidos de la API
      const transformedProperties = transformQueryToProperties(data.apartments);
      setProperties(transformedProperties);
    }
  }, [data]); // Se ejecuta cuando los datos cambian
  console.log(properties);
  // si desea que se muestren los datos estaticos del tableData cambie la siguiente linea
  //const filteredProperties = MOCK_DATA_PROPERTY_LIST.filter((property)
  const filteredProperties = properties.filter((property) => {
    if (filterOption === 'Todos los apartamentos') return true;
    if (filterOption === '1 baño') return property.baths === 1;
    if (filterOption === '2 dormitorios') return property.beds === 2;
    if (filterOption === '+3 dormitorios') return property.beds >= 3;
    return true;
  });

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
                  onClick={() => handleSortOptionChange(sortList[0])}
                >
                  {t('propertyList.sortBy.orderOne')}
                </li>
                <li
                  className="px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 cursor-pointer"
                  onClick={() => handleSortOptionChange(sortList[1])}
                >
                  {t('propertyList.sortBy.orderTwo')}
                </li>
                <li
                  className="px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 cursor-pointer"
                  onClick={() => handleSortOptionChange(sortList[2])}
                >
                  {t('propertyList.sortBy.orderThree')}
                </li>
                <li
                  className="px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 cursor-pointer"
                  onClick={() => handleSortOptionChange(sortList[3])}
                >
                  {t('propertyList.sortBy.orderFour')}
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>

      <div className="flex flex-wrap justify-start sm:space-x-2 mb-8">
        <button
          className={`px-4 py-2 text-sm border border-gray-300 dark:text-gray-200 rounded-full text-gray-500 hover:bg-gray-100 dark:hover:text-black mb-2 sm:mb-0 ${
            filterOption === 'Todos los apartamentos'
              ? 'bg-gray-200 dark:text-black'
              : ''
          }`}
          onClick={() => handleFilterChange('Todos los apartamentos')}
        >
          {t('propertyList.filterOne')}
        </button>
        <button
          className={`px-4 py-2 text-sm border border-gray-300 dark:text-gray-200 rounded-full text-gray-500 hover:bg-gray-100 dark:hover:text-black mb-2 sm:mb-0 ${
            filterOption === '1 baño' ? 'bg-gray-200 dark:text-black' : ''
          }`}
          onClick={() => handleFilterChange('1 baño')}
        >
          {t('propertyList.filterTwo')}
        </button>
        <button
          className={`px-4 py-2 text-sm border border-gray-300 dark:text-gray-200 rounded-full text-gray-500 hover:bg-gray-100 dark:hover:text-black mb-2 sm:mb-0 ${
            filterOption === '2 dormitorios'
              ? 'bg-gray-200 dark:text-black'
              : ''
          }`}
          onClick={() => handleFilterChange('2 dormitorios')}
        >
          {t('propertyList.filterThree')}
        </button>
        <button
          className={`px-4 py-2 text-sm border rounded-full text-gray-500 dark:text-gray-200 ${
            filterOption === '+3 dormitorios'
              ? 'bg-gray-200 dark:text-black'
              : ''
          }`}
          onClick={() => handleFilterChange('+3 dormitorios')}
        >
          {t('propertyList.filterFour')}
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProperties.sort(propertySort).map((property) => (
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
