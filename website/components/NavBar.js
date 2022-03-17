import styled from "styled-components";
import { displays } from "./styling/Display";
import { BodyText, PageTitle, SectionTitle } from "./styling/TextStyles";
import { SmartLink } from "./utility/SmartLink";

const NavBarStyle = styled.div`
  display: flex;
  align-items: center;
  gap: 10%;
  a {
    color: unset;
    text-decoration: unset;
  }
  padding: 10px 0;
  h2,
  p {
    padding: 0;
    margin: 0;
  }

  @media (max-width: ${displays.tablet}) {
    display: none;
  }
`;

const NavBarLinks = styled.div`
  display: flex;
  flex-grow: 1;
  gap: 5%;
  p {
    margin: 0 10px;
  }
`;

export const NavBar = ({ layout_props: { nav_bar } }) => {
  return (
    <NavBarStyle>
      <SmartLink href="/">
        <SectionTitle>{nav_bar.title}</SectionTitle>
      </SmartLink>
      <NavBarLinks>
        {nav_bar.links.map((link, i) => (
          <SmartLink href={link.url} key={i}>
            <BodyText>{link.name}</BodyText>
          </SmartLink>
        ))}
      </NavBarLinks>
    </NavBarStyle>
  );
};
