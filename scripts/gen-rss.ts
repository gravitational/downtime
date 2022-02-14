import { writeFileSync } from "fs";
const RSS = require("rss");
import { HEADLINES } from "../data/jokes";
import { sortByDate } from "../components/JokeParser/utilities/jokeUtils";
import { RawJoke } from "../components/JokeParser/types";

async function generate() {
  const feed = new RSS({
    title: "downtime.dev",
    description: "Hard-hitting tech news while your code compiles.",
    site_url: "https://www.downtime.dev",
    feed_url: "https://www.downtime.dev/feed.xml",
  });

  HEADLINES.forEach((headline) => {
    feed.item({
      title: headline.smoker
        ? `${headline.smoker} ${headline.headline}`
        : headline.headline,
      description: `${feed.site_url}${headline.image}`,
      url: `${feed.site_url}/#${headline.anchor}`,
      date: headline.pubDate,
    });
  });

  writeFileSync("./public/feed.xml", feed.xml({ indent: true }));
}

export async function generateFeed(values: RawJoke[]) {
  const orderedJokes = sortByDate(values);

  const feed = new RSS({
    title: "downtime.dev",
    description: "Hard-hitting tech news while your code compiles.",
    site_url: "https://www.downtime.dev",
    feed_url: "https://www.downtime.dev/feed.xml",
  });

  orderedJokes.forEach((headline) => {
    feed.item({
      title: headline.fields.smoker
        ? `${headline.fields.smoker} ${headline.fields.headline}`
        : headline.fields.headline,
      description: `${feed.site_url}${headline.fields.image.fields.file.url}`,
      url: `${feed.site_url}/#${headline.fields.anchor}`,
      date: headline.fields.date,
    });
  });

  writeFileSync("./public/feed.xml", feed.xml({ indent: true }));
}
