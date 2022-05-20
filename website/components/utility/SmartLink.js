import Link from "next/link";
import styled from "styled-components";

const LinkStyle = styled.div`
  :hover {
    cursor: pointer;
  }
`;

export const SmartLink = ({ href, children }) => {
  if (href.startsWith("/")) {
    return (
      <LinkStyle>
        <Link href={href}>{children}</Link>
      </LinkStyle>
    );
  }
  return (
    <LinkStyle>
      <a href={href} target="_blank">
        {children}
      </a>
    </LinkStyle>
  );
};

export const OptionalSmartLink = ({ href, children }) => {
  if (href) {
    return <SmartLink href={href}>{children}</SmartLink>;
  } else return children;
};
