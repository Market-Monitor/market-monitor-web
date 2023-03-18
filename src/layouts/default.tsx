import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { ReactNode } from "react";

interface DefaultLayoutProps {
  children: ReactNode;
}

const DefaultLayout = ({ children }: DefaultLayoutProps) => {
  return (
    <>
      <Header />

      <div id="main">{children}</div>

      <Footer />
    </>
  );
};

export default DefaultLayout;
