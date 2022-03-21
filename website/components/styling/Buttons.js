import styled from "styled-components";
import { BodyText } from "./TextStyles";
import {
  dark_mode_background,
  dark_mode_text,
  light_mode_background,
  light_mode_text,
} from "./Themes";

const StyledNavButton = styled.button`
  @media (prefers-color-scheme: light) {
    border-color: ${light_mode_text};
    background-color: ${light_mode_background};
    color: ${light_mode_text};
  }
  @media (prefers-color-scheme: dark) {
    border-color: ${dark_mode_text};
    background-color: ${dark_mode_background};
    color: ${dark_mode_text};
  }
  border-radius: 5px;
  border-style: solid;
  border-width: 1px;

  margin: 10px;

  :hover {
    text-decoration: underline;
  }
`;

export const NavButton = ({ text, onClick }) => {
  return (
    <StyledNavButton onClick={onClick}>
      <BodyText style={{ margin: "15px" }}>{text}</BodyText>
    </StyledNavButton>
  );
};
