import React, { createContext, useMemo, useState } from 'react';

interface IUser {
  login: string,
  password: string
}

interface IAuthContext {
  user: IUser | null,
  signIn: (newUser: IUser, callback: any) => void,
  signOut: (callback: any) => void
}

export const AuthContext = createContext<IAuthContext | null>(null);

const AuthProvider = ({ children }: any) => {
  const [user, setUser] = useState<IUser | null>(null);

  function signIn(newUser: IUser, callback: any) {
    setUser(newUser);
    callback();
  }
  function signOut(callback: any) {
    setUser(null);
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
