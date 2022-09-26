import Head from "next/head";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { getStaticProps as getLayoutStaticProps } from "../components/layout";
import { CustomButton } from "../components/styling/Buttons/Buttons";
import {
  ContentSection,
  PageTitleSection,
  TextBasedWidth,
} from "../components/styling/Display";
import { CustomTextInput } from "../components/styling/Inputs/Inputs";
import {
  BodyText,
  PageSubtitle,
  PageTitle,
  SubSectionTitle,
} from "../components/styling/TextStyles";

export async function getStaticProps() {
  return {
    props: {
      ...(await getLayoutStaticProps()),
    },
  };
}

// this is a one off page so not going to spend much time making it into nice components

const TopicView = ({ topics, subTopics }) => {
  if (topics.length === 0) return <></>;

  const [currentTopic, ...futureTopics] = topics;
  return (
    <>
      <div>
        <SubSectionTitle>Current Speaker</SubSectionTitle>
        <BodyText>{currentTopic}</BodyText>
        {subTopics.length !== 0 && (
          <>
            <SubSectionTitle>Replies</SubSectionTitle>
            <BodyText>{subTopics.join(", ")}</BodyText>
          </>
        )}
      </div>
      {futureTopics.length !== 0 && (
        <div>
          <SubSectionTitle>Coming up</SubSectionTitle>

          <BodyText>{futureTopics.join(", ")}</BodyText>
        </div>
      )}
    </>
  );
};

export default function TnnSpeakers() {
  const [topics, setTopics] = useState([]);
  const [subTopics, setSubTopics] = useState([]);

  const { register, getValues, reset, handleSubmit } = useForm();

  const addTopic = () => {
    const topic = getValues().topic;
    if (topic) setTopics([...topics, topic]);
    reset();
  };

  const addSubTopic = () => {
    const subTopic = getValues().topic;
    if (subTopic) setSubTopics([...subTopics, subTopic]);
    reset();
  };

  const nextTopic = () => {
    if (subTopics.length) {
      setSubTopics(subTopics.slice(1));
      return;
    }
    if (topics.length) {
      setTopics(topics.slice(1));
      return;
    }
  };

  return (
    <main>
      <Head>
        <title>{"TNN Speaker guide!"}</title>
      </Head>
      <PageTitleSection>
        <PageTitle>{`TNN Speaker guide!`}</PageTitle>
        <PageSubtitle>{`Use this to keep track of who's up next.`}</PageSubtitle>
      </PageTitleSection>
      <TextBasedWidth>
        <ContentSection>
          <form onSubmit={handleSubmit(() => {})}>
            <div style={{ display: "flex" }}>
              <CustomTextInput
                placeholder="Name"
                register={register}
                name="topic"
                validation={{}}
              />
              <CustomButton text="Add speaker" onClick={addTopic} />

              <CustomButton text="Add subtopic" onClick={addSubTopic} />
              <CustomButton text="Next speaker" onClick={nextTopic} />
            </div>
          </form>
          <TopicView topics={topics} subTopics={subTopics} />
        </ContentSection>
      </TextBasedWidth>
    </main>
  );
}
