import React from 'react';
import { Row, Col } from 'react-bootstrap';
import InputCheck from '../../components/InputCheck';
import InputGroupTextRight from '../../components/InputGroupTextRight';
import InputText from '../../components/InputText';
import Select from '../../components/Select';
import Flat from '../../models/Flat';
import House from '../../models/House';
import Room from '../../models/Room';

interface IProps {
  control: any
  realty: Flat | Room | House | undefined
}

const FlatParamsEdit = ({ realty, control }: IProps) => {
  const flat: Flat = JSON.parse(JSON.stringify(realty));
  return (
    <>
      <Col>
        <InputGroupTextRight
          type="text"
          label="Цена за объект"
          name="costRub"
          placeholder="Введите цену"
          value={flat.costRub.value}
          required
          control={control}
          text="руб"
        />
        <Select
          label="Количество комнат"
          name="rooms"
          value={flat.rooms.value}
          required
          options={[
            { value: 'Студия', label: 'Студия' },
            { value: '1', label: '1' },
            { value: '2', label: '2' },
            { value: '3', label: '3' },
            { value: '4', label: '4' },
            { value: '5', label: '5' },
            { value: '6', label: '6' },
            { value: '7', label: '7' },
            { value: '8', label: '8' },
            { value: '9', label: '9' },
          ]}
          control={control}
        />
        <InputCheck
          type="radio"
          label="Тип квартиры"
          name="typeFlat"
          value={flat.typeFlat.value}
          options={[
            { value: 'Коммунальная', label: 'Коммунальная' },
            { value: 'Апартаменты', label: 'Апартаменты' },
            { value: 'Общежитие', label: 'Общежитие' },
            { value: 'Пентхаус', label: 'Пентхаус' },

          ]}
          required
          control={control}
        />
        <Select
          label="Планировка"
          name="layout"
          value={flat.layout.value}
          required
          options={[
            { value: 'Изолированная', label: 'Изолированная' },
            { value: 'Смежно-изолированная', label: 'Смежно-изолированная' },
            { value: 'Смежная', label: 'Смежная' },
            { value: 'Распашонка', label: 'Распашонка' },
          ]}
          control={control}
        />
        <InputGroupTextRight
          type="text"
          label="Высота потолка"
          name="heightCeiling"
          placeholder="Введите высоту потолка"
          value={flat.heightCeiling.value}
          control={control}
          text="м"
        />
        <Row>
          <Col>
            <InputGroupTextRight
              type="text"
              label="Площадь общая"
              name="areaTotal"
              placeholder="Введите общую площадь"
              value={flat.areaTotal.value}
              required
              control={control}
              text="м2"
            />
          </Col>
          <Col>
            <InputGroupTextRight
              type="text"
              label="Площадь жилая"
              name="areaLiving"
              placeholder="Введите жилую площадь"
              value={flat.areaLiving.value}
              required
              control={control}
              text="м2"
            />

          </Col>
        </Row>
        <Row>
          <Col>
            <InputGroupTextRight
              type="text"
              label="Площадь комнат"
              name="areaRooms"
              placeholder="Введите площадь комнат"
              value={flat.areaRooms.value}
              required
              control={control}
              text="м2"
            />
          </Col>
          <Col>
            <InputGroupTextRight
              type="text"
              label="Площадь кухни"
              name="areaKitchen"
              placeholder="Введите площадь кухни"
              value={flat.areaKitchen.value}
              required
              control={control}
              text="м2"
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <InputText
              type="text"
              label="Этаж"
              name="floor"
              placeholder="Введите этаж квартиры"
              value={flat.floor.value}
              required
              control={control}
            />
          </Col>
          <Col>
            <InputText
              type="text"
              label="Всего этажей"
              name="maxFloor"
              placeholder="Введите всего этажей"
              value={flat.maxFloor.value}
              required
              control={control}
            />
          </Col>
        </Row>
        <Select
          label="Лифт"
          name="elevator"
          value={flat.elevator.value}
          options={[
            { value: 'нет', label: 'нет' },
            { value: '1', label: '1' },
            { value: '2', label: '2' },
            { value: '2+', label: '2+' },
          ]}
          control={control}
        />
        <Select
          label="Тип дома"
          name="typeHouse"
          value={flat.typeHouse.value}
          required
          options={[
            { value: 'Кирпичный', label: 'Кирпичный' },
            { value: 'Панельный', label: 'Панельный' },
            { value: 'Блочный', label: 'Блочный' },
            { value: 'Монолитный', label: 'Монолитный' },
            { value: 'Кирпично-монолитный', label: 'Кирпично-монолитный' },
            { value: 'Деревянный', label: 'Деревянный' },
            { value: 'Другое', label: 'Другое' },
          ]}
          control={control}
        />
      </Col>
      <Col>
        <InputCheck
          type="radio"
          label="Новый дом"
          name="isNewHouse"
          value={flat.isNewHouse.value}
          options={[
            { value: 'Да', label: 'Да' },
            { value: 'Нет', label: 'Нет' },

          ]}
          required
          control={control}
        />
        <Row>
          <Col>
            <InputText
              type="text"
              label="Год постройки"
              name="yearConstruction"
              placeholder="Год постройки"
              value={flat.yearConstruction.value}
              control={control}
            />
          </Col>
          <Col>
            <InputText
              type="text"
              label="Капитальный ремонт"
              name="majorRepairs"
              placeholder="Капитальный ремонт"
              value={flat.majorRepairs.value}
              control={control}
            />
          </Col>
        </Row>
        <Select
          label="Вид из окон"
          name="viewWindows"
          value={flat.viewWindows.value}
          options={[
            { value: 'На улицу', label: 'На улицу' },
            { value: 'Во двор', label: 'Во двор' },
            { value: 'На улицу и во двор', label: 'На улицу и во двор' },
          ]}
          control={control}
        />
        <Select
          label="Ремонт"
          name="repair"
          value={flat.repair.value}
          options={[
            { value: 'Косметический', label: 'Косметический' },
            { value: 'Евро ремонт', label: 'Евро ремонт' },
            { value: 'Дизайнерский', label: 'Дизайнерский' },
            { value: 'Ремонт от застройщика', label: 'Ремонт от застройщика' },
            { value: 'Без ремонта', label: 'Без ремонта' },
          ]}
          required
          control={control}
        />
        <Select
          label="Балкон / Лоджия"
          name="balcony"
          value={flat.balcony.value}
          required
          options={[
            { value: 'Нет', label: 'Нет' },
            { value: 'Балкон', label: 'Балкон' },
            { value: 'Лоджия', label: 'Лоджия' },
            { value: 'Балкон + лоджия', label: 'Балкон + лоджия' },
            { value: 'Терраса', label: 'Терраса' },
            { value: 'Балкон + терраса', label: 'Балкон + терраса' },
            { value: 'Застекленный балкон', label: 'Застекленный балкон' },
            { value: 'Застекленная лоджия', label: 'Застекленная лоджия' },
            { value: 'Эркер', label: 'Эркер' },
          ]}
          control={control}
        />
        <Select
          label="Ванна"
          name="bath"
          value={flat.bath.value}
          options={[
            { value: 'Нет ванны', label: 'Нет ванны' },
            { value: 'Стандартная', label: 'Стандартная' },
            { value: 'Душевая кабина', label: 'Душевая кабина' },
            { value: 'На кухне', label: 'На кухне' },
            { value: 'В коридоре', label: 'В коридоре' },
            { value: 'Сидячая', label: 'Сидячая' },
            { value: 'Угловая', label: 'Угловая' },
            { value: 'Джакузи', label: 'Джакузи' },
            { value: 'Продольная', label: 'Продольная' },
            { value: 'Поперечная', label: 'Поперечная' },
          ]}
          control={control}
        />
        <Select
          label="Санузел"
          name="bathroom"
          value={flat.bathroom.value}
          required
          options={[
            { value: 'Нет', label: 'Нет' },
            { value: 'Раздельный', label: 'Раздельный' },
            { value: 'Совмещенный', label: 'Совмещенный' },
            { value: '2 санузла', label: '2 санузла' },
            { value: '3 санузла', label: '3 санузла' },
            { value: '4 санузла', label: '4 санузла' },
            { value: '5 и более', label: '5 и более' },

          ]}
          control={control}
        />
        <Select
          label="Водоснабжение"
          name="waterSupply"
          value={flat.waterSupply.value}
          required
          options={[
            { value: 'Нет', label: 'Нет' },
            { value: 'Центральное', label: 'Центральное' },
            { value: 'Газовая колонка', label: 'Газовая колонка' },
            { value: 'Дровяная колонка', label: 'Дровяная колонка' },
            { value: 'Электрический водонагреватель', label: 'Электрический водонагреватель' },
            { value: 'Автономное', label: 'Автономное' },

          ]}
          control={control}
        />
        <Select
          label="Отопление"
          name="heating"
          value={flat.heating.value}
          required
          options={[
            { value: 'Нет', label: 'Нет' },
            { value: 'Центральное', label: 'Центральное' },
            { value: 'Печное', label: 'Печное' },
            { value: 'Камин', label: 'Камин' },
            { value: 'Печь + камин', label: 'Печь + камин' },
            { value: 'Котел солярка', label: 'Котел солярка' },
            { value: 'Котел уголь', label: 'Котел уголь' },
            { value: 'Котел газ', label: 'Котел газ' },
            { value: 'Электрокотел', label: 'Электрокотел' },
            { value: 'Паровое', label: 'Паровое' },
            { value: 'Электрообогрев', label: 'Электрообогрев' },
            { value: 'Индивидуальное', label: 'Индивидуальное' },
            { value: 'Автономное', label: 'Автономное' },
            { value: 'Другое', label: 'Другое' },
          ]}
          control={control}
        />
        <InputCheck
          type="radio"
          label="Мебель"
          name="furniture"
          value={flat.furniture.value}
          options={[
            { value: 'Да', label: 'Да' },
            { value: 'Нет', label: 'Нет' },
          ]}
          control={control}
        />
      </Col>
    </>
  );
};

export default FlatParamsEdit;
