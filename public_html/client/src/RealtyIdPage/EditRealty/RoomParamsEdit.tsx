import React from 'react';
import { Row, Col } from 'react-bootstrap';
import InputCheck from '../../components/InputCheck';
import InputFile from '../../components/InputFile';
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

const RoomParamsEdit = ({ realty, control }: IProps) => {
  const room: Room = JSON.parse(JSON.stringify(realty));

  return (
    <>
      <Col>
        <InputGroupTextRight
          type="text"
          label="Цена за объект"
          name="costRub"
          placeholder="Введите цену"
          value={room.costRub.value}
          required
          control={control}
          text="руб"
        />
        <Select
          label="Количество комнат"
          name="rooms"
          value={room.rooms.value}
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
          value={room.typeFlat.value}
          options={[
            { value: 'Коммунальная', label: 'Коммунальная' },
            { value: 'Общежитие', label: 'Общежитие' },
          ]}
          required
          control={control}
        />
        <Select
          label="Планировка"
          name="layout"
          value={room.layout.value}
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
          value={room.heightCeiling.value}
          control={control}
          text="м"
        />
        <InputGroupTextRight
          type="text"
          label="Площадь квартиры общая"
          name="areaTotal"
          placeholder="Введите общую площадь"
          value={room.areaTotal.value}
          required
          control={control}
          text="м2"
        />
        <Row>
          <Col>
            <InputGroupTextRight
              type="text"
              label="Площадь комнаты"
              name="areaRoom"
              placeholder="Введите площадь комнаты"
              value={room.areaRoom.value}
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
              value={room.areaKitchen.value}
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
              value={room.floor.value}
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
              value={room.maxFloor.value}
              required
              control={control}
            />
          </Col>
        </Row>
        <Select
          label="Лифт"
          name="elevator"
          value={room.elevator.value}
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
          value={room.typeHouse.value}
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
        <InputCheck
          type="radio"
          label="Новый дом"
          name="isNewHouse"
          value={room.isNewHouse.value}
          options={[
            { value: 'Да', label: 'Да' },
            { value: 'Нет', label: 'Нет' },
          ]}
          required
          control={control}
        />
      </Col>
      <Col>
        <Row>
          <Col>
            <InputText
              type="text"
              label="Год постройки"
              name="yearConstruction"
              placeholder="Год постройки"
              value={room.yearConstruction.value}
              control={control}
            />
          </Col>
          <Col>
            <InputText
              type="text"
              label="Капитальный ремонт"
              name="majorRepairs"
              placeholder="Капитальный ремонт"
              value={room.majorRepairs.value}
              control={control}
            />
          </Col>
        </Row>
        <InputCheck
          type="radio"
          label="Собственник проживает в квартире"
          name="ownerLivesFlat"
          value={room.ownerLivesFlat.value}
          options={[
            { value: 'Да', label: 'Да' },
            { value: 'Нет', label: 'Нет' },
          ]}
          required
          control={control}
        />
        <Select
          label="Вид из окон"
          name="viewWindows"
          value={room.viewWindows.value}
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
          value={room.repair.value}
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
          value={room.balcony.value}
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
          value={room.bath.value}
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
          required
          control={control}
        />
        <Select
          label="Санузел"
          name="bathroom"
          value={room.bathroom.value}
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
          value={room.waterSupply.value}
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
          value={room.heating.value}
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
          value={room.furniture.value}
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

export default RoomParamsEdit;
