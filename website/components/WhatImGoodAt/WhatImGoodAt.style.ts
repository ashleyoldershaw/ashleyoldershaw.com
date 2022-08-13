import styled from "styled-components";
import { borderRadius, borderWidth, horizontalMargin } from "../styling/Layout";

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
  border-color: ${(props) => props.theme.contrast};
  background-color: ${(props) => props.theme.full};
  border-width: 0 ${borderWidth}px;
  min-height: 130px;
  justify-content: space-around;
  padding: 0 5px;
  p {
    width: 6.5em;
    text-align: center;
  }
  border-radius: ${borderRadius};
`;

export const SkillDivWrapperStyle = styled.div`
  :hover {
    transform: scale(1.1);
  }
  transition-duration: 0.25s;
`;

export const SkillsetCollection = styled.div`
  margin-top: ${horizontalMargin};
  display: flex;
  flex-wrap: wrap;
  gap: 1em;
  justify-content: center;
  padding-bottom: 10px;
`;
