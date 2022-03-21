import styled from "styled-components";
import { sansFontFamily } from "./TextStyles";
import {
  dark_mode_accent,
  dark_mode_contrast,
  dark_mode_text,
  light_mode_accent,
  light_mode_contrast,
  light_mode_text,
} from "./Themes";

const InputStyle = styled.input`
  font-family: ${sansFontFamily};
  font-size: 25px;
  border-radius: 10px;
  height: 35px;

  background-color: unset;
  border-style: solid;
  border-width: 1px;

  width: 100%;

  margin: 10px;

  @media (prefers-color-scheme: light) {
    border-color: ${light_mode_accent};
    color: ${light_mode_text};
  }
  @media (prefers-color-scheme: dark) {
    border-color: ${dark_mode_accent};
    color: ${dark_mode_text};
  }

  :focus {
    outline: none;
    @media (prefers-color-scheme: light) {
      border-color: ${light_mode_contrast};
    }
    @media (prefers-color-scheme: dark) {
      border-color: ${dark_mode_contrast};
    }
  }
`;

export const CustomTextInput = ({
  placeholder = "",
  register,
  validation = {},
  name,
}) => {
  return (
    <InputStyle
      type="text"
      placeholder={placeholder}
      {...register(name, validation)}
    />
  );
};
