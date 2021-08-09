import logo from './logo.svg';
import './App.css';
import { HeaderContainer, Right, Header, OurStoryContainer, TextContainer } from './styles';

function App() {
  const teste = () => {
    console.log('botao entrar clicado')
  }
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
      <OurStoryContainer>
        <TextContainer>
          <h1>Filmes, séries e muito mais.</h1>
          <h1>Sem limites.</h1>
          <h2>Assista onde quiser. Cancele quando quiser.</h2>
          <h3>Pronto para assistir? Informe seu email para criar ou reiniciar sua assinatura.</h3>
        </TextContainer>
      </OurStoryContainer>
    </div>
  );
}

export default App;
