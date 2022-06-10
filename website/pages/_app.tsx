import Head from "next/head";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { Footer } from "../components/Footer";
import { NavBar } from "../components/NavBar";
import { urlFor } from "../components/sanity";
import { horizontalMargin } from "../components/styling/Layout";
import {
  dark_mode_background,
  dark_mode_text,
  light_mode_background,
  light_mode_text,
  ThemeContext,
} from "../components/styling/Themes";
import "./app.css";

const AppStyle = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  @media (prefers-color-scheme: light) {
    background: ${light_mode_background};
    color: ${light_mode_text};
  }
  @media (prefers-color-scheme: dark) {
    background: ${dark_mode_background};
    color: ${dark_mode_text};
  }

  margin: 0;
`;

const BodyStyle = styled.div`
  margin: 0 ${horizontalMargin};
`;

const MyApp = ({ Component, pageProps, auth }) => {
  const [mq, setMq] = useState(null);
  const [ready, setReady] = useState(false);
  useEffect(() => {
    setMq(window.matchMedia("(prefers-color-scheme: dark)"));
    setReady(true);
  }, []);

  const [theme, setTheme] = useState(null);
  useEffect(() => {
    // this will become useful later on
    if (!mq) return;
    setTheme(mq.matches ? "dark" : "light");
  }, [mq]);

  useEffect(() => {
    if (!theme) return;
    console.log(`You prefer ${theme} mode! Good choice :)`);
  }, [theme]);

  if (Object.keys(pageProps).length === 0) return null;
  if (!ready) return null;

  console.log(urlFor(pageProps.layout_props.favicons.favicon_light).url());
  return (
    <AppStyle>
      <Head>
        <title>Ash Oldershaw</title>
        {theme === "light" && (
          <>
            <link
              rel="icon"
              type="image/svg"
              sizes="32x32"
              href={urlFor(pageProps.layout_props.favicons.favicon_light).url()}
            />
            <link
              rel="shortcut icon"
              href={urlFor(pageProps.layout_props.favicons.favicon_light).url()}
            />
          </>
        )}
        {theme === "dark" && (
          <>
            <link
              rel="icon"
              type="image/svg"
              sizes="32x32"
              href={urlFor(pageProps.layout_props.favicons.favicon_dark).url()}
            />
            <link
              rel="shortcut icon"
              href={urlFor(pageProps.layout_props.favicons.favicon_dark).url()}
            />
          </>
        )}
      </Head>
      <ThemeContext.Provider value={theme}>
        <NavBar {...pageProps} />
        <BodyStyle>
          <Component {...pageProps} />
        </BodyStyle>
      </ThemeContext.Provider>
      <Footer />
    </AppStyle>
  );
};
export default MyApp;
