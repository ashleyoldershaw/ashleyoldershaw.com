import styled from "styled-components";
import { horizontalMargin } from "../styling/Layout";
import { dark_mode_contrast, light_mode_contrast } from "../styling/Themes";

export const WhatImGoodAtSectionStyle = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SkillDiv = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  border: solid 1px red;
  @media (prefers-color-scheme: light) {
    border-color: ${light_mode_contrast};
    background-color: #ffffff;
  }
  @media (prefers-color-scheme: dark) {
    border-color: ${dark_mode_contrast};
  }
  padding: 20px 5px;
  p {
    width: 6.5em;
    text-align: center;
  }
  border-radius: 30px;
`;

export const SkillsetCollection = styled.div`
  margin-top: ${horizontalMargin};
  display: flex;
  flex-wrap: wrap;
  gap: 1em;
  justify-content: center;
  padding-bottom: 10px;
`;
