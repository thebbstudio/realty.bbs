import React from 'react';
import { InputGroup, Form } from 'react-bootstrap';
import { Controller } from 'react-hook-form';
import { IInputText } from '../models/FormElements';

const InputGroupTextLeft = ({ ...props }: IInputText) => (
  <Form.Group
    className="mb-3"
    controlId={props.name}
  >
    <Form.Label className={!props.required ? 'optional' : 'required'}>{props.label}</Form.Label>
    <InputGroup className="mb-3">
      <InputGroup.Text>{props.text}</InputGroup.Text>
      <Controller
        name={props.name}
        control={props.control}
        render={({ field: { onChange, value = props.value, ref } }) => (
          <Form.Control
            type={props.type}
            value={value}
            onChange={onChange}
            placeholder={props.placeholder}
            required={props.required}
            ref={ref}
          />
        )}
      />
    </InputGroup>
  </Form.Group>
);

export default InputGroupTextLeft;
