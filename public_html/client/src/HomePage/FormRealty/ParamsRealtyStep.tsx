import React from 'react';
import InputText from '../../components/InputText';
import InputCheck from '../../components/InputCheck';
import Select from '../../components/Select';
import InputGroupTextRight from '../../components/InputGroupTextRight';

const ParamsRealtyStep = ({ control }: any) => (
  <>
    <div className="mb-3 mt-5">
      <h3 className="d-flex justify-content-center">Параметры объекта недвижимости:</h3>
    </div>
    <InputText
      type="text"
      label="Цена за объект"
      name="costRub"
      placeholder="Введите цену в рублях"
      value=""
      required
      control={control}
    />
    <Select
      label="Количество комнат"
      name="rooms"
      value=""
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
      value=""
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
      value=""
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
      name="ceilingHeight"
      placeholder="Введите высоту в метрах"
      value=""
      required
      control={control}
      text="метры"
    />
    <InputGroupTextRight
      type="text"
      label="Площадь общая"
      name="totalArea"
      placeholder="Введите площадь в метрах"
      value=""
      required
      control={control}
      text="метры"

    />
    <InputGroupTextRight
      type="text"
      label="Высота потолка"
      name="ceilingHeight"
      placeholder="Введите площадь в метрах"
      value=""
      required
      control={control}
    />
    <InputGroupTextRight
      type="text"
      label="Высота потолка"
      name="ceilingHeight"
      placeholder="Введите площадь в метрах"
      value=""
      required
      control={control}
    />
    <InputGroupTextRight
      type="text"
      label="Высота потолка"
      name="ceilingHeight"
      placeholder="Введите площадь в метрах"
      value=""
      required
      control={control}
    />
  </>
);
export default ParamsRealtyStep;
