import React from 'react';
import { Col } from 'react-bootstrap';
import Flat from '../models/Flat';

interface IProps {
  realty: Flat
}

const FlatParams = ({ realty }: IProps) => (
  <>
    <Col>
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
      <p>
        Планировка:
        {' '}
        {realty?.layout.value}
      </p>
      <p>
        Высота потолка:
        {' '}
        {realty?.heightCeiling.value}
      </p>
      <p>
        Планировка:
        {' '}
        {realty?.layout.value}
      </p>
      <p>
        Площадь общая:
        {' '}
        {realty?.areaTotal.value}
        м2
      </p>
      <p>
        Площадь жилая:
        {' '}
        {realty?.areaLiving.value}
        м2
      </p>
      <p>
        Площадь комнат:
        {' '}
        {realty?.areaRooms.value}
        м2
      </p>
      <p>
        Площать кухни:
        {' '}
        {realty?.areaKitchen.value}
        м2
      </p>
      <p>
        Этаж:
        {' '}
        {realty?.floor.value}
        /
        {realty?.maxFloor.value}
      </p>
      <p>
        Лифт:
        {' '}
        {realty?.elevator.value}
      </p>
    </Col>
    <Col>
      <p>
        Год постройки / Капитальный ремонт:
        {' '}
        {realty?.yearConstruction.value}
        /
        {realty.majorRepairs.value}
      </p>
      <p>
        Новый дом:
        {' '}
        {realty?.isNewHouse.value}
      </p>
      <p>
        Вид из окон:
        {' '}
        {realty?.viewWindows.value}
      </p>
      <p>
        Ремонт:
        {' '}
        {realty?.repair.value}
      </p>
      <p>
        Балкон / лоджия:
        {' '}
        {realty?.balcony.value}
      </p>
      <p>
        Ванна:
        {' '}
        {realty?.bath.value}
      </p>
      <p>
        Санузел:
        {' '}
        {realty?.bathroom.value}
      </p>
      <p>
        Водоснабжение:
        {' '}
        {realty?.waterSupply.value}
      </p>
      <p>
        Отопление:
        {' '}
        {realty?.heating.value}
      </p>
      <p>
        Мебель:
        {' '}
        {realty?.furniture.value}
      </p>
    </Col>
  </>
);

export default FlatParams;
