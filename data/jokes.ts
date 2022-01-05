
export interface HeadlineProps {
    hl: string,
    image?: string,
    pubDate: Date
  }


export const HEADLINES: HeadlineProps[] = [
  {
    hl: "Report: Spilled Coffee Remains Nation's Leading Cybersecurity Threat",
    pubDate: new Date(),
  }, 
  {
    hl: "Uninspired SRE Just Going Through The Motions Of Distributed Consensus Algorithm Optimization",
    image: "https://www.istockphoto.com/photo/i-wish-this-day-was-over-already-gm1255134986-367092324",
    pubDate: new Date(),
  },
  {
    hl: "Modern-Day Robin Hood Steals Passwords to 40,000 Bon Appetit Accounts",
    pubDate: new Date(),
  },
  {
    hl: "Dad Confidently Drops Word “Firewall” In Conversation with SRE Son",
    image: "https://www.istockphoto.com/photo/father-and-son-best-buds-for-life-gm1201594480-344652097",
    pubDate: new Date(),
  },
  {
    hl: "Cybersecurity Experts Recommend Adding 5 Exclamation Marks To End of Password",
    image: "https://www.istockphoto.com/photo/ai-machine-learning-hands-of-robot-and-human-touching-on-big-data-network-connection-gm1206796363-348181260",
    pubDate: new Date(),
  },
]
