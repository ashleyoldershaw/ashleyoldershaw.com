import { groq } from "next-sanity";
import { ErrorPage } from "../components/ErrorPage";
import { getLayoutStaticProps } from "../components/layout";
import { sanity } from "../components/sanity";

export async function getStaticProps() {
  return {
    props: {
      error_404: await sanity.fetch(groq`*[_type=='error_404'][0]`),
      ...(await getLayoutStaticProps()),
    },
  };
}

export default function Error404({ error_404 }) {
  return (
    <main>
      <ErrorPage info={error_404} />
    </main>
  );
}
