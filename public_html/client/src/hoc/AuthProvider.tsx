import React, { createContext, useMemo, useState } from 'react';

export const AuthContext = createContext(null);

const AuthProvider = ({ children }: any) => {
  const [user, setUser] = useState(null);

  function signIn(newUser: any, callback: any) {
    setUser(newUser);
    callback();
  }
  function signOut(newUser: any, callback: any) {
    setUser(null);
    callback();
  }

  const value = useMemo(() => ({ user, signIn, signOut }), []);

  return (
    <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
