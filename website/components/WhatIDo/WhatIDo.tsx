import Image from "next/image";
import { useGetImageProps } from "../sanity";
import { BodyText, SubSubSectionTitle } from "../styling/TextStyles";
import { TitleStyle, WhatIDoStyle } from "./WhatIDo.style";

const WhatIDoTile = ({ section, key }) => (
  <WhatIDoStyle key={key}>
    <TitleStyle>
      <Image
        {...useGetImageProps(section.thumbnail)}
        style={{ height: "auto", width: "100px" }}
        alt={section.alt}
      />
    </TitleStyle>
    <div>
      <SubSubSectionTitle>{section.job_title}</SubSubSectionTitle>
      <BodyText>{section.text_body}</BodyText>
    </div>
  </WhatIDoStyle>
);

export const WhatIDoSection = ({ sanity_input }) =>
  sanity_input.map((section, i) => <WhatIDoTile section={section} key={i} />);
