import React from 'react';
import { Container } from 'react-bootstrap';
import FormRealty from './FormRealty';
import Header from './Header';

export const model = [
  {
    typeField: 'inputText',
    type: 'text',
    label: 'ФИО',
    name: 'fullNameOwner',
    value: 'ыыы',
    placeholder: 'Фамилия имя отчество собственника',
    required: '1',
  },
  {
    typeField: 'inputText',
    type: 'tel',
    label: 'Телефон',
    name: 'telOwner',
    value: '',
    placeholder: 'Введите номер телефона собственника',
    required: '1',
  },
  {
    typeField: 'inputText',
    type: 'email',
    label: 'Электронная почта',
    name: 'emailOwner',
    value: '',
    placeholder: 'Введите email собственника',
    required: '1',
  },
  {
    typeField: 'select',
    label: 'Источник',
    name: 'sourceOwner',
    value: '',
    options: [
      { value: 'Авито', label: 'Авито' },
      { value: 'ЦИАН', label: 'ЦИАН' },
      { value: 'Яндекс.Недвижимость', label: 'Яндекс.Недвижимость' },
    ],
    required: '1',
  },
];

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
