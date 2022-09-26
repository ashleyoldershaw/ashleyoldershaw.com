import styled from "styled-components";
import { borderWidth, horizontalMargin } from "./styling/Layout";
import { TextDetail } from "./styling/TextStyles";

const FooterStyle = styled.div`
  margin-top: auto;
  padding: 10px ${horizontalMargin} 10px ${horizontalMargin};
  margin-top: 10px;
  border-style: solid;
  border-width: ${borderWidth}px 0 0 0;

  border-color: ${(props) => props.theme.contrast};
  background-color: ${(props) => props.theme.secondary_background};
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
