import React, { useContext, useEffect, useState } from 'react';
import {
  Button, Col, Container, Row,
} from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import { RealtyContext } from '../hoc/RealtyProvider';
import { Data } from '../HomePage/TableRealty';
import HttpRealtyData from '../http/HttpRealtyData';
import Flat from '../models/Flat';
import House from '../models/House';
import Room from '../models/Room';
import FlatParams from './FlatParams';
import HouseParams from './HouseParams';
import RoomParams from './RoomParams';

const RealtyIdView = () => {
  const context = useContext(RealtyContext);
  const params = useParams();
  const navigate = useNavigate();

  const [realty, setRealty] = useState<Flat | Room | House | undefined>();

  async function initialState() {
    if (context?.realty === undefined) {
      const response = await HttpRealtyData.getOne(params?.realtyId);

      const typeRealty: Data[] = response.data.filter((el: Data) => el.name === 'typeRealty');
      if (typeRealty[0].value === 'Квартира') {
        const obj = new Flat(response.data.realtyId, response.data);
        setRealty(obj);
        context?.setRealty(obj);
      } else if (typeRealty[0].value === 'Комната') {
        const obj = new Room(response.data.realtyId, response.data);
        setRealty(obj);
        context?.setRealty(obj);
      } else if (typeRealty[0].value === 'Дом') {
        const obj = new House(response.data.realtyId, response.data);
        setRealty(obj);
        context?.setRealty(obj);
      }
    } else if (context?.realty) {
      setRealty(context?.realty);
    }
  }

  const deleteRealty = async () => {
    await HttpRealtyData.delete(params?.realtyId);
    navigate('/table');
  };

  useEffect(() => {
    initialState();
  }, []);

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
        <div className="d-flex flex-row justify-content-start align-items-center mb-3">
          <h1>
            Данные об объекте №
            {params.realtyId}

          </h1>
          <div className="ms-3">
            <Button
              type="button"
              variant="outline-secondary"
              onClick={() => navigate(`/table/realty/${params.realtyId}/edit`)}
            >
              Редактировать

            </Button>
          </div>
          <div className="ms-3">
            <Button
              type="button"
              variant="outline-danger"
              onClick={deleteRealty}
            >
              Удалить объект

            </Button>
          </div>
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
          {realty ? renderRealtyParams(realty) : ''}
        </Row>
      </>
    </Container>
  );
};

export default RealtyIdView;
