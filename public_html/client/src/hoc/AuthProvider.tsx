import React, { createContext, useMemo, useState } from 'react';

interface IUser {
  token: string | null,
  userId: string | null
}

interface IAuthContext {
  user: IUser,
  signIn: (newUser: IUser, callback: any) => void,
  signOut: (callback: any) => void
}

export const AuthContext = createContext<IAuthContext | null>(null);

interface IProps {
  children: React.ReactNode
}

const AuthProvider = ({ children }: IProps) => {
  const [user, setUser] = useState<IUser>({
    token: localStorage.getItem('token'),
    userId: localStorage.getItem('userId'),
  });

  function signIn(newUser: IUser, callback: any) {
    setUser(newUser);
    callback();
  }
  function signOut(callback: any) {
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    setUser({
      token: localStorage.getItem('token'),
      userId: localStorage.getItem('userId'),
    });
    callback();
  }

  const value = useMemo(() => ({ user, signIn, signOut }), [user]);

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
