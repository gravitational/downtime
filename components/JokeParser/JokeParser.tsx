import NextImage from "next/image";
import { HEADLINES, HeadlineProps } from "data/jokes";

const JokeParser = () => {
  return (
    <>
      <div className="flex justify-center w-full mt-[180px]">
        <div className="flex flex-col align-center max-w-[1240px]">
          {HEADLINES.map((joke: HeadlineProps, i) => (
            <Joke joke={joke} key={`${i} + item`}/>
          ))}
        </div>
      </div>
    </>
  );
};

interface JokeProps {
  joke: HeadlineProps;
}

const Joke = ({ joke }: JokeProps) => {
  return (
    <div className="mt-3 mb-11 mx-5 lg:mx-0 border-b-2 border-black" >
      {joke.image && (
        <div className="h-64 w-64 relative border border-indigo-600 mb-5">
          <NextImage
            src={joke.image}
            alt=""
            layout="fill"
            objectFit="contain"
          />
        </div>
      )}
      <div className="uppercase text-7xl mb-8">{joke.hl}</div>
    </div>
  );
};

export default JokeParser;
