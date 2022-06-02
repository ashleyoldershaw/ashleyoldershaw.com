import Image from "next/image";
import { urlFor } from "../sanity";
import { BodyText, SubSubSectionTitle } from "../styling/TextStyles";
import { TitleStyle, WhatIDoStyle } from "./WhatIDo.style";

export const WhatIDoSection = ({ sanity_input }) => {
  return sanity_input.map((section, i) => (
    <WhatIDoStyle key={i}>
      <TitleStyle>
        <Image
          width={100}
          height={100}
          src={urlFor(section.thumbnail).url()}
          objectFit="contain"
          alt={section.alt}
        />
      </TitleStyle>
      <div>
        <SubSubSectionTitle>{section.job_title}</SubSubSectionTitle>
        <BodyText>{section.text_body}</BodyText>
      </div>
    </WhatIDoStyle>
  ));
};
