import Image from "next/image";
import { useGetImageProps } from "../sanity";
import { TextDetail } from "../styling/TextStyles";
import { OptionalSmartLink } from "../utility/SmartLink";
import { StyledBlogImageWrapper } from "./BlogPost.style";

export const ImageCredit = ({ credit }) => {
  const licence = credit.licence;

  if (licence === "copyrighted") {
    return (
      <OptionalSmartLink href={credit.url} display="inline">
        <TextDetail>
          Image credit: {credit.author}, {`"${credit.title}"`}
          {", "}
          {credit.year}
        </TextDetail>
      </OptionalSmartLink>
    );
  } else if (licence === "public_domain") {
    return (
      <TextDetail>
        Image credit: {`"${credit.title}"`} ({credit.author}, {credit.year})
        Public domain
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
