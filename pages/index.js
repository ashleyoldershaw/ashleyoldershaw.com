import {
  BodyText,
  PageSubtitle,
  PageTitle,
} from "../components/styling/TextStyles";

export async function getStaticProps() {
  return {
    props: {},
  };
}

export default function IndexPage() {
  return (
    <main>
      <PageTitle>Ash Oldershaw</PageTitle>
      <PageSubtitle>My new website!</PageSubtitle>
      <BodyText>
        Here I can show things I'm interested in and show what kind of a
        developer I am.
      </BodyText>
    </main>
  );
}
