import React from 'react';
import { Button, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import FormRealty from './FormRealty';

export const model = [
  {
    typeField: 'inputText',
    type: 'text',
    label: 'ФИО собственника',
    name: 'fullNameOwner',
    placeholder: 'Фамилия Имя Отчество',
    required: '1',
  },
  {
    typeField: 'inputText',
    type: 'tel',
    label: 'Телефон',
    name: 'telOwner',
    placeholder: 'Введите номер телефона',
    required: '1',
  },
  {
    typeField: 'inputText',
    type: 'email',
    label: 'Электронная почта',
    name: 'emailOwner',
    placeholder: 'Введите ваш email',
    required: '1',
  },
  {
    typeField: 'select',
    label: 'Источник',
    name: 'sourceOwner',
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
    <header
      className="
        d-flex
        flex-wrap
        align-items-center
        justify-content-center
        justify-content-md-between
        p-3
        mb-4
        border-bottom
        shadow-sm
      "
    >
      <Link
        to="/"
        className="
            d-flex
            align-items-center
            col-md-3
            mb-2
            mb-md-0
            text-dark
            text-decoration-none
          "
      >
        Realty BBS
      </Link>

      <nav className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
        <li>
          <Link to="/form" className="nav-link px-2 link-dark">Форма</Link>
        </li>
        <li>
          <Link to="/table" className="nav-link px-2 link-dark">Таблица</Link>
        </li>
      </nav>

      <div className="col-md-3 text-end">
        <Button type="button" variant="outline-primary" className="me-2">Сотрудники</Button>
        <Button type="button" variant="outline-danger">Выход</Button>
      </div>
    </header>

    <main>
      <div className="container" style={{ maxWidth: '600px' }}>
        <FormRealty />
      </div>
    </main>
  </>
);

export default HomePage;
