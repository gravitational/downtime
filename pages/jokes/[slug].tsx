import { Joke, RawJoke, JokeParser } from "components/JokeParser";
import Head from "components/Head";
import Logo from "components/Logo";
import getJokes from "utilities/getJokes";
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
        headline={currentJoke.fields.headline}
      />
      <Logo />
      <Joke joke={currentJoke} isTargetJoke />
      <JokeParser jokes={remainingJokes} />
    </div>
  );
};

// only runs once at build time in production
// in dev mode, runs on each request
export const getStaticPaths = async () => {
  const jokes: RawJoke[] = await getJokes();

  // grabs the slug from each joke and saves in an array which
  // is passed to getStaticProps
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


/**
* only runs at build time in production; in dev mode runs on each request;
* takes paths from getStaticPaths and builds a page with each path (targetJoke) at the top
* eventually this method will become non-performant as build time is On^2
*/
export async function getStaticProps(context: { params: { slug: any } }) {
  const jokes: RawJoke[] = await getJokes();

  let currentJoke;
  const remainingJokes: RawJoke[] = [];

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
