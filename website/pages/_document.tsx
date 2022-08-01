import Document, { Head, Html, Main, NextScript } from "next/document";
import Script from "next/script";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Merriweather&family=Merriweather+Sans:wght@300&family=Merriweather+Sans:wght@100&family=Merriweather+Sans:wght@400&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
          <Script
            strategy="afterInteractive"
            defer={true}
            src="https://static.cloudflareinsights.com/beacon.min.js"
            data-cf-beacon={`{"token": "${process.env.NEXT_PUBLIC_CLOUDFLARE_ANALYTICS_TOKEN}"}`}
          ></Script>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
