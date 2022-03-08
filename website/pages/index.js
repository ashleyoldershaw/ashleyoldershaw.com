import { HomePage } from "../components/HomePage";
import { sanity } from "../components/sanity";

export async function getStaticProps() {
  return {
    props: {home_page:await sanity.fetch(`*[_type=='home_page'][0]`)},
  };
}

export default function IndexPage({home_page}) {
  console.log(home_page)
  return (
    <main>
      <HomePage sanity_text={home_page} />
    </main>
  );
}
