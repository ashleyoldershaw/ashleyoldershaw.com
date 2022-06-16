import { useWatch } from "react-hook-form";
import styled from "styled-components";
import { BodyText } from "./TextStyles";
import {
  dark_mode_accent,
  dark_mode_accent_contrast,
  light_mode_accent,
  light_mode_accent_contrast,
} from "./Themes";

const CustomRangeStyle = styled.input`
  width: 100%;
  -webkit-appearance: none; /* Override default CSS styles */
  appearance: none;
  width: 100%; /* Full-width */
  height: 0.5em; /* Specified height */
  @media (prefers-color-scheme: light) {
    background: ${light_mode_accent_contrast};
  }
  @media (prefers-color-scheme: dark) {
    background: ${dark_mode_accent_contrast};
  }
  outline: none; /* Remove outline */
  opacity: 0.7; /* Set transparency (for mouse-over effects on hover) */
  -webkit-transition: 0.2s; /* 0.2 seconds transition on hover */
  transition: opacity 0.2s;

  /* Mouse-over effects */
  :hover {
    opacity: 1; /* Fully shown on mouse-over */
  }

  /* The slider handle (use -webkit- (Chrome, Opera, Safari, Edge) and -moz- (Firefox) to override default look) */
  ::-webkit-slider-thumb {
    -webkit-appearance: none; /* Override default look */
    appearance: none;
    width: 1em; /* Set a specific slider handle width */
    height: 1em; /* Slider handle height */
    @media (prefers-color-scheme: light) {
      background: ${light_mode_accent};
    }
    @media (prefers-color-scheme: dark) {
      background: ${dark_mode_accent};
    }
    cursor: pointer; /* Cursor on hover */
    opacity: 0.7; /* Set transparency (for mouse-over effects on hover) */
  }

  ::-moz-range-thumb {
    width: 2em; /* Set a specific slider handle width */
    height: 2em; /* Slider handle height */
    @media (prefers-color-scheme: light) {
      background: ${light_mode_accent};
    }
    @media (prefers-color-scheme: dark) {
      background: ${dark_mode_accent};
    }
    cursor: pointer; /* Cursor on hover */
    opacity: 0.7; /* Set transparency (for mouse-over effects on hover) */
  }
`;

const CustomRangeWrapper = styled.div`
  display: flex;
  width: 16em;
  align-items: center;
  justify-content: space-between;
  border: 1px solid red;
  input {
    border: 1px solid red;
  }
  p {
    border: 1px solid red;

    width: 3em;
  }
`;

export const CustomRange = ({
  register,
  control,
  name,
  min = 0.0,
  max = 1.0,
  step = 0.01,
}) => {
  const value = useWatch({
    control,
    name,
  });

  return (
    <CustomRangeWrapper>
      <CustomRangeStyle
        type="range"
        min={min}
        max={max}
        step={step}
        {...register(name)}
      />
      <BodyText>{value}</BodyText>
    </CustomRangeWrapper>
  );
};
