import NextHead from "next/head";
import { useRouter } from "next/router";
import React from "react";


const host = process.env.NEXT_PUBLIC_HOST;
export interface HomePageHeadProps {
  noIndex?: boolean;
}

const HomePageHead = ({ 
  noIndex,
 }: HomePageHeadProps) => {
  const router = useRouter();
  const urlSlug = router.asPath;
  const url = `${host}${urlSlug}`;
  
  return (
    <NextHead>
      <title>downtime.dev</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="icon" href="/assets/favicon.ico" />
      <meta
        name="description"
        content="Hard-hitting tech news while your code compiles."
      />
      <style>
        @import
        url(&apos;https://fonts.googleapis.com/css2?family=Ubuntu+Mono:ital,wght@0,400;0,700;1,400;1,700&display=swap&apos;);{" "}
      </style>
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content="downtime.dev" />
      <meta
        property="og:description"
        content="Hard-hitting news for when your code is compiling."
      />
      {noIndex && <meta name="robots" content="noindex" />}
      <meta
        property="og:image"
        content="https://www.downtime.dev/assets/images/bored@2x.jpg"
      />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content="downtime.dev" />
      <meta
        property="twitter:description"
        content="Hard-hitting news for when your code is compiling."
      />
      <meta property="twitter:url" content={url} />
      <meta
        property="twitter:image"
        content="https://www.downtime.dev/assets/images/bored@2x.jpg"
      />
    </NextHead>
  );
};

export default HomePageHead;
