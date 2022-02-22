const twitterImageURLParser = (codeSnippet: string) => {
  const re = new RegExp(/pic\.twitter\.com\/[a-zA-Z0-9]*/);
  const parsedLinkArray = re.exec(codeSnippet);
  return parsedLinkArray ? parsedLinkArray[0] : null;
};

export const tweetEncoder = (
  headline: string,
  anchor: string,
  image: string
): string => {

  const twitterImageURL = twitterImageURLParser(image)

  return twitterImageURL
    ? `https://twitter.com/intent/tweet?text=${encodeURIComponent(
        headline
      )}%20https%3A%2F%2Fdowntime.dev/%23${anchor}%20${twitterImageURL}`
    : `https://twitter.com/intent/tweet?text=${encodeURIComponent(
        headline
      )}%20https%3A%2F%2Fdowntime.dev/%23${anchor}`;
};
