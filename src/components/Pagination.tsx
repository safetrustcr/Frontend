import React from 'react';
import { IoChevronBack, IoChevronForward } from 'react-icons/io5';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const getPageNumbers = () => {
    const pages: (number | string)[] = [];

    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      pages.push(1);

      if (currentPage <= 3) {
        pages.push(2, 3, 4, '...', totalPages);
      } else if (currentPage >= totalPages - 2) {
        pages.push(
          '...',
          totalPages - 3,
          totalPages - 2,
          totalPages - 1,
          totalPages
        );
      } else {
        pages.push(
          '...',
          currentPage - 1,
          currentPage,
          currentPage + 1,
          '...',
          totalPages
        );
      }
    }

    return pages;
  };

  return (
    <nav
      className="flex items-center justify-center space-x-1"
      aria-label="Pagination"
    >
      <button
        onClick={() => onPageChange(Math.max(currentPage - 1, 1))}
        disabled={currentPage === 1}
        className="p-2 bg-gray-300 border-2 rounded-md text-gray-500 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed 
        dark:bg-dark-surface3 dark:border-gray-700 dark:text-gray-500"
        aria-label="Previous page"
      >
        <IoChevronBack className="w-5 h-5" />
      </button>

      {getPageNumbers().map((pageNumber, index) =>
        pageNumber === '...' ? (
          <span key={`ellipsis-${index}`} className="px-4 py-1 text-gray-700">
            ...
          </span>
        ) : (
          <button
            key={pageNumber}
            onClick={() => onPageChange(pageNumber as number)}
            className={`px-4 py-1 rounded-md border-2 ${
              currentPage === pageNumber
                ? 'bg-default-color text-white dark:bg-dark-surface3 dark:border-default-color'
                : 'text-gray-700 hover:bg-gray-100 dark:bg-dark-surface dark:text-gray-500 dark:hover:bg-dark-surface2 dark:border-gray-600'
            }`}
            aria-current={currentPage === pageNumber ? 'page' : undefined}
          >
            {pageNumber}
          </button>
        )
      )}

      <button
        onClick={() => onPageChange(Math.min(currentPage + 1, totalPages))}
        disabled={currentPage === totalPages}
        className="p-2 rounded-md text-gray-500 bg-gray-300 border hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed 
        dark:bg-dark-surface3 dark:border-gray-700 dark:text-gray-500"
        aria-label="Next page"
      >
        <IoChevronForward className="w-5 h-5" />
      </button>
    </nav>
  );
};

export default Pagination;
