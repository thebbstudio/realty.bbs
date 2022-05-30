import React from 'react';
import { Form } from 'react-bootstrap';
import { Controller } from 'react-hook-form';
import { IInputCheck } from '../models/FormElements';

const InputCheck = ({ ...props }: IInputCheck) => (
  <Form.Group
    className="mb-3"
    controlId={props.name}
  >
    <Form.Label className={!props.required ? 'optional' : 'required'}>{props.label}</Form.Label>

    {props.options.map((option) => (
      <Controller
        key={option.value}
        name={props.name}
        defaultValue={props.value}
        rules={{ required: props.required }}
        control={props.control}
        render={({ field: { onChange, value, ref } }) => (
          <Form.Check
            type={props.type}
            name={props.name}
            value={value}
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
