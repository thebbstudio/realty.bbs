import React from 'react';
import House from '../models/House';

interface IProps {
  realty: House
}

const HouseParams = ({ realty }: IProps) => (
  <>
    <h5>Параметры</h5>
    <p>
      Тип недвижимости:
      {' '}
      {realty?.typeRealty.value}
    </p>
    <p>
      Тип дома:
      {' '}
      {realty?.typeHouse.value}
    </p>
  </>
);

export default HouseParams;
