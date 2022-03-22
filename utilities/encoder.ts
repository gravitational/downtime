// const baseUrl = "https://www.downtime.dev";
const baseUrl = "https://downtime-git-delia-update-rss-feed-gravitational.vercel.app";

export const tweetEncoder = (headline: string, slug: string): string => {
  const url = `${baseUrl}/jokes/${slug}`;

  // tweet headline + summary-large-image twitter card
  return `https://twitter.com/intent/tweet?text=${encodeURIComponent(
    headline
  )}%20${encodeURIComponent(
    url
  )}`;
};
