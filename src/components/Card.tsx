import styled from "styled-components";
import { Link } from "react-router-dom";

// styled
const Container = styled.div.attrs({
  className: `w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700`,
})`
  &:hoder {
    background-color: "#f3f3f2";
  }
`;

const FlexTop = styled.div.attrs({
  className: `flex justify-end px-4 pt-10`,
})``;

const FlexItem = styled.div.attrs({
  className: `flex flex-col items-center pb-10`,
})``;

const Img = styled.img.attrs({
  className: "w-40 h-40 mb-3 rounded-full shadow-lg",
})``;

const Title = styled.h5.attrs({
  className: "mb-1 text-xl font-medium text-gray-900 dark:text-white",
})``;

const FlexMargin = styled.div.attrs({
  className: "flex mt-4 md:mt-6",
})``;

const ButtonA = styled.a.attrs({
  className:
    "inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800",
})``;

const FilmBtn = styled.button.attrs({
  className: `text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700`,
})``;

// interface
interface CardProps {
  id: number;
  name: string | undefined;
  imageUrl: string | undefined;
  films: string[] | undefined;
  sourceUrl: string | undefined;
  mainYn: boolean;
}

// Main
const Card: React.FC<CardProps> = ({
  id,
  name,
  imageUrl,
  films,
  sourceUrl,
  mainYn,
}) => {
  const onClick = () => sourceUrl && (window.location.href = sourceUrl);
  return (
    <>
      <Container>
        <FlexTop />

        <FlexItem>
          <Img src={`${imageUrl}`} alt="Bonnie image" />
          <Title>{name}</Title>

          {films && films.map((film, i) => <FilmBtn key={i}>{film}</FilmBtn>)}

          <FlexMargin>
            {mainYn ? (
              <Link to={`character/${id}`} state={{ id }}>
                <ButtonA onClick={onClick}>More</ButtonA>
              </Link>
            ) : (
              <ButtonA onClick={onClick}>More</ButtonA>
            )}
          </FlexMargin>
        </FlexItem>
      </Container>
    </>
  );
};

export default Card;
