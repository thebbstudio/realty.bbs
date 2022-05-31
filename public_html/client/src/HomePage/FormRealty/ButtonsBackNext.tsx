/* eslint-disable max-len */
import React from 'react';
import { Row, Col, Button } from 'react-bootstrap';

interface IButtonsChangeStep {
  stepForm: number,
  setStepForm: React.Dispatch<React.SetStateAction<number>>,
  typeRealty: string,
  setTypeRealty: React.Dispatch<React.SetStateAction<string>>
}

const ButtonsBackNext = ({
  stepForm, setStepForm, typeRealty, setTypeRealty,
}: IButtonsChangeStep) => {
  function changeStep(command: string, step: number, setStep: any) {
    if (command === 'next' && step < 4) {
      setStep((prev: number) => prev + 1);
    }

    if (command === 'back' && step > 1) {
      if (step === 2) {
        window.location.reload();
        // setTypeRealty('');
      }
      setStep((prev: number) => prev - 1);
    }
  }

  return (
    <Row>
      <Col className="d-flex justify-content-center">
        <Button
          type="button"
          variant="outline-primary"
          onClick={() => changeStep('back', stepForm, setStepForm)}
        >
          Назад
        </Button>
      </Col>
      <Col className="d-flex justify-content-center">

        {stepForm !== 4 ? (
          <Button
            type="button"
            variant="outline-primary"
            onClick={() => changeStep('next', stepForm, setStepForm)}
            disabled={!typeRealty}
          >
            Вперед
          </Button>
        ) : (
          <Button type="submit" variant="success">Отправить</Button>
        )}
      </Col>

    </Row>
  );
};

export default ButtonsBackNext;
