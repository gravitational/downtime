import NextHead from "next/head";
import { useRouter } from "next/router";
import React from "react";

const host = process.env.NEXT_PUBLIC_HOST;

export interface HeadProps {
  imageURL?: string;
  headline?: string;
  isHomePage?: boolean;
}

/* Head component renders the meta data for each page. 
One use of the meta data is to automatically create the summary_large_image card when sharing a url on Twitter

Twitter card structures:

Homepage (isHomePage = true):
Large image
downtime.dev
Hard-hitting news while your code is compiling. - as title meta data


Individual joke pages (isHomePage = false):
Large image
downtime.dev
specific joke headline - as title meta data
Hard-hitting news while your code is compiling - as og: description meta data
*/

const Head = ({ isHomePage = false, imageURL, headline }: HeadProps) => {
  const router = useRouter();
  const urlSlug = router.asPath;
  const url = `${host}${urlSlug}`;

  //renders a locally stored image for homepage or a contentful image for individual joke pages
  const imagePath = isHomePage
    ? "https://www.downtime.dev/assets/images/bored@2x.jpg"
    : `https:${imageURL}`;

  const title = isHomePage
    ? "Hard-hitting news while your code is compiles."
    : headline;
  
  const description = "Hard-hitting news while your code compiles.";

  return (
    <NextHead>
      <title>downtime.dev</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="icon" href="/assets/favicon.ico" />
      <link rel="icon" href="/assets/favicon.ico" type="image/x-icon" />
      <link rel="apple-touch-icon" href="/assets/favicon.ico" />
      <style>
        @import
        url(&apos;https://fonts.googleapis.com/css2?family=Ubuntu+Mono:ital,wght@0,400;0,700;1,400;1,700&display=swap&apos;);{" "}
      </style>
      <meta name="description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <link rel="canonical" href={url} />
      <meta property="og:title" content={title} />
      {/* twitter cards only render description on individual joke pages */}
      {!isHomePage && <meta property="og:description" content={description} />}
      <meta property="og:image" content={imagePath} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={title} />
    </NextHead>
  );
};

export default Head;
