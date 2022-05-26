import Image from "next/image";
import styled from "styled-components";

export const StyledBlogImage = styled(Image)`
  justify-self: center;
`;

export const StyledArticle = styled.article`
  display: flex;
  flex-direction: column;
`;

export const TimingSection = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;
