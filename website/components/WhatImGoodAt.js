import Image from "next/image";
import styled from "styled-components";
import { urlFor } from "./sanity";
import { BodyText, SubSubSectionTitle } from "./styling/TextStyles";
import { dark_mode_text, light_mode_text } from "./styling/Themes";
import { OptionalSmartLink } from "./utility/SmartLink";

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
  return sanity_input.map((skillset, i) => (
    <div key={i}>
      <SubSubSectionTitle>{skillset.category}</SubSubSectionTitle>
      <BodyText>{skillset.subtitle}</BodyText>
      <ComponentStyle>
        {skillset.info.map((section, i) => (
          <ElementStyle key={i}>
            <OptionalSmartLink href={section.url}>
              <Image
                width={120}
                height={120}
                src={urlFor(section.thumbnail).url()}
                objectFit="contain"
                alt={section.alt}
              />
            </OptionalSmartLink>
            <BodyText style={{ margin: 0 }}>{section.title}</BodyText>
          </ElementStyle>
        ))}
      </ComponentStyle>
    </div>
  ));
};
