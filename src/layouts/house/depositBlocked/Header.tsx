import React from 'react';

const Header: React.FC = () => {
  return (
    <div className="flex justify-between items-center mb-6">
      <h1 className="text-2xl font-bold text-light-primary dark:text-dark-primary flex items-center gap-2">
        INV4257-09-012
        <span className="bg-blue-200 text-blue-600 text-sm font-semibold px-4 py-1 rounded-full">
          Deposit blocked
        </span>
      </h1>
    </div>
  );
};

export default Header;
