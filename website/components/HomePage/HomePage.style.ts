import { dark_mode_text, light_mode_text } from "../styling/Themes";
import styled from "styled-components";

export const HomepageSectionStyle = styled.div`
  border: 1px solid red;
  @media (prefers-color-scheme: light) {
    border-color: ${light_mode_text};
  }
  @media (prefers-color-scheme: dark) {
    border-color: ${dark_mode_text};
  }
  margin-bottom: 10px;

  > * {
    padding-left: 5px;
    padding-right: 5px;
    border-top: 1px solid red;
    @media (prefers-color-scheme: light) {
      border-color: ${light_mode_text};
    }
    @media (prefers-color-scheme: dark) {
      border-color: ${dark_mode_text};
    }
  }
  > *:first-child {
    border-top: none;
  }
`;
