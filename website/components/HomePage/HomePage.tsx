import { CheckInWidget } from "../CheckInWidget/CheckInWidget";
import { PageTitleStyle, TextBasedWidth } from "../styling/Display";
import {
  BodyText,
  PageSubtitle,
  PageTitle,
  SectionTitle,
} from "../styling/TextStyles";
import { WhatIDoSection } from "../WhatIDo/WhatIDo";
import { WhatImGoodAtItems } from "../WhatImGoodAt/WhatImGoodAt";
import { HomepageSectionStyle } from "./HomePage.style";

export const HomePage = ({ home_page_data, skills_data }) => {
  return (
    <>
      <PageTitleStyle>
        <PageTitle>{home_page_data.title}</PageTitle>
        <PageSubtitle>{home_page_data.subtitle}</PageSubtitle>
        <TextBasedWidth>
          <BodyText>{home_page_data.about_me}</BodyText>
        </TextBasedWidth>
      </PageTitleStyle>
      <TextBasedWidth>
        <HomepageSectionStyle>
          <SectionTitle>{home_page_data.what_i_do_title}</SectionTitle>
          <WhatIDoSection sanity_input={home_page_data.what_i_do} />
        </HomepageSectionStyle>
        <HomepageSectionStyle>
          <SectionTitle>{home_page_data.key_skills_title}</SectionTitle>
          <WhatImGoodAtItems sanity_input={skills_data} />
        </HomepageSectionStyle>
        <CheckInWidget />
      </TextBasedWidth>
    </>
  );
};
