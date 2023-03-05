import { groq } from "next-sanity";
import { ErrorPage } from "../components/ErrorPage";
import { getStaticProps as getLayoutStaticProps } from "../components/layout";
import { sanity } from "../components/sanity";

export async function getStaticProps() {
  return {
    props: {
      error_500: await sanity.fetch(groq`*[_type=='error_500'][0]`),
      ...(await getLayoutStaticProps()),
    },
  };
}

export default function Error500({ error_500 }) {
  return (
    <main>
      <ErrorPage info={error_500} />
    </main>
  );
}
