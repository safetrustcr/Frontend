import React, { ChangeEvent } from 'react';
import CountrySelect from '@/components/profile/CountrySelect';
import { useTranslation } from 'react-i18next';
import { useUserStore } from '@/store/userStore';

interface Props {
  first_name: string;
  last_name: string;
  phone_number: string;
  country_code: string;
  location: string;
  onInputChange: (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
}

const ProfileForm: React.FC<Props> = ({
  first_name,
  last_name,
  phone_number,
  country_code,
  location,
  onInputChange,
}) => {
  const inputClasses =
    'border border-gray-300 dark:border-gray-700 rounded-lg px-4 py-2 text-gray-900 dark:text-dark-primary bg-white dark:bg-dark-surface focus:outline-none focus:ring-2 focus:ring-default-color dark:focus:ring-default-color transition-colors';
  const { t } = useTranslation();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6 text-light-primary dark:text-dark-primary">
      <input
        name="first_name"
        type="text"
        placeholder={t('profile.nameHolder')}
        value={first_name}
        className={inputClasses}
        onChange={onInputChange}
      />
      <input
        name="last_name"
        type="text"
        placeholder={t('profile.SurnameHolder')}
        value={last_name}
        className={inputClasses}
        onChange={onInputChange}
      />
      <div className="flex">
        <CountrySelect
          country_code={country_code}
          onInputChange={onInputChange}
        />
        <input
          name="phone_number"
          type="text"
          placeholder={t('profile.phoneHolder')}
          value={phone_number}
          className={inputClasses}
          onChange={onInputChange}
        />
      </div>
      <input
        name="location"
        type="text"
        placeholder={t('profile.LocationHolder')}
        value={location}
        className={inputClasses}
        onChange={onInputChange}
      />
    </div>
  );
};

export default ProfileForm;
