// import
import { useEffect, useState } from "react";
import InButton from "../components/InButton";
import { useQuery } from "@tanstack/react-query";
import { queryCharacters } from "../api/data";
import {
  InButtonContainer,
  MainContainer,
  CardListContainer,
} from "../styles/HomeStyled";
import Card from "../components/Card";
import { useLocation } from "react-router-dom";

// interface
interface ICharacter {
  id: number;
  name: string;
  imageUrl: string;
}

// ------------------------------------------------------------
// main
export default function Home() {
  /* 
    관리 Component 대상 총 2개.  
    1. data list를 뿌려주는 Card Component
    2. Card Component List를 뿌리기 전에 보여주는 In 버튼
  */

  // variable
  const [visible, setVisible] = useState(true);
  const flag = useLocation();
  const [mainContainerShow, setMainContainerShow] = useState(false);
  const [inButtonContainerHide, setInButtonContainerHide] = useState(false);
  const [str, setStr] = useState("Go");

  // api
  const { isLoading, data } = useQuery<ICharacter[], Error>({
    queryKey: ["characterList"],
    queryFn: queryCharacters,
    select: (data) => data?.slice(0, 100),
  });

  // function
  const onClick = () => {
    if (visible) {
      setVisible(false);
      setMainContainerShow(true);
      setInButtonContainerHide(true);
      setStr("Ing");
    } else {
      setVisible(true);
      setMainContainerShow(false);
      setInButtonContainerHide(false);
      setStr("Go");
    }
  };

  // hooks
  useEffect(() => {
    // 상세화면에서 메인화면으로 돌아온 거라면?
    if (flag) {
      setVisible(false);
      setMainContainerShow(true);
      setInButtonContainerHide(true);
    }
  }, [flag]);

  return (
    <>
      <InButtonContainer $inButtonContainerHide={inButtonContainerHide}>
        {visible ? (
          <>
            <div onClick={onClick}>
              <InButton str={str} />
            </div>
          </>
        ) : (
          <>
            <div onClick={onClick}>
              <InButton str={str} />
            </div>
          </>
        )}
      </InButtonContainer>

      {/* card list */}
      <MainContainer $mainContainerShow={mainContainerShow}>
        {isLoading ? (
          <h1>Loading ...</h1>
        ) : (
          <CardListContainer>
            {data?.map((info, i) => (
              <Card
                key={i}
                id={info.id}
                name={info.name}
                imageUrl={info.imageUrl}
                films={undefined}
                sourceUrl={undefined}
                mainYn={true}
              />
            ))}
          </CardListContainer>
        )}
      </MainContainer>
    </>
  );
}
