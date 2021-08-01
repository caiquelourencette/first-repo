import logo from './logo.svg';
import './App.css';
import { HeaderContainer, Right } from './styles';

function App() {
  const teste = () => {
    console.log('botao entrar clicado')
  }
  return (
    <div className="App">
      <header className="App-header">
      <HeaderContainer>
        <img src={logo} className="App-logo" height={32} width={108} alt="logo" />
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
      </header>
    </div>
  );
}

export default App;
