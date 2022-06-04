import React, { useContext, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { RealtyContext } from '../hoc/RealtyProvider';
import Flat from '../models/Flat';
import House from '../models/House';
import Room from '../models/Room';
import FlatParams from './FlatParams';
import HouseParams from './HouseParams';
import RoomParams from './RoomParams';

const RealtyIdPage = () => {
  const params = useParams();
  const context = useContext(RealtyContext);
  const [realty] = useState<Flat | Room | House | undefined>(context?.realty);

  console.log(realty);

  function renderRealtyParams(someRealty: Flat | Room | House | undefined) {
    if (someRealty?.typeRealty.value === 'Квартира') {
      const obj: Flat = JSON.parse(JSON.stringify(someRealty));
      return <FlatParams realty={obj} />;
    }
    if (someRealty?.typeRealty.value === 'Комната') {
      const obj: Room = JSON.parse(JSON.stringify(someRealty));
      return <RoomParams realty={obj} />;
    }
    if (someRealty?.typeRealty.value === 'Дом') {
      const obj: House = JSON.parse(JSON.stringify(someRealty));
      return <HouseParams realty={obj} />;
    }
    return '';
  }

  return (
    <Container>
      <>
        <div className="mb-3">
          <h1>
            Данные об объекте №
            {realty?.realtyId}
          </h1>
        </div>
        <Row className="mb-3">
          <Col>
            <h5>Контактные данные</h5>
            <p>{realty?.ownerFullName.value}</p>
            <p>{realty?.ownerPhone.value}</p>
            <p>{realty?.ownerEmail.value}</p>
          </Col>
          <Col>
            <h5>Расположение</h5>
            <p>{`${realty?.location.value}, ${realty?.populationCenter.value}`}</p>
            {/* <p>{realty?.district.value}</p> */}
            <p>{`ул ${realty?.street.value}, д ${realty?.numberHouse.value}, кв ${realty?.numberApartment.value}`}</p>
          </Col>
        </Row>
        <div className="mb-3">
          <h5>Параметры</h5>
        </div>
        <Row className="mb-3">
          {renderRealtyParams(realty)}
        </Row>
      </>
    </Container>
  );
};

export default RealtyIdPage;
