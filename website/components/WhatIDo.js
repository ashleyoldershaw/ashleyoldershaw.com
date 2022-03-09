import Image from "next/image";
import styled from "styled-components";
import { urlFor } from "./sanity";
import { BodyText, SubSectionTitle } from "./styling/TextStyles";

const TitleStyle = styled.div`
  display: flex;
  gap: 1em;
`;

export const WhatIDoSection = ({ sanity_input }) => {
  return sanity_input.map((section) => (
    <>
      <TitleStyle>
        <Image
          width={100}
          height={100}
          src={urlFor(section.thumbnail).url()}
          objectFit="contain"
        />
        <SubSectionTitle>{section.title}</SubSectionTitle>
      </TitleStyle>
      <BodyText>{section.text_body}</BodyText>
    </>
  ));
};
