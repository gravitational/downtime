import React from "react";
import NavBar from "components/NavBar/NavBar";
import GDPR from "components/GDPR";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div>
      <NavBar />
      {children}
      <GDPR />
    </div>
  );
};

export default Layout;
