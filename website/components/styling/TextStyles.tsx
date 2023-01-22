import styled from "styled-components";
import { displays } from "./Display";

const titleFontFamily = `'Jost', serif`;
export const bodyFontFamily = `'Jost', sans-serif`;

export const PageTitle = styled.h1`
  font-family: ${titleFontFamily};
  font-weight: 200;
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

  color: ${(props) => props.theme.accent};

  @media (max-width: ${displays.mobileL}) {
    text-align: center;
  }
`;

export const PageSubtitle = styled.h2`
  font-family: ${titleFontFamily};
  font-weight: 200;
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
  font-weight: 200;

  color: ${(props) => props.theme.accent};

  @media (max-width: ${displays.mobileL}) {
    text-align: center;
    font-size: 2em;
  }
`;

export const SubSectionTitle = styled.h3`
  font-family: ${titleFontFamily};
  font-size: 2em;
  font-weight: 200;

  color: ${(props) => props.theme.accent};

  @media (max-width: ${displays.mobileL}) {
    font-size: 1.5em;
    text-align: center;
  }
`;

export const SubSubSectionTitle = styled.h3`
  font-family: ${titleFontFamily};
  font-size: 1.75em;
  font-weight: 200;

  color: ${(props) => props.theme.accent};

  @media (max-width: ${displays.mobileL}) {
    font-size: 1.5em;
  }

  @media (max-width: ${displays.mobileL}) {
    text-align: center;
  }
`;

export const BodyText = styled.p`
  font-family: ${bodyFontFamily};
  font-size: 1.25em;
  font-weight: 200;

  @media (max-width: ${displays.mobileL}) {
    text-align: center;
    font-size: 1em;
  }
`;

export const TextDetail = styled.p`
  font-family: ${titleFontFamily};
  font-size: 1em;
  font-weight: 300;

  @media (max-width: ${displays.mobileL}) {
    text-align: center;
  }
`;

export const Emphasis = styled.p`
  font-family: ${titleFontFamily};
  font-size: 2em;
  font-weight: 300;
  text-align: center;
  font-style: italic;
  @media (max-width: ${displays.mobileL}) {
    text-align: center;
    font-size: 1.5em;
  }
`;
