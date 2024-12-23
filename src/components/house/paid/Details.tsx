import React from 'react';

const Details: React.FC = () => {
  return (
    <div className="col-span-8 bg-light-secondary dark:bg-dark-surface rounded-lg shadow-lg p-4 sm:p-6">
      <h2 className="text-lg sm:text-xl font-bold text-light-primary dark:text-dark-primary mb-4 text-center sm:text-left">
        Payment batch January 2025
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-light-primary dark:text-dark-primary">
        <div>
          <p>
            <strong>Bill to:</strong> john_st@gmail.com
          </p>
          <p>
            <strong>Billing details:</strong> John Smith
          </p>
        </div>
        <div>
          <p>
            <strong>Invoice Number:</strong> INV4257-09-012
          </p>
          <p>
            <strong>Subject:</strong> Rent service
          </p>
          <p>
            <strong>Currency:</strong> IDR - Dollar
          </p>
          <p>
            <strong>Issued:</strong> 20 January 2025
          </p>
          <p>
            <strong>Due date:</strong> 30 January 2025
          </p>
        </div>
      </div>
      <hr className="my-6 border-gray-300" />
      <div className="mb-6 overflow-x-auto">
        <table className="w-full text-sm border-t border-b border-light-primary dark:border-dark-primary">
          <thead>
            <tr className="bg-light-secondary dark:bg-dark-surface">
              <th className="text-left font-semibold py-2 px-4 text-light-primary dark:text-dark-primary text-xs sm:text-sm">
                PRODUCT
              </th>
              <th className="text-left font-semibold py-2 px-4 text-light-primary dark:text-dark-primary text-xs sm:text-sm">
                PRICE PER MONTH
              </th>
              <th className="text-left font-semibold py-2 px-4 text-light-primary dark:text-dark-primary text-xs sm:text-sm">
                DEPOSIT
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="py-2 px-4 flex items-center text-light-primary dark:text-dark-primary">
                <img
                  src="/img/house1.jpg"
                  alt="La sabana apartment"
                  className="w-10 h-10 rounded-lg mr-4"
                />
                <span>La sabana apartment</span>
              </td>
              <td className="py-2 px-4 text-light-primary dark:text-dark-primary">
                $4,000
              </td>
              <td className="py-2 px-4 text-light-primary dark:text-dark-primary">
                $4,000
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="text-sm text-light-primary dark:text-dark-primary flex flex-col space-y-1 mt-4">
        <div className="flex justify-between">
          <p className="font-bold">Subtotal:</p>
          <p>$4,000</p>
        </div>
        <div className="flex justify-between">
          <p className="font-bold">Discount (10%):</p>
          <p>-$400</p>
        </div>
        <div className="flex justify-between font-bold">
          <p>Total:</p>
          <p>$8,000</p>
        </div>
      </div>
      <div className="mt-6">
        <h3 className="text-base sm:text-lg font-bold text-light-primary dark:text-dark-primary">
          Terms & Conditions
        </h3>
        <p className="text-light-primary dark:text-dark-primary text-sm mt-2">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
      </div>
    </div>
  );
};

export default Details;
