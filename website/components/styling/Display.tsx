import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { borderRadius, borderWidth, horizontalMargin } from "./Layout";
import {
  dark_mode_contrast,
  dark_mode_secondary_background,
  light_mode_contrast,
  light_mode_secondary_background,
} from "./Themes";

export const displays = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "425px",
  tablet: "768px",
  laptop: "1024px",
  laptopL: "1440px",
  desktop: "2560px",
};

export const TextBasedWidth = styled.div`
  max-width: 60em;
  margin: auto;
`;

const PageTitleStyle = styled.div`
  @media (max-width: ${displays.tablet}) {
    padding: 0 ${horizontalMargin};
  }

  border-width: 0 ${borderWidth}px;
  border-style: solid;

  @media (prefers-color-scheme: light) {
    background-color: ${light_mode_secondary_background};
    border-color: ${light_mode_contrast};
  }
  @media (prefers-color-scheme: dark) {
    background-color: ${dark_mode_secondary_background};
    border-color: ${dark_mode_contrast};
  }

  min-height: 40vh;
  padding: 0 ${horizontalMargin};
  @media (max-width: ${displays.tablet}) {
    min-height: unset;
  }
  @media (max-width: ${displays.laptopL}) {
    min-height: 40vh;
  }
`;

const TriangleDividerStyle = styled.div`
  overflow: hidden;
  line-height: 0;

  svg {
    position: relative;
    display: block;
  }

  path {
    @media (prefers-color-scheme: light) {
      fill: ${(props) => props.fill_light};
    }
    @media (prefers-color-scheme: dark) {
      fill: ${(props) => props.fill_dark};
    }
  }
  polyline {
    fill: none;
    stroke-width: ${borderWidth}px;
    @media (prefers-color-scheme: light) {
      stroke: ${light_mode_contrast};
    }
    @media (prefers-color-scheme: dark) {
      stroke: ${dark_mode_contrast};
    }
  }
`;

export const TriangleDivider = ({
  direction = "down",
  height = 140,
  fill_light = light_mode_secondary_background,
  fill_dark = dark_mode_secondary_background,
  ratio = 0,
}) => {
  let lines;

  const [width, setWidth] = useState(150);

  const triangleHeight = Math.floor(ratio ? width * ratio : height);

  const totalHeight = triangleHeight + borderWidth;

  const ref = useRef(null);
  useEffect(() => {
    setWidth(ref.current ? ref.current.offsetWidth : 0);
  }, [ref]);

  switch (direction) {
    case "down":
      lines = (
        <>
          <path
            d={`M ${width} 0 L 0 0 ${width / 2} ${triangleHeight} ${width} 0z`}
          />
          <polyline
            points={`${width - borderWidth},${borderWidth / 2} ${width},${
              borderWidth / 2
            } ${width / 2},${triangleHeight} ${0},${borderWidth / 2} 0,${
              borderWidth / 2
            } ${borderWidth},${borderWidth / 2}`}
          />
        </>
      );
      break;
    case "up":
      lines = (
        <>
          <path
            d={`M 0 ${totalHeight} L ${
              width / 2
            } ${borderWidth} ${width} ${totalHeight}`}
          />
          <polyline
            points={`${width - borderWidth},${
              totalHeight - borderWidth / 2
            } ${width},${totalHeight - borderWidth / 2} ${
              width / 2
            },${borderWidth} ${0},${
              totalHeight - borderWidth / 2
            } ${borderWidth},${totalHeight - borderWidth / 2}`}
          />
        </>
      );
      break;

    default:
      lines = null;
      break;
  }

  return (
    <TriangleDividerStyle
      ref={ref}
      fill_light={fill_light}
      fill_dark={fill_dark}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox={`0 0 ${width} ${totalHeight}`}
        preserveAspectRatio="none"
      >
        {lines}
      </svg>
    </TriangleDividerStyle>
  );
};

const PageTitleSectionStyle = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: ${horizontalMargin};
`;

export const PageTitleSection = ({ children }) => {
  return (
    <PageTitleSectionStyle>
      <PageTitleStyle>{children}</PageTitleStyle>
      <TriangleDivider />
    </PageTitleSectionStyle>
  );
};

const ContentSectionStyle = styled.div`
  border-radius: ${borderRadius};
  border: ${borderWidth}px solid red;
  border-width: 0 ${borderWidth}px;
  @media (prefers-color-scheme: light) {
    border-color: ${light_mode_contrast};
  }
  @media (prefers-color-scheme: dark) {
    border-color: ${dark_mode_contrast};
  }

  @media (prefers-color-scheme: light) {
    background-color: ${light_mode_secondary_background};
  }
  @media (prefers-color-scheme: dark) {
    background-color: ${dark_mode_secondary_background};
  }

  > * {
    margin: 0;
    padding: ${horizontalMargin};

    border-top: ${borderWidth}px solid red;
    @media (prefers-color-scheme: light) {
      border-color: ${light_mode_contrast};
    }
    @media (prefers-color-scheme: dark) {
      border-color: ${dark_mode_contrast};
    }
  }
  > *:first-child {
    border-top: none;
    padding-top: min(${horizontalMargin}, 1em);
    padding-bottom: min(${horizontalMargin}, 1em);
  }
`;

const ContentSectionWrapper = styled.div`
  margin: 1em 0;
`;

export const ContentSection = ({ children }) => {
  return (
    <ContentSectionWrapper>
      <TriangleDivider direction="up" />
      <ContentSectionStyle>{children}</ContentSectionStyle>
      <TriangleDivider direction="down" />
    </ContentSectionWrapper>
  );
};
