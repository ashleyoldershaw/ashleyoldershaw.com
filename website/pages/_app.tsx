import Head from "next/head";
import { useEffect, useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import { Footer } from "../components/Footer";
import { NavBar } from "../components/NavBar/Navbar";
import { urlFor } from "../components/sanity";
import { displays } from "../components/styling/Display";
import { horizontalMargin } from "../components/styling/Layout";

import "./app.css";

const AppStyle = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;

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

const MyApp = ({ Component, pageProps, auth }) => {
  const [mq, setMq] = useState(null);
  const [ready, setReady] = useState(false);
  useEffect(() => {
    setMq(window.matchMedia("(prefers-color-scheme: dark)"));
    setReady(true);
  }, []);

  const [colourTheme, setTheme] = useState(null);
  useEffect(() => {
    // this will become useful later on
    if (!mq) return;
    setTheme(mq.matches ? "dark" : "light");
  }, [mq]);

  useEffect(() => {
    if (!colourTheme) return;
    console.log(`You prefer ${colourTheme} mode! Good choice :)`);
  }, [colourTheme]);

  const { light: light_mode, dark: dark_mode } = pageProps.layout_props.themes;
  const themeProps =
    colourTheme === "light"
      ? {
          background: light_mode.background.hex,
          secondary_background: light_mode.secondary_background.hex,
          accent: light_mode.accent.hex,
          contrast: light_mode.contrast.hex,
          text: light_mode.text.hex,
          full: "#ffffff",
        }
      : {
          background: dark_mode.background.hex,
          secondary_background: dark_mode.secondary_background.hex,
          accent: dark_mode.accent.hex,
          contrast: dark_mode.contrast.hex,
          text: dark_mode.text.hex,
          full: "#000000",
        };

  const theme = { ...themeProps, type: colourTheme };

  if (Object.keys(pageProps).length === 0) return null;
  if (!ready) return null;

  return (
    <ThemeProvider theme={theme}>
      <AppStyle>
        <Head>
          <title>Ash Oldershaw</title>
          {theme.type === "light" && (
            <>
              <link
                rel="icon"
                type="image/svg"
                sizes="32x32"
                href={urlFor(
                  pageProps.layout_props.favicons.favicon_light
                ).url()}
              />
              <link
                rel="shortcut icon"
                href={urlFor(
                  pageProps.layout_props.favicons.favicon_light
                ).url()}
              />
            </>
          )}
          {theme.type === "dark" && (
            <>
              <link
                rel="icon"
                type="image/svg"
                sizes="32x32"
                href={urlFor(
                  pageProps.layout_props.favicons.favicon_dark
                ).url()}
              />
              <link
                rel="shortcut icon"
                href={urlFor(
                  pageProps.layout_props.favicons.favicon_dark
                ).url()}
              />
            </>
          )}
        </Head>

        <NavBar {...pageProps} />
        <BodyStyle>
          <Component {...pageProps} />
        </BodyStyle>
        <Footer />
      </AppStyle>
    </ThemeProvider>
  );
};
export default MyApp;
