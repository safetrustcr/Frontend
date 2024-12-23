'use client';
import React from 'react';
import { CgChevronDown } from 'react-icons/cg';
import Pagination from '../Pagination';
import { DropdownPaginationProps } from '@/@types/table';
import { useDropdownPagination } from '@/hooks/profile/interested-people/useDropdownPagination';
import { useTranslation } from 'react-i18next';

const DropdownPagination: React.FC<DropdownPaginationProps> = ({
  paginationVisible,
  currentPage,
  totalPages,
  itemsPerPage,
  totalItems,
  onItemsPerPageChange,
  onPageChange,
}) => {
  //Custom hook for DropdownPagination
  const {
    dropdownOpen,
    dropdownRef,
    showing,
    handleItemsPerPageChange,
    toggleDropdown,
  } = useDropdownPagination({
    currentPage,
    itemsPerPage,
    totalItems,
    onItemsPerPageChange,
  });
  const { t } = useTranslation();
  return (
    <div className="flex items-center justify-between mt-4 sm:mt-5">
      <p className="text-gray-700 dark:text-gray-500">
        {t('interestedPeople.table.title', {
          current: showing,
          total: totalItems,
        })}
      </p>
      {paginationVisible && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={onPageChange}
        />
      )}
      <div className="flex items-center gap-2">
        <label
          htmlFor="itemsPerPage"
          className="text-gray-700 dark:text-gray-500"
        >
          {t('interestedPeople.table.items')}
        </label>
        <div className="relative flex-1 sm:flex-none" ref={dropdownRef}>
          <button
            onClick={toggleDropdown}
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-4 py-2 
                                 text-gray-700 bg-white border border-gray-300 rounded-lg 
                                 hover:bg-gray-50 focus:outline-none focus:ring-1 focus:ring-default-color
                                 transition-colors duration-200 dark:bg-transparent dark:border-gray-700 dark:text-gray-500"
          >
            <span className="inline dark:text-gray-500">{itemsPerPage}</span>
            <CgChevronDown className="w-4 h-4" />
          </button>
          {dropdownOpen && (
            <ul className="absolute right-0 mt-2 w-24 bg-white border border-gray-200 rounded-md shadow-lg z-20 dark:bg-dark-surface dark:border-gray-700">
              {[1, 2, 3, 4, 5].map((value) => (
                <li key={value}>
                  <button
                    onClick={() => handleItemsPerPageChange(value)}
                    className={`w-full text-left px-4 py-2 hover:bg-gray-100 text-gray-700 dark:text-gray-400 dark:hover:bg-dark-surface3 
                                                  transition-colors duration-150 ${itemsPerPage === value ? 'bg-gray-100 dark:bg-gray-800' : ''}`}
                  >
                    {value}
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default DropdownPagination;
