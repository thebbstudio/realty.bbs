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
        name={props.name}
        defaultValue={option.value}
        render={({
          field: {
            onChange, ref, name,
          },
        }) => (
          <Form.Check
            type={props.type}
            name={name}
            value={option.value}
            onChange={onChange}
            label={option.label}
            defaultChecked={props.value === option.value}
            required={props.required}
            ref={ref}
          />
        )}
        control={props.control}
        rules={{ required: props.required }}
        key={option.value}
      />
    ))}
  </Form.Group>
);

export default InputCheck;
