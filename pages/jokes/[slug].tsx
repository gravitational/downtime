import { createClient } from "contentful";
import { Joke, RawJoke } from "components/JokeParser";
import Logo from "components/Logo";

const contentfulClient = createClient({
  accessToken: `${process.env.CONTENTFUL_DELIVERY_ACCESS_TOKEN}`,
  space: `${process.env.CONTENTFUL_SPACE_ID}`,
});
interface JokePageProps {
  joke: RawJoke;
}

const JokePage = ({ joke }: JokePageProps) => {
  return (
    <div className="flex flex-col items-center w-full">
      <Logo />
      <div className="flex justify-center w-full">
        <Joke joke={joke} />
      </div>
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
    props: { joke: res.items[0] },
  };
}

export default JokePage;
