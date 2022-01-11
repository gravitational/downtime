//image imports: static imports probably better for performance, but will need to test
import bored from "../public/assets/images/bored@2x.jpg"
import coffee from "../public/assets/images/coffee@2x.jpg"


export interface HeadlineProps {
    smoker?: string,
    headline: string,
    image?: StaticImageData | string,
    pubDate: Date
  }

  //IMPORTANT: the MONTH is zero-indexed, e.g. "0" = January, "11" = December

  const RawJokes: HeadlineProps[] = [
  {
    smoker: "Report:",
    headline: "Spilled Coffee Remains Nation's Leading Cybersecurity Threat",
    image: coffee,
    pubDate: new Date(2022, 0, 1),
  }, 
  {
    headline: "Uninspired SRE Just Going Through The Motions Of Distributed Consensus Algorithm Optimization",
    image: "/assets/images/bored@2x.jpg",
    pubDate: new Date(2022, 0, 2),
  },
  {
    headline: "Modern-Day Robin Hood Steals Passwords to 40,000 Bon Appetit Accounts",
    image: "/assets/images/hackerman@2x.jpg",
    pubDate: new Date(2022, 0, 3),
  },
  {
    headline: "Dad Confidently Drops Word “Firewall” In Conversation with SRE Son",
    image: "/assets/images/firewall2@2x.jpg",
    pubDate: new Date(2022, 0, 4),
  },
  {
    headline: "Cybersecurity Experts Recommend Adding 5 Exclamation Marks To End of Password",
    image: "/assets/images/experts@2x.jpg",
    pubDate: new Date(2022, 0, 5),
  },
]

//sorted into order by MOST RECENT DATE FIRST
export const HEADLINES = sortByDate(RawJokes)

function sortByDate (arr: HeadlineProps[]) {
  return arr.sort(function(a, b) { 
    return +new Date(b.pubDate) - +new Date(a.pubDate)
  })
}
