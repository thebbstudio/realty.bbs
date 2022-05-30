import React, { useEffect } from 'react';
import { useLocation, Navigate, useNavigate } from 'react-router-dom';
import useAuth from '../hook/useAuth';
import HttpAuth from '../http/HttpAuth';

const RequiredAuth = ({ children }: any) => {
  const location = useLocation();
  const navigate = useNavigate();
  const user = useAuth();

  async function checkToken() {
    const response = await HttpAuth.checkToken();
    // console.log(response.data);

    if (response.status === 403) {
      navigate('/auth');
    }
  }
  useEffect(() => {
    checkToken();
  }, []);

  if (user?.user.token === null) {
    return <Navigate to="/auth" state={{ from: location }} />;
  }

  return children;
};

export default RequiredAuth;
