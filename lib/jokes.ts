import { readFileSync, writeFileSync } from "fs";
import path from "path";
import { createClient } from "contentful";

async function fetchJokesData() {
  console.log("Fetching jokes data...");
  const contentfulClient = createClient({
    accessToken: process.env.CONTENTFUL_DELIVERY_ACCESS_TOKEN as string,
    space: process.env.CONTENTFUL_SPACE_ID as string,
  });

  // fetch the raw data from Contentful
  const res = await contentfulClient.getEntries({
    content_type: "joke",
    order: "-fields.pubDate",
  });

  return res.items;
}


export default async function getJokes() {
  
  const JOKES_CACHE_PATH = "./jokeData";

  let cachedData;

  try {
    // attempt to access the cache, if it exists
    cachedData = await JSON.parse(
      readFileSync(path.join(__dirname, JOKES_CACHE_PATH), "utf8")
    );
  } catch (error) {
    console.log("Joke cache not initialized. Attempting to build cache now...");
  }

  // if no cached data, fetch from Contentful
  if (!cachedData) {
    const data = await fetchJokesData();

    try {
      // ...and build the cache
      await writeFileSync(
        path.join(__dirname, JOKES_CACHE_PATH),
        JSON.stringify(data),
        "utf8"
      );

      console.log("Cache built. Jokes cached here:", path.join(__dirname, JOKES_CACHE_PATH));
    } catch (error) {
      console.log("ERROR WRITING JOKES CACHE TO FILE");
      console.log(error);
    }

    cachedData = data;
  }

  return cachedData;
}
