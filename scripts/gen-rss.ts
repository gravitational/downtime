import * as fs from "fs";
const RSS = require("rss");
import { HEADLINES } from "../data/jokes";

function generate() {
  const feed = new RSS({
    title: "downtime.dev",
    description: "Hard-hitting tech news while your code compiles.",
    site_url: "https://www.downtime.dev",
    feed_url: "https://www.downtime.dev/feed.xml",
  });

  HEADLINES.forEach((headline) => {
    feed.item({
      title: headline.smoker ? `${headline.smoker} ${headline.headline}` : headline.headline,
      description: `${feed.site_url}${headline.image}`,
      url: `${feed.site_url}/#${headline.anchor}`,
      date: headline.pubDate,
    });
  });

  fs.writeFileSync("./public/feed.xml", feed.xml({ indent: true }));
}

generate();
