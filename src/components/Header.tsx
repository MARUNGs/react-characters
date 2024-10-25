import {
  Title,
  h1ClassNm,
  BackgroundTitleImage,
  Container,
} from "../styles/HeaderStyled";

export default function Header() {
  return (
    <>
      <Container>
        <BackgroundTitleImage />
        <Title className={h1ClassNm}>My Favorite Disney Characters</Title>
      </Container>
    </>
  );
}
