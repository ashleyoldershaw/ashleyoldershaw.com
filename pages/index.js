import { PageSubtitle, PageTitle } from "../components/styling/TextStyles";

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
    </main>
  );
}
