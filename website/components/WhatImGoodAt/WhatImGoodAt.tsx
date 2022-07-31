import Image from "next/image";
import { urlFor } from "../sanity";
import { TriangleDivider } from "../styling/Display";
import { BodyText, SubSubSectionTitle } from "../styling/TextStyles";
import { useTheme } from "../styling/Themes";
import { OptionalSmartLink } from "../utility/SmartLink";
import {
  SkillDivStyle,
  SkillsetCollection,
  WhatImGoodAtSectionStyle,
} from "./WhatImGoodAt.style";

export const SkillDiv = ({ children }) => {
  return (
    <div>
      <TriangleDivider
        direction="up"
        width={120}
        height={24}
        stroke_width={0.75}
        fill_light="#ffffff"
        fill_dark="#000000"
      />
      <SkillDivStyle>{children}</SkillDivStyle>
      <TriangleDivider
        direction="down"
        width={120}
        height={24}
        stroke_width={0.75}
        fill_light="#ffffff"
        fill_dark="#000000"
      />
    </div>
  );
};

export const WhatImGoodAtItems = ({ sanity_input }) => {
  const theme = useTheme();

  return sanity_input.map((skillset, i) => (
    <WhatImGoodAtSectionStyle key={i}>
      <div>
        <SubSubSectionTitle>{skillset.category}</SubSubSectionTitle>
        <BodyText>{skillset.subtitle}</BodyText>
      </div>
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
    </WhatImGoodAtSectionStyle>
  ));
};
