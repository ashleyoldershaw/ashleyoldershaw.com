import styled from "styled-components";
import { borderRadius, horizontalMargin } from "../styling/Layout";
import {
  dark_mode_contrast,
  dark_mode_secondary_background,
  light_mode_contrast,
  light_mode_secondary_background,
} from "../styling/Themes";

export const HomepageSectionStyle = styled.div`
  border-radius: ${borderRadius};
  border: 1px solid red;
  @media (prefers-color-scheme: light) {
    border-color: ${light_mode_contrast};
  }
  @media (prefers-color-scheme: dark) {
    border-color: ${dark_mode_contrast};
  }

  @media (prefers-color-scheme: light) {
    background-color: ${light_mode_secondary_background};
  }
  @media (prefers-color-scheme: dark) {
    background-color: ${dark_mode_secondary_background};
  }

  margin: ${horizontalMargin} 0;

  > * {
    padding: ${horizontalMargin};

    border-top: 1px solid red;
    @media (prefers-color-scheme: light) {
      border-color: ${light_mode_contrast};
    }
    @media (prefers-color-scheme: dark) {
      border-color: ${dark_mode_contrast};
    }
  }
  > *:first-child {
    border-top: none;
    padding-top: min(${horizontalMargin}, 1em);
    padding-bottom: min(${horizontalMargin}, 1em);
  }
`;
