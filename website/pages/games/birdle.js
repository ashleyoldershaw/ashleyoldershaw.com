import styled from "styled-components";
import { getStaticProps as getLayoutStaticProps } from "../../components/layout";
import { sanity, urlFor } from "../../components/sanity";
import { displays } from "../../components/styling/Display";
import { BodyText, PageTitle } from "../../components/styling/TextStyles";

export async function getStaticProps() {
  return {
    props: {
      birdle: await sanity.fetch(
        `*[_type=='birdle'][0]{title,subtitle,birds[]{name,image}}`
      ),
      ...(await getLayoutStaticProps()),
    },
  };
}

const BirdImage = styled.img`
  max-width: 80%;
  max-height: 50vh;

  @media (max-width: ${displays.mobileL}) {
    max-width: 100%;
  }
`;
const BirdDisplayStyle = styled.div`
  display: flex;
  justify-content: center;
`;
const BirdDisplay = ({ bird }) => {
  return (
    <BirdDisplayStyle>
      <BirdImage src={urlFor(bird.image).url()} alt={"Sorry, no clues!"} />
    </BirdDisplayStyle>
  );
};

const getTodaysBird = (birds) => {
  var now = new Date();
  var fullDaysSinceEpoch = Math.floor(now / 8.64e7);
  return birds[fullDaysSinceEpoch % birds.length];
};

export default function Birdle({ birdle }) {
  const todays_bird = getTodaysBird(birdle.birds);
  return (
    <main>
      <PageTitle>{birdle.title}</PageTitle>
      <BodyText>{birdle.subtitle}</BodyText>

      <BirdDisplay bird={todays_bird} />
      <BodyText>{}</BodyText>
      <BodyText>
        {JSON.stringify(birdle.birds.map((bird) => bird.name).sort())}
      </BodyText>
    </main>
  );
}
