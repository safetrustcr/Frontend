'use client';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

const Sidebar: React.FC = () => {
  const { t } = useTranslation();
  const [minPrice, setMinPrice] = useState(3200); // Estado para el valor mínimo
  const [maxPrice, setMaxPrice] = useState(206000); // Estado para el valor máximo

  // Función para manejar el cambio en el valor mínimo
  const handleMinPriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(event.target.value);
    if (value <= maxPrice) {
      setMinPrice(value);
    }
  };

  // Función para manejar el cambio en el valor máximo
  const handleMaxPriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(event.target.value);
    if (value >= minPrice) {
      setMaxPrice(value);
    }
  };

  return (
    <div className="bg-white p-6 border-r dark:border-gray-700 dark:bg-dark-surface lg:w-[20%] w-full lg:mb-0 mb-4 sm:w-[80%] sm:p-4">
      {/* Category Section */}
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

      {/* Price Range Section */}
      <div className="mb-8">
        <h3 className="text-lg font-bold text-gray-800 mb-4 dark:text-gray-200 whitespace-nowrap">
          {t('Price Range')}
        </h3>
        <div className="flex flex-col items-start">
          {/* Mostrar el valor mínimo y máximo en línea */}
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
                min="3200"
                max="206000"
                step="1000"
                value={minPrice}
                onChange={handleMinPriceChange}
              />
              <input
                type="range"
                className="range-slider"
                min="3200"
                max="206000"
                step="1000"
                value={maxPrice}
                onChange={handleMaxPriceChange}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Location Section */}
      <div className="mb-8">
        <h3 className="text-lg font-bold text-gray-800 mb-4 dark:text-gray-200">
          {t('Location')}
        </h3>
        <div className="flex flex-wrap gap-4">
          {[
            'San José',
            'Heredia',
            'Alajuela',
            'Cartago',
            'Puntarenas',
            'Guanacaste',
            'Limón',
          ].map((location, index) => (
            <div className="flex flex-nowrap items-center" key={index}>
              <input
                type="checkbox"
                id={location}
                className="w-5 h-5 text-orange-500 border-gray-300 rounded focus:ring-orange-500"
                defaultChecked={index <= -1}
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
