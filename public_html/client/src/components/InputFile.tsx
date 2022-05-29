import React from 'react';
import { Form } from 'react-bootstrap';
import { Controller } from 'react-hook-form';
import { IInputFile } from '../models/FormElements';

const InputFile = ({ ...props }: IInputFile) => (
  <Form.Group
    className="mb-3"
    controlId={props.name}
  >
    <Form.Label className={!props.required ? 'optional' : 'required'}>{props.label}</Form.Label>
    <Controller
      name={props.name}
      control={props.control}
      render={({ field: { onChange, ref } }) => (
        <Form.Control
          type={props.type}
          onChange={onChange}
          required={props.required}
          ref={ref}
          multiple={props?.multiply}
        />
      )}
    />
  </Form.Group>
);

export default InputFile;
