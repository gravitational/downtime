const baseUrl = "https://downtime-git-delia-ve-contentful-updates-gravitational.vercel.app"

export const tweetEncoder = (
  headline: string,
  slug: string,
): string => {

  const url = `${baseUrl}/jokes/${slug}`

  // tweet summary-large-image twitter card only 
  // return `https://twitter.com/intent/tweet?text=${encodeURIComponent(url)}`

  // tweet headline + summary-large-image twitter card
  return `https://twitter.com/intent/tweet?text=${headline}%20${encodeURIComponent(url)}`;
};
