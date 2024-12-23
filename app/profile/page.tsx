'use client';
import React, { useState } from 'react';
import Header from '@/layouts/Header';
import Sidebar from '@/layouts/profile/Sidebar';
import ProfilePicture from '@/components/profile/ProfilePicture';
import ProfileForm from '@/components/profile/ProfileForm';
import AccountOverview from '@/components/profile/AccountOverview';
import { useTranslation } from 'react-i18next';
import {
  UPDATE_PROFILE_IMAGE,
  UPDATE_USER_RECORD,
} from '@/graphql/queries/userMutations.graphql';
import { useMutation } from '@apollo/client';

const Home: React.FC = () => {
  const { t } = useTranslation();
  const [user, setUser] = useState(null);

  // GraphQL mutations
  const [updateUser] = useMutation(UPDATE_USER_RECORD);
  const [updateProfileImage] = useMutation(UPDATE_PROFILE_IMAGE);

  const handleSave = async () => {
    try {
      const input = {
        first_name: 'John',
        last_name: 'Doe',
        summary: 'Updated summary',
        phone_number: '88588289',
        country_code: '+506',
        location: 'New York',
      };
      const userId = '97633789-d1ac-4526-80dc-d0a92ff3502e';

      await updateUser({
        variables: { userId, input },
      });

      const imageUrl = 'https://placecats.com/millie/300/150';
      const imageKey = 'cat';
      await updateProfileImage({ variables: { userId, imageUrl, imageKey } });
    } catch (error) {
      console.error('Error updating profile:', error);
    }
  };

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
            <button
              className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition-colors"
              onClick={handleSave}
            >
              {t('profile.overView.saveBtn')}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
