import NextHead from "next/head";
import { RawJoke } from "components/JokeParser";
import { useRouter } from "next/router";
import React from "react";

const host = process.env.NEXT_PUBLIC_HOST;

export interface HeadProps {
  noIndex?: boolean;
  joke: RawJoke;
}

const Head = ({
  noIndex,
  joke,
}: HeadProps) => {
  const { smoker, headline, image } = joke.fields;

  const router = useRouter();
  const urlSlug = router.asPath;
  const description = smoker ? `${smoker}: ${headline}` : headline;
  const url = `${host}${urlSlug}`;
  const imagePath = `https:${image.fields.file.url}`;

  return (
    <NextHead>
      <title>downtime.dev</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="icon" href="/assets/favicon.ico" />
      <meta name="description" content={`${description}`} />
      <style>
        @import
        url(&apos;https://fonts.googleapis.com/css2?family=Ubuntu+Mono:ital,wght@0,400;0,700;1,400;1,700&display=swap&apos;);{" "}
      </style>
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content="downtime.dev" />
      <meta
        property="og:description"
        content={description}
      />
      <meta property="og:image" content={imagePath} />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content="downtime.dev" />
      <meta
        property="twitter:description"
        content={description}
      />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:image" content={imagePath} />
    </NextHead>
  );
};

export default Head;
