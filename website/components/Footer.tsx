import styled from "styled-components";
import { horizontalMargin } from "./styling/Layout";
import { TextDetail } from "./styling/TextStyles";

const FooterStyle = styled.div`
  margin-top: auto;
  padding: 20px ${horizontalMargin} 0 ${horizontalMargin};
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
