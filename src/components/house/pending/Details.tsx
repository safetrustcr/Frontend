'use client';

import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loader from '@/layouts/Loader';
import { usePayReservation } from '@/hooks/escrow/usePayReservation';
import { MdLocationOn } from 'react-icons/md';
import { FaBed, FaPaw, FaBath } from 'react-icons/fa';
import usePendingDetails from '@/hooks/house/pending/usePendingDetails';

const Details: React.FC = () => {
  const { address, contractId, engagementId } = usePendingDetails();

  const { payReservation, loadingPay, isPaid } = usePayReservation(
    address,
    contractId,
    engagementId
  );

  return (
    <div className="col-span-8 bg-light-secondary dark:bg-dark-surface rounded-lg shadow-lg p-6">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-bold text-light-primary dark:text-dark-primary">
          La sabana
        </h2>
        <button
          onClick={payReservation}
          className={`bg-default-color text-white px-6 py-2 rounded-lg font-semibold hover:bg-default-color${
            loadingPay || isPaid ? 'opacity-50 cursor-not-allowed' : ''
          }`}
          disabled={loadingPay || isPaid}
        >
          {loadingPay ? <Loader /> : isPaid ? 'PAID' : 'PAY'}
        </button>
      </div>
      <hr className="my-4 border-light-primary dark:border-dark-primary" />
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-4">
        <img
          src="/img/house1.jpg"
          alt="House"
          className="w-full h-auto object-cover rounded-lg"
        />
        <img
          src="/img/house1.jpg"
          alt="House"
          className="w-full h-auto object-cover rounded-lg"
        />
        <img
          src="/img/house1.jpg"
          alt="House"
          className="w-full h-auto object-cover rounded-lg"
        />
        <img
          src="/img/house1.jpg"
          alt="House"
          className="w-full h-auto object-cover rounded-lg"
        />
      </div>
      <div className="flex items-center text-light-primary dark:text-dark-primary text-sm mt-6">
        <MdLocationOn className="text-default-color w-5 h-5 mr-2"/>
        <span>329 Calle Santos, Paseo Colón, San José</span>
      </div>
      <div className="flex gap-4 mt-4 text-default-color">
        <div className="flex items-center">
          <FaBed className="w-5 h-5 mr-2" />
          <span className="text-light-primary dark:text-dark-primary text-sm">
            2 bd.
          </span>
        </div>
        <div className="flex items-center">
          <FaPaw className="w-5 h-5 mr-2" />
          <span className="text-light-primary dark:text-dark-primary text-sm">
            pet friendly
          </span>
        </div>
        <div className="flex items-center">
          <FaBath className="w-5 h-5 mr-2" />
          <span className="text-light-primary dark:text-dark-primary text-sm">
            1 ba.
          </span>
        </div>
      </div>
      <div className="mt-6">
        <h3 className="text-lg font-bold text-light-primary dark:text-dark-primary">
          Property details
        </h3>
        <p className="text-light-primary dark:text-dark-primary text-sm mt-2">
          Lorem ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
      </div>
      <div className="mt-6">
        <h3 className="text-lg font-bold text-light-primary dark:text-dark-primary">
          Owner contact
        </h3>
        <p className="text-light-primary dark:text-dark-primary text-sm mt-2">
          +506 6845-2179
        </p>
        <p className="text-light-primary dark:text-dark-primary text-sm">
          albertoCasas100@gmail.com
        </p>
      </div>
    </div>
  );
};

export default Details;
