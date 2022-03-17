// const baseUrl = "https://www.downtime.dev";
const baseUrl = "https://downtime-git-delia-test-off-107-gravitational.vercel.app"

export const tweetEncoder = (headline: string, slug: string): string => {
  const url = `${baseUrl}/jokes/${slug}`;

  // tweet headline + summary-large-image twitter card
  return `https://twitter.com/intent/tweet?text=${headline}%20${encodeURIComponent(
    url
  )}`;
};
