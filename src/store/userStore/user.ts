import { ApolloError } from '@apollo/client';
import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

export interface User {
  id: string;
  email: string;
  first_name: string;
  last_name: string;
  summary: string;
  phone_number: string;
  country_code: string;
  location: string;
  profile_image_url: string;
  created_at: Date;
  updated_at: Date;
}

export interface UserWallet {
  id: string;
  wallet_address: string;
  is_primary: boolean;
  created_at: Date;
}

export interface GetUserQuery {
  users: User[];
  user_wallets: UserWallet[];
}

type UserState = {
  loading: boolean;
  error: ApolloError | null;
  user: User | null;
  userWallets: UserWallet[];
  setLoading: (loading: boolean) => void;
  setError: (error: ApolloError | null) => void;
  setUser: (user: User | null) => void;
  setUserWallets: (userWallets: UserWallet[]) => void;
};

export const useUserStore = create<UserState>()(
  persist(
    devtools((set) => ({
      user: null,
      userWallets: [],
      loading: false,
      error: null,
      setLoading: (loading: boolean) => set({ loading }),
      setError: (error: ApolloError | null) => set({ error }),
      setUser: (user: User | null) => set({ user }),
      setUserWallets: (userWallets: UserWallet[]) => set({ userWallets }),
    })),
    {
      name: 'safetrust-user',
    }
  )
);
