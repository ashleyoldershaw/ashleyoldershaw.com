import Head from "next/head";
import {
  ContentSection,
  PageTitleSection,
  TextBasedWidth,
} from "../styling/Display";
import {
  BodyText,
  PageSubtitle,
  PageTitle,
  SubSubSectionTitle,
  TextDetail,
} from "../styling/TextStyles";
import { formatDate } from "../utility/formatting";
import { SmartLink } from "../utility/SmartLink";
import { BlogpostPreviewStyle } from "./BlogHomePage.style";

export const BlogPostPreview = ({ post }) => {
  return (
    <SmartLink href={`/blog/${post.slug}`}>
      <BlogpostPreviewStyle>
        <SubSubSectionTitle>{post.title}</SubSubSectionTitle>
        <BodyText>{post.subtitle}</BodyText>
        <TextDetail>
          {post.created ? formatDate(post.created) : "Unpublished"}
        </TextDetail>
      </BlogpostPreviewStyle>
    </SmartLink>
  );
};

export const BlogHomePage = ({ blog_home, blog_posts }) => {
  return (
    <>
      <Head>
        <title>{blog_home.title}</title>
      </Head>
      <PageTitleSection>
        <PageTitle>{blog_home.title}</PageTitle>
        <PageSubtitle>{blog_home.subtitle}</PageSubtitle>
      </PageTitleSection>
      <TextBasedWidth>
        <ContentSection>
          {blog_posts.map((post, i) => (
            <BlogPostPreview key={i} post={post} />
          ))}
        </ContentSection>
      </TextBasedWidth>
    </>
  );
};
