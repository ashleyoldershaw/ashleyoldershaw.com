import Image from "next/image";
import { useGetImageProps } from "../../sanity";
import { TextDetail } from "../../styling/TextStyles";
import { OptionalSmartLink, SmartLink } from "../../utility/SmartLink";
import { StyledBlogImageWrapper } from "../BlogPost.style";
import { generateCreativeCommonsInfo } from "./ccHelpers";

export const ImageCredit = ({ credit }) => {
  const licence = credit.licence;

  if (licence === "copyrighted") {
    return (
      <TextDetail>
        Image credit:{" "}
        <OptionalSmartLink href={credit.url} display="inline">
          {credit.author}
        </OptionalSmartLink>
        , {`"${credit.title}"`}
        {", "}
        {credit.year}
      </TextDetail>
    );
  } else if (licence === "public_domain") {
    return (
      <TextDetail>
        Image credit: {`"${credit.title}"`} ({credit.author}, {credit.year})
        Public domain
      </TextDetail>
    );
  } else if (licence === "creative_commons") {
    console.log(credit);
    const licence_info = generateCreativeCommonsInfo(credit.ccLicenceType);
    return (
      <TextDetail>
        Image credit:{" "}
        <OptionalSmartLink href={credit.image_source_url}>
          {`"${credit.title}"`}
        </OptionalSmartLink>
        ,{" "}
        <OptionalSmartLink href={credit.url}>{credit.author}</OptionalSmartLink>
        {", "}
        {credit.year}{" "}
        <SmartLink href={licence_info.link}>{licence_info.text}</SmartLink>
      </TextDetail>
    );
  }
};

export const BlogImage = ({ image, alt, caption, credit }) => (
  <StyledBlogImageWrapper>
    <Image {...useGetImageProps(image)} alt={alt} className="next-image" />
    {credit && <ImageCredit credit={credit} />}
    {caption && <TextDetail>{caption}</TextDetail>}
  </StyledBlogImageWrapper>
);
