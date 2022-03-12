const baseUrl = "https://downtime-git-delia-ve-contentful-updates-gravitational.vercel.app"

export const tweetEncoder = (
  headline: string,
  slug: string,
  embeddedCode: string,
  imageUrl: string,
): string => {
  const twitterImageURL = twitterImageURLParser(embeddedCode);

  const url = `${baseUrl}/jokes/${slug}`

  // return `https://twitter.com/intent/tweet?text=${baseUrl}/jokes/${slug}%20https:${imageUrl}`
  // return `https://twitter.com/intent/tweet?text=${encodeURIComponent(url)}`

  // return `http://twitter.com/share?text=${headline}&url=${url}`

  return `https://twitter.com/intent/tweet?text=${encodeURIComponent(url)}`

  // return twitterImageURL
  //   ? `https://twitter.com/intent/tweet?text=${encodeURIComponent(
  //       headline
  //     )}%20https%3A%2F%2Fdowntime.dev/jokes/${slug}%20${twitterImageURL}`
  //   : `https://twitter.com/intent/tweet?text=${encodeURIComponent(
  //       headline
  //     )}%20https%3A%2F%2Fdowntime.dev/jokes/${slug}`;
};

/*
`codeSnippet` variable is the embedded code from Twitter. It resembles:
<blockquote class="twitter-tweet"><p lang="en" dir="ltr">captcha 
<a href="https://t.co/DaM225rhMS">pic.twitter.com/DaM225rhMS</a>
</p>&mdash; Sam777 (@Sam77757865973) <a 
href="https://twitter.com/Sam77757865973/status/1496208448786243584?ref_src=twsrc%5Etfw"
>February 22, 2022</a></blockquote> 
<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script> 

This function parses the image link (for example: pic.twitter.com/DaM225rhMS) 
from the code snippet
*/

const twitterImageURLParser = (codeSnippet: string) => {
  const re = new RegExp(/pic\.twitter\.com\/[a-zA-Z0-9]*/);
  const parsedLinkArray = codeSnippet.match(re);
  return parsedLinkArray ? parsedLinkArray[0] : null;
};
