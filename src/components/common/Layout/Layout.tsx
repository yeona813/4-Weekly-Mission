import React, { ReactNode } from "react";
import NavigationBar from "../NavigationBar/NavigationBar";
import Footer from "../Footer/Footer";

interface LayoutProps {
  isSticky: boolean;
  profile: {
    profileImageSource: string;
    email: string;
  };
  children: ReactNode;
}

const Layout = ({ isSticky, profile, children }: LayoutProps) => {
  return (
    <div>
      <NavigationBar isSticky={isSticky} profile={profile} />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
