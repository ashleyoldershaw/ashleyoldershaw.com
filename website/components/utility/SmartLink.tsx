import Link from "next/link";
import styled from "styled-components";

const StyledLink = styled.span`
  :hover {
    cursor: pointer;
  }
`;

export const SmartLink = ({ href, children }) => {
  if (href.startsWith("/")) {
    return (
      <StyledLink>
        <Link href={href} legacyBehavior>
          {children}
        </Link>
      </StyledLink>
    );
  }
  return (
    <StyledLink as="a" href={href} target="_blank" rel="noreferrer">
      {children}
    </StyledLink>
  );
};

export const OptionalSmartLink = ({ href, children }) => {
  if (href) {
    return <SmartLink href={href}>{children}</SmartLink>;
  }
  return children;
};
