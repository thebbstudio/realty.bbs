import React from 'react';
import { Col } from 'react-bootstrap';
import House from '../models/House';

interface IProps {
  realty: House
}

const HouseParams = ({ realty }: IProps) => (
  <>
    <h5>Параметры</h5>
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
        Цена, руб:
        {' '}
        {realty?.costRub.value}
      </p>
      <p>
        Количество комнат:
        {' '}
        {realty?.rooms.value}
      </p>
      <p>
        Площадь общая:
        {' '}
        {realty?.areaTotal.value}
      </p>
      <p>
        Площадь жилая:
        {' '}
        {realty?.areaLiving.value}
      </p>
      <p>
        Площадь комнат:
        {' '}
        {realty?.areaRooms.value}
      </p>
      <p>
        Площадь кухни:
        {' '}
        {realty?.areaKitchen.value}
      </p>
      <p>
        Площадь участка:
        {' '}
        {realty?.areaLand.value}
      </p>
      <p>
        Высота потолка:
        {' '}
        {realty?.heightCeiling.value}
      </p>
      <p>
        Всего этажей:
        {' '}
        {realty?.maxFloor.value}
      </p>
      <p>
        Новый дом:
        {' '}
        {realty?.isNewHouse.value}
      </p>
    </Col>
    <Col>
      <p>
        Год постройки:
        {' '}
        {realty?.yearConstruction.value}
      </p>
      <p>
        Юридический статус земли:
        {' '}
        {realty?.legalStatusLand.value}
      </p>
      <p>
        Категория земли:
        {' '}
        {realty?.categoryLand.value}
      </p>
      <p>
        Отопление:
        {' '}
        {realty?.heating.value}
      </p>
      <p>
        Канализация:
        {' '}
        {realty?.sewerage.value}
      </p>
      <p>
        Вода:
        {' '}
        {realty?.water.value}
      </p>
      <p>
        Электричество:
        {' '}
        {realty?.electricity.value}
      </p>
      <p>
        Газ:
        {' '}
        {realty?.gas.value}
      </p>
      <p>
        Сауна / Баня:
        {' '}
        {realty?.sauna.value}
      </p>
      <p>
        Мебель:
        {' '}
        {realty?.furniture.value}
      </p>
    </Col>
  </>
);

export default HouseParams;
