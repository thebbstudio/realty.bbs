import React from 'react';
import { Container } from 'react-bootstrap';
import FormRealty from './FormRealty';
import Header from './Header';

const HomePage = () => (
  <>
    <Header />
    <main>
      <Container style={{ maxWidth: '600px' }}>
        <FormRealty />
      </Container>
    </main>
  </>
);

export default HomePage;
