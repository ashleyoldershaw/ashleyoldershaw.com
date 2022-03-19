import Image from "next/image";
import styled from "styled-components";
import { urlFor } from "./sanity";
import { displays } from "./styling/Display";
import { BodyText, SubSectionTitle } from "./styling/TextStyles";

const TitleStyle = styled.div`
  display: flex;
  align-items: center;
  gap: 1em;

  @media (max-width: ${displays.mobileL}) {
    justify-content: center;
  }
`;

export const WhatIDoSection = ({ sanity_input }) => {
  return sanity_input.map((section, i) => (
    <div key={i}>
      <TitleStyle>
        <Image
          width={100}
          height={100}
          src={urlFor(section.thumbnail).url()}
          objectFit="contain"
          alt={section.alt}
        />
        <SubSectionTitle>{section.title}</SubSectionTitle>
      </TitleStyle>
      <BodyText>{section.text_body}</BodyText>
    </div>
  ));
};
