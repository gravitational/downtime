import { writeFileSync } from "fs";
const RSS = require("rss");
import { RawJoke } from "../components/JokeParser/types";

export async function generateFeed(jokes: RawJoke[]) {
  const feed = new RSS({
    title: "downtime.dev",
    description: "Hard-hitting tech news while your code compiles.",
    // site_url: "https://www.downtime.dev",
    site_url:
      "https://downtime-git-delia-update-rss-feed-gravitational.vercel.app",
    // feed_url: "https://www.downtime.dev/feed.xml",
    feed_url:
      "https://downtime-git-delia-update-rss-feed-gravitational.vercel.app/feed.xml",
  });

  jokes.forEach((headline) => {
    feed.item({
      title: headline.fields.headline,
      enclosure: {
        url: `https:${headline.fields.image.fields.file.url}`,
      },
      url: `${feed.site_url}/jokes/${headline.fields.slug}`,
      date: headline.fields.pubDate,
    });
  });

  writeFileSync("./public/feed.xml", feed.xml({ indent: true }));
}
