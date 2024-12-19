'use client';

import React from 'react';
import Image from 'next/image';
import RegisterForm from './RegisterForm';

const RegisterCard: React.FC = () => {
  return (
    <div className="flex justify-center lg:justify-start items-center min-h-screen bg-white lg:bg-[url('/img/background.png')] bg-cover bg-center px-4 sm:px-6 lg:px-8">
      <div className="bg-white p-6 sm:p-8 rounded-lg w-full max-w-md lg:ml-20">
        <div className="flex justify-center lg:justify-start">
          <Image
            src="/img/logo2.png"
            alt="SafeTrust"
            width={208}
            height={48}
            className="mb-8 sm:mb-12 w-32 h-auto sm:w-52 lg:w-52"
            priority
          />
        </div>

        <RegisterForm />

        <p className="text-center text-black text-sm mt-6">
          Already have an account?{' '}
          <a href="/auth/login" className="text-sm text-default-color hover:underline">
            Login here
          </a>
        </p>
      </div>
    </div>
  );
};

export default RegisterCard;
