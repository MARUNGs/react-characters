import { useQuery } from "@tanstack/react-query";
import Card from "../components/Card";
import { queryCharacterInfo } from "../api/data";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import PPButton from "../components/PPButton";
import { Link } from "react-router-dom";

// styled
const DetailContainer = styled.div.attrs({
  className: `border border-gray-200 rounded-lg `,
})`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;

  height: 600px;
`;

// interface
interface ICharacterInfo {
  id: number;
  name: string;
  films: string[];
  imageUrl: string;
  sourceUrl: string;
}

export default function Detail() {
  // variable
  const { state } = useLocation();
  const { id } = state;

  // api
  const { isLoading, data } = useQuery<ICharacterInfo>({
    queryKey: ["characterList", id],
    queryFn: () => queryCharacterInfo(id),
  });

  return (
    <>
      {isLoading ? (
        <h1>Loading ...</h1>
      ) : (
        <>
          <DetailContainer>
            <Link to={`/`} state={{ flag: true }}>
              <PPButton />
            </Link>
            <Card
              id={id}
              name={data?.name}
              films={data?.films}
              imageUrl={data?.imageUrl}
              sourceUrl={data?.sourceUrl}
              mainYn={false}
            />
          </DetailContainer>
        </>
      )}
    </>
  );
}
