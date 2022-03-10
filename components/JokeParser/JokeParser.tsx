import NextImage from "next/image";
import Link from "next/link";
import { RawJoke } from "./types";
import { tweetEncoder } from "utilities/encoder";
import * as styles from "./JokeParser.css";

export interface JokeParserProps {
  jokes: RawJoke[];
}

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
  isIndividualJoke?: boolean;
}

export const Joke = ({ joke, isIndividualJoke = false }: JokeProps) => {
  const {
    smoker,
    headline,
    image,
    pubDate,
    anchor,
    twitterEmbeddedCode,
    slug,
  } = joke.fields;

  const dateArray = new Date(pubDate).toDateString().split(" ");
  const [weekday, month, day, year] = dateArray;

  const anchorString = anchor || "00000";

  // const hrefString = tweetEncoder(headline, anchorString, twitterEmbeddedCode);
  const hrefString = tweetEncoder(headline, slug, twitterEmbeddedCode);

  return (
    <>
      {/* Anchor is set above card so that navbar doesn't cover linked content */}
      <div className={styles.anchorOuter}>
        <a id={anchorString} rel="nofollow"></a>
      </div>
      <div id="card" className={styles.cardOuter}>
        {/* <div className={styles.headline}>
          <span className={styles.span1}>
            {smoker} {headline}
          </span>
        </div> */}
        {isIndividualJoke ? (
          <div className={styles.headline}>
            <span className={styles.span1}>
              {smoker} {headline}
            </span>
          </div>
        ) : (
          <Link href={`/jokes/${slug}`}>
            <a className={styles.headline}>
              <span className={styles.span1}>
                {smoker} {headline}
              </span>
            </a>
          </Link>
        )}
        {image && (
          <div className={styles.imageContainer}>
            <NextImage
              src={"https:" + image.fields.file.url}
              alt="a hilariously apropos image"
              height="400px"
              width="600px"
            />
          </div>
        )}
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
    </>
  );
};

export default JokeParser;
