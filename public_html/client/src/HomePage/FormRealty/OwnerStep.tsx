import React from 'react';
import {
  Form, Row, Col, Button,
} from 'react-bootstrap';
import InputText from '../../components/InputText';

const OwnerStep = ({ register, control }: any) => (

  <>
    <div className="mb-3 mt-5">
      <h3 className="d-flex justify-content-center">Данные о собственнике</h3>
    </div>

    <InputText
      type="text"
      label="ФИО собственника"
      name="fullNameOwner"
      placeholder="Введите фио собственника"
      value=""
      required
      control={control}
    />

    <InputText
      type="tel"
      label="Телефон собственника"
      name="telOwner"
      placeholder="Введите телефон собственника"
      value=""
      required
      control={control}

    />
    <InputText
      type="email"
      label="Электронная почта собственника"
      name="emailOwner"
      placeholder="Введите email собственника"
      value=""
      required
      control={control}

    />
  </>
);

export default OwnerStep;
