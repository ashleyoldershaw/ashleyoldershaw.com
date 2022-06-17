import styled from "styled-components";
import { borderRadius, horizontalMargin } from "../styling/Layout";
import {
  dark_mode_contrast,
  dark_mode_secondary_background,
  light_mode_contrast,
  light_mode_secondary_background,
} from "../styling/Themes";

export const BlogPostList = styled.div`
  margin: auto;
  border-radius: ${borderRadius};

  @media (prefers-color-scheme: light) {
    background-color: ${light_mode_secondary_background};
  }
  @media (prefers-color-scheme: dark) {
    background-color: ${dark_mode_secondary_background};
  }

  > div {
    padding: 5px;
    padding-bottom: 10px;
    border-bottom: 1px solid red;
    @media (prefers-color-scheme: light) {
      border-color: ${light_mode_contrast};
    }
    @media (prefers-color-scheme: dark) {
      border-color: ${dark_mode_contrast};
    }
  }
  > div:last-child {
    border-bottom: none;
  }
  border: 1px solid red;
  @media (prefers-color-scheme: light) {
    border-color: ${light_mode_contrast};
  }
  @media (prefers-color-scheme: dark) {
    border-color: ${dark_mode_contrast};
  }
`;

export const BlogpostPreviewStyle = styled.div`
  h3:hover {
    text-decoration: underline;
  }
  padding: ${horizontalMargin};
`;
