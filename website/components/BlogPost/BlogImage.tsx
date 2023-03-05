import Image from "next/image";
import { useGetImageProps } from "../sanity";
import { TextDetail } from "../styling/TextStyles";
import { StyledBlogImageWrapper } from "./BlogPost.style";

export const BlogImage = ({ image, alt, caption }) => (
  <StyledBlogImageWrapper>
    <Image {...useGetImageProps(image)} alt={alt} className="next-image" />
    {caption && <TextDetail>{caption}</TextDetail>}
  </StyledBlogImageWrapper>
);
