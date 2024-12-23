'use client';

import React, { useState } from 'react';
import { NewPasswordLayout } from '@/components/auth/NewPassword/NewPasswordLayout';
import { PasswordHeader } from '@/components/auth/NewPassword/PasswordHeader';
import { PasswordInput } from '@/components/auth/NewPassword/PasswordInput';
import { PiSpinnerLight } from 'react-icons/pi';

export default function NewPassword() {
  const [passwords, setPasswords] = useState({
    temporal: '',
    new: '',
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    console.log('Changing password:', passwords);

    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsLoading(false);
  };

  return (
    <NewPasswordLayout>
      <PasswordHeader
        title="New password"
        subtitle="Please, change the password"
      />
      <form onSubmit={handleSubmit} className="space-y-4">
        <PasswordInput
          id="temporal"
          label="Temporal password"
          value={passwords.temporal}
          onChange={(e) =>
            setPasswords({ ...passwords, temporal: e.target.value })
          }
        />
        <PasswordInput
          id="new"
          label="New password"
          value={passwords.new}
          onChange={(e) => setPasswords({ ...passwords, new: e.target.value })}
        />
        <button
          type="submit"
          className="w-[180px] mx-auto block bg-default-color text-white py-2 rounded-lg hover:bg-default-color active:bg-default-color disabled:bg-gray-400 disabled:cursor-not-allowed transition-all duration-300 ease-in-out flex justify-center items-center"
          disabled={isLoading}
        >
          {isLoading ? (
            <>
              <PiSpinnerLight className="mr-2 h-4 w-4 animate-spin" />
              Saving...
            </>
          ) : (
            'Save'
          )}
        </button>
      </form>
    </NewPasswordLayout>
  );
}
