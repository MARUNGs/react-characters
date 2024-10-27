import {
  Title,
  h1ClassNm,
  BackgroundTitleImage,
  Container,
} from "../styles/HeaderStyled";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <Container>
        <BackgroundTitleImage />
        <Link to={`/`}>
          <Title className={h1ClassNm}>My Favorite Disney Characters</Title>
        </Link>
      </Container>
    </>
  );
}
