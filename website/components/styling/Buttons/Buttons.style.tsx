import styled from "styled-components";
import { borderRadius, borderWidth } from "../Layout";

export const StyledNavButton = styled.button`
  border: ${borderWidth}px solid ${(props) => props.theme.contrast};
  background-color: ${(props) => props.theme.secondary_background};

  border-radius: ${borderRadius};

  margin: 10px;

  :hover {
    text-decoration: underline;
  }

  :focus {
    border-color: ${(props) => props.theme.accent};
  }
`;
