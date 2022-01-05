import React from "react";
import NavBar from "components/NavBar/NavBar"

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div>
      <NavBar/>
      {children}
    </div>
    )
};

export default Layout;
