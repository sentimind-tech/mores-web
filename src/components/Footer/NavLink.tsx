"use client";

import { useLocale } from "next-intl";
import Link from "next/link";

const FooterNavlink = () => {
  const localActive = useLocale();

  const navlink = [
    {
      title: "SERVICES",
      link: `/${localActive}/services`,
    },
    {
      title: "INDUSTRIES",
      link: `/${localActive}/industries`,
    },
    {
      title: "MORES TECH",
      link: `/${localActive}/tech/services`,
    },
    {
      title: "INSIGHT",
      link: `/${localActive}/insights`,
    },
    {
      title: "CAREERS",
      link: `/${localActive}/careers`,
    },
    {
      title: "CONTACT US",
      link: `/${localActive}/contact`,
    },
  ];

  return (
    <ul className="flex flex-wrap justify-center md:justify-start gap-[1.5rem] md:gap-[2.875rem] mt-24 md:mt-[3.375rem]">
      {navlink.map((item, index) => (
        <li className="text-[0.813rem] leading-[1rem] uppercase" key={index}>
          <Link href={item.link} className="hover:underline">
            {item.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default FooterNavlink;
