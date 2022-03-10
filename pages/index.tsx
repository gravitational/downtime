import { JokeParser, RawJoke } from "components/JokeParser";
import NextImage from "next/image";
import logo from "../public/assets/images/downtimeLogo.png"
import * as styles from "../components/index.css"
import { createClient } from "contentful";
import { generateFeed } from "../scripts/gen-rss";
export interface HomeProps {
  jokes: RawJoke[];
}

export default function Home({ jokes }: HomeProps) {
  return (
  <div className={styles.outer}>
    <div className={styles.imageContainer}>
      <NextImage src={logo} alt="downtime logo"/>
    </div>
    <JokeParser jokes={jokes} />
  </div>
  );
}

export async function getStaticProps() {
  const contentfulClient = createClient({
    accessToken: `${process.env.CONTENTFUL_DELIVERY_ACCESS_TOKEN}`,
    space: `${process.env.CONTENTFUL_SPACE_ID}`,
  });

  const res = await contentfulClient.getEntries({
    content_type: "joke",
    order: "-fields.pubDate",
  });

  await generateFeed(res.items as RawJoke[]);

  return {
    props: {
      jokes: res.items,
    },
  };
}
