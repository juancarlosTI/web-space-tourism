import React from "react";
import TopMenu from "./layout/top-menu"; // ou crie um componente separado para TopMenu
import styled from "styled-components";

const Layout = ({ children }) => {
  return (
    <>
      <TopMenu />
      <Main>{children}</Main>
    </>
  );
};

const Main = styled.main`
  flex: 1;
`;

export default Layout;
