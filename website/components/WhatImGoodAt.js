import Image from "next/image";
import styled from "styled-components";
import { urlFor } from "./sanity";
import { SubSectionTitle } from "./styling/TextStyles";

const ElementStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ComponentStyle = styled.div`
  display: flex;
  gap: 1em;
  justify-content: center;
`;

export const WhatImGoodAtItems = ({ sanity_input }) => {
  return (
    <ComponentStyle>
      {sanity_input.map((section) => (
        <ElementStyle>
          <Image
            width={100}
            height={100}
            src={urlFor(section.thumbnail).url()}
            objectFit="contain"
          />
          <SubSectionTitle>{section.title}</SubSectionTitle>
        </ElementStyle>
      ))}
    </ComponentStyle>
  );
};
