import React, { useState } from 'react';
import {
  Button, Col, Form, Row,
} from 'react-bootstrap';
import { useForm } from 'react-hook-form';
// steps
import LocationStep from './LocationStep';
import OwnerStep from './OwnerStep';
import ParamsRealtyStep from './ParamsRealtyStep';
import TypeRealtyStep from './TypeRealtyStep';
// http
import HttpFormRequest from '../../http/HttpFormRequest';

const FormRealty = () => {
  const [typeRealty, setTypeRealty] = useState({});
  const [stepForm, setStepForm] = useState(1);
  const { handleSubmit, control } = useForm<FormData>();

  async function sendForm(data: object) {
    const response = await HttpFormRequest.send(data);
    return response;
  }

  function changeStep(command: string, step: number, setStep: any) {
    if (command === 'next' && step < 4) {
      setStep((prev: number) => prev + 1);
    }

    if (command === 'back' && step > 1) {
      setStep((prev: number) => prev - 1);
    }
  }

  function renderStep(_stepForm: number) {
    if (_stepForm === 1) {
      return <TypeRealtyStep setStepForm={setStepForm} setTypeRealty={setTypeRealty} />;
    }
    if (_stepForm === 2) {
      return <ParamsRealtyStep setStepForm={setStepForm} control={control} />;
    }
    if (_stepForm === 3) {
      return <OwnerStep setStepForm={setStepForm} control={control} />;
    }
    if (_stepForm === 4) {
      return <LocationStep setStepForm={setStepForm} control={control} />;
    }
    return 'error';
  }

  function onSubmit(data: object) {
    const request = {
      token: localStorage.getItem('token'),
      ...data,
      ...typeRealty,
    };
    console.log(request);
    const response = sendForm(request);

    return response;
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <h2>{`Шаг ${stepForm} из 4`}</h2>
      </div>
      <hr />
      {renderStep(stepForm)}
      <Row>
        <Col className="d-flex justify-content-center">
          <Button
            type="button"
            variant="outline-primary"
            onClick={() => changeStep('back', stepForm, setStepForm)}
          >
            Назад
          </Button>
        </Col>
        <Col className="d-flex justify-content-center">

          {stepForm !== 4 ? (
            <Button
              type="button"
              variant="outline-primary"
              onClick={() => changeStep('next', stepForm, setStepForm)}
            >
              Вперед
            </Button>
          ) : (
            <Button
              type="submit"
              variant="success"
            >
              Отправить
            </Button>
          )}
        </Col>

      </Row>
    </Form>
  );
};

export default FormRealty;
