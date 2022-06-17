import styled from "styled-components";
import { displays } from "../styling/Display";
import { horizontalMargin } from "../styling/Layout";
import {
  dark_mode_background,
  dark_mode_contrast,
  dark_mode_secondary_background,
  dark_mode_text,
  light_mode_accent,
  light_mode_background,
  light_mode_text,
} from "../styling/Themes";

export const ExpandableTextStyle = styled.div`
  display: flex;
  flex-direction: column;
  div {
    display: flex;
  }

  justify-content: center;

  @media (prefers-color-scheme: light) {
    color: ${light_mode_text};
  }
  @media (prefers-color-scheme: dark) {
    border-color: ${dark_mode_contrast};
    background-color: ${dark_mode_secondary_background};
    color: ${dark_mode_text};
  }
  border-style: solid;
  border-width: 1px;
  padding: ${horizontalMargin} 0;
  padding-right: 5px;
  margin: 5px 0;
  transition: all 0.4s ease;
`;

export const ExpandButton = styled.button`
  border-width: 1px;

  @media (prefers-color-scheme: light) {
    border-color: ${light_mode_accent};
    background-color: ${light_mode_background};
    color: ${light_mode_text};
  }
  @media (prefers-color-scheme: dark) {
    border-color: ${dark_mode_contrast};
    background-color: ${dark_mode_background};
    color: ${dark_mode_text};
  }
  align-self: center;
  margin: 25px 5px;
  width: 25px;
  height: 25px;
  transition: all 0.4s ease;
  border-style: solid;
  border-width: 1px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ExpandableTextChildrenStyle = styled.div`
  flex-direction: column;
  margin-left: 35px;

  @media (max-width: ${displays.mobileL}) {
    margin-left: 5px;
  }
`;

export const ExpandButtonLabel = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  p {
    text-align: left;
  }
`;
