'use client';
import { useTranslation } from 'react-i18next';

const Sidebar: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className="bg-white p-6 border-r dark:border-gray-700 dark:bg-dark-surface lg:w-[20%] w-full lg:mb-0 mb-4 sm:w-[80%] sm:p-4">
      <div className="mb-8">
        <h3 className="text-lg font-bold text-gray-800 mb-4 dark:text-gray-200">
          {t('sideBar.title')}
        </h3>
        <div className="space-y-4">
          <div className="flex items-center">
            <input
              type="checkbox"
              id="category1"
              className="w-4 h-4 text-default-color border-gray-300 rounded focus:ring-default-color"
              defaultChecked
            />
            <label
              htmlFor="category1"
              className="ml-2 text-sm text-gray-700 dark:text-gray-200"
            >
              {t('sideBar.categoryOne')}
            </label>
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              id="category2"
              className="w-4 h-4 text-default-color border-gray-300 rounded focus:ring-default-color"
              defaultChecked
            />
            <label
              htmlFor="category2"
              className="ml-2 text-sm dark:text-gray-200 text-gray-700"
            >
              {t('sideBar.categoryTwo')}
            </label>
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              id="category3"
              className="w-4 h-4 text-default-color border-gray-300 rounded focus:ring-default-color"
            />
            <label
              htmlFor="category3"
              className="ml-2 text-sm dark:text-gray-200 text-gray-700"
            >
              {t('sideBar.categoryThree')}
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
