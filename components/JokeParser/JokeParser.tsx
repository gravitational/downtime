import NextImage from "next/image";
import Link from "next/link";
import { RawJoke } from "./types";
import { tweetEncoder } from "utilities/encoder";
import { sortByDate } from "components/JokeParser/utilities/jokeUtils";
export interface JokeParserProps {
  jokes: RawJoke[];
}

const JokeParser = ({jokes}: JokeParserProps) => {
  const orderedJokes = sortByDate(jokes);
  return (
    <div className="flex justify-center w-full">
      <div
        id="centralizer"
        className="flex flex-col items-center max-w-[1240px]"
      >
        {orderedJokes.map(joke => <Joke joke={joke} key={joke.sys.id}/>)}
      </div>
    </div>
  );
};

interface JokeProps {
  joke: RawJoke;
}

const Joke = ({ joke }: JokeProps) => {
  console.log("joke", joke)
  const { smoker, headline, image, twitterImage, date, anchor } = joke.fields;

  const dateArray = new Date(date).toDateString().split(" ");
  const [weekday, month, day, year] = dateArray;

  const anchorString = anchor || "00000";
  const hrefString = tweetEncoder(
    headline,
    anchorString,
    twitterImage
  );

  return (
    <>
      {/* Anchor is set above card so that navbar doesn't cover linked content */}
      <div className="relative -top-14">
        <a id={anchorString} rel="nofollow"></a>
      </div>
      <div
        id="card"
        className="flex flex-col items-center mb-10 mx-3 lg:mx-7 px-3 md:px-7 max-w-[660px] shadow-card "
      >
        <div className="text-xl lg:text-3xl leading-6 mt-3 md:mt-5 lg:mt-8 mb-3 md:mb-5 w-full ">
          <span className="font-bold">
            {smoker} {headline}
          </span>
        </div>
        {image && (
          <div className="w-full mb-2 lg:mb-5 ">
            <NextImage
              src={"https:" + image.fields.file.url}
              alt="a hilariously apropos image"
              height="400px"
              width="600px"
            />
          </div>
        )}
        <div className="flex flex-col w-full text-gray-500 relative">
          <div className="flex flex-row w-full justify-between">
            <div className="mb-3 lg:mb-7 ">
              share this on{" "}
              <Link href={hrefString}>
                <a target="_blank" rel="noopener noreferrer">
                  <span className="text-gray-700">twitter</span>
                </a>
              </Link>
            </div>
            <div
              title={`${weekday} • ${month} ${day}, ${year}`}
              className="mb-3 lg:mb-7 mr-2 object-right w-24 text-right hover:text-black"
            >
              {month} {day}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default JokeParser;
