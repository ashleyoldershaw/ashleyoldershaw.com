import styled from "styled-components";
import { displays } from "./Display";
import { dark_mode_accent, light_mode_accent } from "./Themes";

const cursiveFontFamily = `'Caveat', cursive`;
export const sansFontFamily = `'Montserrat', sans-serif`;

export const PageTitle = styled.h1`
  font-family: ${cursiveFontFamily};
  font-size: 64px;
  font-weight: 100;
  @media (max-width: ${displays.tablet}) {
    font-size: 48px;
  }

  @media (prefers-color-scheme: light) {
    color: ${light_mode_accent};
  }
  @media (prefers-color-scheme: dark) {
    color: ${dark_mode_accent};
  }

  @media (max-width: ${displays.mobileL}) {
    text-align: center;
  }
`;

export const PageSubtitle = styled.h2`
  font-family: ${cursiveFontFamily};
  font-size: 32px;
  font-weight: 100;
  @media (max-width: ${displays.mobileL}) {
    text-align: center;
  }
`;

export const SectionTitle = styled.h2`
  font-family: ${cursiveFontFamily};
  font-size: 42px;
  font-weight: 100;

  @media (prefers-color-scheme: light) {
    color: ${light_mode_accent};
  }
  @media (prefers-color-scheme: dark) {
    color: ${dark_mode_accent};
  }

  @media (max-width: ${displays.mobileL}) {
    text-align: center;
  }
`;

export const SubSectionTitle = styled.h3`
  font-family: ${sansFontFamily};
  font-size: 32px;
  @media (max-width: ${displays.mobileL}) {
    font-size: 26px;
    text-align: center;
  }
`;

export const SubSubSectionTitle = styled.h3`
  font-family: ${sansFontFamily};
  font-size: 28px;
  @media (max-width: ${displays.mobileL}) {
    font-size: 22px;
  }

  @media (max-width: ${displays.mobileL}) {
    text-align: center;
  }
`;

export const BodyText = styled.p`
  font-family: ${sansFontFamily};
  font-size: 20px;
  font-weight: 400;

  @media (max-width: ${displays.mobileL}) {
    text-align: center;
  }
`;
