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
      <GDPR />
      {children}
    </div>
  );
};

export default Layout;
