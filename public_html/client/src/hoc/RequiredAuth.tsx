import React, { useEffect } from 'react';
import { useLocation, Navigate, Outlet } from 'react-router-dom';
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
    return <Outlet />;
  }

  useEffect(() => {
    checkToken();
  }, [location.pathname]);

  if (user?.user.token === null) {
    return <Navigate to="/auth" state={{ from: location }} />;
  }

  return <Outlet />;
};

export default RequiredAuth;
