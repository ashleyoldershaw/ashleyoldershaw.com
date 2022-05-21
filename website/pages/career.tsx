import { ExpandableText } from "../components/ExpandableText";
import { getStaticProps as getLayoutStaticProps } from "../components/layout";
import { sanity } from "../components/sanity";
import {
  BodyText,
  PageTitle,
  SectionTitle,
} from "../components/styling/TextStyles";

export async function getStaticProps() {
  return {
    props: {
      career_page: await sanity.fetch(`*[_type=='career_page'][0]`),
      ...(await getLayoutStaticProps()),
    },
  };
}

export default function CareerPage({ career_page }) {
  return (
    <main>
      <PageTitle>{career_page.title}</PageTitle>
      <BodyText>{career_page.intro}</BodyText>
      {career_page.career_info.map((workplace, i) => (
        <div key={i}>
          <SectionTitle>{workplace.name}</SectionTitle>
          <ExpandableText info={workplace.body} />
        </div>
      ))}
    </main>
  );
}
