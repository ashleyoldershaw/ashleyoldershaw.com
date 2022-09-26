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

export const ToggleButtonBack = styled.div`
  height: 1em;
  width: 2.5em;
  border: ${borderWidth}px solid ${(props) => props.theme.contrast};
  transition: all 0.2s;
  display: flex;
`;

export const ToggleButtonFront = styled.div`
  height: 1em;
  width: 1em;
  background-color: ${(props) => props.theme.contrast};
`;

export const OnBackground = styled.div`
  height: 1em;
  width: ${(props) => (props.toggled ? 1.5 : 0)}em;
  background-color: ${(props) => props.theme.accent};

  transition: all 0.2s;
`;

export const OffBackground = styled.div`
  height: 1em;
  width: ${(props) => (props.toggled ? 0 : 1.5)}em;
  background-color: ${(props) => props.theme.secondary_background};

  transition: all 0.2s;
  transform: scale(${(props) => (props.toggled ? 0 : 1)}, 1);
`;
