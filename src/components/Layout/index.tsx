import { ReactNode } from "react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <main className="">
        <Header />
        <div className="">{children}</div>
        <Footer />
      </main>
    </>
  );
};

export default Layout;
