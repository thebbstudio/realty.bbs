import React from 'react';
import { useLocation, Navigate } from 'react-router-dom';
import useAuth from '../hook/useAuth';

const RequiredAuth = ({ children }: any) => {
  const location = useLocation();
  const user = useAuth();

  if (!user) {
    return <Navigate to="/auth" state={{ from: location }} />;
  }
  return (
    children
  );
};

export default RequiredAuth;
