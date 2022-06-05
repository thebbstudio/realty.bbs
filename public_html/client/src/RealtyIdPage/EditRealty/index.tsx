import React, { useContext } from 'react';
import {
  Container, Button, Row, Col, Form,
} from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import InputGroupTextLeft from '../../components/InputGroupTextLeft';
import InputText from '../../components/InputText';
import Select from '../../components/Select';
import { RealtyContext } from '../../hoc/RealtyProvider';
import FlatParamsEdit from './FlatParamsEdit';
import HouseParamsEdit from './HouseParamsEdit';
import RoomParamsEdit from './RoomParamsEdit';

const EditRealty = () => {
  const params = useParams();
  const context = useContext(RealtyContext);
  const realty = context?.realty;
  const { control, handleSubmit } = useForm<FormData>();

  console.log(context?.realty);

  function renderRealtyParams(typeRealty: string | undefined) {
    if (typeRealty === 'Квартира') {
      return <FlatParamsEdit realty={realty} control={control} />;
    }
    if (typeRealty === 'Комната') {
      return <RoomParamsEdit realty={realty} control={control} />;
    }
    if (typeRealty === 'Дом') {
      return <HouseParamsEdit realty={realty} control={control} />;
    }
    return '';
  }

  function onSubmit(data: any) {
    const request = {
      token: localStorage.getItem('token'),
      userId: localStorage.getItem('userId'),
      typeRealty: realty?.typeRealty.value,
      ...data,
    };
    console.log(request);
    console.log('форма отправилась');
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <div className="d-flex flex-row justify-content-start align-items-center mb-3">
          <h1>
            Редактировать объекте №
            {params.realtyId}

          </h1>
          <div className="ms-3">
            <Button type="button" variant="outline-danger">Отменить редактирование</Button>
          </div>
        </div>
        <Row className="mb-3">
          <Col>
            <h5>Контактные данные</h5>
            <InputText
              type="text"
              label="ФИО собственника"
              name="fullNameOwner"
              placeholder="Введите фио собственника"
              value={realty?.ownerFullName.value}
              required
              control={control}
            />
            <InputText
              type="tel"
              label="Телефон собственника"
              name="phoneOwner"
              placeholder="Введите телефон собственника"
              value={realty?.ownerPhone.value}
              required
              control={control}
            />
            <InputText
              type="email"
              label="Электронная почта собственника"
              name="emailOwner"
              placeholder="Введите email собственника"
              value={realty?.ownerEmail.value}
              control={control}
            />
          </Col>
          <Col>
            <h5>Расположение</h5>
            <InputText
              type="text"
              label="Расположение"
              name="location"
              value="Свердловская область"
              required
              control={control}
              readOnly
            />
            <InputText
              type="text"
              label="Населенный пункт"
              name="populationCenter"
              placeholder="Введите название населенного пункта"
              value={realty?.populationCenter.value}
              required
              control={control}
            />
            <InputText
              type="text"
              label="Район"
              name="district"
              placeholder="Введите название района"
              value={realty?.district.value}
              control={control}
            />
            <Row>
              <Col>
                <InputGroupTextLeft
                  type="text"
                  label="Улица"
                  name="street"
                  placeholder="Введите название улицы"
                  value={realty?.street.value}
                  required
                  control={control}
                  text="ул."
                />
              </Col>
              <Col>
                <InputGroupTextLeft
                  type="text"
                  label="Дом"
                  name="numberHouse"
                  placeholder="Введите номер дома"
                  value={realty?.numberHouse.value}
                  required
                  control={control}
                  text="№"
                />
              </Col>
            </Row>
            <Row>
              <Col>
                <InputText
                  type="text"
                  label="Корпус"
                  name="numberCase"
                  placeholder="Введите название корпуса"
                  value={realty?.numberCase.value}
                  control={control}
                />
              </Col>
              <Col>
                <InputText
                  type="text"
                  label="Квартира"
                  name="numberApartment"
                  placeholder="Введите номер квартиры"
                  value={realty?.numberApartment.value}
                  control={control}
                />
              </Col>
            </Row>
            <Row>
              <Col xs={6}>
                <InputText
                  type="text"
                  label="Метро"
                  name="metro"
                  placeholder="Введите название метро"
                  value={realty?.metro.value}
                  control={control}
                />
              </Col>

              <Col>
                <InputText
                  type="text"
                  label="До метро"
                  name="toMetro"
                  placeholder="Введите число"
                  value={realty?.toMetro.value}
                  control={control}
                />
              </Col>
              <Col>
                <Select
                  label="Величина"
                  name="valueToMetro"
                  value={realty?.valueToMetro.value}
                  options={[
                    { value: 'Минут пешком', label: 'Минут пешком' },
                    { value: 'Минут транспортом', label: 'Минут транспортом' },
                    { value: 'Остановок', label: 'Остановок' },
                    { value: 'Часов транспортом', label: 'Часов транспортом' },
                    { value: 'Километров', label: 'Километров' },
                  ]}
                  control={control}
                />
              </Col>
            </Row>
          </Col>
        </Row>
        <hr />
        <div className="mb-3">
          <h5>Параметры</h5>
        </div>
        <Row className="mb-3">
          {renderRealtyParams(context?.realty?.typeRealty.value)}
        </Row>
        <Row className="mb-5">
          <Col className="d-flex justify-content-center">
            <Button type="submit" variant="success">Сохранить изменения</Button>
          </Col>
        </Row>
      </Form>
    </Container>
  );
};

export default EditRealty;
