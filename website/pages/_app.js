import Head from "next/head";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { Footer } from "../components/Footer";
import { NavBar } from "../components/NavBar";
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

  padding: 0 10%;
  margin: 0;
`;

const MyApp = ({ Component, pageProps, auth }) => {
  const [mq, setMq] = useState(null);
  useEffect(() => {
    setMq(window.matchMedia("(prefers-color-scheme: dark)"));
  }, []);

  const [theme, setTheme] = useState("light");
  useEffect(() => {
    // this will become useful later on
    if (!mq) return;
    setTheme(mq.matches ? "dark" : "light");
    console.log(`You prefer ${theme} mode! Good choice :)`);
  }, [mq]);

  return (
    <AppStyle>
      <Head>
        <title>Ash Oldershaw</title>
      </Head>
      <ThemeContext.Provider value={theme}>
        <NavBar {...pageProps} />
        <Component {...pageProps} />
      </ThemeContext.Provider>
      <Footer />
    </AppStyle>
  );
};
export default MyApp;
