import styled from "styled-components";
import { borderRadius, borderWidth } from "../Layout";
import { BodyText } from "../TextStyles";

export const StyledCustomButton = styled.button`
  border: ${borderWidth}px solid ${(props) => props.theme.contrast};
  background-color: ${(props) => props.theme.secondary_background};

  border-radius: ${borderRadius};

  margin: 0.75em;

  ${BodyText} {
    color: ${(props) => props.theme.text};
    font-size: 1.25em;
  }

  :hover {
    text-decoration: underline;
  }

  :focus {
    border-color: ${(props) => props.theme.accent};
  }
`;
