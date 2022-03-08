import {
  BodyText,
  PageSubtitle,
  PageTitle,
  SectionTitle,
  SubSectionTitle,
} from "./styling/TextStyles";

const WhatIDoSection = ({ sanity_input }) => {
  console.log(sanity_input);
  return sanity_input.map((section) => (
    <>
      <SubSectionTitle>{section.title}</SubSectionTitle>
      <BodyText>{section.text_body}</BodyText>
    </>
  ));
};
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

      <div>{/* <SectionTitle>What I'm good at</SectionTitle> */}</div>

      <div>{/* <SectionTitle>What I'm excited about</SectionTitle> */}</div>
    </>
  );
};
