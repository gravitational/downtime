//image imports: static imports probably better for performance, but will need to test
// import coffee from "../public/assets/images/coffee@2x.jpg";

// Workaround related to: https://github.com/vercel/next.js/issues/29788
declare type StaticImageData = {
  src: string;
  height: number;
  width: number;
  placeholder?: string;
};
export interface HeadlineProps {
  smoker?: string;
  headline: string;
  image?: string;
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
    twitterImage: "pic.twitter.com/4gOslvVhmU",
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
    image: "/assets/images/walmartCart@2x.png",
    twitterImage: "pic.twitter.com/OB7MKCV0H5",
    pubDate: new Date(2022, 0, 4),
    anchor: 10017,
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
    image: "/assets/images/coffee@2x.jpg",
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
    headline: "2022 To Be Year Man’s Identity Not Stolen",
    image: "/assets/images/identityNotStolen@2x.jpg",
    twitterImage: "pic.twitter.com/5xEXIOt58j",
    pubDate: new Date(2022, 0, 27),
    anchor: 10022,
  },
  {
    headline: "Bot’s Mother Sad It No Longer Spams Her As Much As It Used To",
    image: "/assets/images/botDoesntSpam@2x.png",
    twitterImage: "pic.twitter.com/QysBOqbu1B",
    pubDate: new Date(2022, 0, 28),
    anchor: 10023,
  },
  {
    headline: "Universe To Be Down Thursday While God Runs Software Update",
    image: "/assets/images/universeDown@2x.jpg",
    twitterImage: "pic.twitter.com/uqrjoCcEPx",
    pubDate: new Date(2022, 0, 31),
    anchor: 10024,
  },
  {
    headline:
      "HR Department Gives SRE Humiliating New Title Of ‘Uptime Success Manager’",
    image: "/assets/images/uptimeSuccessManager@2x.jpg",
    twitterImage: "pic.twitter.com/V03celmsID",
    pubDate: new Date(2022, 1, 1),
    anchor: 10025,
  },
  {
    headline:
      "DevOps Engineer Chatting With Verizon Customer Service Can’t Wait For Epic Reveal He’s Actually Quite Familiar With TCP/IP Settings",
    image: "/assets/images/TCP-IP-settings@2x.jpg",
    twitterImage: "pic.twitter.com/1BtHiC4sX1",
    pubDate: new Date(2022, 1, 2),
    anchor: 10026,
  },
  {
    smoker: "Breaking:",
    headline: "Manager Just Needs Quick 5-6 Hours Of Your Time",
    image: "/assets/images/managerChat@2x.jpg",
    twitterImage: "pic.twitter.com/9YCQ2LwnU1",
    pubDate: new Date(2022, 1, 3),
    anchor: 10027,
  },
  {
    headline:
      "Precocious Bot Getting Pretty Good At Telling Difference Between CAPTCHA Bridges, Cars",
    image: "/assets/images/bridges@2x.png",
    twitterImage: "pic.twitter.com/DaM225rhMS",
    pubDate: new Date(2022, 1, 7),
    anchor: 10028,
  },
  {
    headline:
      "SRE Sits Child Down To Have 'Birds, Bees and Cap Theorem' Talk",
    image: "/assets/images/birdsBeesCapTalk@2x.jpg",
    twitterImage: "pic.twitter.com/vRzZIAQxAn",
    pubDate: new Date(2022, 1, 8),
    anchor: 10029,
  },
  {
    headline:
      "OSS Maintainer Who Just Read Marie Kondo Excited To Delete All Issues That Don’t Spark Total Joy",
    image: "/assets/images/marieKondo@2x.png",
    twitterImage: "pic.twitter.com/wyeJ9t3jN3",
    pubDate: new Date(2022, 1, 9),
    anchor: 10030,
  },
  {
    headline:
      "CEO Assuming Someone In Company Taking Care Of All That Cybersecurity Stuff",
    image: "/assets/images/unsatisfiedCEO@2x.jpg",
    twitterImage: "pic.twitter.com/zS26sx7yas",
    pubDate: new Date(2022, 1, 10),
    anchor: 10031,
  },
  {
    headline:
      "App User Whose Bank Account Not Yet Emptied Disappointed To Learn New Software Update Just Fixed Log4j Bugs",
    image: "/assets/images/womanDisappointed@2x.jpg",
    twitterImage: "pic.twitter.com/tXlfP57Kps",
    pubDate: new Date(2022, 1, 11),
    anchor: 10032,
  },
  {
    headline:
      "Poll Finds Knowledge of Semantic Versioning Remains #1 Quality Americans Seeking In Romantic Partner",
    image: "/assets/images/romance@2x.jpg",
    twitterImage: "pic.twitter.com/2jrdX9AHnV",
    pubDate: new Date(2022, 1, 14),
    anchor: 10010,
  },
  {
    headline:
      "Nation Encouraged To Make Second Password",
    image: "/assets/images/crowd@2x.jpg",
    twitterImage: "pic.twitter.com/syosIcIgac",
    pubDate: new Date(2022, 1, 15),
    anchor: 10033,
  },
  {
    headline:
      "Charging Cable Lost",
    image: "/assets/images/chargingCable@2x.jpg",
    twitterImage: "pic.twitter.com/QpzNb9Pq3E",
    pubDate: new Date(2022, 1, 16),
    anchor: 10034,
  },
  {
    headline:
      "Kind-Hearted User Not Gonna Report This Bug",
    image: "/assets/images/safari@2x.png",
    twitterImage: "pic.twitter.com/hKNN9neJOi",
    pubDate: new Date(2022, 1, 17),
    anchor: 10035,
  },
  {
    smoker: "Study:",
    headline:
      "89% Of Billionaires Made Fortune By Opening Link From Unknown Sender",
    image: "/assets/images/billionaires@2x.png",
    twitterImage: "pic.twitter.com/TVNmpHUiPW",
    pubDate: new Date(2022, 1, 18),
    anchor: 10036,
  },
  {
    smoker: "Breaking:",
    headline:
      "Bug Fixed",
    image: "/assets/images/bugFixed@2x.png",
    twitterImage: "pic.twitter.com/JBxqwcxQCm",
    pubDate: new Date(2022, 1, 22),
    anchor: 10037,
  },
  {
    headline:
      "Cohesive, Grammatically Correct Email From Boss Must Be Phishing Scam",
    image: "/assets/images/bossEmail@2x.png",
    twitterImage: "pic.twitter.com/SLzccyQR3a",
    pubDate: new Date(2022, 1, 23),
    anchor: 10038,
  },
  {
    headline:
      "Once “Weak” Password Triumphantly Emerges From Metamorphosis As “Strong” Password",
    image: "/assets/images/passwordStrength@2x.png",
    twitterImage: "pic.twitter.com/dzyMcQIQ25",
    pubDate: new Date(2022, 1, 24),
    anchor: 10039,
  },
  {
    headline:
      "“React Native Is Totally The Way To Go,” Confirms Team Quietly Rewriting Entire App In Native",
    image: "/assets/images/reactNative@2x.jpg",
    twitterImage: "pic.twitter.com/ICKPeBCcSN",
    pubDate: new Date(2022, 1, 25),
    anchor: 10040,
  },
  {
    headline:
      "Zero-Knowledge Proof Used To Confirm Man Doesn’t Understand Zero-Knowledge Proofs",
    image: "/assets/images/manQuestioning@2x.jpg",
    twitterImage: "pic.twitter.com/sL9VmA0wU7",
    pubDate: new Date(2022, 1, 28),
    anchor: 10041,
  },
  {
    headline:
      "Man Hoping To Visit Each Of Company’s Slack Channels Before He Dies",
    image: "/assets/images/manCelebratesAtComputer.jpg",
    twitterImage: "pic.twitter.com/vJdxSwoPVR",
    pubDate: new Date(2022, 2, 1),
    anchor: 10042,
  },
  {
    headline:
      "Once-Proud Database Humbled Five Minutes Into Jepsen Test",
    image: "/assets/images/dataCenter@2x.jpg",
    twitterImage: "pic.twitter.com/PGXMx6um2p",
    pubDate: new Date(2022, 2, 8),
    anchor: 10043,
  },
  {
    headline:
      "Currency Of The Future Enters 4th Hour Of Transaction Process",
    image: "/assets/images/ethereum.jpg",
    twitterImage: "pic.twitter.com/5vbnwNr2iv",
    pubDate: new Date(2022, 2, 9),
    anchor: 10044,
  },
  {
    headline:
      "Couple Seeking Living Room Couch That Will Compliment Dell Precision 7920 Tower with Dual Monitors",
    image: "/assets/images/coupleBuysFurniture@2x.jpg",
    twitterImage: "pic.twitter.com/YMsw2Lw1LW",
    pubDate: new Date(2022, 2, 10),
    anchor: 10045,
  },
];

//sorted into order by MOST RECENT DATE FIRST
export const HEADLINES = sortByDate(RawJokes);

function sortByDate(arr: HeadlineProps[]) {
  return arr.sort(function (a, b) {
    return +new Date(b.pubDate) - +new Date(a.pubDate);
  });
}
