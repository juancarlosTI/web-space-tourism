import './App.css';
import Layout from './components/Layout';
import GlobalStyle from './globalStyles';
import styled from "styled-components";
import { AppRoutes } from './pages/routes';
import { useLocation } from "react-router-dom";

// Imagens
import backgroundHome from './assets/home/background-home-desktop.jpg';
import backgroundDestination from './assets/destination/background-destination-desktop.jpg';
import backgroundCrew from './assets/crew/background-crew-desktop.jpg';
import backgroundTechnology from './assets/technology/background-technology-desktop.jpg';

function App() {

  const location = useLocation();

  const getBackgroundByRoute = (pathname) => {
    if (pathname.startsWith('/destination')) return backgroundDestination;
    if (pathname.startsWith('/crew')) return backgroundCrew;
    if (pathname.startsWith('/technology')) return backgroundTechnology;
    return backgroundHome; // default
  };

  const background = getBackgroundByRoute(location.pathname);

  return (
    
      <Container background={background}>
        <Layout>
          <GlobalStyle />
          <AppRoutes />
        </Layout>
      </Container>
  );
}

export default App;

const Container = styled.div`
    max-width:100vw;
    min-height:100vh;
    display: flex;
    flex-direction: column;
    color:white;
    background: url(${props => props.background});
    background-size:cover;
`