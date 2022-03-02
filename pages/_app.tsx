import { useEffect } from "react";
import { useRouter } from "next/router";
import type { AppContext, AppProps } from "next/app";
import Layout from "components/Layout";
import Head from "components/Head";
import "../styles/globals.css";
import { GTAGPageView } from "utilities/google/gtag";
import { GTMPageView } from "utilities/google/gtm";
import Script from "next/script";
import { createClient } from "contentful";
import App from "next/app";
import { RawJoke } from "components/JokeParser";
interface CustomAppProps extends AppProps {
  allJokes: RawJoke[];
}

function MyApp({ Component, pageProps, allJokes }: CustomAppProps) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url: URL) => {
      //utility for logging page views in Google Analytics
      GTAGPageView(url);
      GTMPageView(url);
    };
    //When the component is mounted, subscribe to router changes
    //and log those page views
    router.events.on("routeChangeComplete", handleRouteChange);

    // If the component is unmounted, unsubscribe
    // from the event with the `off` method
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      {/* Google Tag Manager Start */}
      <Script
        id="gtm-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${process.env.NEXT_PUBLIC_GTM_ID}');
            `,
        }}
      />
      {/* Google Tag Manager End */}
      {/* Google Analytics Start */}
      <Script
        strategy="afterInteractive" //default strategy
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GTAG_ID}`}
      />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GTAG_ID}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
      {/* Google Analytics End */}
      <Head />
      <Layout allJokes={allJokes}>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

MyApp.getInitialProps = async (context: AppContext) => {
  // const pageProps = await App.getInitialProps(context); // Retrieves page's `getInitialProps`
  // console.log("pageprops", pageProps)

  const contentfulClient = createClient({
    accessToken: `${process.env.CONTENTFUL_DELIVERY_ACCESS_TOKEN}`,
    space: `${process.env.CONTENTFUL_SPACE_ID}`,
  });

  const appProps = await contentfulClient.getEntries({
    content_type: "joke",
    order: "-fields.pubDate",
  });

  console.log("appProps", appProps.items)

  //return merger of page's getInitialProps value with _app's getInitialProps value
  return {
    // ...pageProps,
    allJokes: appProps.items,
  };
};

export default MyApp;
