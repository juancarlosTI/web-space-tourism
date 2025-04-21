import React from "react";
import TopMenu from "./layout/top-menu"; // ou crie um componente separado para TopMenu

const Layout = ({ children }) => {
  return (
    <>
      <TopMenu />
     {children}
    </>
  );
};


export default Layout;
