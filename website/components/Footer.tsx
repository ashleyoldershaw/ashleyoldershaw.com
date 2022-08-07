import styled from "styled-components";
import { borderWidth, horizontalMargin } from "./styling/Layout";
import { TextDetail } from "./styling/TextStyles";
import {
  dark_mode_contrast,
  dark_mode_secondary_background,
  light_mode_contrast,
  light_mode_secondary_background,
} from "./styling/Themes";

const FooterStyle = styled.div`
  margin-top: auto;
  padding: 10px ${horizontalMargin} 10px ${horizontalMargin};
  margin-top: 10px;
  border-style: solid;
  border-width: ${borderWidth}px 0 0 0;

  @media (prefers-color-scheme: light) {
    border-color: ${light_mode_contrast};
    background-color: ${light_mode_secondary_background};
  }
  @media (prefers-color-scheme: dark) {
    border-color: ${dark_mode_contrast};
    background-color: ${dark_mode_secondary_background};
  }
`;

export const Footer = () => {
  return (
    <FooterStyle>
      <TextDetail>
        &copy; {new Date().getFullYear()} Ashley Oldershaw
      </TextDetail>
    </FooterStyle>
  );
};
