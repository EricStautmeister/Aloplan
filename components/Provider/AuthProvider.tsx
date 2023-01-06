import { useEffect, useState } from 'react';
import { AuthContext } from '../Context/AuthContext';
// import firebase from 'firebase/app';
import { auth } from '../../firebase';

interface AuthProviderProps {
  children: React.ReactNode;
}

export const AuthProvider: React.FC<any> = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<any | null>(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((firebaseUser: any) => {
      setUser(firebaseUser);
    });

    return unsubscribe;
  }, []);

  return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;
};
