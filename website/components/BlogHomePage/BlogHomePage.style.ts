import styled from "styled-components";
import {
  dark_mode_text,
  light_mode_accent,
  light_mode_accent_contrast,
  light_mode_text,
} from "../styling/Themes";

export const BlogPostList = styled.div`
  margin: auto;
  div {
    border-bottom: 1px solid red;
    @media (prefers-color-scheme: light) {
      border-color: ${light_mode_accent};
    }
    @media (prefers-color-scheme: dark) {
      border-color: ${dark_mode_text};
    }
  }
  div:last-child {
    border-bottom: none;
  }
`;

export const BlogpostPreviewStyle = styled.div`
  h3:hover {
    text-decoration: underline;
  }
`;
