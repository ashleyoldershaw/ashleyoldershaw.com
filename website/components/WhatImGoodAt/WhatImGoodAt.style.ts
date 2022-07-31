import styled from "styled-components";
import { borderRadius, horizontalMargin } from "../styling/Layout";
import { dark_mode_contrast, light_mode_contrast } from "../styling/Themes";

export const WhatImGoodAtSectionStyle = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SkillDivStyle = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  border-style: solid;
  border-width: 0 1px;
  min-height: 130px;
  justify-content: space-around;
  @media (prefers-color-scheme: light) {
    border-color: ${light_mode_contrast};
    background-color: #ffffff;
  }
  @media (prefers-color-scheme: dark) {
    background-color: #000000;
    border-color: ${dark_mode_contrast};
  }
  padding: 0 5px;
  p {
    width: 6.5em;
    text-align: center;
  }
  border-radius: ${borderRadius};
`;

export const SkillsetCollection = styled.div`
  margin-top: ${horizontalMargin};
  display: flex;
  flex-wrap: wrap;
  gap: 1em;
  justify-content: center;
  padding-bottom: 10px;
`;
