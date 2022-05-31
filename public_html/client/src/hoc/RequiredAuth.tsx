import React from 'react';
import { useLocation, Navigate } from 'react-router-dom';
import useAuth from '../hook/useAuth';
import HttpAuth from '../http/HttpAuth';

const RequiredAuth = ({ children }: any) => {
  const location = useLocation();
  const user = useAuth();

  async function checkToken() {
    const response = await HttpAuth.checkToken();
    if (!response) {
      return <Navigate to="/auth" state={{ from: location }} />;
    }
    return children;
  }

  checkToken();

  if (user?.user.token === null) {
    return <Navigate to="/auth" state={{ from: location }} />;
  }

  return children;
};

export default RequiredAuth;
