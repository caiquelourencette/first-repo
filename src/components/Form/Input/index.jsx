import React from 'react';

import { Container } from './styles';

// eslint-disable-next-line react/prop-types
const Input = ({ placeholder }) => {
  console.log(placeholder, 'placeholder do input');

  return (
    <Container placeholder={placeholder} />
  );
};

export default Input;
