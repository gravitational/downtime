import { JokeParser } from "components/JokeParser";
import NextImage from "next/image";
import logo from "../public/assets/images/downtimeLogo.png"


export default function Home() {
  return (
  <div className="flex flex-col items-center w-full">
    <div className="w-6/12 max-w-[600px] mt-14 lg:mt-16">
      <NextImage src={logo} alt="downtime logo"/>
    </div>
    <JokeParser/>
  </div>
  )
}
