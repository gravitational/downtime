import { JokeParser, RawJoke } from "components/JokeParser";
import Logo from "components/Logo";
import { createClient } from "contentful";
import { generateFeed } from "../scripts/gen-rss";

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
      revalidate: 1,
    },
  };
}

export interface HomeProps {
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
