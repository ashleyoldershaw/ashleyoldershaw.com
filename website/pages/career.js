import { ExpandableText } from "../components/ExpandableText";
import { sanity } from "../components/sanity";
import {
  BodyText,
  PageTitle,
  SectionTitle,
} from "../components/styling/TextStyles";

export async function getStaticProps() {
  return {
    props: { career_page: await sanity.fetch(`*[_type=='career_page'][0]`) },
  };
}

export default function CareerPage({ career_page }) {
  console.log(career_page);
  return (
    <main>
      <PageTitle>{career_page.title}</PageTitle>
      <BodyText>{career_page.intro}</BodyText>
      {career_page.career_info.map((workplace) => (
        <div>
          <SectionTitle>{workplace.name}</SectionTitle>
          <ExpandableText info={workplace.body} />
        </div>
      ))}
    </main>
  );
}
