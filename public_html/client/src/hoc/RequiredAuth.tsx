import React from 'react';
import { useLocation, Navigate } from 'react-router-dom';
import useAuth from '../hook/useAuth';
import HttpAuth from '../http/HttpAuth';

const RequiredAuth = ({ children }: any) => {
  const location = useLocation();
  const user = useAuth();

  async function checkToken() {
    const http = await HttpAuth.checkToken();
    if (http !== null && http.status === 200) {
      user?.signIn({
        token: localStorage.getItem('token'),
        userId: localStorage.getItem('userId'),
      }, () => {
        console.log('пользователь найден');
      });
    }
    if (http === null) {
      user?.signOut(() => {
        console.log('пользователь не найден');
      });
    }
  }

  checkToken();

  if (user?.user === null) return <Navigate to="/auth" state={{ from: location }} />;

  return children;
};

export default RequiredAuth;
