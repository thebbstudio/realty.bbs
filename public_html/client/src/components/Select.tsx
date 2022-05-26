import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import { ISelect } from '../models/FormElements';

const Select = ({ ...props }: ISelect) => {
  const [value, setValue] = useState(props.value);
  return (
    <Form.Group
      className="mb-3"
      controlId={props.name}
    >
      <Form.Label>{props.label}</Form.Label>
      <Form.Select
        defaultValue={value}
        onChange={(e) => setValue(e.target.value)}
        required={props.required}
      >
        <option> </option>
        {props.options.map((option) => (
          <option value={option.value} key={option.value}>{option.label}</option>
        ))}
      </Form.Select>
    </Form.Group>
  );
};

export default Select;
