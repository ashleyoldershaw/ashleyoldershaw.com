import styled from "styled-components";
import { borderRadius, borderWidth } from "../Layout";
import { sansFontFamily } from "../TextStyles";

const TextInputStyle = (props) => `
  font-family: ${sansFontFamily};
  font-size: 1.5em;
  padding-left:  0.5em;
  padding-right:  0.5em;

  background-color: ${props.theme.secondary_background};
  border: ${borderWidth}px solid ${props.theme.contrast};
  color: ${props.theme.text};

  border-radius: ${borderRadius};

  margin: 10px;
  ::placeholder {
    color: ${props.theme.contrast};
  }

  :focus {
    outline: none;
    border-color:${props.theme.accent};
  }
`;
export const InputStyle = styled.input`
  ${(props) => TextInputStyle(props)}
  height: 2em;
`;

export const TextAreaStyle = styled.textarea`
  ${(props) => TextInputStyle(props)}
  min-height: 4em;
  overflow: auto;
  padding-top: 0.5em;
`;
