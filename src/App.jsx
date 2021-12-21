/* eslint-disable no-console */
import React from 'react';
import logo from './logo.svg';
import './App.css';

import OurStory from './components/OurStory';

import {
  HeaderContainer,
  Right,
  Header,
  Image,
} from './styles';

function App() {
  const teste = () => {
    console.log('botao qualquer coisa entrar clicado');
  };

  return (
    <div className="App">
      <Header className="App-header">
        <HeaderContainer>
          <Image src={logo} height={32} width={108} alt="logo" />
          <Right>
            <select>
              <option value="Português">Português</option>
              <option value="English">English</option>
            </select>
            <button onClick={teste}>
              Entrar
            </button>
          </Right>
        </HeaderContainer>
      </Header>
      <OurStory />

    </div>
  );
}

export default App;
