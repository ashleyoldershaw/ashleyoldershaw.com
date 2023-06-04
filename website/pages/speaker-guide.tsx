import Head from "next/head";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { getLayoutStaticProps } from "../components/layout";
import {
  ClipboardButton,
  CustomButton,
} from "../components/styling/Buttons/Buttons";
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

const formatNameList = (names: Array<string>): string => {
  if (names.length === 0) return "Nobody up next!";
  if (names.length === 1) return `${names[0]} up next!`;
  return (
    "Next is " +
    names.slice(0, names.length - 1).join(", ") +
    ", then " +
    names.at(-1)
  );
};

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

export default function SpeakerGuide() {
  const [topics, setTopics] = useState<Array<string>>([]);
  const [subTopics, setSubTopics] = useState<Array<string>>([]);

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
        <title>{"Speaker guide!"}</title>
      </Head>
      <PageTitleSection>
        <PageTitle>{`Speaker guide!`}</PageTitle>
        <PageSubtitle>{`Use this to keep track of who's up next during a discussion.`}</PageSubtitle>
        <BodyText>
          {`When you want to add someone to speak, just type their name in the box and hit "add speaker". When you're ready for the next topic, click "Next topic". If someone wants to add to a topic, pop their name in the box and click "add subtopic" subtopics will be cleared out before the next topic comes up.`}
        </BodyText>
      </PageTitleSection>
      <TextBasedWidth>
        <ContentSection style={{ minHeight: "45em" }}>
          <form onSubmit={handleSubmit(() => {})}>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "space-between",
              }}
            >
              <CustomTextInput
                placeholder="Name"
                register={register}
                name="topic"
                validation={{}}
              />

              <div style={{ display: "flex", flexDirection: "column" }}>
                <CustomButton text="Add speaker" onClick={addTopic} />
                <CustomButton text="Add subtopic" onClick={addSubTopic} />
                <CustomButton text="Next topic" onClick={nextTopic} />
              </div>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <ClipboardButton
                  defaultText="Copy speaker lineup"
                  copiedText={formatNameList(topics)}
                />
                <ClipboardButton
                  defaultText="Copy subtopic lineup"
                  copiedText={formatNameList(subTopics)}
                />
              </div>
            </div>
          </form>
          <TopicView topics={topics} subTopics={subTopics} />
        </ContentSection>
      </TextBasedWidth>
    </main>
  );
}
