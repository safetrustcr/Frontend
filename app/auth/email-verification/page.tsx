'use client';

import { useState, Suspense, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { VerificationCodeInput } from '../../../src/components/auth/VerificationCodeInput';
import { CityBackground } from '../../../src/components/auth/CityBackground';
import { GraphQLClient } from 'graphql-request';
import { useTranslation } from 'react-i18next';
import { ThemeToggle } from '@/components/ThemeToggle';

const EmailVerificationForm = () => {
  const [isResending, setIsResending] = useState(false);
  const searchParams = useSearchParams();
  const email = searchParams.get('email') || 'john.doe@email.com';
  const graphQLClient = new GraphQLClient('http://localhost:8080/v1/graphql', {
    headers: {
      'x-hasura-admin-secret': 'myadminsecretkey',
    },
  });

  const [message, setMessage] = useState<string>('');
  const [verificationCode, setVerificationCode] = useState<string>('');

  type SendVerificationCodeResponse = {
    sendVerificationCode: {
      success: boolean;
      message: string;
      expiresAt: string;
    };
  };

  const handleResendCode = async () => {
    setIsResending(true);
    setMessage('');

    try {
      const mutation = `
        mutation SendVerificationCode($email: String!) {
          sendVerificationCode(input: { email: $email }) {
            success
            message
            expiresAt
          }
        }
      `;
      const variables = { email };

      const data = await graphQLClient.request<SendVerificationCodeResponse>(
        mutation,
        variables
      );

      if (data.sendVerificationCode.success) {
        setMessage('Verification code sent successfully.');
      } else {
        setMessage(data.sendVerificationCode.message || 'An error occurred.');
      }
    } catch (error) {
      console.error('Error resending code:', error);
      setMessage(t('emailVerification.errorMsg'));
    } finally {
      setIsResending(false);
    }
  };

  useEffect(() => {
    if (verificationCode) {
      handleVerifyCode();
    }
  }, [verificationCode]);

  type VerifyEmailCodeResponse = {
    verifyEmailCode: {
      success: boolean;
      message: string;
    };
  };

  const handleVerifyCode = async () => {
    if (!verificationCode) {
      setMessage(t('emailVerification.verificationMsg'));
      return;
    }

    setMessage('');

    try {
      const mutation = `
            mutation VerifyEmailCode($email: String!, $code: String!) {
                verifyEmailCode(input: { email: $email, code: $code }) {
                    success
                    message
                }
            }
        `;
      const variables = { email, code: verificationCode };

      const data = await graphQLClient.request<VerifyEmailCodeResponse>(
        mutation,
        variables
      );

      console.log(data);

      if (data.verifyEmailCode.success) {
        setMessage(t('emailVerification.successEmail'));
      }
    } catch (error: any) {
      setMessage(error.response.errors[0].message);
      console.log(error.response.errors[0].message);
    }
  };
  const { t } = useTranslation();
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white relative dark:bg-dark-surface">
      <div className="flex flex-col items-center justify-center p-4 z-10">
        <div className="max-w-lg w-full space-y-8 text-center">
          <h1 className="text-3xl font-bold text-black dark:text-gray-200">
            {t('emailVerification.title')}
          </h1>
          <p className="text-black dark:text-gray-200">
            {t('emailVerification.subTitle')}{' '}
            <span className="font-medium">{email}</span>.
          </p>
          <VerificationCodeInput
            length={6}
            onComplete={(code) => {
              setVerificationCode(code);
            }}
          />

          {/* Message here */}
          {message && (
            <p className="text-lg font-medium text-black-250 mt-4">{message}</p>
          )}

          <button
            onClick={handleResendCode}
            disabled={isResending}
            className="w-full py-3 px-4 bg-default-color text-white rounded-md hover:bg-default-color disabled:opacity-50"
          >
            {isResending
              ? t('emailVerification.sendBtn.firstTitle')
              : t('emailVerification.sendBtn.secondTitle')}
          </button>
        </div>
      </div>
    </div>
  );
};

const EmailVerificationContent = () => {
  const { t } = useTranslation();
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white relative dark:bg-dark-surface">
      <div className="absolute top-4 right-4 z-50">
        <ThemeToggle />
      </div>
      <Suspense fallback={<div>{t('emailVerification.loadingMsg')}</div>}>
        <EmailVerificationForm />
      </Suspense>
      <CityBackground />
    </div>
  );
};

export default EmailVerificationContent;
