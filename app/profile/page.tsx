'use client';
import React from 'react';
import Header from '@/layouts/Header';
import Sidebar from '@/layouts/profile/Sidebar';
import ProfilePicture from '@/components/profile/ProfilePicture';
import ProfileForm from '@/components/profile/ProfileForm';
import AccountOverview from '@/components/profile/AccountOverview';
import { useTranslation } from 'react-i18next';

const Home: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col dark:bg-dark-background">
      <Header />
      <div className="bg-white dark:bg-dark-surface2 shadow-lg dark:shadow-gray-900 rounded-lg p-8 w-full max-w-5xl mx-auto mt-8 flex flex-col lg:flex-row h-full">
        <Sidebar />
        <div className="w-full lg:w-3/4 pl-0 lg:pl-8 mt-6 lg:mt-0 overflow-hidden">
          <h1 className="text-2xl font-semibold mb-6 text-black dark:text-gray-200">
            {t('profile.title')}
          </h1>
          <div className="flex flex-col lg:flex-row items-center gap-6 mb-6">
            <ProfilePicture />
            <textarea
              placeholder={t('profile.summaryHolder')}
              defaultValue="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
              className="border border-gray-300 dark:border-gray-700 rounded-lg p-4 w-full text-gray-900 dark:text-dark-primary bg-white dark:bg-dark-surface placeholder-gray-500 dark:placeholder-gray-400"
              rows={3}
            />
          </div>
          <ProfileForm />
          <AccountOverview />
          <div className="text-right mt-6">
            <button className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition-colors">
              {t('profile.overView.saveBtn')}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
