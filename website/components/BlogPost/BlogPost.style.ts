import styled from "styled-components";

export const StyledBlogImageWrapper = styled.div`
  span {
    width: 100% !important;
  }
  display: flex;
  align-items: center;
  margin: 30px 0px;
  flex-direction: column;
`;

export const StyledArticle = styled.article`
  margin: auto;
  display: flex;
  flex-direction: column;
  max-width: 60em;
`;

export const TimingSection = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 0 2em;
`;
