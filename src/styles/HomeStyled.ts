import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from { opacity: 0;}
  to { opacity: 1; }
`;

const fadeOut = keyframes`
  from { opacity: 1; }
  to { opacity: 0; }
`;

export const InButtonContainer = styled.div<{
  $inButtonContainerHide: boolean;
}>`
  margin: 10% 10% auto;
  display: flex;
  align-items: center;
  justify-content: center;

  // hide
  animation: ${({ $inButtonContainerHide }) =>
    $inButtonContainerHide ? fadeOut : fadeIn};
  transition-delay: ${({ $inButtonContainerHide }) =>
    $inButtonContainerHide && `opacity 0.5s ease`};
  visibility: ${({ $inButtonContainerHide }) =>
    $inButtonContainerHide && `hidden`};
  position: ${({ $inButtonContainerHide }) =>
    $inButtonContainerHide && `absolute`};
`;

export const MainContainer = styled.div<{ $mainContainerShow: boolean }>`
  top: 10%;
  position: ${({ $mainContainerShow }) =>
    $mainContainerShow ? "static" : "absolute"};
  animation: ${({ $mainContainerShow }) =>
      $mainContainerShow ? fadeIn : fadeOut}
    0.5s ease-in-out;
  opacity: ${({ $mainContainerShow }) => ($mainContainerShow ? 1 : 0)};
  visibility: ${({ $mainContainerShow }) =>
    $mainContainerShow ? "visible" : "hidden"};
  transition: visibility 0s linear 0.5s; /* fadeOut 애니메이션 후에 visibility를 hidden으로 설정 */
`;

export const CardListContainer = styled.div.attrs({
  className: `grid grid-cols-4 gap-4 m-20 overflow-y-auto overflow-y-scroll`,
})`
  height: 650px;
`;
