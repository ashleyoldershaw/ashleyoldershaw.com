import styled from "styled-components";
import { sansFontFamily } from "../TextStyles";
import {
  dark_mode_accent,
  dark_mode_contrast,
  dark_mode_secondary_background,
  dark_mode_text,
  light_mode_accent,
  light_mode_contrast,
  light_mode_secondary_background,
  light_mode_text,
} from "../Themes";

export const InputStyle = styled.input`
  font-family: ${sansFontFamily};
  font-size: 1.5em;
  height: 2em;
  padding: 0 0.5em;

  background-color: unset;
  border-style: solid;
  border-width: 1px;

  width: 100%;

  margin: 10px;

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

  ::placeholder {
    @media (prefers-color-scheme: light) {
      color: ${light_mode_contrast};
    }
    @media (prefers-color-scheme: dark) {
      color: ${dark_mode_contrast};
    }
  }

  :focus {
    outline: none;
    @media (prefers-color-scheme: light) {
      border-color: ${light_mode_accent};
    }
    @media (prefers-color-scheme: dark) {
      border-color: ${dark_mode_accent};
    }
  }
`;
