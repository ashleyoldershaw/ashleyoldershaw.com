import Link from "next/link";
import { Fragment } from "react";
import styled from "styled-components";

const LinkStyle = styled.div`
  :hover {
    cursor: pointer;
  }
`;

export const SmartLink = ({ href, children }) => {
  if (href.charAt(0) === "/") {
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
