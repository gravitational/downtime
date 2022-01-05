import App from "next/app";
import type { AppProps } from "next/app";
import Layout from "components/Layout";
import Head from "components/Head"
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
    <Head/>
    <Layout>
      <Component {...pageProps} />
    </Layout>
    </>
  );
}

export default MyApp;
