import { Analytics } from "@vercel/analytics/react";
import Head from "next/head";
import { useEffect, useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import { Footer } from "../components/Footer";
import { NavBar } from "../components/NavBar/Navbar";
import { useGetImageProps } from "../components/sanity";
import { displays } from "../components/styling/Display";
import { horizontalMargin } from "../components/styling/Layout";
import "./app.css";

const AppStyle = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  transition: 0.5s all;

  background: ${(props) => props.theme.background};
  color: ${(props) => props.theme.text};

  margin: 0;
`;

const BodyStyle = styled.div`
  margin: 0 ${horizontalMargin};
  @media (max-width: ${displays.tablet}) {
    margin: 0;
  }
`;

const getTheme = (colourTheme, light_mode, dark_mode) => {
  switch (colourTheme) {
    case "light":
      return {
        background: light_mode.background.hex,
        secondary_background: light_mode.secondary_background.hex,
        accent: light_mode.accent.hex,
        contrast: light_mode.contrast.hex,
        text: light_mode.text.hex,
        full: "#ffffff",
      };
    case "dark":
      return {
        background: dark_mode.background.hex,
        secondary_background: dark_mode.secondary_background.hex,
        accent: dark_mode.accent.hex,
        contrast: dark_mode.contrast.hex,
        text: dark_mode.text.hex,
        full: "#000000",
      };
  }
};

const MyApp = ({ Component, pageProps }) => {
  const [colourTheme, setTheme] = useState("light");

  useEffect(() => {
    if (!colourTheme) return;
    console.log(`You prefer ${colourTheme} mode! Good choice :)`);
  }, [colourTheme]);

  const favicon_props = useGetImageProps(
    colourTheme === "light"
      ? pageProps.layout_props?.favicons?.favicon_light
      : pageProps.layout_props?.favicons?.favicon_dark
  );

  if (Object.keys(pageProps).length === 0) return null;

  const { light: light_mode, dark: dark_mode } = pageProps.layout_props?.themes;
  const themeProps = getTheme(colourTheme, light_mode, dark_mode);
  const theme = { ...themeProps, type: colourTheme };
  const favicon_url = favicon_props.src;

  return (
    <ThemeProvider theme={theme}>
      <AppStyle>
        <Head>
          <title>Ash Oldershaw</title>
          <link rel="icon" type="image/svg" sizes="32x32" href={favicon_url} />
          <link rel="shortcut icon" href={favicon_url} />
        </Head>

        <NavBar {...pageProps} setTheme={setTheme} />
        <BodyStyle>
          <Component {...pageProps} />
        </BodyStyle>
        <Footer />
        <Analytics />
      </AppStyle>
    </ThemeProvider>
  );
};
export default MyApp;
