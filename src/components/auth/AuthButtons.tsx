'use client';

import { FcGoogle } from 'react-icons/fc';
import { FaWallet } from 'react-icons/fa';
import { useState } from 'react';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { Web3Provider } from '@ethersproject/providers';

interface AuthButtonsProps {
  action: 'login' | 'register';
}

// TODO: Finish social auths once firebase is set up LC 11/25/2024
const AuthButtons: React.FC<AuthButtonsProps> = ({ action }) => {
  const [error, setError] = useState<string | null>(null);
  const buttonText = action === 'login' ? 'Login' : 'Register';

  // Google login handler
  const handleGoogleLogin = async () => {
    const auth = getAuth();
    const provider = new GoogleAuthProvider();

    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      console.log(user); // TODO: Store data LC 11/25/2024
      //TODO: Add redirect or handle after successful login/registration LC 11/25/2024
    } catch (err) {
      setError('Failed to sign in with Google');
      console.error(err);
    }
  };

  // Wallet login handler
  const handleWalletLogin = async () => {
    if (window.ethereum) {
      try {
        const provider = new Web3Provider(window.ethereum);
        await provider.send('eth_requestAccounts', []);
        const signer = provider.getSigner();
        const address = await signer.getAddress();
        console.log('User wallet address:', address); // TODO: Store data LC 11/25/2024
      } catch (err) {
        setError('Failed to connect to wallet');
        console.error(err);
      }
    } else {
      setError('Please install a wallet extension like MetaMask');
    }
  };

  return (
    <div className="space-y-2">
      {error && <div className="text-red-500 text-center">{error}</div>}

      <button
        onClick={handleGoogleLogin}
        type="button"
        className="w-full py-2 px-4 border text-light-primary dark:text-dark-primary border-gray-300 rounded-md flex items-center justify-center hover:bg-gray-100 dark:hover:bg-gray-800"
      >
        <FcGoogle className="w-5 h-5 mr-2" />
        {buttonText} with Google
      </button>

      <button
        onClick={handleWalletLogin}
        type="button"
        className="w-full py-2 px-4 bg-black text-white rounded-md flex items-center justify-center hover:bg-gray-800"
      >
        <FaWallet className="w-5 h-5 mr-2" />
        {buttonText} with Wallet
      </button>
    </div>
  );
};

export default AuthButtons;
