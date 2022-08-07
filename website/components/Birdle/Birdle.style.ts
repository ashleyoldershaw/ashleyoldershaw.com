import styled from "styled-components";
import { displays } from "../styling/Display";
import { borderRadius, borderWidth } from "../styling/Layout";
import {
  dark_mode_contrast,
  dark_mode_secondary_background,
  light_mode_contrast,
  light_mode_secondary_background,
} from "../styling/Themes";

export const BirdleStyling = styled.div`
  border-radius: ${borderRadius};
  border: ${borderWidth}px solid red;
  @media (prefers-color-scheme: light) {
    border-color: ${light_mode_contrast};
    background-color: ${light_mode_secondary_background};
  }
  @media (prefers-color-scheme: dark) {
    background-color: ${dark_mode_secondary_background};
    border-color: ${dark_mode_contrast};
  }
  padding: 1em;
`;

export const BirdGuesserStyle = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: ${displays.laptop}) {
    width: 50%;
    margin: auto;
  }
  p {
    text-align: center;
  }

  align-items: center;

  // thanks to https://erikmartinjordan.com/ for this
  input.shake {
    animation: shake 1s infinite;
  }

  @keyframes shake {
    0% {
      transform: translate(2px, 1px) rotate(0deg);
    }
    10% {
      transform: translate(-1px, -2px) rotate(-2deg);
    }
    20% {
      transform: translate(-3px, 0px) rotate(3deg);
    }
    30% {
      transform: translate(0px, 2px) rotate(0deg);
    }
    40% {
      transform: translate(1px, -1px) rotate(1deg);
    }
    50% {
      transform: translate(-1px, 2px) rotate(-1deg);
    }
    60% {
      transform: translate(-3px, 1px) rotate(0deg);
    }
    70% {
      transform: translate(2px, 1px) rotate(-2deg);
    }
    80% {
      transform: translate(-1px, -1px) rotate(4deg);
    }
    90% {
      transform: translate(2px, 2px) rotate(0deg);
    }
    100% {
      transform: translate(1px, -2px) rotate(-1deg);
    }
  }
`;

export const BirdImage = styled.img`
  max-width: 80%;
  max-height: 50vh;

  border: ${borderWidth}px solid red;

  @media (prefers-color-scheme: light) {
    border-color: ${light_mode_contrast};
  }
  @media (prefers-color-scheme: dark) {
    border-color: ${dark_mode_contrast};
  }

  @media (max-width: ${displays.mobileL}) {
    max-width: 100%;
  }
`;

export const BirdDisplayStyle = styled.div`
  display: flex;
  justify-content: center;
`;
