import { HomePage } from "../components/HomePage";
import { getStaticProps as getLayoutStaticProps } from "../components/layout";
import { sanity } from "../components/sanity";

export async function getStaticProps() {
  return {
    props: {
      home_page: await sanity.fetch(`*[_type=='home_page'][0]`),
      skills: await sanity.fetch(`*[_type=='skills']`),
      ...(await getLayoutStaticProps()),
    },
  };
}

export default function IndexPage({ home_page, skills }) {
  console.log(skills);
  return (
    <main>
      <HomePage home_page_data={home_page} skills_data={skills} />
    </main>
  );
}
