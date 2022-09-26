import { useState } from "react";
import { BodyText } from "../TextStyles";
import {
  OffBackground,
  OnBackground,
  StyledCustomButton,
  ToggleButtonBack,
  ToggleButtonFront,
} from "./Buttons.style";

export const CustomButton = ({ text, onClick = () => {}, type = "button" }) => {
  return (
    <StyledCustomButton onClick={onClick} type={type}>
      <BodyText style={{ margin: "15px" }}>{text}</BodyText>
    </StyledCustomButton>
  );
};

export const ToggleButton = ({ onLabel, offLabel }) => {
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
