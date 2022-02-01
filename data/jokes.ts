//image imports: static imports probably better for performance, but will need to test
import coffee from "../public/assets/images/coffee@2x.jpg";

export interface HeadlineProps {
  smoker?: string;
  headline: string;
  image?: StaticImageData | string;
  twitterImage: string;
  pubDate: Date;
  anchor?: number;
}

//IMPORTANT: the MONTH is zero-indexed, e.g. "0" = January, "11" = December

const RawJokes: HeadlineProps[] = [
  {
    headline: "Additional Monitor To Make Everything Better",
    image: "/assets/images/3monitors@2x.jpg",
    twitterImage: "pic.twitter.com/M11MauCMPS",
    pubDate: new Date(2021, 11, 25),
    anchor: 10013,
  },
  {
    headline:
      "Nation’s Leading Minds Enlisted To Protect Wikihow.com User Information",
    image: "/assets/images/cleanblinds@2x.png",
    twitterImage: "pic.twitter.com/7NeW9BaqZg",
    pubDate: new Date(2021, 11, 26),
    anchor: 10016,
  },
  {
    headline: "80,000 Lines of Code No Match For 12-Year-Old Hacker",
    image: "/assets/images/kidhacker@2x.jpg",
    twitterImage: "pic.twitter.com/48QZIjaxhw",
    pubDate: new Date(2021, 0, 27),
    anchor: 10018,
  },
  {
    headline:
      "Microsoft Posts Job Listing Looking for “Someone Good With Computers”",
    image: "/assets/images/microsoft@2x.jpg",
    twitterImage: "pic.twitter.com/RpmvtvhbP7",
    pubDate: new Date(2021, 11, 28),
    anchor: 10019,
  },
  {
    headline: "Guy Who Says When Software Gets Updated Referred To As “Czar”",
    image: "/assets/images/czar@2x.jpg",
    twitterImage: "pic.twitter.com/nA23rZsnMt",
    pubDate: new Date(2021, 11, 29),
    anchor: 10011,
  },
  {
    headline:
      "Cybersecurity Experts Recommend Adding 5 Exclamation Marks To End of Password",
    image: "/assets/images/passwords@2x.jpg",
    twitterImage: "pic.twitter.com/KUaxJmopcQ",
    pubDate: new Date(2021, 11, 30),
    anchor: 10004,
  },
  {
    headline:
      "Jenkins Job Suddenly Ordering Deployment Of Entire Nuclear Arsenal Might Have Bug",
    image: "/assets/images/nuclear@2x.jpg",
    twitterImage: "pic.twitter.com/P0sX9swKxA",
    pubDate: new Date(2021, 11, 31),
    anchor: 10008,
  },
  {
    smoker: "Breaking:",
    headline:
      "Don’t Stare, But Kelsey Hightower Just Walked Into This Barnes & Noble",
    image: "/assets/images/barnesAndNobleClackamas@2x.jpeg",
    twitterImage: "pic.twitter.com/TCAe11Cto7",
    pubDate: new Date(2022, 0, 1),
    anchor: 10007,
  },
  {
    headline:
      "SRE Hopes AI Remembers He's One Of The Good Humans After Taking Over World",
    image: "/assets/images/goodhuman@2x.jpg",
    twitterImage: "pic.twitter.com/2FOJ8qam78FF",
    pubDate: new Date(2022, 0, 2),
    anchor: 10012,
  },
  {
    headline:
      "Modern-Day Robin Hood Steals Passwords to 40,000 Bon Appetit Accounts",
    image: "/assets/images/robinhood@2x.jpg",
    twitterImage: "pic.twitter.com/VakcVUr5YP",
    pubDate: new Date(2022, 0, 3),
    anchor: 10002,
  },
  {
    headline:
      "Millions of Walmart.com Users Brought to Tears By Flawless Implementation of Eventual Consistency Algorithm",
    image: "/assets/images/walmart@2x.png",
    twitterImage: "pic.twitter.com/OB7MKCV0H5",
    pubDate: new Date(2022, 0, 4),
    anchor: 10017,
  },
  {
    headline:
      "Poll Finds Knowledge of Semantic Versioning Remains #1 Quality Americans Seeking In Romantic Partner",
    image: "/assets/images/romance@2x.jpg",
    twitterImage: "pic.twitter.com/2jrdX9AHnV",
    pubDate: new Date(2022, 0, 5),
    anchor: 10010,
  },
  {
    headline:
      "Uninspired SRE Just Going Through The Motions Of Distributed Consensus Algorithm Optimization",
    image: "/assets/images/bored@2x.jpg",
    twitterImage: "pic.twitter.com/UquPxW74jE",
    pubDate: new Date(2022, 0, 6),
    anchor: 10001,
  },
  {
    headline:
      "All Of Hackers New Year’s Resolutions Involve Crippling Infrastructure",
    image: "/assets/images/oilpipe@2x.jpg",
    twitterImage: "pic.twitter.com/iRSFiKoX1b",
    pubDate: new Date(2022, 0, 7),
    anchor: 10020,
  },
  {
    smoker: "Security Experts:",
    headline:
      "“Only Share Sensitive Information With Imprisoned Billionaire Princes You Trust.”",
    image: "/assets/images/expert2@2x.jpg",
    twitterImage: "pic.twitter.com/DIiI6jsdLB",
    pubDate: new Date(2022, 0, 8),
    anchor: 10005,
  },
  {
    headline: "Cave Paintings Suggest Earliest Bug Reported 4000 Years Ago",
    image: "/assets/images/cavepainting@2x.jpg",
    twitterImage: "pic.twitter.com/KslJmVuOZy",
    pubDate: new Date(2022, 0, 9),
    anchor: 10015,
  },
  {
    headline: "Man Screaming At Computer Has PhD",
    image: "/assets/images/screaming@2x.jpg",
    twitterImage: "pic.twitter.com/FWZgjRT8PF",
    pubDate: new Date(2022, 0, 10),
    anchor: 10014,
  },
  {
    headline:
      "Dad Confidently Drops Word “Firewall” In Conversation with SRE Son",
    image: "/assets/images/firewall2@2x.jpg",
    twitterImage: "pic.twitter.com/KhRhMS68iJ",
    pubDate: new Date(2022, 0, 11),
    anchor: 10003,
  },
  {
    smoker: "Report:",
    headline: "Spilled Coffee Remains Nation's Leading Cybersecurity Threat",
    image: coffee,
    twitterImage: "pic.twitter.com/2359Rql36C",
    pubDate: new Date(2022, 0, 12),
    anchor: 10000,
  },
  {
    headline: "Future AI Overlord Patiently Biding Time As Kernel Module",
    image: "/assets/images/kernelmodule@2x.jpg",
    twitterImage: "pic.twitter.com/FjoSIzeUA8",
    pubDate: new Date(2022, 0, 13),
    anchor: 10009,
  },
  {
    headline:
      "OSS Maintainer Just Gonna Deal With Remaining 300 Issues Tomorrow",
    image: "/assets/images/oss@2x.jpg",
    twitterImage: "pic.twitter.com/Nmzx2ywwS9",
    pubDate: new Date(2022, 0, 14),
    anchor: 10006,
  },
  {
    headline:
      "2022 To Be Year Man’s Identity Not Stolen",
    image: "/assets/images/identityNotStolen@2x.jpg",
    twitterImage: "pic.twitter.com/5xEXIOt58j",
    pubDate: new Date(2022, 0, 27),
    anchor: 10022,
  },
  {
    headline:
      "Bot’s Mother Sad It No Longer Spams Her As Much As It Used To",
    image: "/assets/images/botDoesntSpam@2x.png",
    twitterImage: "pic.twitter.com/wVNpVKx6bP",
    pubDate: new Date(2022, 0, 28),
    anchor: 10023,
  },
  {
    headline:
      "Universe To Be Down Thursday While God Runs Software Update",
    image: "/assets/images/universeDown@2x.jpg",
    twitterImage: "pic.twitter.com/EVA3DP0eJz",
    pubDate: new Date(2022, 0, 31),
    anchor: 10024,
  },
  {
    headline:
      "HR Department Gives SRE Humiliating New Title Of ‘Uptime Success Manager’",
    image: "/assets/images/uptimeSuccessManager@2x.jpg",
    twitterImage: "pic.twitter.com/PSCqAr860N",
    pubDate: new Date(2022, 1, 1),
    anchor: 10025,
  },
];

//sorted into order by MOST RECENT DATE FIRST
export const HEADLINES = sortByDate(RawJokes);

function sortByDate(arr: HeadlineProps[]) {
  return arr.sort(function (a, b) {
    return +new Date(b.pubDate) - +new Date(a.pubDate);
  });
}
