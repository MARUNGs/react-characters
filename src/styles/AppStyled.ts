import { createGlobalStyle, styled } from "styled-components";
import disneyBgImg from "../images/disney_bg_img.jpg";

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'WaltDisneyFont';
    font-weight: normal;
    src: url('/fonts/WaltDisneyFont.ttf') format('truetype');
  }

  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed, 
  figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    vertical-align: baseline;
  }
  article, aside, details, figcaption, figure, 
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  
  * {
    box-sizing: border-box;
  }
  body {
    line-height: 1;
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  


  body {
    font-family: 'WaltDisneyFont';
    background-color: ${(props) => props.theme.textColor};
    color: ${(props) => props.theme.bgColor};
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  h1 {
    font-size: 2rem;
  }
`;

export const BackgroundImage = styled.div`
  position: absolute;
  top: 0;
  z-index: -100;

  min-width: 100%;
  min-height: 100%;

  width: 50%;
  height: 50%;

  background-image: url(${disneyBgImg});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  opacity: 0.1;
`;
