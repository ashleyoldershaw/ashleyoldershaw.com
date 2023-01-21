import { ToggleButton } from "../styling/Buttons/Buttons";
import { BodyText, SectionTitle, TextDetail } from "../styling/TextStyles";
import { SmartLink } from "../utility/SmartLink";
import { NavBarLinks, NavBarStyle, ThemeSelector } from "./NavBar.style";

export const NavBar = ({ layout_props: { nav_bar }, setTheme }) => {
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
      <ThemeSelector>
        <ToggleButton
          onToggled={(toggled) => {
            setTheme(toggled ? "dark" : "light");
          }}
          onLabel={<TextDetail>Dark</TextDetail>}
          offLabel={<TextDetail>Light</TextDetail>}
        />
      </ThemeSelector>
    </NavBarStyle>
  );
};
