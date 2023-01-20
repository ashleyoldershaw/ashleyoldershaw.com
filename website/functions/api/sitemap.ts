import { DateTime } from "luxon";
import { NextApiRequest, NextApiResponse } from "next";
import { sanity } from "../../components/sanity";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  getInfo().then((sitemap) => {
    res.setHeader("Content-Type", "text/xml");
    res.write(sitemap);
    res.end();
  });
}

const BASE_URL = "https://www.ashleyoldershaw.com";

const getDate = (input_string) => DateTime.fromISO(input_string).toISODate();

function generateSiteMap({ pages, blogPosts }) {
  return `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${pages
        .map(
          ({ slug, lastmod }) => `
        <url>
          <loc>${`${BASE_URL}${slug}`}</loc>
          ${lastmod ? `<lastmod>${getDate(lastmod)}</lastmod>` : ""}
        </url>
      `
        )
        .join("")}
      ${blogPosts
        .map(
          ({ slug, lastmod }) => `
            <url>
              <loc>${`${BASE_URL}/blog/${slug}`}</loc>
              <lastmod>${getDate(lastmod)}</lastmod>
            </url>
        `
        )
        .join("")}
    </urlset>
 `;
}

const getInfo = async () => {
  const blogPosts: Array<{ lastmod: string; slug: string }> =
    await sanity.fetch(
      `*[_type=='blog' && publish_date <= now() && defined(slug.current)][]{'lastmod': _updatedAt,'slug': slug.current}`
    );

  const homePageUpdate = await sanity.fetch(
    `*[_type=='home_page'][0]._updatedAt`
  );
  const skillsPageUpdate = await sanity.fetch(
    `*[_type=='home_page'][0]._updatedAt`
  );
  const pages = [
    {
      slug: "",
      lastmod:
        homePageUpdate > skillsPageUpdate ? homePageUpdate : skillsPageUpdate,
    },
    {
      slug: "/career",
      lastmod: await sanity.fetch(`*[_type=='career_page'][0]._updatedAt`),
    },
    { slug: "/speaker-guide" },
    { slug: "/birdle" },
    {
      slug: "/blog",
      lastmod: blogPosts
        .map((post) => post.lastmod)
        .reduce((max, c) => (c > max ? c : max)),
    },
  ];

  // We generate the XML sitemap with the posts data
  return generateSiteMap({ pages, blogPosts });
};
