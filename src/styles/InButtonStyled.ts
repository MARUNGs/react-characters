import styled, { keyframes, createGlobalStyle } from "styled-components";

// Sparkle 애니메이션 정의
const sparkle = keyframes`
  0% {
    transform: rotate(var(--rotation)) translateY(-60px) scale(0);
    opacity: 1;
  }
  50% {
    transform: rotate(var(--rotation)) translateY(-80px) scale(1);
  }
  100% {
    transform: rotate(var(--rotation)) translateY(-100px) scale(0);
    opacity: 0;
  }
`;

// Gradient와 Spin 애니메이션 정의
const gradient = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const spin = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

// Global Styles 정의
export const GlobalStyles = createGlobalStyle`
  .animate-sparkle {
    --rotation: 0deg;
    animation: ${sparkle} 1.5s ease-in-out infinite;
  }

  .animate-gradient {
    background-size: 200% 200%;
    animation: ${gradient} 3s ease infinite;
  }

  .animate-spin-slow {
    animation: ${spin} 8s linear infinite;
  }

  .animation-delay-150 {
    animation-delay: 150ms;
  }

  .animation-delay-300 {
    animation-delay: 300ms;
  }
`;

// tailwind.css를 styled-components로 가공했음.
export const InButtonContainer = styled.div.attrs({
  className: `relative cursor-pointer`,
})``;

export const InButtonDiv40 = styled.div.attrs({
  className: `w-80 h-80 rounded-full bg-blue-500/20 flex items-center justify-center`,
})``;

export const InButtonDiv32 = styled.div.attrs({
  className: `w-72 h-72 rounded-full bg-blue-500/30 flex items-center justify-center`,
})``;

export const InButtonDiv24 = styled.div.attrs({
  className: `w-64 h-64 rounded-full bg-blue-500/40 flex items-center justify-center animate-pulse`,
})``;

export const ShowSparkleContainer = styled.div.attrs({
  className: `absolute inset-0 flex items-center justify-center`,
})``;

// 애니메이션이 회전해야 하므로 배열 index를 parameter로 전달받아서 처리하도록 유도함.
export const ShowSparkleInnerDiv = styled.div.attrs<{ indexProp: number }>({
  className: "absolute w-2 h-2 bg-yellow-300 rounded-full animate-sparkle",
})`
  animation: sparkle 1.5s ease-in-out;
  transform: ${(props) =>
    `rotate(${props.indexProp * 30}deg) translateY(-60px)`};
`;

// Styled Components 정의
export const Container = styled.div.attrs({
  className:
    "flex flex-col items-center justify-center min-h-screen bg-gray-900 p-8 gap-8",
})``;

export const SparkleWrapper = styled.div.attrs({
  className: "relative cursor-pointer",
})``;

export const OuterCircle = styled.div.attrs({
  className:
    "w-40 h-40 rounded-full bg-blue-500/20 flex items-center justify-center",
})``;

export const MiddleCircle = styled.div.attrs({
  className:
    "w-32 h-32 rounded-full bg-blue-500/30 flex items-center justify-center",
})``;

export const InnerCircle = styled.div.attrs({
  className:
    "w-24 h-24 rounded-full bg-blue-500/40 flex items-center justify-center animate-pulse",
})``;

export const SparkleContainer = styled.div.attrs({
  className: "absolute inset-0 flex items-center justify-center",
})``;

export const SparkleItem = styled.div.attrs({
  className: "absolute w-2 h-2 bg-yellow-300 rounded-full animate-sparkle",
})``;
