import Image from "next/legacy/image";
import { useTheme } from "styled-components";
import { useGetImageProps } from "../sanity";
import { TriangleDivider } from "../styling/Display";
import { BodyText, SubSubSectionTitle } from "../styling/TextStyles";
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
  const theme = useTheme();
  return (
    <SkillDivWrapperStyle>
      <TriangleDivider direction="up" ratio={ratio} fill_colour={theme.full} />
      <SkillDivStyle>{children}</SkillDivStyle>
      <TriangleDivider
        direction="down"
        ratio={ratio}
        fill_colour={theme.full}
      />
    </SkillDivWrapperStyle>
  );
};

const WhatImGoodAtTile = ({ key, section }) => (
  <SkillDiv key={key}>
    <OptionalSmartLink href={section.url}>
      <Image
        {...useGetImageProps(
          useTheme().type === "dark"
            ? section.dark_thumbnail || section.thumbnail
            : section.thumbnail
        )}
        width={80}
        height={80}
        objectFit="contain"
        alt={section.alt}
      />
    </OptionalSmartLink>
    <BodyText style={{ margin: 0 }}>{section.title}</BodyText>
  </SkillDiv>
);

export const WhatImGoodAtItems = ({ sanity_input }) => {
  return sanity_input.map((skillset, i) => (
    <WhatImGoodAtSectionStyle key={i}>
      <div>
        <SubSubSectionTitle>{skillset.category}</SubSubSectionTitle>
        <BodyText>{skillset.subtitle}</BodyText>
      </div>
      <SkillsetCollection>
        {skillset.info.map((section, j) => (
          <WhatImGoodAtTile key={j} section={section} />
        ))}
      </SkillsetCollection>
    </WhatImGoodAtSectionStyle>
  ));
};
