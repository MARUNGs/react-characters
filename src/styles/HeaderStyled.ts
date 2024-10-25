import styled from "styled-components";
import magicImg from "../images/magic_img_1.png";

export const Container = styled.div`
  position: relative;
  width: 100%;
  padding-top: 40px;
  overflow: hidden;
`;

// H1 title
export const Title = styled.h1`
  position: relative;
  z-index: 3;

  text-align: center;
  font-size: 2.5rem;
`;

export const BackgroundTitleImage = styled.div`
  position: absolute;
  top: 8%;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 2;
  background-image: url(${magicImg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  pointer-events: none;
`;

export const h1ClassNm = `text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-900 via-teal-400 to-blue-900 animate-gradient cursor-pointer hover:opacity-80 transition-opacity drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]`;
