import styled from "styled-components";
import {
  dark_mode_accent,
  dark_mode_text,
  light_mode_accent,
} from "../styling/Themes";

export const BlogPostList = styled.div`
  margin: auto;
  padding: 5px;
  div {
    padding-bottom: 10px;
    border-bottom: 3px solid red;
    @media (prefers-color-scheme: light) {
      border-color: ${light_mode_accent}80;
    }
    @media (prefers-color-scheme: dark) {
      border-color: ${dark_mode_accent}80;
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
