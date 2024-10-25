// import
import { useState } from "react";
import InButton from "../components/InButton";
import { Link } from "react-router-dom";
import styled from "styled-components";

// styles
const InButtonContainer = styled.div`
  margin: 10% 10% auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;

// main
export default function Home() {
  /* 
    관리 Component 대상 총 2개.  
    1. data list를 뿌려주는 Card Component
    2. Card Component List를 뿌리기 전에 보여주는 In 버튼
  */

  // variable
  const [loading, setLoading] = useState(true);
  const [visible, setVisible] = useState(true);
  const [str, setStr] = useState("Go");

  // function
  const onClick = () => {
    if (visible) {
      setVisible(false);
      setStr("Ing");
    } else {
      setVisible(true);
      setStr("Go");
    }
  };

  return (
    <>
      <InButtonContainer>
        {visible ? (
          <>
            {/* <h1>들어가 볼까요?</h1> */}
            <div onClick={onClick}>
              <InButton str={str} />
            </div>
          </>
        ) : (
          <>
            {/* <h1>들어갑니다 ...</h1> */}
            <div onClick={onClick}>
              <InButton str={str} />
            </div>
          </>
        )}
      </InButtonContainer>
    </>
  );
}
