import { BlogPost } from "../../components/BlogPost/BlogPost";
import { getStaticProps as getLayoutStaticProps } from "../../components/layout";
import { sanity } from "../../components/sanity";

const Article = ({ blog_post, meta_info }) => {
  return <BlogPost content={blog_post} meta_info={meta_info} />;
};

export async function getStaticPaths() {
  const paths = await sanity.fetch(
    `*[_type=='blog' && publish_date <= now() && defined(slug.current)][].slug.current`
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
  const meta_info = await sanity.fetch(`*[_type=="blog_meta"][0]`);
  return {
    props: {
      blog_post,
      meta_info,
      ...(await getLayoutStaticProps()),
    },
  };
}

export default Article;
