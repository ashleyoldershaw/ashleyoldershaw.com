import styled from "styled-components";
import {
  dark_mode_contrast,
  dark_mode_secondary_background,
  light_mode_text,
} from "../styling/Themes";

export const StyledBlogImageWrapper = styled.div`
  span {
    width: 100% !important;
    max-height: 75vh;
  }
  display: flex;
  align-items: center;
  margin: 30px 0px;
  flex-direction: column;
`;

export const StyledArticle = styled.article`
  display: flex;
  flex-direction: column;
`;

export const StyledBlogContent = styled.div`
  border: 1px solid red;
  @media (prefers-color-scheme: light) {
    border-color: ${light_mode_text};
  }
  @media (prefers-color-scheme: dark) {
    background-color: ${dark_mode_secondary_background};
    border-color: ${dark_mode_contrast};
  }
  padding: 0 1em;
`;

export const TimingSection = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 0 2em;
`;
