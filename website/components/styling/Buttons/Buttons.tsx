import { BodyText } from "../TextStyles";
import { StyledCustomButton } from "./Buttons.style";

export const CustomButton = ({ text, onClick = () => {}, type = "button" }) => {
  return (
    <StyledCustomButton onClick={onClick} type={type}>
      <BodyText style={{ margin: "15px" }}>{text}</BodyText>
    </StyledCustomButton>
  );
};
