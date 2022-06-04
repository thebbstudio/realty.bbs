import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import ErrorPage from './ErrorPage';
import './css/style.css';
import AuthPage from './AuthPage';
import RequiredAuth from './hoc/RequiredAuth';
import AuthProvider from './hoc/AuthProvider';
import FormRealty from './HomePage/FormRealty';
import TableRealty from './HomePage/TableRealty';
import RealtyIdPage from './RealtyIdPage';
import RealtyProvider from './hoc/RealtyProvider';
import EditRealty from './RealtyIdPage/EditRealty';
import RealtyIdView from './RealtyIdPage/RealtyIdView';

const App = () => (
  <AuthProvider>
    <Routes>
      <Route path="/auth" element={<AuthPage />} />
      <Route path="/" element={<RequiredAuth />}>
        <Route path="/" element={<HomePage />}>
          <Route path="form" element={<FormRealty />} />
          <Route
            path="table/*"
            element={(
              <RealtyProvider>
                <Routes>
                  <Route index element={<TableRealty />} />
                  <Route path="realty" element={<RealtyIdPage />}>
                    <Route path=":realtyId" element={<RealtyIdView />} />
                    <Route path=":realtyId/edit" element={<EditRealty />} />
                  </Route>
                  <Route path="*" element={<ErrorPage />} />
                </Routes>
              </RealtyProvider>
          )}
          />
        </Route>
      </Route>
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  </AuthProvider>
);

export default App;
