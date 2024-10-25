// import { createGlobalStyle } from "styled-components";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import { GlobalStyle, BackgroundImage } from "./styles/AppStyled";
import "./css/index.css";

export default function App() {
  return (
    <>
      <GlobalStyle />
      <BackgroundImage />
      <Header />
      <Outlet />
    </>
  );
}
