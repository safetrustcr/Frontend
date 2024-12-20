import { createContext, useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged, User } from 'firebase/auth';
import { useApolloClient, useQuery } from '@apollo/client';
import { GET_USER } from '@/graphql/queries/getUser.graphql';
import { useUserStore } from '@/store/userStore/user';
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
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const client = useApolloClient();
  const {
    setUser: setStoreUser,
    setUserWallets,
    setLoading: setStoreLoading,
  } = useUserStore();

  const {
    data,
    loading: queryLoading,
    error: queryError,
  } = useQuery(GET_USER, {
    variables: { id: user?.uid },
    skip: !user?.uid,
  });

  useEffect(() => {
    if (data?.users?.[0]) {
      setStoreUser(data.users[0]);
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
      setUser(user);
      setLoading(false);
      if (!user) {
        await client.resetStore();
        setStoreUser(null);
        setUserWallets([]);
      }
    });
  }, [client, setStoreUser, setUserWallets]);

  return (
    <AuthContext.Provider value={{ user, loading }}>
      {children}
    </AuthContext.Provider>
  );
};
