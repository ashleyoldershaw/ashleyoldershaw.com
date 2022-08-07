import Image from "next/image";
import { urlFor } from "../sanity";
import { TriangleDivider } from "../styling/Display";
import { BodyText, SubSubSectionTitle } from "../styling/TextStyles";
import { useTheme } from "../styling/Themes";
import { OptionalSmartLink } from "../utility/SmartLink";
import {
  SkillDivStyle,
  SkillDivWrapperStyle,
  SkillsetCollection,
  WhatImGoodAtSectionStyle,
} from "./WhatImGoodAt.style";

export const SkillDiv = ({ children }) => {
  // hexagonal dimensions, height of isoscoles triangle of a 3 adjacent regular hexagon vertices
  const ratio = Math.sqrt(3) / 6;
  return (
    <SkillDivWrapperStyle>
      <TriangleDivider
        direction="up"
        fill_light="#ffffff"
        fill_dark="#000000"
        ratio={ratio}
      />
      <SkillDivStyle>{children}</SkillDivStyle>
      <TriangleDivider
        direction="down"
        fill_light="#ffffff"
        fill_dark="#000000"
        ratio={ratio}
      />
    </SkillDivWrapperStyle>
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
