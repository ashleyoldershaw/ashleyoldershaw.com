import styled from "styled-components";
import { horizontalMargin } from "../styling/Layout";
import { dark_mode_text, light_mode_text } from "../styling/Themes";

export const HomepageSectionStyle = styled.div`
  border: 1px solid red;
  @media (prefers-color-scheme: light) {
    border-color: ${light_mode_text};
  }
  @media (prefers-color-scheme: dark) {
    border-color: ${dark_mode_text};
  }

  margin: ${horizontalMargin} 0;

  > * {
    padding: ${horizontalMargin};

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
