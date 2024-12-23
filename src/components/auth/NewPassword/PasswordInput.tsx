import React, { useState } from 'react';
import { PiEye, PiEyeSlash } from 'react-icons/pi';

interface PasswordInputProps {
  id: string;
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export function PasswordInput({
  id,
  label,
  value,
  onChange,
}: PasswordInputProps) {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <div>
      <label
        htmlFor={id}
        className="block text-sm font-medium text-gray-700 mb-1"
      >
        {label}
      </label>
      <div className="relative">
        <input
          type={isVisible ? 'text' : 'password'}
          id={id}
          value={value}
          onChange={onChange}
          placeholder="********"
          className="w-full px-0 py-2 pr-10 border-0 border-b border-gray-300 bg-transparent text-black focus:outline-none focus:ring-0 focus:border-default-color dark:text-gray-200"
          required
        />
        <button
          type="button"
          onClick={() => setIsVisible(!isVisible)}
          className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400 hover:text-gray-600"
        >
          {isVisible ? (
            <PiEyeSlash className="h-5 w-5" aria-hidden="true" />
          ) : (
            <PiEye className="h-5 w-5" aria-hidden="true" />
          )}
          <span className="sr-only">
            {isVisible ? 'Hide password' : 'Show password'}
          </span>
        </button>
      </div>
    </div>
  );
}
