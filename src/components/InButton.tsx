import {
  InButtonContainer,
  InButtonDiv40,
  InButtonDiv32,
  InButtonDiv24,
  GlobalStyles,
} from "../styles/InButtonStyled";

// types
type InButtonProps = {
  str: string;
};

// Go 버튼
const InButton: React.FC<InButtonProps> = ({ str }) => {
  return (
    <>
      <GlobalStyles />
      <InButtonContainer>
        <InButtonDiv40>
          <InButtonDiv32>
            <InButtonDiv24>
              <span className="text-6xl">{str}</span>
            </InButtonDiv24>
          </InButtonDiv32>
        </InButtonDiv40>
      </InButtonContainer>
    </>
  );
};

export default InButton;
