/* eslint-disable react/no-array-index-key */
import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import HttpTable from '../../http/HttpTable';
import Flat from '../../models/Flat';
import Cell from './Cell';
// import Realty from '../../models/Realty';

// TODO:
//  - Нормальные названия колонок
//  - Показать/скрыть столбцы
//
//
//
//
//

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
  const [data, setData] = useState<Flat[]>();

  async function getData() {
    const response = await HttpTable.getData();
    // console.log(response.data);
    const arrObjs: Flat[] = [];
    response.data.forEach((obj: IResponseData) => {
      const realty = new Flat(obj.id, obj.data);
      arrObjs.push(realty);
    });
    console.log(arrObjs);
    console.log(response.data);

    setData(arrObjs);
  }

  // console.log(data);

  useEffect(() => {
    getData();
    // console.log(data);
  }, []);

  return (
    <>
      <div>
        <h3>Таблица</h3>
      </div>
      {data !== undefined ? (
        <div className="overflow-scroll">
          <Table hover bordered size="sm">
            {/* {data[0]?.data.map((row) => <col className={row.name} key={row.id} />)} */}
            <thead className="table-light">
              <tr>
                <th className="text-nowrap px-3 py-2 text-center">ID</th>
                <th className="text-nowrap px-3 py-2 text-center">Ответственный</th>
                <th className="text-nowrap px-3 py-2 text-center">{data[0].typeRealty.label}</th>
                <th className="text-nowrap px-3 py-2 text-center">Контакты</th>
                <th className="text-nowrap px-3 py-2 text-center">{data[0].location.label}</th>
                <th className="text-nowrap px-3 py-2 text-center">{data[0].populationCenter.label}</th>
                <th className="text-nowrap px-3 py-2 text-center">{data[0].district.label}</th>
                <th className="text-nowrap px-3 py-2 text-center">Адрес</th>
                <th className="text-nowrap px-3 py-2 text-center">{data[0].metro.label}</th>
                <th className="text-nowrap px-3 py-2 text-center">{data[0].toMetro.label}</th>

              </tr>
            </thead>
            <tbody>

              {data?.map((realty, index) => (
                <tr key={index}>
                  <Cell className="text-nowrap px-3 py-2 text-center" key={realty.realtyId + index}>
                    {realty.realtyId}
                  </Cell>

                  <Cell className="text-nowrap px-3 py-2 text-center" key={index}>
                    {index}
                  </Cell>

                  <Cell className="text-nowrap px-3 py-2 text-center" key={realty.typeRealty.id}>
                    {realty.typeRealty.value}
                  </Cell>
                  {/* FIXME: исправить потом и сделать как надо (модульное окно с данными) */}
                  <Cell className="text-nowrap px-3 py-2 text-center" key={realty.ownerEmail.id}>
                    {realty.ownerEmail.value}
                  </Cell>

                  <Cell className="text-nowrap px-3 py-2 text-center" key={realty.location.id}>
                    {realty.location.value}
                  </Cell>

                  <Cell className="text-nowrap px-3 py-2 text-center" key={realty.populationCenter.id}>
                    {realty.populationCenter.value}
                  </Cell>

                  <Cell className="text-nowrap px-3 py-2 text-center" key={realty.district.id}>
                    {realty.district.value}
                  </Cell>

                  <Cell className="text-nowrap px-3 py-2 text-center" key={realty.street.id}>
                    {`ул. ${realty.street.value}, д. ${realty.numberHouse.value}, кв ${realty.numberApartment.value}`}
                  </Cell>

                  <Cell className="text-nowrap px-3 py-2 text-center" key={realty.metro.id}>
                    {realty.metro.value}
                  </Cell>

                  <Cell className="text-nowrap px-3 py-2 text-center" key={realty.toMetro.id}>
                    {`${realty.toMetro.value} ${realty.valueToMetro.value}`}
                  </Cell>

                </tr>
              ))}

            </tbody>
          </Table>
        </div>
      ) : ''}
    </>
  );
};

export default TableRealty;
