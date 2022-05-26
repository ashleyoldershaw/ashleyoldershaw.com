import {
  BodyText,
  PageSubtitle,
  PageTitle,
  SubSectionTitle,
  SubSubSectionTitle,
  TextDetail,
} from "../styling/TextStyles";
import { formatDate } from "../utility/formatting";
import { SmartLink } from "../utility/SmartLink";
import { BlogPostList, BlogpostPreviewStyle } from "./BlogHomePage.style";

export const BlogPostPreview = ({ post }) => {
  return (
    <SmartLink href={`/blog/${post.slug}`}>
      <BlogpostPreviewStyle>
        <SubSubSectionTitle>{post.title}</SubSubSectionTitle>
        <BodyText>{post.subtitle}</BodyText>
        <TextDetail>{formatDate(post.created)}</TextDetail>
      </BlogpostPreviewStyle>
    </SmartLink>
  );
};

export const BlogHomePage = ({ blog_home, blog_posts }) => {
  return (
    <>
      <PageTitle>{blog_home.title}</PageTitle>
      <PageSubtitle>{blog_home.subtitle}</PageSubtitle>
      <BlogPostList>
        {blog_posts.map((post) => (
          <BlogPostPreview post={post} />
        ))}
      </BlogPostList>
    </>
  );
};
