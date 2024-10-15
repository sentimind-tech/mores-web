"use client";

import React, { createContext, ReactNode, useContext } from "react";
import useSearchData from "@/hooks/useSearchData";

const SearchContext = createContext<any>(null);

export const useSearchContext = () => useContext(SearchContext);

const SearchProvider = ({ children }: any) => {
  const searchData = useSearchData();

  return (
    <SearchContext.Provider value={searchData}>
      {children}
    </SearchContext.Provider>
  );
};

export default SearchProvider;
