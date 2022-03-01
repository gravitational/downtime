import { JokeParser } from "components/JokeParser";
import NextImage from "next/image";
import logo from "../public/assets/images/downtimeLogo.png"
import * as styles from "../components/index.css"


export default function Home() {
  return (
  <div className={styles.outer}>
    <div className={styles.imageContainer}>
      <NextImage src={logo} alt="downtime logo"/>
    </div>
    <JokeParser/>
  </div>
  );
}
