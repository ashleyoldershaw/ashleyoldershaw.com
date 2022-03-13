import Image from "next/image";
import styled from "styled-components";
import { urlFor } from "./sanity";
import { BodyText, SubSectionTitle } from "./styling/TextStyles";
import { dark_mode_text, light_mode_text, text_colour } from "./styling/Themes";
import { SmartLink } from "./utility/SmartLink";

const ElementStyle = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  @media (prefers-color-scheme: light) {
    border: solid 3px ${light_mode_text};
  }
  @media (prefers-color-scheme: dark) {
    border: solid 3px ${dark_mode_text};
  }
  padding: 20px;
  border-radius: 25px;
`;

const ComponentStyle = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1em;
  justify-content: center;
`;

export const WhatImGoodAtItems = ({ sanity_input }) => {
  return (
    <ComponentStyle>
      {sanity_input.map((section, i) => (
        <ElementStyle key={i}>
          <SmartLink href={section.url}>
            <Image
              width={120}
              height={120}
              src={urlFor(section.thumbnail).url()}
              objectFit="contain"
              alt={section.alt}
            />
          </SmartLink>
          <BodyText style={{ margin: 0 }}>{section.title}</BodyText>
        </ElementStyle>
      ))}
    </ComponentStyle>
  );
};
