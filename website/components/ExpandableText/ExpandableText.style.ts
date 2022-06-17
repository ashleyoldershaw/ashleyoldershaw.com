import styled from "styled-components";
import { displays } from "../styling/Display";
import { borderRadius } from "../styling/Layout";
import {
  dark_mode_background,
  dark_mode_contrast,
  dark_mode_secondary_background,
  dark_mode_text,
  light_mode_accent,
  light_mode_contrast,
  light_mode_secondary_background,
  light_mode_text,
} from "../styling/Themes";

export const ExpandableTextStyle = styled.div`
  display: flex;
  flex-direction: column;
  div {
    display: flex;
  }

  margin: 25px 25px 25px 25px;
  @media (max-width: ${displays.mobileL}) {
    margin: 3%;
  }
  > div {
    border-top: 1px solid red;
    flex-direction: column;
    @media (prefers-color-scheme: light) {
      border-color: ${light_mode_contrast};
    }
    @media (prefers-color-scheme: dark) {
      border-color: ${dark_mode_contrast};
    }
    p {
      padding-right: 25px;
    }
  }
  > div:first-of-type {
    border-top: none;
  }

  > p {
    padding: 0 25px;
  }

  justify-content: center;

  @media (prefers-color-scheme: light) {
    border-color: ${light_mode_contrast};
    color: ${light_mode_text};
    background-color: ${light_mode_secondary_background};
  }
  @media (prefers-color-scheme: dark) {
    border-color: ${dark_mode_contrast};
    background-color: ${dark_mode_secondary_background};
    color: ${dark_mode_text};
  }
  border-style: solid;
  border-width: 1px;
  border-radius: ${borderRadius};
  transition: all 0.4s ease;
`;

export const ExpandButton = styled.button`
  border-width: 1px;

  @media (prefers-color-scheme: light) {
    border-color: ${light_mode_accent};
    background-color: ${light_mode_secondary_background};
    color: ${light_mode_text};
  }
  @media (prefers-color-scheme: dark) {
    border-color: ${dark_mode_contrast};
    background-color: ${dark_mode_background};
    color: ${dark_mode_text};
  }
  border-radius: ${borderRadius};
  align-self: center;
  margin: 25px;
  width: 25px;
  height: 25px;
  transition: all 0.4s ease;
  border-style: solid;
  border-width: 1px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: ${displays.mobileL}) {
    margin-left: 5px;
  }
`;

export const ExpandableTextChildrenStyle = styled.div`
  flex-direction: column;
  margin-left: 35px;

  @media (max-width: ${displays.mobileL}) {
    margin-left: 5px;
  }
  p {
    text-align: left;
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
