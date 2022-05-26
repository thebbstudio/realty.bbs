import React from 'react';
import { Button } from 'react-bootstrap';

const TypeRealtyStep = ({ setType }: any) => (
  <>
    <div className="d-flex justify-content-center mt-5 mb-3">
      <h3>Выберите тип недвижимости:</h3>
    </div>
    <div className="d-grid gap-2">
      <Button
        type="button"
        onClick={() => setType((prev: any) => ({ ...prev, typeRealty: 'Квартира' }))}
      >
        Квартира
      </Button>
      <Button
        type="button"
        onClick={() => setType((prev: any) => ({ ...prev, typeRealty: 'Комната' }))}
      >
        Комната
      </Button>
      <Button
        type="button"
        onClick={() => setType((prev: any) => ({ ...prev, typeRealty: 'Дача' }))}
      >
        Дача
      </Button>
    </div>
  </>
);

export default TypeRealtyStep;
