import styled from "styled-components";
import { borderRadius, borderWidth } from "../styling/Layout";
import { BodyText } from "../styling/TextStyles";

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
  ${BodyText} {
    text-align: left;
  }
`;

export const StyledBlogContent = styled.div`
  border-radius: ${borderRadius};
  border: ${borderWidth}px solid ${(props) => props.theme.contrast};
  background-color: ${(props) => props.theme.secondary_background};
  display: flex;
  flex-direction: column;
  gap: 1em;
  padding: 0 1em;
`;

export const TimingSection = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 0 2em;
`;
