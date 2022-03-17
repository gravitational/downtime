import { RawJoke, JokeParser } from "components/JokeParser";
import Head from "components/Head";
import * as styles from "components/index.css";
import { generateFeed } from "../scripts/gen-rss";
import getJokes from "utilities/getJokes";
import Logo from "components/Logo";
export interface HomeProps {
  jokes: RawJoke[];
}

export default function Home({ jokes }: HomeProps) {
  return (
    <div className={styles.outer}>
      <Head isHomePage />
      <Logo />
      <JokeParser jokes={jokes} />
    </div>
  );
}

export async function getStaticProps() {
  const jokes: RawJoke[] = await getJokes();

  await generateFeed(jokes);

  return {
    props: {
      jokes,
    },
  };
}
