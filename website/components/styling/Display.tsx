import styled from "styled-components";
import { horizontalMargin } from "./Layout";

export const displays = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "425px",
  tablet: "768px",
  laptop: "1024px",
  laptopL: "1440px",
  desktop: "2560px",
};

export const TextBasedWidth = styled.div`
  max-width: 60em;
  margin: auto;
`;

export const PageTitleStyle = styled.div`
  @media (max-width: ${displays.mobileL}) {
    padding: 0 ${horizontalMargin};
  }
`;
