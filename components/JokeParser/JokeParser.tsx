import NextImage from "next/image";
import Link from "next/link";
import { HEADLINES, HeadlineProps } from "data/jokes";
import { tweetEncoder } from "utilities/encoder";
import * as styles from "./JokeParser.css"

console.log("joke-count:", HEADLINES.length);

const JokeParser = () => {
  return (
    <div className={styles.outer}>
      <div
        id="centralizer"
        className={styles.inner}
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
  const dateArray = joke.pubDate.toDateString().split(" ");
  const [weekday, month, day, year] = dateArray;

  const anchorString = joke.anchor ? joke.anchor.toString() : "00000";
  const hrefString = tweetEncoder(
    joke.headline,
    anchorString,
    joke.twitterImage
  );

  return (
    <>
      {/* Anchor is set above card so that navbar doesn't cover linked content */}
      <div className={styles.anchorOuter}>
        <a id={anchorString} rel="nofollow"></a>
      </div>
      <div
        id="card"
        className={styles.cardOuter}
      >
        <div className={styles.headline}>
          <span className={styles.span1}>
            {joke.smoker} {joke.headline}
          </span>
        </div>
        {joke.image && (
          <div className={styles.imageContainer}>
            <NextImage
              src={joke.image}
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

            <div title={`${weekday} • ${month} ${day}, ${year}`} className={styles.date}>
              {month} {day}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default JokeParser;
