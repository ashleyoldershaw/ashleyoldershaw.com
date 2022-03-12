import { useState } from "react";
import styled from "styled-components";
import { BodyText } from "./styling/TextStyles";
import {
  dark_mode_background,
  dark_mode_text,
  light_mode_background,
  light_mode_text,
} from "./styling/Themes";

const ExpandableTextStyle = styled.div`
  display: flex;
  flex-direction: column;
  div {
    display: flex;
  }

  @media (prefers-color-scheme: light) {
    border-color: ${light_mode_text};
    background-color: ${light_mode_background};
  }
  @media (prefers-color-scheme: dark) {
    border-color: ${dark_mode_text};
    background-color: ${dark_mode_background};
  }
  border-style: dashed;
  border-width: 2px;
  padding-right: 1em;
  // border-radius: 5px;
  margin: 5px 0;
  transition: all 0.4s ease;
`;

const ExpandButtonStyle = styled.button`
  border-width: 1px;

  @media (prefers-color-scheme: light) {
    border-color: ${light_mode_text};
    background-color: ${light_mode_background};
  }
  @media (prefers-color-scheme: dark) {
    border-color: ${dark_mode_text};
    background-color: ${dark_mode_background};
  }
  // align-self: center;
  margin: 25px 1em;
  // border-radius: 5px;
  width: 25px;
  height: 25px;
  transition: all 0.4s ease;
  border-style: dashed;
  border-width: 2px;
`;

const ExpandButton = (props) => {
  return <ExpandButtonStyle {...props} />;
};

const ExpandButtonLabel = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const ExpandableText = ({ info }) => {
  return info.map((item) => {
    if (item.children) {
      const [toggleClicked, setToggleClicked] = useState(false);

      return (
        <ExpandableTextStyle>
          <div>
            <ExpandButton onClick={() => setToggleClicked(!toggleClicked)}>
              {toggleClicked ? "-" : "+"}
            </ExpandButton>
            <ExpandButtonLabel>
              <BodyText>{item.text}...</BodyText>
              {toggleClicked ? <ExpandableText info={item.children} /> : ""}
            </ExpandButtonLabel>
          </div>
        </ExpandableTextStyle>
      );
    }

    return <BodyText>{item.text}</BodyText>;
  });
};
