import Head from "next/head";
import "./app.css";

const MyApp = ({ Component, pageProps, auth }) => {
  return (
    <>
      <Head>
        <title>Ash Oldershaw</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
};
export default MyApp;
