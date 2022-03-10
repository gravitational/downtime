import { RawJoke, JokeParser } from "components/JokeParser";
import NextImage from "next/image";
import logo from "../public/assets/images/downtimeLogo.png";
import * as styles from "../components/Logo/Logo.css";
import { createClient } from "contentful";
import { generateFeed } from "../scripts/gen-rss";
import getJokes from "lib/jokes";
import Logo from "components/Logo";
export interface HomeProps {
  jokes: RawJoke[];
}

export default function Home({ jokes }: HomeProps) {
  return (
    <div className={styles.outer}>
      {/* <div className={styles.imageContainer}>
      <NextImage src={logo} alt="downtime logo"/>
    </div> */}
      <Logo />
      <JokeParser jokes={jokes} />
    </div>
  );
}

export async function getStaticProps() {
  const jokes = await getJokes();
  // const contentfulClient = createClient({
  //   accessToken: `${process.env.CONTENTFUL_DELIVERY_ACCESS_TOKEN}`,
  //   space: `${process.env.CONTENTFUL_SPACE_ID}`,
  // });

  // const res = await contentfulClient.getEntries({
  //   content_type: "joke",
  //   order: "-fields.pubDate",
  // });

  await generateFeed(jokes as RawJoke[]);

  return {
    props: {
      jokes,
    },
  };
}
