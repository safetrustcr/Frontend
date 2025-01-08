import { createContext, useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useApolloClient, useQuery } from '@apollo/client';
import { GET_USER } from '@/graphql/queries/getUser.graphql';
import { User, useUserStore } from '@/store/userStore/user';
import { toast } from 'react-toastify';

const AuthContext = createContext<{
  user: User | null;
  loading: boolean;
}>({
  user: null,
  loading: true,
});

export const AuthProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const [loading, setLoading] = useState(true);
  const client = useApolloClient();
  const {
    setUser: setStoreUser,
    setUserWallets,
    setLoading: setStoreLoading,
    user
  } = useUserStore();

  const {
    data,
    loading: queryLoading,
    error: queryError,
  } = useQuery(GET_USER, {
    variables: { id: user?.id },
    skip: !user?.id,
  });

  useEffect(() => {
    if (data?.users?.[0]) {
      const { id,  first_name, last_name, summary, phone_number, country_code, location, email, profile_image_url } = data?.users?.[0]
      const user: User = { id,  first_name, last_name, summary, phone_number, country_code, location, email, profile_image_url, created_at: new Date(), updated_at: new Date() }
      setStoreUser(user);
      setUserWallets(data.user_wallets || []);
    }
    setStoreLoading(queryLoading);
    if (queryError) {
      toast.error(queryError.message);
    }
  }, [
    data,
    queryLoading,
    queryError,
    setStoreUser,
    setUserWallets,
    setStoreLoading,
  ]);

  useEffect(() => {
    const auth = getAuth();
    return onAuthStateChanged(auth, async (user) => {
      setLoading(false);
      if (!user) {
        // await client.resetStore();
        // setStoreUser(defaultUser);
        // setUserWallets([]);
      }
    });
  }, [client, setStoreUser, setUserWallets]);

  return (
    <AuthContext.Provider value={{ user, loading }}>
      {children}
    </AuthContext.Provider>
  );
};
