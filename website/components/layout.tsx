import { sanity } from "./sanity";

export async function getStaticProps() {
  return {
    layout_props: {
      nav_bar: await sanity.fetch(`*[_type=='nav_bar'][0]`),
      favicons: await sanity.fetch(
        `*[_type=='home_page'][0]{favicon_light, favicon_dark}`
      ),
    },
  };
}
