import styled from "styled-components";
import { TextDetail } from "./styling/TextStyles";

const FooterStyle = styled.div`
  margin-top: auto;
  padding-top: 20px;
`;

export const Footer = () => {
  return (
    <FooterStyle>
      <TextDetail>
        &copy; {new Date().getFullYear()} Ashley Oldershaw
      </TextDetail>
    </FooterStyle>
  );
};
