//image imports
import bored from "../public/assets/images/bored@2x.jpg"
import coffee from "../public/assets/images/coffee@2x.jpg"


export interface HeadlineProps {
    hl: string,
    image?: StaticImageData | string,
    pubDate: Date
  }


export const HEADLINES: HeadlineProps[] = [
  {
    hl: "Report: Spilled Coffee Remains Nation's Leading Cybersecurity Threat",
    image: coffee,
    pubDate: new Date(),
  }, 
  {
    hl: "Uninspired SRE Just Going Through The Motions Of Distributed Consensus Algorithm Optimization",
    image: "/assets/images/bored@2x.jpg",
    pubDate: new Date(),
  },
  {
    hl: "Modern-Day Robin Hood Steals Passwords to 40,000 Bon Appetit Accounts",
    image: "/assets/images/hackerman@2x.jpg",
    pubDate: new Date(),
  },
  {
    hl: "Dad Confidently Drops Word “Firewall” In Conversation with SRE Son",
    image: "/assets/images/firewall2@2x.jpg",
    pubDate: new Date(),
  },
  {
    hl: "Cybersecurity Experts Recommend Adding 5 Exclamation Marks To End of Password",
    image: "/assets/images/experts@2x.jpg",
    pubDate: new Date(),
  },
]
