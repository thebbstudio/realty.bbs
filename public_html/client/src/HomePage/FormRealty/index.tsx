import React, { useState } from 'react';
import {
  Button, Col, Form, Row,
} from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import OwnerStep from './OwnerStep';
import ParamsRealtyStep from './ParamsRealtyStep';
import TypeRealtyStep from './TypeRealtyStep';

// Смысовые части:
//  Собственник
//  Договор
//  Расположение
//  Параметры
//  Описание
//  Финансы
//  Статус
//  Загрузка фото

const FormRealty = () => {
  const [realty, setRealty] = useState({});
  const { register, handleSubmit, control } = useForm();

  function onSubmit(data: object) {
    setRealty((prev) => ({
      ...prev,
      ...data,
    }));
    console.log(realty);
  }
  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <TypeRealtyStep setType={setRealty} />
      <OwnerStep control={control} />
      <ParamsRealtyStep control={control} />
      <Row>
        <Col className="d-flex justify-content-center">
          <Button type="submit">Создать</Button>
        </Col>
        <Col className="d-flex justify-content-center">
          <Button type="reset" className="btn-danger">Очистить</Button>
        </Col>
      </Row>
    </Form>
  );
};

export default FormRealty;
