import styled from "styled-components";
import { displays } from "../styling/Display";

export const TitleStyle = styled.div`
  display: flex;
  align-items: center;
  min-width: 100px;
  @media (max-width: ${displays.mobileL}) {
    justify-content: center;
  }
`;

export const WhatIDoStyle = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2em;
  @media (max-width: ${displays.laptop}) {
    flex-direction: column;
    gap: 0;
  }
`;
