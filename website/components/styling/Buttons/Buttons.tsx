import { useState } from "react";
import { BodyText } from "../TextStyles";
import {
  OnBackground,
  StyledCustomButton,
  ToggleButtonBack,
  ToggleButtonFront,
  ToggleButtonWrapper,
} from "./Buttons.style";

export const CustomButton = ({
  text,
  onClick = () => {},
  type = "button",
}: {
  text: string;
  onClick?: () => unknown;
  type?: string;
}) => {
  return (
    <StyledCustomButton onClick={onClick} type={type}>
      <BodyText style={{ margin: "15px" }}>{text}</BodyText>
    </StyledCustomButton>
  );
};

export const ToggleButton = ({ onLabel, offLabel, onToggled }) => {
  const [toggled, setToggled] = useState<boolean>(false);
  return (
    <ToggleButtonWrapper>
      {offLabel}
      <ToggleButtonBack
        toggled={toggled}
        onClick={() => {
          setToggled((t) => {
            onToggled(!t);
            return !t;
          });
        }}
      >
        <OnBackground toggled={toggled} />
        <ToggleButtonFront toggled={toggled} />
      </ToggleButtonBack>
      {onLabel}
    </ToggleButtonWrapper>
  );
};

export const ClipboardButton = ({
  defaultText,
  successfulCopyText = null,
  copiedText,
}: {
  defaultText: string;
  successfulCopyText?: string;
  copiedText: string;
}) => {
  const [shareClicked, setShareClicked] = useState(false);

  return (
    <CustomButton
      text={shareClicked ? successfulCopyText ?? defaultText : defaultText}
      onClick={() => {
        setShareClicked(true);
        navigator.clipboard.writeText(copiedText);
      }}
    />
  );
};
