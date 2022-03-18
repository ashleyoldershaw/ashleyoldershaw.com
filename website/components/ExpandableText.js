import { useState } from "react";
import styled from "styled-components";
import { displays } from "./styling/Display";
import { BodyText } from "./styling/TextStyles";
import {
  dark_mode_background,
  dark_mode_text,
  light_mode_accent,
  light_mode_background,
  light_mode_text,
} from "./styling/Themes";

const ExpandableTextStyle = styled.div`
  display: flex;
  flex-direction: column;
  div {
    display: flex;
  }

  justify-content: center;

  @media (prefers-color-scheme: light) {
    color: ${light_mode_text};
  }
  @media (prefers-color-scheme: dark) {
    border-color: ${dark_mode_text};
    background-color: ${dark_mode_background};
    color: ${dark_mode_text};
  }
  border-style: solid;
  border-width: 1px;
  padding-right: 5px;
  border-radius: 5px;
  margin: 5px 0;
  transition: all 0.4s ease;
`;

const ExpandButtonStyle = styled.button`
  border-width: 1px;

  @media (prefers-color-scheme: light) {
    border-color: ${light_mode_accent};
    background-color: ${light_mode_background};
    color: ${light_mode_text};
  }
  @media (prefers-color-scheme: dark) {
    border-color: ${dark_mode_text};
    background-color: ${dark_mode_background};
    color: ${dark_mode_text};
  }
  align-self: center;
  margin: 25px 5px;
  border-radius: 5px;
  width: 25px;
  height: 25px;
  transition: all 0.4s ease;
  border-style: solid;
  border-width: 2px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ExpandableTextChildrenStyle = styled.div`
  flex-direction: column;
  margin-left: 35px;

  @media (max-width: ${displays.mobileL}) {
    margin-left: 5px;
  }
`;

const ExpandButton = (props) => {
  return <ExpandButtonStyle {...props} />;
};

const ExpandButtonLabel = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
`;

export const ExpandableText = ({ info }) => {
  return info.map((item, i) => {
    if (item.children) {
      const [toggleClicked, setToggleClicked] = useState(false);

      return (
        <ExpandableTextStyle key={i}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div>
              <ExpandButton onClick={() => setToggleClicked(!toggleClicked)}>
                {toggleClicked ? "-" : "+"}
              </ExpandButton>
              <ExpandButtonLabel>
                <BodyText>{item.text}...</BodyText>
              </ExpandButtonLabel>
            </div>
            <ExpandableTextChildrenStyle>
              {toggleClicked ? <ExpandableText info={item.children} /> : ""}
            </ExpandableTextChildrenStyle>
          </div>
        </ExpandableTextStyle>
      );
    }

    return <BodyText>{item.text}</BodyText>;
  });
};
