import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { model } from '..';
import { IInputText, ISelect } from '../../models/FormElements';

const FormRealty = () => (
  <Form>
    {model.map((formElement: any) => {
      if (formElement.typeField === 'inputText') {
        const inputText: IInputText = formElement;
        return (
          <Form.Group
            className="mb-3"
            controlId={inputText.name}
            key={inputText.name}
          >
            <Form.Label>{inputText.label}</Form.Label>
            <Form.Control
              type={inputText.type}
              placeholder={inputText.placeholder}
              required={inputText.required === '1'}
            />
          </Form.Group>
        );
      } if (formElement.typeField === 'select') {
        const select: ISelect = formElement;
        return (
          <Form.Group
            className="mb-3"
            controlId={select.name}
            key={select.name}
          >
            <Form.Label>{select.label}</Form.Label>
            <Form.Select>
              {select.options.map((option) => (
                <option value={option.value} key={option.value}>{option.label}</option>
              ))}
            </Form.Select>
          </Form.Group>
        );
      }
      return '';
    })}
    <div>
      <Button>Создать</Button>
    </div>
    <div>
      <Button type="reset" className="btn-danger">Очистить</Button>
    </div>
  </Form>
);

export default FormRealty;
