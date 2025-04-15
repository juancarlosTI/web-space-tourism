import './App.css';
import Exibition from './components/exibition';
import Layout from './components/Layout';
import GlobalStyle from './globalStyles';
import styled from "styled-components";

// Imagens
import backgroundHome from './assets/home/background-home-desktop.jpg';


function App() {
  return (
    <Container background={backgroundHome}>
      <Layout>
        <GlobalStyle />
        <Exibition/>
      </Layout>
    </Container>

  );
}

export default App;

const Container = styled.div`
    width:100vw;
    height:100vh;
    display: flex;
    flex-direction: column;
    color:white;
    background: url(${props => props.background});
    background-size:cover;
`