import { useTranslation } from 'node_modules/react-i18next';
import React from 'react';

const LoadingSkeleton = () => {
  const { t } = useTranslation();
  return (
    <div className="animate-pulse">
      {/* Profile Header */}
      <div className="flex items-center gap-4 mb-6">
        <div className="w-16 h-16 rounded-full bg-gray-700" />
        <div className="flex-1">
          <div className="h-4 bg-gray-700 rounded w-3/4 mb-2" />
          <div className="h-4 bg-gray-700 rounded w-1/2" />
        </div>
      </div>

      {/* Name Fields */}
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="h-10 bg-gray-700 rounded" />
        <div className="h-10 bg-gray-700 rounded" />
      </div>

      {/* Contact Info */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="h-10 bg-gray-700 rounded" />
        <div className="h-10 bg-gray-700 rounded" />
      </div>

      {/* Account Overview Section */}
      <div>
        <h2 className="text-lg font-semibold mb-2 text-black dark:text-gray-200">
          {t('profile.overView.title')}
        </h2>
        <div className="overflow-hidden rounded">
          {/* Table Header */}
          <div className="grid grid-cols-4 gap-4 p-4 bg-gray-800">
            <div className="h-4 bg-gray-700 rounded w-2/3" />
            <div className="h-4 bg-gray-700 rounded w-2/3" />
            <div className="h-4 bg-gray-700 rounded w-2/3" />
            <div className="h-4 bg-gray-700 rounded w-1/3" />
          </div>
          {/* Table Row */}
          <div className="grid grid-cols-4 gap-4 p-4">
            <div className="h-4 bg-gray-700 rounded" />
            <div className="h-4 bg-gray-700 rounded" />
            <div className="h-4 bg-gray-700 rounded" />
            <div className="h-4 bg-gray-700 rounded w-6" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingSkeleton;
