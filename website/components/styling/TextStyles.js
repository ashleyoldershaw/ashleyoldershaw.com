import styled from "styled-components";

const cursiveFontFamily = `'Caveat', cursive`;
const sansFontFamily = `'Smooch Sans', sans-serife`;

export const PageTitle = styled.h1`
  font-family: ${cursiveFontFamily};
  font-size: 64px;
  font-weight: 10;
`;

export const PageSubtitle = styled.h2`
  font-family: ${cursiveFontFamily};
  font-size: 32px;
  font-weight: 10;
`;

export const BodyText = styled.p`
  font-family: ${sansFontFamily};
  font-weight: 400;
  font-size: 25px;
`;
