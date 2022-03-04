import { RawJoke, JokeParser } from "components/JokeParser";
import Logo from "components/Logo";
import { generateFeed } from "../scripts/gen-rss";
import getJokes from "lib/jokes";

interface HomeProps {
  jokes: RawJoke[];
}
export default function Home({ jokes }: HomeProps) {
  return (
    <div className="flex flex-col items-center w-full">
      <Logo />
      <JokeParser jokes={jokes} />
    </div>
  );
}

export async function getStaticProps() {
  const jokes = await getJokes();

  await generateFeed(jokes as RawJoke[]);

  return {
    props: { jokes },
  };
}
