import Head from "next/head";
import { useForm } from "react-hook-form";
import { getStaticProps as getLayoutStaticProps } from "../components/layout";
import {
  CustomButton,
  ToggleButton,
} from "../components/styling/Buttons/Buttons";
import {
  ContentSection,
  PageTitleSection,
  TextBasedWidth,
} from "../components/styling/Display";
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
      <PageTitleSection>
        <PageTitle>{`Components!`}</PageTitle>
        <PageSubtitle>{`Reference for component styling`}</PageSubtitle>
      </PageTitleSection>
      <TextBasedWidth>
        <ContentSection>
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
            <CustomButton text="CustomButton" />
          </div>
          <div>
            <ToggleButton
              onLabel={<BodyText>On</BodyText>}
              offLabel={<BodyText>Off</BodyText>}
              onToggled={() => {}}
            />
          </div>
          <div>
            <CustomRange
              register={register}
              control={control}
              name="CustomRange"
            />
          </div>
        </ContentSection>
      </TextBasedWidth>
    </main>
  );
}
