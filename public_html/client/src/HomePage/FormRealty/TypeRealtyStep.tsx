import React from 'react';
import { Button } from 'react-bootstrap';

const TypeRealtyStep = ({ setTypeRealty, setStepForm }: any) => (
  <>
    <div className="d-flex justify-content-center mt-5 mb-3">
      <h3>Выберите тип недвижимости:</h3>
    </div>
    <div className="d-grid gap-2 mb-3">
      <Button
        type="button"
        onClick={() => {
          setStepForm((prev: number) => prev + 1);
          setTypeRealty(() => ('Квартира'));
        }}
      >
        Квартира
      </Button>
      <Button
        type="button"
        onClick={() => {
          setStepForm((prev: number) => prev + 1);
          setTypeRealty(() => ('Комната'));
        }}
      >
        Комната
      </Button>
      <Button
        type="button"
        onClick={() => {
          setStepForm((prev: number) => prev + 1);
          setTypeRealty(() => ('Дом'));
        }}
      >
        Дом, дача, таунхаус
      </Button>
    </div>
  </>
);

export default TypeRealtyStep;
