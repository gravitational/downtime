import { RawJoke, JokeParser } from "components/JokeParser";
import * as styles from "components/index.css"
import { generateFeed } from "../scripts/gen-rss";
import getJokes from "lib/jokes";
import Logo from "components/Logo";
export interface HomeProps {
  jokes: RawJoke[];
}

export default function Home({ jokes }: HomeProps) {
  return (
    <div className={styles.outer}>
      <Logo />
      <JokeParser jokes={jokes} />
    </div>
  );
}

export async function getStaticProps() {
  const jokes = await getJokes();

  await generateFeed(jokes as RawJoke[]);

  return {
    props: {
      jokes,
    },
  };
}
