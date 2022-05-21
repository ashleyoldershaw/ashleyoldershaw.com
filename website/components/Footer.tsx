import styled from "styled-components";
import { BodyText } from "./styling/TextStyles";

const FooterStyle = styled.div`
  margin-top: auto;
`;

export const Footer = () => {
  return (
    <FooterStyle>
      <BodyText>&copy; {new Date().getFullYear()} Ashley Oldershaw</BodyText>
    </FooterStyle>
  );
};
