import Head from "next/head";
import { NavButton } from "../styling/Buttons/Buttons";
import { PageTitleSection, TextBasedWidth } from "../styling/Display";
import {
  BodyText,
  Emphasis,
  PageSubtitle,
  PageTitle,
  SectionTitle,
  SubSectionTitle,
  TextDetail,
} from "../styling/TextStyles";
import { useTheme } from "../styling/Themes";
import { formatDate } from "../utility/formatting";
import { SmartLink } from "../utility/SmartLink";
import { BlogImage } from "./BlogImage";
import {
  StyledArticle,
  StyledBlogContent,
  TimingSection,
} from "./BlogPost.style";
import { Bullets } from "./Bullets/Bullets";

const BlogContent = ({ item, theme }) => {
  switch (item._type) {
    case "text_body":
      return <BodyText>{item.text_body}</BodyText>;
    case "emphasis_quote":
      return <Emphasis>{item.emphasis_quote}</Emphasis>;
    case "image_component":
      return (
        <BlogImage
          image={theme === "dark" ? item.dark_image || item.image : item.image}
          alt={item.alt_text}
          caption={item.caption}
        />
      );
    case "section_title":
      return <SectionTitle>{item.section_title}</SectionTitle>;
    case "subsection_title":
      return <SubSectionTitle>{item.subsection_title}</SubSectionTitle>;
    case "bullets":
      return <Bullets item={item} />;
    case "button":
      return (
        <SmartLink href={item.link}>
          <NavButton text={item.text} />
        </SmartLink>
      );
    default:
      break;
  }

  return null;
};

const getWordCount = (input) => {
  if (!input) return 0;
  return input.trim().split(/\s+/).length;
};

const sumList = (input) => {
  if (!input) return 0;
  return input.reduce(
    (previousValue, currentValue) => previousValue + currentValue
  );
};

export const BlogPost = ({ content, meta_info }) => {
  const theme = useTheme();
  return (
    <StyledArticle>
      <Head>
        <title>{content.title}</title>
      </Head>
      <PageTitleSection>
        <PageTitle>{content.title}</PageTitle>
        <PageSubtitle>{content.subtitle}</PageSubtitle>
      </PageTitleSection>
      <TextBasedWidth>
        <StyledBlogContent>
          <TimingSection>
            <TextDetail>
              Published: {formatDate(content.publish_date)}
            </TextDetail>
            {content._updatedAt > content.publish_date && (
              <TextDetail>
                Last updated: {formatDate(content._updatedAt)}
              </TextDetail>
            )}
          </TimingSection>
          <TextDetail>
            {sumList(
              content.content.map((item) => getWordCount(item.text_body))
            ) +
              sumList(
                content.content.map((item) =>
                  sumList(item.points?.map((point) => getWordCount(point.text)))
                )
              )}{" "}
            words
          </TextDetail>
          {content.content.map((item) => (
            <BlogContent key={item._key} item={item} theme={theme} />
          ))}
          <SmartLink href={meta_info.back_to_menu.url}>
            <NavButton text={meta_info.back_to_menu.text} />
          </SmartLink>
        </StyledBlogContent>
      </TextBasedWidth>
    </StyledArticle>
  );
};
