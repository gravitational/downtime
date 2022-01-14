

export const tweetEncoder = (headline: string, anchor: string, image: string): string => {
  return `https://twitter.com/intent/tweet?text=${encodeURIComponent(headline)}%20https%3A%2F%2Fdowntime.dev/%23${anchor}%20${image}`
}