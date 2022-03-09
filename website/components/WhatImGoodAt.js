import Image from "next/image";
import styled from "styled-components";
import { urlFor } from "./sanity";
import { SubSectionTitle } from "./styling/TextStyles";
import { dark_mode_text, light_mode_text, text_colour } from "./styling/Themes";

const ElementStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (prefers-color-scheme: light) {
    body {
      border: solid 3px ${light_mode_text};
    }
  }
  @media (prefers-color-scheme: dark) {
    body {
      border: solid 3px ${dark_mode_text};
    }
  }
  border: solid 3px ${text_colour};
  padding: 20px;
  border-radius: 25px;
`;

const ComponentStyle = styled.div`
  display: flex;
  gap: 1em;
  justify-content: center;
`;

export const WhatImGoodAtItems = ({ sanity_input }) => {
  return (
    <ComponentStyle>
      {sanity_input.map((section, i) => (
        <ElementStyle key={i}>
          <Image
            width={120}
            height={120}
            src={urlFor(section.thumbnail).url()}
            objectFit="contain"
            alt={section.alt}
          />
          <SubSectionTitle style={{ margin: 0 }}>
            {section.title}
          </SubSectionTitle>
        </ElementStyle>
      ))}
    </ComponentStyle>
  );
};
