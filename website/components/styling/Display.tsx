import styled from "styled-components";
import { borderRadius, horizontalMargin } from "./Layout";
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

  border-width: 0 1px;
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
  width: 100%;
  overflow: hidden;
  line-height: 0;

  svg {
    position: relative;
    display: block;
    width: calc(100% + 1.3px);
    height: 10em;
  }

  path {
    @media (prefers-color-scheme: light) {
      fill: ${light_mode_secondary_background};
    }
    @media (prefers-color-scheme: dark) {
      fill: ${dark_mode_secondary_background};
    }
  }
  polyline {
    fill: none;
    stroke-width: 0.5px;
    @media (prefers-color-scheme: light) {
      stroke: ${light_mode_contrast};
    }
    @media (prefers-color-scheme: dark) {
      stroke: ${dark_mode_contrast};
    }
  }
`;

const TriangleDivider = ({ direction = "down" }) => {
  const width = 1200;
  const height = 120;
  const lines =
    direction === "down" ? (
      <>
        <path
          d={`M ${width} 0 L 0 0 ${width / 2} ${height} ${width} 0z`}
        ></path>
        <polyline points={`${width},0 ${width / 2},${height} 0,0`} />
      </>
    ) : (
      <>
        <path d={`M 0 ${height} L ${width / 2} ${0} ${width} ${height}`}></path>
        <polyline points={`${width},${height} ${width / 2},0 0,${height}`} />
      </>
    );

  return (
    <TriangleDividerStyle>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox={`0 0 ${width} ${height}`}
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
  border: 1px solid red;
  border-width: 0 1px;
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

  margin: 0;

  > * {
    padding: ${horizontalMargin};

    border-top: 1px solid red;
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

export const ContentSection = ({ children }) => {
  return (
    <div>
      <TriangleDivider direction="up" />
      <ContentSectionStyle>{children}</ContentSectionStyle>
      <TriangleDivider direction="down" />
    </div>
  );
};
