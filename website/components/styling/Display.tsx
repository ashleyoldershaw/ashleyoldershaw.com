import { useEffect, useRef, useState } from "react";
import styled, { useTheme } from "styled-components";
import { borderRadius, borderWidth, horizontalMargin } from "./Layout";

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

  border: ${borderWidth}px solid ${(props) => props.theme.contrast};
  border-width: 0 ${borderWidth}px;

  background-color: ${(props) => props.theme.secondary_background};

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
    fill: ${(props) => props.fill_colour};
  }
  polyline {
    fill: none;
    stroke-width: ${borderWidth}px;
    stroke: ${(props) => props.theme.contrast};
  }
`;

export const TriangleDivider = ({
  direction = "down",
  height = 140,
  fill_colour = "",
  ratio = 0,
}) => {
  let lines;

  const theme = useTheme();

  const [width, setWidth] = useState(1000);

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
      fill_colour={fill_colour || theme.secondary_background}
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
      <TriangleDivider ratio={0.15} />
    </PageTitleSectionStyle>
  );
};

const ContentSectionStyle = styled.div`
  border-radius: ${borderRadius};
  border: ${borderWidth}px solid ${(props) => props.theme.contrast};
  border-width: 0 ${borderWidth}px;

  background-color: ${(props) => props.theme.secondary_background};

  > * {
    margin: 0;
    padding: ${horizontalMargin};

    border-top: ${borderWidth}px solid ${(props) => props.theme.contrast};
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

export const ContentSection = ({ children, style = {} }) => {
  return (
    <ContentSectionWrapper>
      <TriangleDivider direction="up" ratio={0.15} />
      <ContentSectionStyle style={style}>{children}</ContentSectionStyle>
      <TriangleDivider direction="down" ratio={0.15} />
    </ContentSectionWrapper>
  );
};
