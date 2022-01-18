import NextImage from "next/image";
import Link from "next/link";
import { HEADLINES, HeadlineProps } from "data/jokes";
import { tweetEncoder } from "utilities/encoder";

console.log("joke-count:", HEADLINES.length);

const JokeParser = () => {
  return (
    <div className="flex justify-center w-full">
      <div
        id="centralizer"
        className="flex flex-col items-center max-w-[1240px]"
      >
        {HEADLINES.map((joke: HeadlineProps, i) => (
          <Joke joke={joke} key={`${i} + item`} />
        ))}
      </div>
    </div>
  );
};

interface JokeProps {
  joke: HeadlineProps;
}

const Joke = ({ joke }: JokeProps) => {
  const anchorString = joke.anchor ? joke.anchor.toString() : "00000";
  const hrefString = tweetEncoder(
    joke.headline,
    anchorString,
    joke.twitterImage
  );

  return (
    <>
      <div className="relative -top-14">
        <a id={anchorString} rel="nofollow"></a>
      </div>
      <div
        id="card"
        className="flex flex-col items-center mb-10 mx-3 lg:mx-7 px-3 md:px-7 max-w-[660px] shadow-card "
      >
        <div className="text-xl lg:text-3xl leading-6 mt-3 md:mt-5 lg:mt-8 mb-3 md:mb-5 w-full ">
          <span className="font-bold">
            {joke.smoker}
            {joke.headline}
          </span>
        </div>
        {joke.image && (
          <div className="w-full mb-2 lg:mb-5 ">
            <NextImage
              src={joke.image}
              alt="a hilariously apropos image"
              height="400px"
              width="600px"
            />
          </div>
        )}
        <div className="w-full mb-3 lg:mb-7 text-gray-500 ">
          share this on{" "}
          <Link href={hrefString}>
            <a target="_blank" rel="noopener noreferrer">
              <span className="text-gray-700">twitter</span>
            </a>
          </Link>
        </div>
      </div>
    </>
  );
};

export default JokeParser;
