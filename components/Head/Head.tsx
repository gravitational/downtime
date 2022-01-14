import NextHead from "next/head";
import { useRouter } from "next/router"
import bored from "../../public/assets/images/bored@2x.jpg"


interface HeadProps {
  children: JSX.Element
}

const Head = ({ children }: HeadProps) => {
  const router = useRouter();
  const url = router.asPath

  return (
    <NextHead>
      <title>downtime.dev</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Ubuntu+Mono:ital,wght@0,400;0,700;1,400;1,700&display=swap');{" "}
      </style>
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content="downtime.dev" />
      <meta property="og:description" content="the second-best dev jokes on the internet" />
      <meta property="og:image" content="https://www.downtime.dev/assets/images/bored@2x.jpg" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content="downtime.dev" />
      <meta property="twitter:description" content="the second-best dev jokes on the internet" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:image" content="https://www.downtime.dev/assets/images/bored@2x.jpg" />
    </NextHead>
  );
};

export default Head;
