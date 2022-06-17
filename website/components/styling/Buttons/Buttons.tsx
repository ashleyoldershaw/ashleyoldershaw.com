import { BodyText } from "../TextStyles";
import { StyledNavButton } from "./Buttons.style";

export const NavButton = ({ text, onClick = () => {}, type = "button" }) => {
  return (
    <StyledNavButton onClick={onClick} type={type}>
      <BodyText style={{ margin: "15px" }}>{text}</BodyText>
    </StyledNavButton>
  );
};
