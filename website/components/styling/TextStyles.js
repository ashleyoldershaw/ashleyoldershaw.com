import styled from "styled-components";
import { displays } from "./Display";

const cursiveFontFamily = `'Caveat', cursive`;
const sansFontFamily = `'Montserrat', sans-serif`;

export const PageTitle = styled.h1`
  font-family: ${cursiveFontFamily};
  font-size: 64px;
  font-weight: 100;
  @media (max-width: ${displays.tablet}) {
    font-size: 48px;
  }
`;

export const PageSubtitle = styled.h2`
  font-family: ${cursiveFontFamily};
  font-size: 32px;
  font-weight: 100;
`;

export const SectionTitle = styled.h2`
  font-family: ${cursiveFontFamily};
  font-size: 42px;
  font-weight: 100;
`;

export const SubSectionTitle = styled.h3`
  font-family: ${sansFontFamily};
  font-size: 32px;
  @media (max-width: ${displays.mobileL}) {
    font-size: 26px;
  }
`;

export const SubSubSectionTitle = styled.h3`
  font-family: ${sansFontFamily};
  font-size: 28px;
`;

export const BodyText = styled.p`
  font-family: ${sansFontFamily};
  font-size: 20px;
`;
