import styled from "styled-components";
import { dark_mode_text, light_mode_text } from "../styling/Themes";

export const BlogPostList = styled.div`
  margin: auto;

  > div {
    padding: 5px;
    padding-bottom: 10px;
    border-bottom: 1px solid red;
    @media (prefers-color-scheme: light) {
      border-color: ${light_mode_text};
    }
    @media (prefers-color-scheme: dark) {
      border-color: ${dark_mode_text};
    }
  }
  > div:last-child {
    border-bottom: none;
  }
  border: 1px solid red;
  @media (prefers-color-scheme: light) {
    border-color: ${light_mode_text};
  }
  @media (prefers-color-scheme: dark) {
    border-color: ${dark_mode_text};
  }
`;

export const BlogpostPreviewStyle = styled.div`
  h3:hover {
    text-decoration: underline;
  }
`;
