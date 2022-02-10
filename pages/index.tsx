import { JokeParser, RawJoke } from "components/JokeParser";
import NextImage from "next/image";
import logo from "../public/assets/images/downtimeLogo.png";
import { createClient } from "contentful";
export interface HomeProps {
  jokes: RawJoke[];
}

export default function Home({ jokes }: HomeProps) {
  return (
    <div className="flex flex-col items-center w-full">
      <div className="w-6/12 max-w-[600px] mt-14 lg:mt-16">
        <NextImage src={logo} alt="downtime logo" />
      </div>
      <JokeParser jokes={jokes} />
    </div>
  );
}

export async function getStaticProps() {
  const client = createClient({
    accessToken: `${process.env.CONTENTFUL_DELIVERY_ACCESS_TOKEN}`,
    space: `${process.env.CONTENTFUL_SPACE_ID}`,
  });

  const res = await client.getEntries({ content_type: "joke" });

  return {
    props: {
      jokes: res.items,
    },
  };
}
