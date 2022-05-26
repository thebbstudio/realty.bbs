import React from 'react';
import { Form } from 'react-bootstrap';
import { Controller } from 'react-hook-form';
import { ISelect } from '../models/FormElements';

const Select = ({ ...props }: ISelect) => (
  <Form.Group
    className="mb-3"
    controlId={props.name}
  >
    <Form.Label>{props.label}</Form.Label>
    <Controller
      name={props.name}
      control={props.control}
      render={({ field: { onChange, value = props.value, ref } }) => (
        <Form.Select
          defaultValue={value}
          onChange={onChange}
          required={props.required}
          ref={ref}
        >
          <option> </option>
          {props.options.map((option) => (
            <option value={option.value} key={option.value}>{option.label}</option>
          ))}
        </Form.Select>
      )}
    />
  </Form.Group>
);

export default Select;
