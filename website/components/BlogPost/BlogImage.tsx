import Image from "next/image";
import { urlFor } from "../sanity";
import { TextDetail } from "../styling/TextStyles";
import { StyledBlogImageWrapper } from "./BlogPost.style";

const getBlogImageDimensions = (url) => {
  const [width, height] = url.match(/[0-9]+x[0-9]+/g)[0].split("x");
  return { height: `${height}px`, width: `${width}px` };
};

export const BlogImage = ({ image, alt, caption }) => (
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
