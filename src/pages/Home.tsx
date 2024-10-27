// import
import { useState } from "react";
import InButton from "../components/InButton";
// import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import { useQuery } from "@tanstack/react-query";
import { queryCharacters } from "../api/data";
import { InButtonContainer, MainContainer } from "../styles/HomeStyled";
import CharacterCard from "../components/CharacterCard";

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
  const [mainContainerShow, setMainContainerShow] = useState(false);
  const [inButtonContainerHide, setInButtonContainerHide] = useState(false);
  const [str, setStr] = useState("Go");

  // api
  const { isLoading, data } = useQuery<ICharacter[], Error>({
    queryKey: ["characterList"],
    queryFn: queryCharacters,
    select: (data) => data?.slice(0, 100),
  });

  console.log(isLoading, data);

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

  return (
    <>
      <InButtonContainer $inButtonContainerHide={inButtonContainerHide}>
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

      {/* card list */}
      <MainContainer $mainContainerShow={mainContainerShow}>
        <div
          className="grid grid-cols-4 gap-4 m-20 overflow-y-auto overflow-y-scroll"
          style={{ height: "650px" }}
        >
          {data?.map(() => (
            <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <div className="flex justify-end px-4 pt-4"></div>

              <div className="flex flex-col items-center pb-10">
                <img
                  className="w-24 h-24 mb-3 rounded-full shadow-lg"
                  src="/docs/images/people/profile-picture-3.jpg"
                  alt="Bonnie image"
                />
                <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                  Bonnie Green
                </h5>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  Visual Designer
                </span>
                <div className="flex mt-4 md:mt-6">
                  <a
                    href="#"
                    className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Add friend
                  </a>
                  <a
                    href="#"
                    className="py-2 px-4 ms-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                  >
                    Message
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </MainContainer>
    </>
  );
}
