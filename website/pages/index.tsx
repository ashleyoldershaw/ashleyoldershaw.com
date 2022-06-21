import { HomePage } from "../components/HomePage/HomePage";
import { getStaticProps as getLayoutStaticProps } from "../components/layout";
import { sanity } from "../components/sanity";

export async function getStaticProps() {
  return {
    props: {
      home_page: await sanity.fetch(`*[_type=='home_page'][0]`),
      skills: await sanity.fetch(
        `*[_type=='skills']|order(orderRank){category, info[hide != true], subtitle}`
      ),
      ...(await getLayoutStaticProps()),
    },
  };
}

export default function IndexPage({ home_page, skills }) {
  return (
    <main>
      <HomePage home_page_data={home_page} skills_data={skills} />
    </main>
  );
}
