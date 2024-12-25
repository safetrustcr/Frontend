'use client';
import React from 'react';
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
import { ApolloError, useMutation } from '@apollo/client';
import { ChangeEvent, useState } from 'react';
import { toast } from 'react-toastify';
import LoadingSkeleton from '@/components/profile/LoadingSkeleton';
import { useUserStore } from '@/store/userStore/user';

const Home: React.FC = () => {
  const { user, loading, setUser } = useUserStore();
  const { t } = useTranslation();

  // GraphQL mutations
  const [updateUser] = useMutation(UPDATE_USER_RECORD);
  const [updateProfileImage] = useMutation(UPDATE_PROFILE_IMAGE);

  const handleSave = async () => {
    try {
      const input = {
        first_name: user.first_name,
        last_name: user.last_name,
        summary: user.summary,
        phone_number: user.phone_number,
        country_code: user.country_code,
        location: user.location,
      };
      const userId = '97633789-d1ac-4526-80dc-d0a92ff3502e'; // Obtained from User table

      await updateUser({
        variables: { userId, input },
      });

      const imageUrl = 'https://placecats.com/millie/300/150';
      const imageKey = 'cat';

      await updateProfileImage({ variables: { userId, imageUrl, imageKey } });
      setUser({
        ...user,
        profile_image_url: imageUrl,
      });
      toast.success('User profile updated successfully', {
        position: 'top-center',
      });
    } catch (error) {
      if (error instanceof ApolloError) {
        console.error('ApolloError:', error);
        if (error.graphQLErrors?.length) {
          error.graphQLErrors.forEach((graphQLError) => {
            let message = graphQLError.message;
            if (message.includes('valid_phone_format')) {
              toast.error('Invalid phone format', { position: 'top-center' });
            } else if (message.includes('valid_country_code')) {
              toast.error('Invalid country code format', {
                position: 'top-center',
              });
            } else {
              toast.error(`Unhandled error: ${message}`);
            }
          });
        } else {
          console.error('Unknown GraphQL error:', error.message);
        }
      } else {
        console.error('Unexpected error:', error);
      }
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col dark:bg-dark-background">
      <Header />
      <div className="bg-white dark:bg-dark-surface2 shadow-lg dark:shadow-gray-900 rounded-lg p-8 w-full max-w-5xl mx-auto mt-8 flex flex-col lg:flex-row h-full">
        <Sidebar />
        <div className="w-3/4 pl-8 overflow-hidden">
          {loading ? (
            <LoadingSkeleton />
          ) : (
            <div>
              <h1 className="text-2xl font-semibold mb-6 text-black dark:text-gray-200">
                {t('profile.title')}
              </h1>
              <div className="flex items-center gap-6 mb-6">
                <ProfilePicture />
                <textarea
                  placeholder={t('profile.summaryHolder')}
                  defaultValue={
                    user?.summary ||
                    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
                  }
                  className="border border-gray-300 dark:border-gray-700 rounded-lg p-4 w-full text-gray-900 dark:text-dark-primary bg-white dark:bg-dark-surface placeholder-gray-500 dark:placeholder-gray-400"
                  rows={3}
                />
              </div>
              <ProfileForm />
              <AccountOverview />
              <div className="text-right">
                <button className="bg-default-color text-white px-4 py-2 rounded-lg hover:bg-default-color transition-colors">
                  {t('profile.overView.saveBtn')}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
