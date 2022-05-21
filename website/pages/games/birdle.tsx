import { BirdlePage } from "../../components/Birdle";
import { getStaticProps as getLayoutStaticProps } from "../../components/layout";
import { sanity } from "../../components/sanity";

export async function getStaticProps() {
  return {
    props: {
      birdle: await sanity.fetch(`*[_type=='birdle'][0]`),
      ...(await getLayoutStaticProps()),
      time: new Date().valueOf(),
    },
  };
}

export default function Birdle({ birdle, time }) {
  return (
    <main>
      <BirdlePage birdle={birdle} time={time} />
    </main>
  );
}
