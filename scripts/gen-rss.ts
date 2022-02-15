import { writeFileSync } from "fs";
const RSS = require("rss");
import { RawJoke } from "../components/JokeParser/types";

export async function generateFeed(jokes: RawJoke[]) {
  const feed = new RSS({
    title: "downtime.dev",
    description: "Hard-hitting tech news while your code compiles.",
    site_url: "https://www.downtime.dev",
    feed_url: "https://www.downtime.dev/feed.xml",
  });

  jokes.forEach((headline) => {
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
