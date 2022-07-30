import styled from "styled-components";
import { displays } from "./Display";
import { dark_mode_accent, light_mode_accent } from "./Themes";

const titleFontFamily = `'Merriweather', serif`;
export const sansFontFamily = `'Merriweather Sans', sans-serif`;

export const PageTitle = styled.h1`
  font-family: ${titleFontFamily};
  font-weight: 100;
  text-align: center;

  // large screen size
  font-size: 7em;

  @media (max-width: ${displays.laptopL}) {
    font-size: 4em;
  }

  @media (max-width: ${displays.tablet}) {
    font-size: 3em;
  }

  @media (max-width: ${displays.mobileL}) {
    font-size: 2.5em;
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
  font-weight: 100;
  text-align: center;

  // large screen size
  font-size: 3em;
  @media (max-width: ${displays.mobileL}) {
    font-size: 1.5em;
  }

  @media (max-width: ${displays.laptopL}) {
    font-size: 2em;
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
    font-size: 2em;
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
    font-size: 1.5em;
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
  font-weight: 200;

  @media (max-width: ${displays.mobileL}) {
    text-align: center;
    font-size: 1em;
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
  @media (max-width: ${displays.mobileL}) {
    text-align: center;
    font-size: 1.5em;
  }
`;
