import { BodyText, SectionTitle } from "../styling/TextStyles";
import { SmartLink } from "../utility/SmartLink";
import { NavBarLinks, NavBarStyle } from "./NavBar.style";

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
