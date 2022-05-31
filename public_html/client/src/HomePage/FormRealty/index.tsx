import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
// steps
import LocationStep from './LocationStep';
import OwnerStep from './OwnerStep';
import FlatParamsRealtyStep from './FlatParamsRealtyStep';
import TypeRealtyStep from './TypeRealtyStep';
// http
import HttpFormRequest from '../../http/HttpFormRequest';
import ButtonsBackNext from './ButtonsBackNext';
import RoomParamsRealtyStep from './RoomParamsRealtyStep';
import HouseParamsRealtyStep from './HouseParamsRealtyStep';

const FormRealty = () => {
  const [typeRealty, setTypeRealty] = useState('');
  const [stepForm, setStepForm] = useState(1);
  const { handleSubmit, control } = useForm<FormData>();

  async function sendForm(data: object) {
    const response = await HttpFormRequest.send(data);
    return response;
  }

  function renderStep(_stepForm: number) {
    if (_stepForm === 1) {
      return <TypeRealtyStep setStepForm={setStepForm} setTypeRealty={setTypeRealty} />;
    }
    if (_stepForm === 2) {
      if (typeRealty === 'Квартира') {
        return <FlatParamsRealtyStep control={control} />;
      }
      if (typeRealty === 'Комната') {
        return <RoomParamsRealtyStep control={control} />;
      }
      if (typeRealty === 'Дом') {
        return <HouseParamsRealtyStep control={control} />;
      }
    }
    if (_stepForm === 3) {
      return <OwnerStep control={control} />;
    }
    if (_stepForm === 4) {
      return <LocationStep control={control} />;
    }
    return 'error';
  }

  function onSubmit(data: object) {
    const request = {
      token: localStorage.getItem('token'),
      userId: localStorage.getItem('userId'),
      typeRealty,
      ...data,
    };
    console.log('форма отправилась');
    const response = sendForm(request);

    return response;
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <h2>{`Шаг ${stepForm} из 4`}</h2>
      </div>
      <hr />
      <ButtonsBackNext
        stepForm={stepForm}
        setStepForm={setStepForm}
        typeRealty={typeRealty}
        setTypeRealty={setTypeRealty}
      />
      {renderStep(stepForm)}
      <ButtonsBackNext
        stepForm={stepForm}
        setStepForm={setStepForm}
        typeRealty={typeRealty}
        setTypeRealty={setTypeRealty}
      />
    </Form>
  );
};

export default FormRealty;
