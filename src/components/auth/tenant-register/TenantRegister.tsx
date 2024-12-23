'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import {
  getAuth,
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from 'firebase/auth';
import { useMutation } from '@apollo/client';
import {
  ASSIGN_TENANT_ROLE,
  CREATE_USER_RECORD,
} from '@graphql/queries/userMutations.graphql';
import PasswordStrengthIndicator from './PasswordStrengthIndicator';
import AuthButtons from './../AuthButtons';

export const TenantRegister: React.FC = () => {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [attempts, setAttempts] = useState({ count: 0, timestamp: Date.now() });
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  // TODO: Uncomment the following code after setting up user records and roles LC 11/25/2024
  // GraphQL mutations
  // const [createUser] = useMutation(CREATE_USER_RECORD);
  // const [assignRole] = useMutation(ASSIGN_TENANT_ROLE);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAcceptTerms(e.target.checked);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!acceptTerms) {
      return setError('You must accept the Terms of Service to register.');
    }

    const MAX_ATTEMPTS = 5;
    const TIME_WINDOW = 15 * 60 * 1000; // 15 minutes
    const currentTime = Date.now();

    // Check for rate limiting
    const timeSinceFirstAttempt = currentTime - attempts.timestamp;
    if (attempts.count >= MAX_ATTEMPTS && timeSinceFirstAttempt < TIME_WINDOW) {
      return setError('Too many attempts. Please try again later.');
    }

    try {
      // Reset attempts if time window has passed
      if (timeSinceFirstAttempt >= TIME_WINDOW) {
        setAttempts({ count: 1, timestamp: currentTime });
      } else {
        setAttempts((prev) => ({
          count: prev.count + 1,
          timestamp: prev.timestamp,
        }));
      }

      setIsLoading(true);

      // Step 1: Create Firebase user
      const auth = getAuth();
      const { user } = await createUserWithEmailAndPassword(
        auth,
        formState.email,
        formState.password
      );

      // Step 2: Send email verification
      await sendEmailVerification(user);

      // TODO: Uncomment the following code after setting up user records  LC 11/25/2024
      // Step 3: Create user record in the database
      // await createUser({
      //   variables: {
      //     user: {
      //       id: user.uid,
      //       email: user.email,
      //     },
      //   },
      // });

      // TODO: Uncomment the following code after setting up roles  LC 11/25/2024
      // Step 4: Assign tenant role
      // await assignRole({
      //   variables: {
      //     userId: user.uid,
      //   },
      // });

      // Step 5: Redirect to verification page
      router.push('/verify-email');
    } catch (err) {
      setError(getErrorMessage(err));
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6 text-light-primary dark:text-dark-primary">
        Register as Tenant
      </h1>

      {error && (
        <div className="bg-red-50 text-red-500 p-3 rounded mb-4">{error}</div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 dark:text-dark-primary"
          >
            Email or Username
          </label>
          <input
            name="email"
            type="email"
            placeholder="bartoon_bell@gmail.com"
            value={formState.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-default-color text-light-secondary dark:text-dark-primary"
            required
          />
        </div>

        <div>
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700 dark:text-dark-primary"
          >
            Password
          </label>
          <input
            name="password"
            type="password"
            placeholder="********"
            value={formState.password}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-default-color text-black dark:text-dark-primary"
            minLength={6}
            required
          />
          {formState.password.length >= 6 && (
            <PasswordStrengthIndicator password={formState.password} />
          )}
          {formState.password.length > 0 && formState.password.length < 6 && (
            <p className="text-red-500">
              Password must be at least 6 characters long.
            </p>
          )}
        </div>

        <div className="flex items-start">
          <input
            id="acceptTerms"
            name="acceptTerms"
            type="checkbox"
            checked={acceptTerms}
            onChange={handleCheckboxChange}
            className="h-4 w-4 text-default-color border-gray-300 rounded focus:ring-default-color"
          />
          <label
            htmlFor="acceptTerms"
            className="ml-2 block text-sm text-light-secondary dark:text-dark-secondary"
          >
            I agree to the{' '}
            <a
              href="/terms"
              className="text-default-color underline hover:text-default-color"
              target="_blank"
              rel="noopener noreferrer"
            >
              Terms of Service
            </a>
          </label>
        </div>

        <button
          type="submit"
          className={`w-full py-2 px-4 rounded-md ${
            isLoading
              ? 'bg-gray-500 cursor-not-allowed'
              :'bg-default-color hover:bg-default-color'
          }`}
          disabled={isLoading}
        >
          {isLoading ? 'Registering...' : 'Register'}
        </button>
      </form>

      <div className="my-6 text-center text-light-secondary dark:text-dark-secondary">
        or
      </div>
      <AuthButtons action="register" />

      <p className="text-center text-light-secondary dark:text-dark-primary text-sm mt-4">
        Already have an account?{' '}
        <a href="/auth/login" className="text-default-color underline hover:text-default-color">
          Login here
        </a>
      </p>
    </div>
  );
};

// Helper function to parse Firebase errors
const getErrorMessage = (error: any): string => {
  switch (error.code) {
    case 'auth/email-already-in-use':
      return 'This email is already registered.';
    case 'auth/invalid-email':
      return 'Invalid email address.';
    case 'auth/operation-not-allowed':
      return 'Email/password accounts are not enabled.';
    case 'auth/weak-password':
      return 'Password should be at least 6 characters.';
    default:
      return 'An error occurred during registration.';
  }
};
