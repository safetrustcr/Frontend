import React, { ChangeEvent } from 'react';
import countryData from '@/hooks/countryData';

interface CountrySelectProps {
  country_code: string;
  onInputChange: (e: ChangeEvent<HTMLSelectElement>) => void;
}

const CountrySelect: React.FC<CountrySelectProps> = ({
  country_code,
  onInputChange,
}) => {
  return (
    <select
      name="country_code"
      className="border border-gray-300 dark:border-gray-700 rounded-l-lg px-4 py-2 bg-gray-50 dark:bg-dark-surface text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-default-color dark:focus:ring-default-color transition-colors"
      value={country_code}
      onChange={onInputChange}
    >
      {countryData.map((country) => (
        <option
          key={country.code}
          value={country.dial_code}
          className="bg-white dark:bg-dark-surface2"
        >
          {country.flag} {country.dial_code}
        </option>
      ))}
    </select>
  );
};

export default CountrySelect;
