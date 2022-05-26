import { BlogHomePage } from "../../components/BlogHomePage/BlogHomePage";
import { getStaticProps as getLayoutStaticProps } from "../../components/layout";
import { sanity } from "../../components/sanity";

export async function getStaticProps() {
  return {
    props: {
      blog_home: await sanity.fetch(`*[_type=='blog_home'][0]`),
      blog_posts: await sanity.fetch(
        `*[_type=='blog']{'slug': slug.current, title, subtitle, 'created': _createdAt}`
      ),
      ...(await getLayoutStaticProps()),
    },
  };
}

export default function BlogLibrary({ blog_home, blog_posts }) {
  return (
    <main>
      <BlogHomePage blog_home={blog_home} blog_posts={blog_posts} />
    </main>
  );
}
