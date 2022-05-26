import { urlFor } from "../sanity";
import {
  BodyText,
  Emphasis,
  PageSubtitle,
  PageTitle,
  TextDetail,
} from "../styling/TextStyles";
import { formatDate } from "../utility/formatting";
import {
  StyledArticle,
  StyledBlogImage,
  TimingSection,
} from "./BlogPost.style";

const getBlogImageDimensions = () => {
  return { height: "400px", width: "400px" };
};
const BlogImage = ({ image, alt }) => (
  <StyledBlogImage
    {...getBlogImageDimensions()}
    src={urlFor(image).url()}
    objectFit="contain"
    alt={alt}
  />
);

const BlogContent = ({ item }) => {
  switch (item._type) {
    case "text_body":
      return <BodyText>{item.text_body}</BodyText>;
    case "emphasis_quote":
      return <Emphasis>{item.emphasis_quote}</Emphasis>;
    case "image_component":
      return <BlogImage image={item.image} alt={item.alt_text} />;
    default:
      break;
  }

  return <>{item._type}</>;
};

export const BlogPost = ({ content }) => {
  console.log(content);
  return (
    <StyledArticle>
      <PageTitle>{content.title}</PageTitle>
      <PageSubtitle>{content.subtitle}</PageSubtitle>
      <TimingSection>
        <TextDetail>Created at: {formatDate(content._createdAt)}</TextDetail>
        <TextDetail>Last updated: {formatDate(content._updatedAt)}</TextDetail>
      </TimingSection>
      {content.content.map((item) => (
        <BlogContent key={item._Îkey} item={item} />
      ))}
    </StyledArticle>
  );
};
