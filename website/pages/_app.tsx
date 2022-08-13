import Head from "next/head";
import { useEffect, useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import { Footer } from "../components/Footer";
import { NavBar } from "../components/NavBar/Navbar";
import { urlFor } from "../components/sanity";
import { displays } from "../components/styling/Display";
import { horizontalMargin } from "../components/styling/Layout";

import {
  dark_mode_accent,
  dark_mode_background,
  dark_mode_contrast,
  dark_mode_secondary_background,
  dark_mode_text,
  light_mode_accent,
  light_mode_background,
  light_mode_contrast,
  light_mode_secondary_background,
  light_mode_text,
} from "../components/styling/Themes";
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

  const themeProps =
    colourTheme === "light"
      ? {
          background: light_mode_background,
          secondary_background: light_mode_secondary_background,
          accent: light_mode_accent,
          contrast: light_mode_contrast,
          text: light_mode_text,
          full: "#ffffff",
        }
      : {
          background: dark_mode_background,
          secondary_background: dark_mode_secondary_background,
          accent: dark_mode_accent,
          contrast: dark_mode_contrast,
          text: dark_mode_text,
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
