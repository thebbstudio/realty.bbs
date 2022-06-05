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

const HouseParamsEdit = ({ realty, control }: IProps) => {
  const house: House = JSON.parse(JSON.stringify(realty));
  return (
    <>
      <Col>
        <InputCheck
          type="radio"
          label="Тип дома"
          name="typeBuild"
          value={house.typeBuild.value}
          options={[
            { value: 'Дом', label: 'Дом' },
            { value: 'Дача', label: 'Дача' },
            { value: 'Коттедж', label: 'Коттедж' },
            { value: 'Таунхаус', label: 'Таунхаус' },
          ]}
          required
          control={control}
        />
        <InputGroupTextRight
          type="text"
          label="Цена за объект"
          name="costRub"
          placeholder="Введите цену"
          value={house.costRub.value}
          required
          control={control}
          text="руб"
        />
        <Select
          label="Количество комнат"
          name="rooms"
          value={house.rooms.value}
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
        <Row>
          <Col>
            <InputGroupTextRight
              type="text"
              label="Площадь общая"
              name="areaTotal"
              placeholder="Введите общую площадь"
              value={house.areaTotal.value}
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
              value={house.areaLiving.value}
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
              value={house.areaRooms.value}
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
              value={house.areaKitchen.value}
              control={control}
              text="м2"
            />
          </Col>
        </Row>
        <InputGroupTextRight
          type="text"
          label="Площадь участка"
          name="areaLand"
          placeholder="Введите площадь участка"
          value={house.areaLand.value}
          control={control}
          text="соток"
        />
        <InputGroupTextRight
          type="text"
          label="Высота потолка"
          name="heightCeiling"
          placeholder="Введите высоту потолка"
          value={house.heightCeiling.value}
          control={control}
          text="м"
        />
        <InputText
          type="text"
          label="Всего этажей"
          name="maxFloor"
          placeholder="Введите всего этажей"
          value={house.maxFloor.value}
          required
          control={control}
        />
        <Select
          label="Тип дома"
          name="typeHouse"
          value={house.typeHouse.value}
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
          value={house.isNewHouse.value}
          options={[
            { value: 'Да', label: 'Да' },
            { value: 'Нет', label: 'Нет' },

          ]}
          control={control}
        />
      </Col>
      <Col>
        <InputText
          type="text"
          label="Год постройки"
          name="yearConstruction"
          placeholder="Год постройки"
          value={house.yearConstruction.value}
          control={control}
        />
        <Select
          label="Ремонт"
          name="repair"
          value={house.repair.value}
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
          label="Юридический статус земли"
          name="legalStatusLand"
          value={house.legalStatusLand.value}
          options={[
            { value: 'Приватизированная', label: 'Приватизированная' },
            { value: 'Аренда', label: 'Аренда' },
            { value: 'Договор застройки', label: 'Договор застройки' },
            { value: 'Фермерское хозяйство', label: 'Фермерское хозяйство' },
            { value: 'Стройкооператив', label: 'Стройкооператив' },
            { value: 'В собственности', label: 'В собственности' },

          ]}
          required
          control={control}
        />
        <Select
          label="Категория земли"
          name="categoryLand"
          value={house.categoryLand.value}
          options={[
            { value: 'ДСК', label: 'ДСК' },
            { value: 'ИЖС', label: 'ИЖС' },
            { value: 'МЖС', label: 'МЖС' },
            { value: 'Садоводство', label: 'Садоводство' },
            { value: 'Фермерское хозяйство', label: 'Фермерское хозяйство' },
            { value: 'Подсобное хозяйство', label: 'Подсобное хозяйство' },
            { value: 'ДНП/СНТ', label: 'ДНП / СНТ' },
            { value: 'Сельхоз назначение', label: 'Сельхоз назначение' },
            { value: 'Личное подсобное хозяйство', label: 'Личное подсобное хозяйство' },
            { value: 'Коммерческое', label: 'Коммерческое' },
            { value: 'Возможно изменение назначения', label: 'Возможно изменение назначения' },
          ]}
          required
          control={control}
        />
        <Select
          label="Отопление"
          name="heating"
          value={house.heating.value}
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
        <Row>
          <Col>
            <Select
              label="Канализация"
              name="sewerage"
              value={house.sewerage.value}
              required
              options={[
                { value: 'Нет', label: 'Нет' },
                { value: 'Центральная', label: 'Центральная' },
                { value: 'Локальная', label: 'Локальная' },
              ]}
              control={control}
            />
          </Col>
          <Col>
            <Select
              label="Вода"
              name="water"
              value={house.water.value}
              required
              options={[
                { value: 'Нет', label: 'Нет' },
                { value: 'Центральное водоснабжение', label: 'Центральное водоснабжение' },
                { value: 'Газовая колонка', label: 'Газовая колонка' },
                { value: 'Дровяная колонка', label: 'Дровяная колонка' },
                { value: 'Электрический водонагреватель', label: 'Электрический водонагреватель' },
                { value: 'Автономное', label: 'Автономное' },
              ]}
              control={control}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <Select
              label="Электричество"
              name="electricity"
              value={house.electricity.value}
              required
              options={[
                { value: 'Нет', label: 'Нет' },
                { value: '220 В', label: '220 В' },
                { value: '220 В + 380 В', label: '220 В + 380 В' },
              ]}
              control={control}
            />
          </Col>
          <Col>
            <Select
              label="Газ"
              name="gas"
              value={house.gas.value}
              required
              options={[
                { value: 'Нет', label: 'Нет' },
                { value: 'Да', label: 'Да' },
                { value: 'Газгольдер', label: 'Газгольдер' },
              ]}
              control={control}
            />
          </Col>
        </Row>
        <InputCheck
          type="radio"
          label="Сауна / Баня"
          name="sauna"
          value={house.sauna.value}
          options={[
            { value: 'Да', label: 'Да' },
            { value: 'Нет', label: 'Нет' },
          ]}
          required
          control={control}
        />
        <InputCheck
          type="radio"
          label="Мебель"
          name="furniture"
          value={house.furniture.value}
          options={[
            { value: 'Да', label: 'Да' },
            { value: 'Нет', label: 'Нет' },
          ]}
          required
          control={control}
        />
      </Col>
    </>
  );
};

export default HouseParamsEdit;
