import { CheckInWidget } from "../CheckInWidget/CheckInWidget";
import {
  ContentSection,
  PageTitleSection,
  TextBasedWidth,
} from "../styling/Display";
import {
  BodyText,
  PageSubtitle,
  PageTitle,
  SectionTitle,
} from "../styling/TextStyles";
import { WhatIDoSection } from "../WhatIDo/WhatIDo";
import { WhatImGoodAtItems } from "../WhatImGoodAt/WhatImGoodAt";

export const HomePage = ({ home_page_data, skills_data }) => {
  return (
    <>
      <PageTitleSection>
        <PageTitle>{home_page_data.title}</PageTitle>
        <PageSubtitle>{home_page_data.subtitle}</PageSubtitle>
        <TextBasedWidth>
          <BodyText>{home_page_data.about_me}</BodyText>
        </TextBasedWidth>
      </PageTitleSection>
      <TextBasedWidth>
        <ContentSection>
          <SectionTitle>{home_page_data.what_i_do_title}</SectionTitle>
          <WhatIDoSection sanity_input={home_page_data.what_i_do} />
        </ContentSection>
        <ContentSection>
          <SectionTitle>{home_page_data.key_skills_title}</SectionTitle>
          <WhatImGoodAtItems sanity_input={skills_data} />
        </ContentSection>
        <CheckInWidget />
      </TextBasedWidth>
    </>
  );
};
