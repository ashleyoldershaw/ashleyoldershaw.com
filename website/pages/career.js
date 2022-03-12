import { useState } from "react";
import styled from "styled-components";
import { BodyText, SectionTitle } from "../components/styling/TextStyles";

export async function getStaticProps() {
  return {
    props: {},
  };
}

const connexin_info = {
  [`I've worked at Connexin since December 2020`]: [
    `I've worked on Internet of Things projects`,
    {
      [`Developed the company's new customer experience`]: [
        "I worked on creating the new customer and order database",
        "Web development for the Connexin Home website",
        "API development for the whole stack",
      ],
    },
  ],
  [`In January 2022 I was promoted to Senior Software Specialist`]: [
    `This was because I'd consistently shown improvement in my abilities as well as taking a mentoring role with the other developers.`,
  ],
};

const ExpandableTextStyle = styled.div`
  display: flex;
  flex-direction: column;
  // transition:
  div {
    display: flex;
  }
`;
const ExpandableText = ({ info }) => {
  const [toggleClicked, setToggleClicked] = useState(false);
  if (typeof info === "string") {
    return <BodyText>{info}</BodyText>;
  } else {
    if (Array.isArray(info))
      return (
        <>
          {info.map((child, i) => (
            <ExpandableText key={i} info={child} />
          ))}
        </>
      );
    else {
      return Object.keys(info).map((item, i) => (
        <ExpandableTextStyle>
          <div>
            <button onClick={() => setToggleClicked(!toggleClicked)}>
              {toggleClicked ? "Less" : "More"}
            </button>
            <BodyText>{item}</BodyText>
          </div>
          {toggleClicked ? <ExpandableText info={info[item]} /> : ""}
        </ExpandableTextStyle>
      ));
    }
  }
};
export default function CareerPage() {
  return (
    <main>
      <div>
        <SectionTitle>Connexin</SectionTitle>
        <ExpandableText info={connexin_info} />
      </div>
    </main>
  );
}
