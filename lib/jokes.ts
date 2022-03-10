import { readFileSync, writeFileSync } from "fs";
import path from "path";
import { createClient } from "contentful";

async function fetchJokesData() {
  console.log("Fetching jokes data...");
  const contentfulClient = createClient({
    accessToken: `${process.env.CONTENTFUL_DELIVERY_ACCESS_TOKEN}`,
    space: `${process.env.CONTENTFUL_SPACE_ID}`,
  });

  const res = await contentfulClient.getEntries({
    content_type: "joke",
    order: "-fields.pubDate",
  });

  return res.items;
}

const JOKES_CACHE_PATH = path.join("./jokeData");

export default async function getJokes() {
  let cachedData;

  try {
    cachedData = await JSON.parse(
      readFileSync(path.join(__dirname, JOKES_CACHE_PATH), "utf8")
    );
  } catch (error) {
    console.log("Joke cache not initialized");
  }

  if (!cachedData) {
    const data = await fetchJokesData();

    try {
      await writeFileSync(
        path.join(__dirname, JOKES_CACHE_PATH),
        JSON.stringify(data),
        "utf8"
      );

      console.log("Wrote to jokes cache");
    } catch (error) {
      console.log("ERROR WRITING JOKES CACHE TO FILE");
      console.log(error);
    }

    cachedData = data;
  }

  return cachedData;
}
