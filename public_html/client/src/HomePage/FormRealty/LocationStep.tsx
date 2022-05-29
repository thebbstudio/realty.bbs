import React from 'react';
import { Col, Row } from 'react-bootstrap';
import InputGroupTextLeft from '../../components/InputGroupTextLeft';
import InputGroupTextRight from '../../components/InputGroupTextRight';
import InputText from '../../components/InputText';
import Select from '../../components/Select';

const LocationStep = ({ control }: any) => (
  <>
    <div className="mb-3 mt-5">
      <h3 className="d-flex justify-content-center">Расположение:</h3>
    </div>
    <InputText
      type="text"
      label="Расположение"
      name="location"
      value="Свердловская область"
      required
      control={control}
      readOnly
      plaintext
    />
    <InputText
      type="text"
      label="Населенный пункт"
      name="populationCenter"
      placeholder="Введите название населенного пункта"
      value=""
      required
      control={control}
    />
    <InputText
      type="text"
      label="Район"
      name="district"
      placeholder="Введите название района"
      value=""
      control={control}
    />
    <Row>
      <Col>
        <InputGroupTextLeft
          type="text"
          label="Улица"
          name="street"
          placeholder="Введите название улицы"
          value=""
          required
          control={control}
          text="ул."
        />
      </Col>
      <Col>
        <InputGroupTextLeft
          type="text"
          label="Дом"
          name="house"
          placeholder="Введите номер дома"
          value=""
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
          name="caseNumber"
          placeholder="Введите название корпуса"
          value=""
          control={control}
        />
      </Col>
      <Col>
        <InputText
          type="text"
          label="Квартира"
          name="apartmentNumber"
          placeholder="Введите номер квартиры"
          value=""
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
          value=""
          control={control}
        />
      </Col>

      <Col>
        <InputText
          type="text"
          label="До метро"
          name="toMetro"
          placeholder="Введите число"
          value=""
          control={control}
        />
      </Col>
      <Col>
        <Select
          label="Величина"
          name="valueToMetro"
          value="Минут пешком"
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
  </>
);

export default LocationStep;
