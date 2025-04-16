import './App.css';
import Layout from './components/Layout';
import GlobalStyle from './globalStyles';
import styled from "styled-components";
import { AppRoutes } from './pages/routes';
import { BrowserRouter } from 'react-router-dom';


// Imagens
import backgroundHome from './assets/home/background-home-desktop.jpg';


function App() {
  return (
    <BrowserRouter>
      <Container background={backgroundHome}>
        <Layout>
          <GlobalStyle />
          <AppRoutes />
        </Layout>
      </Container>
    </BrowserRouter>
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