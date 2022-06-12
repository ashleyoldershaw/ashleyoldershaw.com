import { useState } from "react";
import { BodyText } from "../styling/TextStyles";
import {
  ExpandableTextChildrenStyle,
  ExpandableTextStyle,
  ExpandButton,
  ExpandButtonLabel,
} from "./ExpandableText.style";

export const ExpandableText = ({ info }) => {
  return info.map((item, i) => {
    if (item.children) {
      const [toggleClicked, setToggleClicked] = useState(false); // eslint-disable-line -- it works and I'm leaving it

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

    return <BodyText key={i}>{item.text}</BodyText>;
  });
};
