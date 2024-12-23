import React from 'react';
import Image from 'next/image';
import { FaBed, FaBath, FaPaw } from 'react-icons/fa';
import { AiOutlineHeart } from 'react-icons/ai';
import { useTranslation } from 'react-i18next';

interface PropertyCardProps {
  image: string;
  title: string;
  address: string;
  price: string;
  promoted: boolean;
  beds: number;
  baths: number;
  petFriendly: boolean;
}

const PropertyCard: React.FC<PropertyCardProps> = ({
  image,
  title,
  address,
  price,
  promoted,
  beds,
  baths,
  petFriendly,
}) => {
  const { t } = useTranslation();
  return (
    <div className="bg-white shadow-md rounded-lg dark:bg-dark-surface overflow-hidden border">
      <div className="relative">
        <Image
          src={image}
          alt={title}
          width={400}
          height={300}
          className="w-full h-48 object-cover"
        />
        {promoted && (
          <span className="absolute top-2 left-2 bg-default-color text-white text-xs font-semibold px-2 py-1 rounded">
            {t('propertyList.propertyCard.promo')}
          </span>
        )}
      </div>
      <div className="p-4">
        <div className="flex items-center justify-between">
          <p className="text-green-600 font-bold text-lg">${price}.00</p>
          <AiOutlineHeart className="text-gray-400 text-xl cursor-pointer hover:text-red-500" />
        </div>
        <p className="text-gray-500 text-sm dark:text-gray-200">
          {t('propertyList.propertyCard.perMonth')}
        </p>
        <h3 className="text-gray-900 font-semibold mt-2 dark:text-gray-200">
          {t('propertyList.propertyCard.title')}
        </h3>
        <p className="text-gray-600 text-sm">
          {t('propertyList.propertyCard.address')}
        </p>
      </div>
      <div className="p-4 border-t flex justify-between items-center text-gray-600 dark:text-gray-200 text-sm">
        <div className="flex items-center">
          <FaBed className="mr-1" />
          <span>
            {beds} {t('common.bed')}
          </span>
        </div>
        <div className="flex items-center">
          <FaBath className="mr-1" />
          <span>
            {baths} {t('common.bathroom')}
          </span>
        </div>
        {petFriendly && (
          <div className="flex items-center">
            <FaPaw className="mr-1" />
            <span>{t('common.pet')}</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default PropertyCard;
