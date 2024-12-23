'use client';

import React from 'react';
import { MdLocationOn } from 'react-icons/md';
import { FaBed, FaPaw, FaBath } from 'react-icons/fa';
import Loader from '@/layouts/Loader';
import 'react-toastify/dist/ReactToastify.css';
import usePropertyDetails from '@/hooks/house/usePropertyDetails';
import { useTranslation } from 'react-i18next';

const PropertyDetails: React.FC = () => {
  const { t } = useTranslation();
  const { bookReservation, loadingBook, isBooked } = usePropertyDetails();

  const handleBook = async () => {
    try {
      await bookReservation();
    } catch (error) {
      console.error('Error during booking:', error);
    }
  };

  return (
    <div className="w-full bg-gray-50 px-5 py-2 dark:bg-dark-background">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8">
        <div className="col-span-1 md:col-span-12 bg-white rounded-lg shadow-lg p-6 dark:bg-dark-surface">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="relative w-full">
              <img
                src="/img/house1.jpg"
                alt="Main Property"
                className="w-full h-[300px] md:h-[400px] object-cover rounded-lg border"
              />
              <span className="absolute top-4 left-4 bg-default-color text-white text-sm font-semibold px-4 py-2 rounded-full">
                {t('propertyDetails.promo')}
              </span>
            </div>

            <div className="flex flex-row md:flex-col gap-4 mt-4 md:mt-0">
              <img
                src="/img/house1.jpg"
                alt="House"
                className="w-20 h-20 md:w-28 md:h-28 object-cover rounded-lg"
              />
              <img
                src="/img/house1.jpg"
                alt="House"
                className="w-20 h-20 md:w-28 md:h-28 object-cover rounded-lg"
              />
              <img
                src="/img/house1.jpg"
                alt="House"
                className="w-20 h-20 md:w-28 md:h-28 object-cover rounded-lg"
              />
            </div>
          </div>

          <div className="mt-8">
            <div className="flex justify-between items-center">
              <h1 className="text-xl md:text-2xl font-semibold text-black dark:text-gray-200">
                {t('propertyDetails.propertyTitle')}
              </h1>
              <button
                onClick={handleBook}
                className={`bg-orange-500 text-white px-6 py-1.5 rounded-lg text-sm font-semibold hover:bg-orange-600 ${
                  isBooked || loadingBook ? 'opacity-50 cursor-not-allowed' : ''
                }`}
                disabled={isBooked || loadingBook}
              >
                {loadingBook ? (
                  <Loader />
                ) : isBooked ? (
                  'BOOKED'
                ) : (
                  t('propertyDetails.bookButton')
                )}
              </button>
            </div>

            <div className="flex justify-between items-center mt-4">
              <div className="flex items-center text-gray-700 text-sm">
                <MdLocationOn className="text-default-color w-5 h-5 mr-2"/>
                {t('propertyDetails.address')}
              </div>
            </div>

            <hr className="my-4 border-gray-300" />
            
            <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
              <div className="flex gap-6 text-orange-500 items-center">
                <div className="flex items-center">
                  <FaBed className="w-5 h-5 mr-2" />
                  <span className="text-gray-700 text-sm">
                    2 {t('common.bed')}
                  </span>
                </div>
                <div className="flex items-center">
                  <FaPaw className="w-5 h-5 mr-2" />
                  <span className="text-gray-700 text-sm">
                    {t('common.pet')}
                  </span>
                </div>
                <div className="flex items-center">
                  <FaBath className="w-5 h-5 mr-2" />
                  <span className="text-gray-700 text-sm">
                    1 {t('common.bathroom')}
                  </span>
                </div>
              </div>

              <div className="flex items-center mt-4 md:mt-0">
                <img
                  src="/img/person.png"
                  className="w-10 h-10 rounded-full"
                  alt="Alberto Casas"
                />
                <p className="text-black font-semibold ml-3 text-sm dark:text-gray-200">
                  Alberto Casas
                </p>
              </div>
            </div>

            <div className="mt-6">
              <h2 className="text-xl font-bold text-black dark:text-gray-200">
                {t('propertyDetails.detailsTitle')}
              </h2>
              <p className="text-gray-500 text-sm mt-2">
                {t('propertyDetails.detailsText')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetails;
