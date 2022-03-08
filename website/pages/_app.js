import Head from "next/head";

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
