import { Joke, RawJoke, JokeParser } from "components/JokeParser";
import Head from "components/Head";
import Logo from "components/Logo";
import getJokes from "lib/jokes";
import * as styles from "components/index.css";

interface JokePageProps {
  currentJoke: RawJoke;
  remainingJokes: RawJoke[];
}

const JokePage = ({ currentJoke, remainingJokes }: JokePageProps) => {
  return (
    <div className={styles.outer}>
      <Head 
        imageURL={currentJoke.fields.image.fields.file.url}
        smoker={currentJoke.fields.smoker}
        headline={currentJoke.fields.headline}
      />
      <Logo />
      <Joke joke={currentJoke} isIndividualJoke />
      <JokeParser jokes={remainingJokes} />
    </div>
  );
};

export const getStaticPaths = async () => {
  const jokes = (await getJokes()) as RawJoke[];

  const paths = jokes.map((item) => {
    return {
      params: { slug: item.fields.slug },
    };
  });

  // Will pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return {
    paths,
    fallback: false,
  };
};

export async function getStaticProps(context: { params: { slug: any } }) {
  const jokes = (await getJokes()) as RawJoke[];

  let currentJoke;
  const remainingJokes = [] as RawJoke[];

  jokes.forEach((joke) => {
    if (joke.fields.slug === context.params.slug) {
      currentJoke = joke;
    } else {
      remainingJokes.push(joke);
    }
  });

  return {
    props: {
      currentJoke,
      remainingJokes,
    },
  };
}

export default JokePage;
