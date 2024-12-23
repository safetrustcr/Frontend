'use client';
import React from 'react';
import { FiSearch, FiCalendar, FiTag } from 'react-icons/fi';
import { CgChevronDown } from 'react-icons/cg';
import { SearchAndFilterProps } from '@/@types/table';
import { useSearchAndFilter } from '@/hooks/profile/interested-people/useSearchAndFilter';
import { useTranslation } from 'react-i18next';

export default function SearchAndFilter({
  onSearch,
  onDateRangeChange,
  onStatusChange,
  selectedDateRange,
  selectedStatus,
}: SearchAndFilterProps) {
  const {
    dateRangeOpen,
    statusOpen,
    dateRef,
    statusRef,
    getSelectedDateRangeLabel,
    getSelectedStatusLabel,
    handleDateRangeChange,
    handleStatusChange,
    toggleDateRange,
    toggleStatus,
  } = useSearchAndFilter({
    onDateRangeChange,
    onStatusChange,
    selectedDateRange,
    selectedStatus,
  });
  const { t } = useTranslation();
  const dateRangeOptions = [
    { label: t('interestedPeople.dateRange.rangeOne'), value: 'today' },
    { label: t('interestedPeople.dateRange.rangeTwo'), value: 'last7days' },
    { label: t('interestedPeople.dateRange.rangeThree'), value: 'last30days' },
    { label: t('interestedPeople.dateRange.rangeFour'), value: 'last90days' },
    { label: t('interestedPeople.dateRange.rangeFive'), value: 'custom' },
  ];

  const statusOptions = [
    { label: t('interestedPeople.filter.default'), value: '' },
    { label: t('interestedPeople.filter.filterOne'), value: 'pending' },
    { label: t('interestedPeople.filter.filterTwo'), value: 'accepted' },
    { label: t('interestedPeople.filter.filterThree'), value: 'rejected' },
  ];

  return (
    <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 mt-4 sm:mt-8">
      <div className="relative flex-1">
        <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-black dark:text-gray-500" />
        <input
          type="search"
          placeholder={t('interestedPeople.searchHolder')}
          onChange={(e) => onSearch(e.target.value)}
          className="w-full sm:w-2/3 lg:w-1/2 text-black placeholder:text-gray-500 py-2 pl-10 pr-4 
                             bg-white border border-gray-300 rounded-full shadow-sm
                             focus:border-default-color focus:outline-none focus:ring-1 focus:ring-default-color
                             transition-colors duration-200 dark:bg-transparent dark:border-gray-700 dark:text-gray-500"
        />
      </div>

      <div className="flex flex-row gap-2 sm:gap-3">
        <div className="relative flex-1 sm:flex-none" ref={dateRef}>
          <button
            onClick={toggleDateRange}
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-4 py-2 
                                 text-gray-700 bg-white border border-gray-300 rounded-lg 
                                 hover:bg-gray-50 focus:outline-none focus:ring-1 focus:ring-default-color
                                 transition-colors duration-200 dark:bg-transparent dark:border-gray-700 dark:text-gray-500"
          >
            <FiCalendar className="w-4 h-4" />
            <span className="inline">{getSelectedDateRangeLabel()}</span>
            <CgChevronDown className="w-4 h-4" />
          </button>
          {dateRangeOpen && (
            <ul className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-20 dark:bg-dark-surface dark:border-gray-700">
              {dateRangeOptions.map((option) => (
                <li key={option.value}>
                  <button
                    className={`w-full text-left rounded-md px-4 py-2 hover:bg-gray-100 text-gray-700 dark:hover:bg-dark-surface3 dark:text-gray-400
                                                  transition-colors duration-150 ${selectedDateRange === option.value ? 'bg-gray-100 dark:bg-gray-800' : ''}`}
                    onClick={() => handleDateRangeChange(option.value)}
                  >
                    {option.label}
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="relative flex-1 sm:flex-none" ref={statusRef}>
          <button
            onClick={toggleStatus}
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-4 py-2 
                                 text-gray-700 bg-white border border-gray-300 rounded-lg 
                                 hover:bg-gray-50 focus:outline-none focus:ring-1 focus:ring-default-color
                                 transition-colors duration-200 dark:bg-transparent dark:border-gray-700 dark:text-gray-500"
          >
            <FiTag className="w-4 h-4" />
            <span className="inline">{getSelectedStatusLabel()}</span>
            <CgChevronDown className="w-4 h-4" />
          </button>
          {statusOpen && (
            <ul className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-20 dark:bg-dark-surface dark:border-gray-700">
              {statusOptions.map((option) => (
                <li key={option.value}>
                  <button
                    className={`w-full text-left px-4 py-2 hover:bg-gray-100 text-gray-700 dark:text-gray-400 dark:hover:bg-dark-surface3 
                                                  transition-colors duration-150 ${selectedStatus === option.value ? 'bg-gray-100 dark:bg-gray-800' : ''}`}
                    onClick={() => handleStatusChange(option.value)}
                  >
                    {option.label}
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
