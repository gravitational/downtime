import { createClient } from "contentful";
import { Joke, JokeParser, RawJoke } from "components/JokeParser";
import Logo from "components/Logo";

const contentfulClient = createClient({
  accessToken: `${process.env.CONTENTFUL_DELIVERY_ACCESS_TOKEN}`,
  space: `${process.env.CONTENTFUL_SPACE_ID}`,
});
interface JokePageProps {
  currentJoke: RawJoke;
  remainderJokes: RawJoke[];
}

const JokePage = ({ currentJoke, remainderJokes }: JokePageProps) => {
  return (
    <div className="flex flex-col items-center w-full">
      <Logo />
      <div className="flex justify-center w-full">
        <Joke joke={currentJoke} isIndividualJoke />
      </div>
      {remainderJokes && (
        <>
          <div>See more...</div>
          <div className="flex justify-center w-full">
            <JokeParser jokes={remainderJokes} />
          </div>
        </>
      )}
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
    order: "-fields.pubDate",
  });

  let currentJoke;

  const remainderJokes: RawJoke[] = [];

  const allJokes = res.items as RawJoke[];

  allJokes.forEach((item: RawJoke) => {
    if (item.fields.slug === context.params.slug) {
      currentJoke = item;
    } else {
      remainderJokes.push(item);
    }
  });

  return {
    props: { currentJoke: currentJoke, remainderJokes: remainderJokes },
  };
}

export default JokePage;
