import { ReactNode } from "react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import SearchProvider from "@/context/SearchContext";

const Layout = ({
  children,
  selectedMenu,
}: {
  children: ReactNode;
  selectedMenu: string;
}) => {
  return (
    <>
      <SearchProvider>
        <main className="">
          <Header selectedMenu={selectedMenu} />
          <div className="">{children}</div>
          <Footer />
        </main>
      </SearchProvider>
    </>
  );
};

export default Layout;
