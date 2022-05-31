import React from 'react';
import { Container } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Header from './Header';

const HomePage = () => (
  <>
    <Header />
    <main>
      <Container fluid>
        <Outlet />
      </Container>
    </main>
  </>
);

export default HomePage;
