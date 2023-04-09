import Image from "next/image";
import { useGetImageProps } from "../sanity";
import { TextDetail } from "../styling/TextStyles";
import { OptionalSmartLink } from "../utility/SmartLink";
import { StyledBlogImageWrapper } from "./BlogPost.style";

export const ImageCredit = ({ credit }) => {
  const credit_object = credit[0];
  const type = credit_object._type;

  if (type === "with_permission") {
    return (
      <div>
        <OptionalSmartLink href={credit_object.url} display="inline">
          <TextDetail>
            Image credit: {credit_object.author}, {`"${credit_object.title}"`}
            {", "}
            {credit_object.year}
          </TextDetail>
        </OptionalSmartLink>
      </div>
    );
  }
};

export const BlogImage = ({ image, alt, caption, credit }) => (
  <StyledBlogImageWrapper>
    <Image {...useGetImageProps(image)} alt={alt} className="next-image" />
    {credit && credit.length == 1 && <ImageCredit credit={credit} />}
    {caption && <TextDetail>{caption}</TextDetail>}
  </StyledBlogImageWrapper>
);
