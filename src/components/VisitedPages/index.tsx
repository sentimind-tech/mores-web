"use client";

import { useState, useEffect } from "react";
import { BodyText } from "../Text";
import Link from "next/link";

interface VisitedPage {
  url: string;
  title: string;
}

const VisitedPages = () => {
  const [pages, setPages] = useState<{ url: string; title: string }[]>([]);

  useEffect(() => {
    const storedPages = localStorage.getItem("visitedPages");
    let initialPages: VisitedPage[] = [];
    if (storedPages) {
      try {
        initialPages = JSON.parse(storedPages);
      } catch (error) {
        console.error("Failed to parse visitedPages from localStorage:", error);
      }
    }

    const currentTitle = document.title;
    const currentUrl = window.location.pathname;

    // Check if the current page already exists in the list
    const pageExists = initialPages.some((page) => page.url === currentUrl);

    if (!pageExists) {
      const updatedPages = [
        { url: currentUrl, title: currentTitle },
        ...initialPages,
      ].slice(0, 5);

      setPages(updatedPages);
      localStorage.setItem("visitedPages", JSON.stringify(updatedPages));
    } else {
      setPages(initialPages);
    }
  }, []);

  const getTextAfterPipe = (text: string) => {
    return text.split("|")[1].trim();
  };

  return (
    <div className="block w-full">
      <div className="block">
        <BodyText className="text-14 leading-[0.938rem] font-gray-medium mb-14 block">
          Popular Searches
        </BodyText>
        <ul className="">
          <li className="text-18 leading-[1.25rem] py-[0.438rem]">
            <Link
              href="/search?result=digital"
              className="transition-all duration-300 text-[#030303] hover:text-blue-pacific"
            >
              Digital
            </Link>
          </li>
          <li className="text-18 leading-[1.25rem] py-[0.438rem]">
            <Link
              href="/search?result=data"
              className="transition-all duration-300 text-[#030303] hover:text-blue-pacific"
            >
              Data
            </Link>
          </li>
          <li className="text-18 leading-[1.25rem] py-[0.438rem]">
            <Link
              href="/search?result=research"
              className="transition-all duration-300 text-[#030303] hover:text-blue-pacific"
            >
              Research
            </Link>
          </li>
        </ul>
      </div>
      {pages && pages.length > 0 && (
        <div className="block mt-32">
          <BodyText className="text-14 leading-[0.938rem] font-gray-medium mb-14 block">
            Recently Visited Pages
          </BodyText>
          <div className="flex flex-wrap mx-[-1.5rem]">
            {pages.slice(1).map((item, index) => (
              <div className="px-24" key={index}>
                <Link href={item.url} className="group">
                  <div className="text-18 leading-[1.25rem] transition-all duration-300 text-[#030303] group-hover:text-blue-pacific">
                    {getTextAfterPipe(item.title)}
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default VisitedPages;
