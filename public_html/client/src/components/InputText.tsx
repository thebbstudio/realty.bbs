import React from 'react';
import { Form } from 'react-bootstrap';
import { Controller } from 'react-hook-form';
import { IInputText } from '../models/FormElements';

const InputText = ({ ...props }: IInputText) => (

  <Form.Group
    className="mb-3"
    controlId={props.name}
  >
    <Form.Label className={!props.required ? 'optional' : 'required'}>{props.label}</Form.Label>
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
          plaintext={props?.plaintext}
          readOnly={props?.readOnly}
        />
      )}
    />
  </Form.Group>

);

export default InputText;
