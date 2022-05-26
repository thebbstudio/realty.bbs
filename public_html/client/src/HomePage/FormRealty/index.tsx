import React from 'react';
import {
  Button, Col, Form, Row,
} from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import OwnerStep from './OwnerStep';

const FormRealty = () => {
  const { register, handleSubmit, control } = useForm();
  function onSubmit(data: any) {
    console.log(data);
  }
  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <OwnerStep register={register} control={control} />
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
