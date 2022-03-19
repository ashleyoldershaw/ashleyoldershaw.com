import styled from "styled-components";
import { displays } from "./styling/Display";
import { BodyText, SectionTitle } from "./styling/TextStyles";
import {
  dark_mode_background,
  dark_mode_text,
  light_mode_background,
  light_mode_text,
} from "./styling/Themes";
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

  border-width: 1px;
  border-style: none none solid none;

  @media (prefers-color-scheme: light) {
    border-color: ${light_mode_text};
    background-color: ${light_mode_background};
  }
  @media (prefers-color-scheme: dark) {
    border-color: ${dark_mode_text};
    background-color: ${dark_mode_background};
  }

  @media (max-width: ${displays.mobileL}) {
    flex-direction: column;
    gap: 0;

    div {
      flex-direction: column;
      align-items: center;
      gap: 10px;
      p {
        margin: 0;
      }
    }
  }

  @media (min-width: ${displays.mobileL}) {
    z-index: 1;
    position: -webkit-sticky;
    position: sticky;
    top: 0;
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
