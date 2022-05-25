import React from 'react';
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
  <div className="container">
    <FormRealty />
  </div>
);

export default HomePage;
