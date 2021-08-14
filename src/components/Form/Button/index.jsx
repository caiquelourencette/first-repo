import React from 'react';
import { BsChevronCompactRight } from 'react-icons/bs';

import { Container } from './styles';

// eslint-disable-next-line react/prop-types
const Button = ({ text, icon, onClick }) => {
  console.log(icon);
  console.log(onClick);

  return (
    <Container onClick={onClick}>
      <span>{text}</span>
      {icon && <BsChevronCompactRight />}
    </Container>
  );
};

export default Button;
