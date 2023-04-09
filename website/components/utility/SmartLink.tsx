import Link from "next/link";
import styled from "styled-components";

const LinkStyle = styled.div`
  :hover {
    cursor: pointer;
  }
`;

export const SmartLink = ({ href, children, display = "block" }) => {
  if (href.startsWith("/")) {
    return (
      <LinkStyle style={{ display }}>
        <Link href={href} legacyBehavior>
          {children}
        </Link>
      </LinkStyle>
    );
  }
  return (
    <LinkStyle>
      <a href={href} target="_blank" rel="noreferrer">
        {children}
      </a>
    </LinkStyle>
  );
};

export const OptionalSmartLink = ({ href, children, display = "block" }) => {
  if (href) {
    return (
      <SmartLink href={href} display={display}>
        {children}
      </SmartLink>
    );
  } else return children;
};
