import {
  BodyText,
  PageSubtitle,
  PageTitle,
  SectionTitle,
} from "./styling/TextStyles";
import { WhatIDoSection } from "./WhatIDo/WhatIDo";
import { WhatImGoodAtItems } from "./WhatImGoodAt";

export const HomePage = ({ home_page_data, skills_data }) => {
  return (
    <>
      <PageTitle>{home_page_data.title}</PageTitle>
      <PageSubtitle>{home_page_data.subtitle}</PageSubtitle>
      <BodyText>{home_page_data.about_me}</BodyText>
      <div>
        <SectionTitle>What I do</SectionTitle>
        <WhatIDoSection sanity_input={home_page_data.what_i_do} />
      </div>

      <div>
        <SectionTitle>Key skills</SectionTitle>
        <WhatImGoodAtItems sanity_input={skills_data} />
      </div>

      <div>{/* <SectionTitle>What I'm excited about</SectionTitle> */}</div>
    </>
  );
};
