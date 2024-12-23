import LoginForm from './LoginForm';
import AuthButtons from './../AuthButtons';
import Image from 'next/image';

const LoginCard = () => {
  return (
      <div className="flex justify-center lg:justify-start items-center min-h-screen bg-light-primary dark:bg-dark-background lg:bg-[url('/img/background.png')] bg-cover bg-center px-4 sm:px-6 lg:px-8">
      <div className="bg-light-primary dark:bg-dark-surface p-6 sm:p-8 rounded-lg w-full max-w-md lg:ml-20">
        <LoginForm />
        <div className="my-4 text-center text-gray-500">or</div>
        <AuthButtons action="login" />
        <p className="text-center text-light-primary dark:text-dark-primary text-sm mt-4">
          Don’t have an account?{' '}
          <a
            href="/auth/tenant-register"
            className="text-default-color hover:underline"
          >
            Register here
          </a>
        </p>
      </div>
    </div>
  );
};

export default LoginCard;
