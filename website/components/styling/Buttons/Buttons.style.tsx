import styled from "styled-components";
import {
  dark_mode_contrast,
  dark_mode_secondary_background,
  dark_mode_text,
  light_mode_contrast,
  light_mode_secondary_background,
  light_mode_text,
} from "../Themes";

export const StyledNavButton = styled.button`
  @media (prefers-color-scheme: light) {
    border-color: ${light_mode_contrast};
    background-color: ${light_mode_secondary_background};
    color: ${light_mode_text};
  }
  @media (prefers-color-scheme: dark) {
    border-color: ${dark_mode_contrast};
    background-color: ${dark_mode_secondary_background};
    color: ${dark_mode_text};
  }
  border-style: solid;
  border-width: 1px;

  margin: 10px;

  :hover {
    text-decoration: underline;
  }
`;
