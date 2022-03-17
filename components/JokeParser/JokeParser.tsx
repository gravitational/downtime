import NextImage from "next/image";
import Link from "next/link";
import { RawJoke } from "./types";
import { tweetEncoder } from "utilities/encoder";
import * as styles from "./JokeParser.css";

export interface JokeParserProps {
  jokes: RawJoke[];
}

/* 
  receives a array of jokes and maps over them to return each joke. Is used:
  - on homepage 
  - on individual joke pages below the top joke
*/
const JokeParser = ({ jokes }: JokeParserProps) => {
  return (
    <div className={styles.outer}>
      <div id="centralizer" className={styles.inner}>
        {jokes.map((joke) => (
          <Joke joke={joke} key={joke.sys.id} />
        ))}
      </div>
    </div>
  );
};

interface JokeProps {
  joke: RawJoke;
  isTargetJoke?: boolean;
}

// renders each joke card
export const Joke = ({ joke, isTargetJoke = false }: JokeProps) => {
  const { pubDate, headline, image, slug } = joke.fields;

  // pubDate is an ISO-8601 string
  const dateArray = new Date(pubDate).toDateString().split(" ");
  const [weekday, month, day, year] = dateArray;

  // creates twitter sharing link
  const hrefString = tweetEncoder(headline, slug);

  return (
    <div id="card" className={styles.cardOuter}>
      {/* targetJoke is the joke tied to each individual page; its <Link/> is disabled */}
      <Link href={isTargetJoke? '' : `/jokes/${slug}`}>
        <a>
          <div className={styles.headline}>
            <span className={styles.span1}>{headline}</span>
          </div>
          <div className={styles.imageContainer}>
            <NextImage
              src={"https:" + image.fields.file.url}
              alt="a hilariously apropos image"
              priority={isTargetJoke? true : false}
              height="400px"
              width="600px"
            />
          </div>
        </a>
      </Link>
      <div className={styles.shareOuter}>
        <div className={styles.shareInner}>
          <div className={styles.shareString}>
            share this on{" "}
            <Link href={hrefString}>
              <a target="_blank" rel="noopener noreferrer">
                <span className={styles.span2}>twitter</span>
              </a>
            </Link>
          </div>

          <div
            title={`${weekday} • ${month} ${day}, ${year}`}
            className={styles.date}
          >
            {month} {day}
          </div>
        </div>
      </div>
    </div>
  );
};

export default JokeParser;
