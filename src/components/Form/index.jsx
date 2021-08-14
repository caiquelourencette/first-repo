import React from 'react';

import { Container } from './styles';

import Button from './Button';
import Input from './Input';

// eslint-disable-next-line react/prop-types
const Form = () => {
  const vamosla = () => {
    console.log('Botão de vamosla');
  };

  return (
    <Container>
      <Input placeholder="Email" />
      <Button text="Vamos lá" icon onClick={vamosla} />
    </Container>
  );
};

export default Form;
