import Image from "next/image";
import { urlFor } from "../sanity";
import {
  BodyText,
  Emphasis,
  PageSubtitle,
  PageTitle,
  SubSectionTitle,
  TextDetail,
} from "../styling/TextStyles";
import { formatDate } from "../utility/formatting";
import {
  StyledArticle,
  StyledBlogImageWrapper,
  TimingSection,
} from "./BlogPost.style";

const getBlogImageDimensions = (url) => {
  const [width, height] = url
    .match(/[0-9]+x[0-9]+/g)[0]
    .split("x")
    .map((value) => parseInt(value));
  return { height: `${height}px`, width: `${width}px` };
};

const BlogImage = ({ image, alt, caption }) => (
  <StyledBlogImageWrapper>
    <Image
      {...getBlogImageDimensions(urlFor(image).url())}
      src={urlFor(image).url()}
      objectFit="contain"
      alt={alt}
      className="next-image"
    />
    {caption && <TextDetail>{caption}</TextDetail>}
  </StyledBlogImageWrapper>
);

const BlogContent = ({ item }) => {
  switch (item._type) {
    case "text_body":
      return <BodyText>{item.text_body}</BodyText>;
    case "emphasis_quote":
      return <Emphasis>{item.emphasis_quote}</Emphasis>;
    case "image_component":
      return (
        <BlogImage
          image={item.image}
          alt={item.alt_text}
          caption={item.caption}
        />
      );
    case "section_title":
      return <SubSectionTitle>{item.section_title}</SubSectionTitle>;
    default:
      break;
  }

  return <>{item._type}</>;
};

export const BlogPost = ({ content }) => {
  return (
    <StyledArticle>
      <PageTitle>{content.title}</PageTitle>
      <PageSubtitle>{content.subtitle}</PageSubtitle>
      <TimingSection>
        <TextDetail>Published: {formatDate(content.publish_date)}</TextDetail>
        {content._updatedAt > content.publish_date && (
          <TextDetail>
            Last updated: {formatDate(content._updatedAt)}
          </TextDetail>
        )}
      </TimingSection>
      {content.content.map((item) => (
        <BlogContent key={item._key} item={item} />
      ))}
    </StyledArticle>
  );
};
