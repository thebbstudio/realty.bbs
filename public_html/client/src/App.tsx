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

const App = () => (
  // <AuthProvider>
  //   <Routes>
  //     <Route path="/auth" element={<AuthPage />} />
  //     <Route
  //       path="/"
  //       element={(
  //         <RequiredAuth>
  //           <Routes>
  //             <Route path="/" element={<HomePage />}>
  //               <Route path="form" element={<FormRealty />} />
  //               <Route path="table" element={<TableRealty />} />
  //             </Route>
  //           </Routes>
  //         </RequiredAuth>
  //     )}
  //     />
  //     <Route path="*" element={<ErrorPage />} />
  //   </Routes>
  // </AuthProvider>
  <AuthProvider>
    <Routes>
      <Route path="/auth" element={<AuthPage />} />
      <Route
        path="/"
        element={<RequiredAuth />}
      >
        <Route path="/" element={<HomePage />}>
          <Route path="form" element={<FormRealty />} />
          <Route path="table" element={<TableRealty />} />
        </Route>
      </Route>
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  </AuthProvider>
);

export default App;
