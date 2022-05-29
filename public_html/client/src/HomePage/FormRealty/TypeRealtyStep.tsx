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
        onClick={() => setTypeRealty(() => {
          setStepForm((prev: number) => prev + 1);
          return { typeRealty: 'Квартира' };
        })}
      >
        Квартира
      </Button>
      <Button
        type="button"
        onClick={() => setTypeRealty(() => {
          setStepForm((prev: number) => prev + 1);
          return { typeRealty: 'Комната' };
        })}
      >
        Комната
      </Button>
      <Button
        type="button"
        onClick={() => setTypeRealty(() => {
          setStepForm((prev: number) => prev + 1);
          return { typeRealty: 'Дача' };
        })}
      >
        Дача
      </Button>
    </div>
  </>
);

export default TypeRealtyStep;
