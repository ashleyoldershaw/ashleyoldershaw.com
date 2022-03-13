import Head from "next/head";
import { NavBar } from "../components/NavBar";
import "./app.css";

const MyApp = ({ Component, pageProps, auth }) => {
  return (
    <>
      <Head>
        <title>Ash Oldershaw</title>
      </Head>
      <NavBar {...pageProps} />
      <Component {...pageProps} />
    </>
  );
};
export default MyApp;
