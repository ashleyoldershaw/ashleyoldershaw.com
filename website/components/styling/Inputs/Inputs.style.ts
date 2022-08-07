import styled from "styled-components";
import { borderRadius, borderWidth } from "../Layout";
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

const TextInputStyle = `
  font-family: ${sansFontFamily};
  font-size: 1.5em;
  padding-left:  0.5em;
  padding-right:  0.5em;

  background-color: unset;
  border-style: solid;
  border-width: ${borderWidth}px;
  border-radius: ${borderRadius};

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

export const InputStyle = styled.input`
  ${TextInputStyle}
  height: 2em;
`;

export const TextAreaStyle = styled.textarea`
  ${TextInputStyle}
  min-height: 4em;
  overflow: auto;
  padding-top: 0.5em;
`;
