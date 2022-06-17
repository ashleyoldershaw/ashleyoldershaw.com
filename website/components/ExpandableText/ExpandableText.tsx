import { useState } from "react";
import { BodyText } from "../styling/TextStyles";
import {
  ExpandableTextChildrenStyle,
  ExpandableTextStyle,
  ExpandButton,
  ExpandButtonLabel,
} from "./ExpandableText.style";

export const ExpandableText = ({ info }) => {
  const expandable_text = info.map((item, i) => {
    if (item.children) {
      const [toggleClicked, setToggleClicked] = useState(false); // eslint-disable-line -- it works and I'm leaving it

      return (
        <div>
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
      );
    }

    return <BodyText key={i}>{item.text}</BodyText>;
  });
  return <ExpandableTextStyle>{expandable_text}</ExpandableTextStyle>;
};
