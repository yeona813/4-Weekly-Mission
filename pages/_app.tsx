import type { AppProps } from "next/app";
import Head from "next/head";
import "../styles/global.css";
import "../styles/colors.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Weekly Mission</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
export default MyApp;
