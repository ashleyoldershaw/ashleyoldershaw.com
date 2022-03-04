import Head from "next/head";

const MyApp = ({ Component, pageProps, auth }) => {
  return (
    <>
      <Head>
        <title>Ash's site</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
};
export default MyApp;
