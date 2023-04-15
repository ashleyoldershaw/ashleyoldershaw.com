import { useState } from "react";
import { SmartLink } from "../../utility/SmartLink";
import { BodyText } from "../TextStyles";
import {
  OnBackground,
  StyledCustomButton,
  ToggleButtonBack,
  ToggleButtonFront,
  ToggleButtonWrapper,
} from "./Buttons.style";

interface ButtonProps {
  text: string;
  onClick?: () => unknown;
  type?: "button" | "reset" | "submit";
}

export const CustomButton = ({
  text,
  onClick = () => {},
  type = "button",
}: ButtonProps) => {
  return (
    <StyledCustomButton onClick={onClick} type={type}>
      <BodyText style={{ margin: "15px" }}>{text}</BodyText>
    </StyledCustomButton>
  );
};

interface LinkButtonProps extends ButtonProps {
  url: string;
}

export const LinkButton = ({
  url,
  text,
  onClick = () => {},
  type = "button",
}: LinkButtonProps) => (
  <SmartLink href={url}>
    <div>
      <CustomButton onClick={onClick} text={text} type={type} />
    </div>
  </SmartLink>
);

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
