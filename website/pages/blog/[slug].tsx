import { sanity } from "../../components/sanity";
import { getStaticProps as getLayoutStaticProps } from "../../components/layout";
import { BlogPost } from "../../BlogPost/BlogPost";

const Article = ({ blog_post }) => {
  return <BlogPost content={blog_post} />;
};

export async function getStaticPaths() {
  const paths = await sanity.fetch(
    `*[_type == "blog" && defined(slug.current)][].slug.current`
  );

  return {
    paths: paths.map((slug) => ({ params: { slug } })),
    fallback: true,
  };
}

export async function getStaticProps(context) {
  // It's important to default the slug so that it doesn't return "undefined"
  const { slug = "" } = context.params;
  const blog_post = await sanity.fetch(
    `
    *[_type == "blog" && slug.current == $slug][0]
  `,
    { slug }
  );
  return {
    props: {
      blog_post,
      ...(await getLayoutStaticProps()),
    },
  };
}

export default Article;
