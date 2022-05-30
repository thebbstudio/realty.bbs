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
      <InputGroup.Text dangerouslySetInnerHTML={{ __html: props.text! }} />
      <Controller
        name={props.name}
        control={props.control}
        defaultValue={props.value}
        rules={{ required: props.required }}
        render={({ field: { onChange, value, ref } }) => (
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
