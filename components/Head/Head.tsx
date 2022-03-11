import NextHead from "next/head";
import { useRouter } from "next/router";
import React from "react";
// import {host, buildURL} from "utilities/url";
import { buildCanonicalUrl, host } from "utilities/url";
require('dotenv').config()

export interface HeadProps {
  imageUrl?: string;
  description?: string;
  // titleSuffix?: string;
  // url?: string;
  isHomePage?: boolean
  noIndex?: boolean;
}

const Head = ({ 
  imageUrl,
  noIndex,
  description = "Hard-hitting tech news while your code compiles.",
  isHomePage = false,
 }: HeadProps) => {
  const router = useRouter();
  const urlSlug = router.asPath;

  // const host = process.env.NEXT_PUBLIC_HOST;

  const url = `${host}${urlSlug}`;
  console.log("url", url)

  console.log("urlSlug", urlSlug)

  const finalUrl = buildCanonicalUrl(urlSlug)
  console.log("finalUrl", finalUrl)

  console.log("host", host)
  const imagePath = `https:${imageUrl}`;

  // console.log("process.env", process.env)

  return (
    <NextHead>
      <title>downtime.dev</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="icon" href="/assets/favicon.ico" />
      <meta
        name="description"
        content={`${description}`}
      />
      <style>
        @import
        url(&apos;https://fonts.googleapis.com/css2?family=Ubuntu+Mono:ital,wght@0,400;0,700;1,400;1,700&display=swap&apos;);{" "}
      </style>
      <meta property="og:type" content="website" />
      {/* <link rel="apple-touch-icon" href="/static/apple.png" /> */}
      {/* <link rel="manifest" href="/static/manifest.webmanifest" /> */}
      <meta property="og:url" content={url} />
      {/* <link rel="canonical" href={url} /> */}
      <meta property="og:title" content="downtime.dev" />
      <meta
        property="og:description"
        content="Hard-hitting news for when your code is compiling."
      />
      {noIndex && <meta name="robots" content="noindex" />}
      <meta
        property="og:image"
        content={imagePath}
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
        content={imagePath}
      />
    </NextHead>
  );
};

export default Head;
