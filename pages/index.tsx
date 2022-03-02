import { RawJoke } from "components/JokeParser";
import Logo from "components/Logo";
import { createClient } from "contentful";
import { generateFeed } from "../scripts/gen-rss";

export default function Home() {
  return (
    <div className="flex flex-col items-center w-full">
      <Logo />
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

  //getStaticProps is run in order to generate RSS feed with this function call:
  await generateFeed(res.items as RawJoke[]);

  //getStaticProps requires props to be returned - returning an empty object as this component does not need props
  return {
    props: {},
  };
}
