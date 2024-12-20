'use client';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { AiOutlineHeart, AiOutlineClose } from 'react-icons/ai';

const Sidebar: React.FC = () => {
  const { t } = useTranslation();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const suggestions = [
    {
      id: 1,
      title: t('sideSuggestions.cards.title'),
      address: t('sideSuggestions.cards.address'),
      details: `2${t('common.bed')}  ${t('common.pet')}  1${t('common.bathroom')}`,
      price: '$4,000',
      image: '/img/house1.jpg',
    },
    {
      id: 2,
      title: t('sideSuggestions.cards.title'),
      address: t('sideSuggestions.cards.address'),
      details: `2${t('common.bed')}  ${t('common.pet')}  1${t('common.bathroom')}`,
      price: '$4,000',
      image: '/img/house1.jpg',
    },
    {
      id: 3,
      title: t('sideSuggestions.cards.title'),
      address: t('sideSuggestions.cards.address'),
      details: `2${t('common.bed')}  ${t('common.pet')}  1${t('common.bathroom')}`,
      price: '$4,000',
      image: '/img/house1.jpg',
    },
    {
      id: 4,
      title: t('sideSuggestions.cards.title'),
      address: t('sideSuggestions.cards.address'),
      details: `2${t('common.bed')}  ${t('common.pet')}  1${t('common.bathroom')}`,
      price: '$4,000',
      image: '/img/house1.jpg',
    },
    {
      id: 5,
      title: t('sideSuggestions.cards.title'),
      address: t('sideSuggestions.cards.address'),
      details: `2${t('common.bed')}  ${t('common.pet')}  1${t('common.bathroom')}`,
      price: '$4,000',
      image: '/img/house1.jpg',
    },
  ];

  const handleSidebarToggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div
      className={`w-97 p-4 bg-white dark:bg-dark-surface border-r dark:border-gray-700 transition-transform transform ${
        isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
      } lg:translate-x-0`}
    >
      <button
        className="lg:hidden absolute top-3 right-3 text-black dark:text-white"
        onClick={handleSidebarToggle}
      >
        <AiOutlineClose className="w-6 h-6" />
      </button>

      <h2 className="text-xl font-bold text-black mb-2 dark:text-gray-200">
        {t('sideSuggestions.title')}
      </h2>
      <p className="text-gray-700 text-sm mb-4 dark:text-gray-200">
        {t('sideSuggestions.unitAvailable')}
      </p>
      <div className="space-y-4">
        {suggestions.map((suggestion) => (
          <div
            key={suggestion.id}
            className="flex p-4 border border-gray-200 rounded-lg relative dark:border-gray-700"
          >
            <img
              className="w-20 h-20 rounded-lg object-cover"
              src={suggestion.image}
              alt={suggestion.title}
            />
            <div className="ml-4 flex-grow">
              <h3 className="text-black font-semibold dark:text-gray-200">
                {suggestion.title}
              </h3>
              <p className="text-gray-500 text-sm dark:text-gray-200">
                {suggestion.address}
              </p>
              <p className="text-gray-500 text-sm dark:text-gray-200">
                {suggestion.details}
              </p>
            </div>
            <button className="absolute top-3 right-3 text-red-500 hover:text-red-700">
              <AiOutlineHeart className="w-5 h-5" />
            </button>
            <p className="absolute bottom-3 right-3 text-green-600 font-bold">
              {suggestion.price}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
