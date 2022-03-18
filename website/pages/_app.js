import Head from "next/head";
import styled from "styled-components";
import { Footer } from "../components/Footer";
import { NavBar } from "../components/NavBar";
import {
  dark_mode_background,
  dark_mode_text,
  light_mode_background,
  light_mode_text,
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
  return (
    <AppStyle>
      <Head>
        <title>Ash Oldershaw</title>
      </Head>
      <NavBar {...pageProps} />
      <Component {...pageProps} />
      <Footer />
    </AppStyle>
  );
};
export default MyApp;
