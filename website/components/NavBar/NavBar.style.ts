import styled from "styled-components";
import { displays } from "../styling/Display";
import { borderWidth, horizontalMargin } from "../styling/Layout";
import {
  dark_mode_contrast,
  dark_mode_secondary_background,
  light_mode_contrast,
  light_mode_secondary_background,
} from "../styling/Themes";

export const NavBarStyle = styled.div`
  display: flex;
  align-items: center;
  gap: 10%;
  padding: 1em ${horizontalMargin};
  a {
    color: unset;
    text-decoration: unset;
  }
  h2,
  p {
    padding: 0;
    margin: 0;
  }
  border-width: ${borderWidth}px;
  border-style: none none solid none;

  @media (min-width: ${displays.desktop}) {
    padding: 2em ${horizontalMargin};

    h2 {
      font-size: 3.5em;
    }
    p {
      font-size: 1.5em;
    }
  }

  @media (max-width: ${displays.mobileL}) {
    flex-direction: column;
    gap: 0;
    position: relative;

    div {
      flex-direction: column;
      align-items: center;
      gap: 10px;
      p {
        margin: 0;
      }
    }
  }

  @media (prefers-color-scheme: light) {
    border-color: ${light_mode_contrast};
    background-color: ${light_mode_secondary_background};
  }
  @media (prefers-color-scheme: dark) {
    border-color: ${dark_mode_contrast};
    background-color: ${dark_mode_secondary_background};
  }

  z-index: 1;
  position: -webkit-sticky;
  position: sticky;
  top: 0;
`;

export const NavBarLinks = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-grow: 1;
  gap: 1em 5%;
  p {
    margin: 0 10px;
  }
`;
