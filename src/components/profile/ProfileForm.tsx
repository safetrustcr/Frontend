import React, { ChangeEvent } from 'react';
import CountrySelect from '@/components/profile/CountrySelect';
import { useTranslation } from 'react-i18next';
import { useUserStore } from '@/store/userStore';

const ProfileForm: React.FC = () => {
  const { user, setUser } = useUserStore();

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const inputClasses =
    'border border-gray-300 dark:border-gray-700 rounded-lg px-4 py-2 text-gray-900 dark:text-dark-primary bg-white dark:bg-dark-surface focus:outline-none focus:ring-2 focus:ring-default-color dark:focus:ring-default-color transition-colors';
  const { t } = useTranslation();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6 text-light-primary dark:text-dark-primary">
      <input
        name="first_name"
        type="text"
        placeholder={t('profile.nameHolder')}
        value={user.first_name}
        className={inputClasses}
        onChange={handleInputChange}
      />
      <input
        name="last_name"
        type="text"
        placeholder={t('profile.SurnameHolder')}
        value={user.last_name}
        className={inputClasses}
        onChange={handleInputChange}
      />
      <div className="flex">
        <CountrySelect
          country_code={user.country_code}
          onInputChange={handleInputChange}
        />
        <input
          name="phone_number"
          type="text"
          placeholder={t('profile.phoneHolder')}
          value={user.phone_number}
          className={inputClasses}
          onChange={handleInputChange}
        />
      </div>
      <input
        name="location"
        type="text"
        placeholder={t('profile.LocationHolder')}
        value={user.location}
        className={inputClasses}
        onChange={handleInputChange}
      />
    </div>
  );
};

export default ProfileForm;
