import {
  BodyText,
  PageSubtitle,
  PageTitle,
  SectionTitle,
} from "./styling/TextStyles";
import { WhatIDoSection } from "./WhatIDo";
import { WhatImGoodAtItems } from "./WhatImGoodAt";

export const HomePage = ({ sanity_data }) => {
  return (
    <>
      <PageTitle>{sanity_data.title}</PageTitle>
      <PageSubtitle>{sanity_data.subtitle}</PageSubtitle>
      <BodyText>{sanity_data.about_me}</BodyText>
      <div>
        <SectionTitle>What I do</SectionTitle>
        <WhatIDoSection sanity_input={sanity_data.what_i_do} />
      </div>

      <div>
        <SectionTitle>What I'm good at</SectionTitle>
        <WhatImGoodAtItems sanity_input={sanity_data.what_im_good_at} />
      </div>

      <div>{/* <SectionTitle>What I'm excited about</SectionTitle> */}</div>
    </>
  );
};
