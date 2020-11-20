import React from 'react';
import { Input, FormFeedback } from 'reactstrap';

const Field = ({ name, placeholder, register, rules = {}, errors }) => {
  return (
    <>
      <Input
        placeholder={placeholder}
        name={name}
        innerRef={register(rules)}
        invalid={!!errors[name]?.message}
      />
      {errors[name] && <FormFeedback>{errors[name].message}</FormFeedback>}
    </>
  );
};

export default Field;
