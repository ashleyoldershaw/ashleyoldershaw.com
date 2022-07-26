import Head from "next/head";
import { useForm } from "react-hook-form";
import { HomepageSectionStyle } from "../components/HomePage/HomePage.style";
import { getStaticProps as getLayoutStaticProps } from "../components/layout";
import { NavButton } from "../components/styling/Buttons/Buttons";
import { PageTitleStyle, TextBasedWidth } from "../components/styling/Display";
import {
  CustomTextArea,
  CustomTextInput,
} from "../components/styling/Inputs/Inputs";
import { CustomRange } from "../components/styling/Range/Range";
import {
  BodyText,
  Emphasis,
  PageSubtitle,
  PageTitle,
  SubSectionTitle,
  SubSubSectionTitle,
  TextDetail,
} from "../components/styling/TextStyles";

export async function getStaticProps() {
  return {
    props: {
      ...(await getLayoutStaticProps()),
    },
  };
}

export default function ComponentsPage() {
  const { control, register } = useForm({
    defaultValues: { CustomRange: 0.5 },
  });
  return (
    <main>
      <Head>
        <title>{"Component library"}</title>
      </Head>
      <PageTitleStyle>
        <PageTitle>{`Components!`}</PageTitle>
        <PageSubtitle>{`Reference for component styling`}</PageSubtitle>
      </PageTitleStyle>
      <TextBasedWidth>
        <HomepageSectionStyle>
          <div>
            <PageTitle>PageTitle</PageTitle>
          </div>
          <div>
            <PageSubtitle>PageSubtitle</PageSubtitle>
          </div>
          <div>
            <SubSectionTitle>SubSectionTitle</SubSectionTitle>
          </div>
          <div>
            <SubSubSectionTitle>SubSubSectionTitle</SubSubSectionTitle>
          </div>
          <div>
            <BodyText>BodyText</BodyText>
          </div>
          <div>
            <Emphasis>Emphasis</Emphasis>
          </div>
          <div>
            <TextDetail>TextDetail</TextDetail>
          </div>
          <div>
            <CustomTextInput
              placeholder="CustomTextInput"
              name="CustomTextInput"
              register={register}
            ></CustomTextInput>
          </div>
          <div>
            <CustomTextArea
              placeholder="CustomTextArea"
              name="CustomTextArea"
              register={register}
            ></CustomTextArea>
          </div>
          <div>
            <NavButton text="NavButton" />
          </div>
          <div>
            <CustomRange
              register={register}
              control={control}
              name="CustomRange"
            />
          </div>
        </HomepageSectionStyle>
      </TextBasedWidth>
    </main>
  );
}
