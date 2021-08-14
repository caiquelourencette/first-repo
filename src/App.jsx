import React from 'react';
import logo from './logo.svg';
import './App.css';
import { HeaderContainer, Right, Header } from './styles';

function App() {
  const teste = () => {
    console.log('botao entrar clicado');
  };

  return (
    <div className="App">
      <Header className="App-header">
        <HeaderContainer>
          <img src={logo} height={32} width={108} alt="logo" />
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
    </div>
  );
}

export default App;
