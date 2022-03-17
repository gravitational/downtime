import { readFileSync, writeFileSync } from "fs";
import path from "path";
import { createClient } from "contentful";
import getConfig from "./configManager";

/**
 * Fetches the stored content from Contentful and stores it in a local cache.
 * Client-side use of getJokes will access the stored cache instead of 
 * re-fetching from Contentful's API.
 * The caching process may be unnecessary if the site is 100% statically generated
 * and should be reviewed. 
 */

let cacheCounter = 0;

export default async function getJokes() {

  const JOKES_CACHE_PATH = "./jokeData";

  let cachedData;

  try {
    // attempt to access the cache, if it exists
    cachedData = await JSON.parse(
      readFileSync(path.join(__dirname, JOKES_CACHE_PATH), "utf8")
    );
    cacheCounter += 1;
    console.log(`Used cached data ${cacheCounter} times.`);
  } catch (error) {
    console.log("Joke cache not initialized. Attempting to build cache now...");
  }

  // if no cached data, fetch from Contentful...
  if (!cachedData) {
    const data = await fetchJokesData();

    try {
      // ...and build the cache
      await writeFileSync(
        path.join(__dirname, JOKES_CACHE_PATH),
        JSON.stringify(data),
        "utf8"
      );

      console.log(
        "Cache built. Jokes cached here:",
        path.join(__dirname, JOKES_CACHE_PATH)
      );
    } catch (error) {
      console.log("ERROR WRITING JOKES CACHE TO FILE");
      console.log(error);
    }

    cachedData = data;
  }

  return cachedData;
}

async function fetchJokesData() {
  // during development, pass string of target environment name (see ./configManager)
  // for production, getConfig() must be passed "master"
  const config = getConfig("master");

  console.log("Fetching jokes data...");

  const contentfulClient = createClient({
    space: config.spaceId,
    accessToken: config.accessToken,
    environment: config.environment,
  });

  // fetch the raw data from Contentful
  const res = await contentfulClient.getEntries({
    content_type: "joke",
    order: "-fields.pubDate",
  });

  return res.items;
}