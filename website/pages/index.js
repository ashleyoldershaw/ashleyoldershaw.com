import { HomePage } from "../components/HomePage";
import { getStaticProps as getLayoutStaticProps } from "../components/layout";
import { sanity } from "../components/sanity";

export async function getStaticProps() {
  return {
    props: {
      home_page: await sanity.fetch(`*[_type=='home_page'][0]`),
      ...(await getLayoutStaticProps()),
    },
  };
}

export default function IndexPage({ home_page }) {
  return (
    <main>
      <HomePage sanity_data={home_page} />
    </main>
  );
}
