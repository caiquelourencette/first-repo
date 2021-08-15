import React from 'react';

import { Container, TextContainer } from './styles';

import Form from '../Form';

// eslint-disable-next-line react/prop-types
const OurStory = () => {
  const vamosla = () => {
    console.log('Botão de vamosla');
  };

  return (
    <Container>
      <TextContainer>
        <h1>Filmes, séries e muito mais.</h1>
        <h1>Sem limites.</h1>
        <h2>Assista onde quiser. Cancele quando quiser.</h2>
        <h3>Pronto para assistir? Informe seu email para criar ou reiniciar sua assinatura.</h3>
      </TextContainer>
      <Form />
    </Container>
  );
};

export default OurStory;
