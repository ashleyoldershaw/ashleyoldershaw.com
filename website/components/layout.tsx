import { groq } from "next-sanity";
import { sanity } from "./sanity";

export async function getStaticProps() {
  return {
    layout_props: {
      nav_bar: await sanity.fetch(groq`*[_type=='nav_bar'][0]`),
      favicons: await sanity.fetch(
        groq`*[_type=='home_page'][0]{favicon_light, favicon_dark}`
      ),
      themes: await sanity.fetch(groq`*[_type=='theme'][0]`),
    },
  };
}
