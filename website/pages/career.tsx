import Head from "next/head";
import { ExpandableText } from "../components/ExpandableText/ExpandableText";
import { getStaticProps as getLayoutStaticProps } from "../components/layout";
import { sanity } from "../components/sanity";
import { PageTitleStyle } from "../components/styling/Display";
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
      <Head>
        <title>{career_page.title}</title>
      </Head>
      <PageTitleStyle>
        <PageTitle>{career_page.title}</PageTitle>
        <BodyText>{career_page.intro}</BodyText>
      </PageTitleStyle>
      {career_page.career_info.map((workplace, i) => (
        <div key={i}>
          <SectionTitle>{workplace.name}</SectionTitle>
          <ExpandableText info={workplace.body} />
        </div>
      ))}
    </main>
  );
}
