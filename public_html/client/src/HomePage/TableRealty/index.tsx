/* eslint-disable react/no-array-index-key */
import React, { useEffect, useState } from 'react';
import {
  Col, Container, Form, Row, Table,
} from 'react-bootstrap';
import HttpTable from '../../http/HttpTable';
import Flat from '../../models/Flat';
import House from '../../models/House';
import Room from '../../models/Room';
import Cell from './Cell';
import Thead from './Thead';

export type Data = {
  id: number,
  name: string,
  value: string
}

export interface IResponseData {
  data: Data[],
  userFullName: null,
  id: number

}

const TableRealty = () => {
  const [data, setData] = useState<Array<Flat | Room | House>>();
  const [selectRealty, setSelectRealty] = useState<string>('Квартиры');

  async function getData() {
    const response = await HttpTable.getData();
    const arrRealty: Array<Flat | Room | House> = [];

    if (selectRealty === 'Квартиры') {
      response.data.forEach((obj: IResponseData) => {
        const realty = new Flat(obj.id, obj.data);
        arrRealty.push(realty);
      });
    } else if (selectRealty === 'Комнаты') {
      response.data.forEach((obj: IResponseData) => {
        const realty = new Flat(obj.id, obj.data);
        arrRealty.push(realty);
      });
    } else if (selectRealty === 'Дома') {
      response.data.forEach((obj: IResponseData) => {
        const realty = new Flat(obj.id, obj.data);
        arrRealty.push(realty);
      });
    }
    setData(arrRealty);
  }

  useEffect(() => {
    getData();
  }, [selectRealty]);

  return (
    <Container>
      <div>
        <h3>Таблица</h3>
      </div>
      <div>
        <Row>
          <Col md={3}>
            <Form.Group className="mb-3">
              <Form.Label>Тип недвижимости:</Form.Label>
              <Form.Select value={selectRealty} onChange={(e) => setSelectRealty(e.target.value)}>
                <option value="Квартиры">Квартиры</option>
                <option value="Комнаты">Комнаты</option>
                <option value="Дома">Дома</option>
              </Form.Select>
            </Form.Group>
          </Col>
        </Row>

      </div>
      {data !== undefined ? (
        <div className="overflow-scroll">
          <Table hover bordered size="sm">
            {/* {data[0]?.data.map((row) => <col className={row.name} key={row.id} />)} */}
            <thead className="table-light">
              <tr>
                <Thead>ID</Thead>
                <Thead>Ответственный</Thead>
                <Thead>Тип недвижимости</Thead>
                <Thead>Тип дома</Thead>
                <Thead>Контакты</Thead>
                <Thead>Расположение</Thead>
                <Thead>Населенный пункт</Thead>
                <Thead>Район</Thead>
                <Thead>Адрес</Thead>
                <Thead>Этажей</Thead>
                <Thead>Метро</Thead>
                <Thead>До метро</Thead>
                <Thead>Цена, руб</Thead>
                <Thead>Фотографии</Thead>
                <Thead>Год постройки</Thead>
                <Thead>S. общ.</Thead>
                <Thead>S. кух.</Thead>
                <Thead>Ремонт</Thead>
              </tr>
            </thead>
            <tbody>
              {data?.map((realty, index) => (
                <tr key={index}>
                  {/* ID */}
                  <Cell>{realty.realtyId}</Cell>
                  {/* Ответственный */}
                  <Cell>{index}</Cell>
                  {/* Тип недвижимости */}
                  <Cell>{realty.typeRealty.value}</Cell>
                  {/* Тип дома */}
                  <Cell>{realty.typeHouse.value}</Cell>
                  {/* Контакты */}
                  {/* FIXME: исправить потом и сделать как надо (модульное окно с данными) */}
                  <Cell>{realty.ownerEmail.value}</Cell>
                  {/* Расположение */}
                  <Cell>{realty.location.value}</Cell>
                  {/* Населенный пункт */}
                  <Cell>{realty.populationCenter.value}</Cell>
                  {/* Район */}
                  <Cell>{realty.district.value}</Cell>
                  {/* Адрес */}
                  <Cell>
                    {`ул. ${realty.street.value}, д. ${realty.numberHouse.value}, кв ${realty.numberApartment.value}`}
                  </Cell>
                  {/* Этажей */}
                  <Cell>{realty.maxFloor.value}</Cell>
                  {/* Метро */}
                  <Cell>{realty.metro.value}</Cell>
                  {/* До метро */}
                  <Cell>
                    {`${realty.toMetro.value} ${realty.valueToMetro.value}`}
                  </Cell>
                  {/* Цена, руб */}
                  <Cell>{realty.costRub.value}</Cell>
                  {/* Фото */}
                  <Cell>{realty.photos.value}</Cell>
                  {/* Год постройки */}
                  <Cell>{realty.yearConstruction.value}</Cell>
                  {/* S. общ. */}
                  <Cell>{realty.areaTotal.value}</Cell>
                  {/* S. кух. */}
                  <Cell>{realty.areaKitchen.value}</Cell>
                  {/* Ремонт */}
                  <Cell>{realty.repair.value}</Cell>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      ) : ''}
    </Container>
  );
};

export default TableRealty;
