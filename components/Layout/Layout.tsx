import React from "react";
import NavBar from "components/NavBar/NavBar";
import GDPR from "components/GDPR";
import { JokeParser, RawJoke } from "components/JokeParser";
interface LayoutProps {
  children: React.ReactNode;
  allJokes: RawJoke[];
}

const Layout = ({ children, allJokes }: LayoutProps) => {
  return (
    <div>
      <NavBar />
      <GDPR />
      {children}
      <JokeParser jokes={allJokes} />
    </div>
  );
};

export default Layout;
