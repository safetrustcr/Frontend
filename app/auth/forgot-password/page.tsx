'use client';

import React from 'react';
import ForgotPasswordCard from '@/components/auth/ForgotPassword/ForgotPasswordCard';
import { ThemeToggle } from '@/components/ThemeToggle';

const ForgotPasswordPage: React.FC = () => {
  return (
    <div className="bg-light-secondary dark:bg-dark-surface min-h-screen flex items-center justify-center relative">
      <div className="absolute top-4 right-4 z-50">
        <ThemeToggle />
      </div>
      <ForgotPasswordCard />
    </div>
  );
};

export default ForgotPasswordPage;
