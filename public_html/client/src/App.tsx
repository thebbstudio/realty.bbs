import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import ErrorPage from './ErrorPage';
import './css/style.css';
import AuthPage from './AuthPage';
import RequiredAuth from './hoc/RequiredAuth';
import AuthProvider from './hoc/AuthProvider';

const App = () => (
  <AuthProvider>
    <Routes>
      <Route path="/auth" element={<AuthPage />} />
      <Route
        path="/"
        element={(
          <RequiredAuth>
            <Routes>
              <Route index element={<HomePage />} />
              {/* <Route path="form" element={<HomePage />} />
              <Route path="table" element={<HomePage />} /> */}
              <Route path="*" element={<ErrorPage />} />
            </Routes>
          </RequiredAuth>
      )}
      />
    </Routes>
  </AuthProvider>
);

export default App;
