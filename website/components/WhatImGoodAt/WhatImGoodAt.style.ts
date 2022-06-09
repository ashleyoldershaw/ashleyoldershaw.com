import styled from "styled-components";
import { dark_mode_text, light_mode_text } from "../styling/Themes";

export const SkillDiv = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  @media (prefers-color-scheme: light) {
    border: solid 1px ${light_mode_text};
  }
  @media (prefers-color-scheme: dark) {
    border: solid 1px ${dark_mode_text};
  }
  padding: 20px 5px;
  p {
    width: 6.5em;
    text-align: center;
  }
`;

export const SkillsetCollection = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1em;
  justify-content: center;
  padding-bottom: 10px;
`;
