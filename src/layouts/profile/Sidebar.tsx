import Link from 'next/link';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { FaUser, FaHome, FaUsers } from 'react-icons/fa';

const Sidebar: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className="w-full lg:w-1/4 border-r border-gray-300 pr-4 lg:pr-8 mt-4 lg:mt-0">
      <h2 className="text-lg font-semibold text-gray-800 mb-4 dark:text-gray-200">
        {t('profile.sideTitle')}
      </h2>
      <ul className="space-y-2">
        <li className="flex items-center text-default-color font-medium">
          <FaUser className="mr-2 text-default-color"/>
          {t('profile.account')}
        </li>
      </ul>
      <h2 className="text-lg font-semibold text-gray-800 mt-8 mb-4 dark:text-gray-200">
        {t('profile.sideSecondTitle')}
      </h2>
      <ul className="space-y-2">
        <li className="flex items-center text-gray-800 dark:text-gray-200">
          <Link
            href="/profile/my-apartments"
            className="flex justify-center items-center"
          >
            <FaHome className="mr-2" /> {t('profile.apartments')}
          </Link>
        </li>
        <li className="flex items-center text-gray-800 dark:text-gray-200">
          <Link
            href="/profile/interested-people"
            className="flex justify-center items-center"
          >
            <FaUsers className="mr-2" /> {t('profile.offers')}
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
