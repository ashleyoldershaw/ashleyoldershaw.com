import styled from "styled-components";
import { displays } from "./Display";
import { dark_mode_accent, light_mode_accent } from "./Themes";

const titleFontFamily = `'Merriweather', serif`;
export const sansFontFamily = `'Merriweather+Sans', sans-serif`;

export const PageTitle = styled.h1`
  font-family: ${titleFontFamily};
  font-size: 4em;
  font-weight: 100;
  @media (max-width: ${displays.tablet}) {
    font-size: 3em;
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
  font-family: ${titleFontFamily};
  font-size: 2em;
  font-weight: 100;
  @media (max-width: ${displays.mobileL}) {
    text-align: center;
  }
`;

export const SectionTitle = styled.h2`
  font-family: ${titleFontFamily};
  font-size: 2.5em;
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
  font-family: ${titleFontFamily};
  font-size: 2em;
  font-weight: 100;

  @media (prefers-color-scheme: light) {
    color: ${light_mode_accent};
  }
  @media (prefers-color-scheme: dark) {
    color: ${dark_mode_accent};
  }
  @media (max-width: ${displays.mobileL}) {
    font-size: 26px;
    text-align: center;
  }
`;

export const SubSubSectionTitle = styled.h3`
  font-family: ${titleFontFamily};
  font-size: 1.75em;
  font-weight: 100;

  @media (prefers-color-scheme: light) {
    color: ${light_mode_accent};
  }
  @media (prefers-color-scheme: dark) {
    color: ${dark_mode_accent};
  }

  @media (max-width: ${displays.mobileL}) {
    font-size: 1.5em;
  }

  @media (max-width: ${displays.mobileL}) {
    text-align: center;
  }
`;

export const BodyText = styled.p`
  font-family: ${sansFontFamily};
  font-size: 1.25em;
  font-weight: 400;

  @media (max-width: ${displays.mobileL}) {
    text-align: center;
  }
`;

export const TextDetail = styled.p`
  font-family: ${titleFontFamily};
  font-size: 0.75em;
  font-weight: 400;

  @media (max-width: ${displays.mobileL}) {
    text-align: center;
  }
`;

export const Emphasis = styled.p`
  font-family: ${titleFontFamily};
  font-size: 2em;
  font-weight: 400;
  text-align: center;
  font-style: italic;
`;
