import styled from "styled-components";

const cursiveFontFamily = `'Caveat', cursive`;
const sansFontFamily = `'Montserrat', sans-serif`;

export const PageTitle = styled.h1`
  font-family: ${cursiveFontFamily};
  font-size: 64px;
`;

export const PageSubtitle = styled.h2`
  font-family: ${cursiveFontFamily};
  font-size: 32px;
`;

export const SectionTitle = styled.h2`
  font-family: ${cursiveFontFamily};
  font-size: 40px;
  font-weight: 10;
`;

export const SubSectionTitle = styled.h3`
  font-family: ${sansFontFamily};
  font-size: 32px;
`;

export const SubSubSectionTitle = styled.h3`
  font-family: ${sansFontFamily};
  font-size: 28px;
`;

export const BodyText = styled.p`
  font-family: ${sansFontFamily};
  font-size: 25px;
`;
