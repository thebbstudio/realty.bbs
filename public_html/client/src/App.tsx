import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import ErrorPage from './ErrorPage';

const App = () => (
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/form" element={<HomePage />} />
    <Route path="/table" element={<HomePage />} />

    <Route path="*" element={<ErrorPage />} />
  </Routes>
);

export default App;
