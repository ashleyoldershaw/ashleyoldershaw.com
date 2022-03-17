import Head from "next/head";
import styled from "styled-components";
import { Footer } from "../components/Footer";
import { NavBar } from "../components/NavBar";
import "./app.css";

const AppStyle = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
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
