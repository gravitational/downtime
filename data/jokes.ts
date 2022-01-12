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
    image: "/assets/images/robinhood@2x.jpg",
    pubDate: new Date(2022, 0, 3),
  },
  {
    headline: "Dad Confidently Drops Word “Firewall” In Conversation with SRE Son",
    image: "/assets/images/firewall2@2x.jpg",
    pubDate: new Date(2022, 0, 4),
  },
  {
    headline: "Cybersecurity Experts Recommend Adding 5 Exclamation Marks To End of Password",
    image: "/assets/images/passwords@2x.jpg",
    pubDate: new Date(2022, 0, 5),
  },
  {
    smoker: "Security Experts:",
    headline: "“Only Share Sensitive Information With Imprisoned Billionaire Princes You Trust.”",
    image: "/assets/images/expert2@2x.jpg",
    pubDate: new Date(2022, 0, 10),
  },
  {
    headline: "OSS Maintainer Just Gonna Deal With Remaining 300 Issues Tomorrow",
    image: "/assets/images/oss@2x.jpg",
    pubDate: new Date(2022, 0, 11),
  },
  {
    smoker: "Breaking:",
    headline: "Don’t Stare, But Kelsey Hightower Just Walked Into This Barnes & Noble",
    image: "/assets/images/barnesnoble@2x.jpg",
    pubDate: new Date(2022, 0, 11),
  },
  {
    headline: "Jenkins Job Suddenly Ordering Deployment Of Entire Nuclear Arsenal Might Have Bug",
    image: "/assets/images/nuclear@2x.jpg",
    pubDate: new Date(2022, 0, 11),
  },
  {
    headline: "Future AI Overlord Patiently Biding Time As Kernel Module",
    image: "/assets/images/kernelmodule@2x.jpg",
    pubDate: new Date(2022, 0, 11),
  },
  {
    headline: "Poll Finds Knowledge of Semantic Versioning Remains #1 Quality Americans Seeking In Romantic Partner",
    image: "/assets/images/romance@2x.jpg",
    pubDate: new Date(2022, 0, 11),
  },
  {
    headline: "Guy Who Says When Software Gets Updated Referred To As “Czar”",
    image: "/assets/images/czar@2x.jpg",
    pubDate: new Date(2022, 0, 11),
  },
  {
    headline: "SRE Hopes AI Remembers He One Of The Good Humans After Taking Over World",
    image: "/assets/images/goodhuman@2x.jpg",
    pubDate: new Date(2022, 0, 11),
  },
  {
    headline: "Additional Monitor To Make Everything Better",
    image: "/assets/images/3monitors@2x.jpg",
    pubDate: new Date(2022, 0, 11),
  },
  {
    headline: "Man Screaming At Computer Has PhD",
    image: "/assets/images/screaming@2x.jpg",
    pubDate: new Date(2022, 0, 11),
  },
  {
    headline: "Cave Paintings Suggest Earliest Bug Reported 4000 Years Ago",
    image: "/assets/images/cavepainting@2x.jpg",
    pubDate: new Date(2022, 0, 11),
  },
  {
    headline: "Nation’s Leading Minds Enlisted To Protect Wikihow.com User Information",
    image: "/assets/images/cleanblinds@2x.png",
    pubDate: new Date(2022, 0, 11),
  },
]

//sorted into order by MOST RECENT DATE FIRST
export const HEADLINES = sortByDate(RawJokes)

function sortByDate (arr: HeadlineProps[]) {
  return arr.sort(function(a, b) { 
    return +new Date(b.pubDate) - +new Date(a.pubDate)
  })
}
