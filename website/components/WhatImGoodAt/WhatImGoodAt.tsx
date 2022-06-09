import Image from "next/image";
import { urlFor } from "../sanity";
import { BodyText, SubSubSectionTitle } from "../styling/TextStyles";
import { useTheme } from "../styling/Themes";
import { OptionalSmartLink } from "../utility/SmartLink";
import { SkillsetCollection, SkillDiv } from "./WhatImGoodAt.style";

export const WhatImGoodAtItems = ({ sanity_input }) => {
  const theme = useTheme();

  return sanity_input.map((skillset, i) => (
    <div key={i}>
      <SubSubSectionTitle>{skillset.category}</SubSubSectionTitle>
      <BodyText>{skillset.subtitle}</BodyText>
      <SkillsetCollection>
        {skillset.info.map((section, i) => (
          <SkillDiv key={i}>
            <OptionalSmartLink href={section.url}>
              <Image
                width={80}
                height={80}
                src={urlFor(
                  theme === "dark"
                    ? section.dark_thumbnail || section.thumbnail
                    : section.thumbnail
                ).url()}
                objectFit="contain"
                alt={section.alt}
              />
            </OptionalSmartLink>
            <BodyText style={{ margin: 0 }}>{section.title}</BodyText>
          </SkillDiv>
        ))}
      </SkillsetCollection>
    </div>
  ));
};
