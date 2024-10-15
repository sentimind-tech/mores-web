import { ReactNode } from "react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import SearchProvider from "@/context/SearchContext";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <SearchProvider>
        <main className="">
          <Header />
          <div className="">{children}</div>
          <Footer />
        </main>
      </SearchProvider>
    </>
  );
};

export default Layout;
