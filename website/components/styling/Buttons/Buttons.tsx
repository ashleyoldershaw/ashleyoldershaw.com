import { useState } from "react";
import { BodyText } from "../TextStyles";
import {
  OffBackground,
  OnBackground,
  StyledCustomButton,
  ToggleButtonBack,
  ToggleButtonFront,
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

export const ToggleButton = ({
  onLabel,
  offLabel,
}: {
  onLabel: string;
  offLabel: string;
}) => {
  const [toggled, setToggled] = useState<boolean>(false);
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "0.5em" }}>
      {offLabel}
      <ToggleButtonBack
        toggled={toggled}
        onClick={() => {
          setToggled((t) => !t);
        }}
      >
        <OnBackground toggled={toggled} />
        <ToggleButtonFront toggled={toggled} />
        <OffBackground toggled={toggled} />
      </ToggleButtonBack>
      {onLabel}
    </div>
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
