import { createClient } from "contentful";
import { JokeParser, Joke, RawJoke } from "components/JokeParser";
import Logo from "components/Logo";
import { JokeContext } from "../_app";

const contentfulClient = createClient({
  accessToken: `${process.env.CONTENTFUL_DELIVERY_ACCESS_TOKEN}`,
  space: `${process.env.CONTENTFUL_SPACE_ID}`,
});
interface JokePageProps {
  currentJoke: RawJoke;
}

const JokePage = ({ currentJoke }: JokePageProps) => {
  return (
    <div className="flex flex-col items-center w-full">
      <Logo />
      <Joke joke={currentJoke} isIndividualJoke />
      <JokeContext.Consumer>
        {(value) => {
          const remainderJokes = [] as RawJoke[];
          value.forEach((joke) => {
            if (joke.fields.slug !== currentJoke.fields.slug) {
              remainderJokes.push(joke);
            }
          });
          return <JokeParser jokes={remainderJokes} />;
        }}
      </JokeContext.Consumer>
    </div>
  );
};

export const getStaticPaths = async () => {
  const res = await contentfulClient.getEntries({
    content_type: "joke",
  });

  const jokes = res.items as RawJoke[];

  const paths = jokes.map((item) => {
    return {
      params: { slug: item.fields.slug },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export async function getStaticProps(context: { params: { slug: any } }) {
  const res = await contentfulClient.getEntries({
    content_type: "joke",
    "fields.slug": context.params.slug,
  });

  return {
    props: { currentJoke: res.items[0] },
  };
}

export default JokePage;
