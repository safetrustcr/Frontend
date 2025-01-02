'use client';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

interface SidebarProps {
  minPrice: number;
  maxPrice: number;
  selectedLocation: string;
  onMinPriceChange: (value: number) => void;
  onMaxPriceChange: (value: number) => void;
  onLocationChange: (location: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({
  minPrice,
  maxPrice,
  selectedLocation,
  onMinPriceChange,
  onMaxPriceChange,
  onLocationChange,
}) => {
  const { t } = useTranslation();
  const locations: Record<string, number[]> = {
    'San José': [-84.6307, 9.6182],
    Heredia: [-84.1207, 9.9782],
    Alajuela: [-84.2113, 10.0175],
    Cartago: [-83.9186, 9.8647],
    Puntarenas: [-84.8394, 9.9758],
    Guanacaste: [-85.595, 10.4915],
    Limón: [-83.032, 9.9828],
  };

  const handleLocationChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onLocationChange(event.target.id);
  };

  const handleMinPriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(event.target.value);
    if (value <= maxPrice) {
      onMinPriceChange(value);
    }
  };

  const handleMaxPriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(event.target.value);
    if (value >= minPrice) {
      onMaxPriceChange(value);
    }
  };
  return (
    <div className="bg-white p-6 border-r dark:border-gray-700 dark:bg-dark-surface lg:w-[20%] w-full lg:mb-0 mb-4 sm:w-[80%] sm:p-4">
      <div className="mb-8">
        <h3 className="text-lg font-bold text-gray-800 mb-4 dark:text-gray-200">
          {t('Category')}
        </h3>
        <div className="space-y-4">
          {['Family', 'Students', 'Travelers'].map((category, index) => (
            <div className="flex items-center" key={index}>
              <input
                type="checkbox"
                id={category}
                className="w-5 h-5 text-orange-500 border-gray-300 rounded focus:ring-orange-500"
                defaultChecked={index <= -1}
              />
              <label
                htmlFor={category}
                className="ml-3 text-sm font-medium text-gray-700 dark:text-gray-200"
              >
                {t(`${category}`)}
              </label>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-8">
        <h3 className="text-lg font-bold text-gray-800 mb-4 dark:text-gray-200 whitespace-nowrap">
          {t('Price Range')}
        </h3>
        <div className="flex flex-col items-start">
          <div className="flex items-center space-x-4 mb-2 whitespace-nowrap">
            <span className="text-sm text-gray-600 dark:text-gray-400">
              ${minPrice.toLocaleString()}
            </span>
            <span className="text-sm text-gray-600 dark:text-gray-400">-</span>
            <span className="text-sm text-gray-600 dark:text-gray-400">
              ${maxPrice.toLocaleString()}
            </span>
          </div>
          <div className="relative w-full">
            <div className="flex justify-between items-center mb-4">
              <input
                type="range"
                className="range-slider"
                min="900"
                max="206000"
                step="100"
                value={minPrice}
                onChange={handleMinPriceChange}
              />
              <input
                type="range"
                className="range-slider"
                min="900"
                max="206000"
                step="100"
                value={maxPrice}
                onChange={handleMaxPriceChange}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <h3 className="text-lg font-bold text-gray-800 mb-4 dark:text-gray-200">
          {t('Location')}
        </h3>
        <div className="flex flex-wrap gap-4">
          {Object.keys(locations).map((location, index) => (
            <div className="flex flex-nowrap items-center" key={index}>
              <input
                type="checkbox"
                id={location}
                className="w-5 h-5 text-orange-500 border-gray-300 rounded focus:ring-orange-500"
                onChange={handleLocationChange}
              />
              <label
                htmlFor={location}
                className="ml-3 text-sm font-medium text-gray-700 dark:text-gray-200 whitespace-nowrap"
              >
                {location}
              </label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
