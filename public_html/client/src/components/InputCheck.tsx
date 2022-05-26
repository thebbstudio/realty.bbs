import React from 'react';
import { Form } from 'react-bootstrap';
import { Controller } from 'react-hook-form';
import { IInputCheck } from '../models/FormElements';

const InputCheck = ({ ...props }: IInputCheck) => (
  <Form.Group
    className="mb-3"
    controlId={props.name}
  >
    <Form.Label>{props.label}</Form.Label>

    {props.options.map((option) => (
      <Controller
        name={props.name}
        control={props.control}
        render={({ field: { onChange, value = option.value, ref } }) => (
          <Form.Check
            type={props.type}
            name={props.name}
            defaultValue={value}
            onChange={onChange}
            label={option.label}
            required={props.required}
            ref={ref}
          />
        )}
      />
    ))}
  </Form.Group>
);

export default InputCheck;
