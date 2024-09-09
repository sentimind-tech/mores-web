"use client";

import {
  useState,
  useRef,
  useEffect,
  ChangeEvent,
  ReactNode,
  useTransition,
} from "react";
import { BodyText, HeadingText } from "../Text";
import { Locale, usePathname, useRouter } from "@/i18n/routing";
import { useLocale } from "next-intl";
import { useParams } from "next/navigation";

const menu = [
  {
    value: "en",
    label: "Global | En",
  },
  {
    value: "id",
    label: "Bahasa | Id",
  },
];

const LangSelector = () => {
  const [dropdownValue, setDropdownValue] = useState<any>(null);
  const [openDropdown, setOpenDropdown] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const router = useRouter();
  const localActive = useLocale();
  const [isPending, startTransition] = useTransition();
  const params = useParams();
  const pathname = usePathname();

  const handleDropdown = () => {
    setOpenDropdown(!openDropdown);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setOpenDropdown(false);
    }
  };

  const defaultSelectedType = (lang: string) => {
    if (menu) {
      const findMenu = menu.find((e) => e.value === lang);

      return findMenu?.label;
    }

    return "";
  };

  const handleOptionsChange = (newValue: any) => {
    const nextLocale = newValue as Locale;

    startTransition(() => {
      router.push(pathname, { locale: nextLocale });
    });

    setTimeout(() => {
      setOpenDropdown(false);
    }, 500);
  };

  useEffect(() => {
    setDropdownValue(defaultSelectedType(localActive));
  }, [localActive]);

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <div className="block cursor-pointer" onClick={handleDropdown}>
        <HeadingText className="text-18 leading-[1.35rem] text-blue-pacific uppercase block select-none">
          {dropdownValue}
        </HeadingText>
      </div>

      {openDropdown && (
        <div className="absolute w-[160px] left-0 top-[100%] bg-white border border-brand-100 rounded-[4px] shadow-lang-selector mt-6">
          {menu.map((item, index) => (
            <div
              className="py-6 text-12 leading-[21px] px-16 cursor-pointer bg-white text-black transition-all duration-300 lg:hover:bg-blue-pacific lg:hover:text-white first:rounded-tl-[4px] first:rounded-tr-[4px] last:rounded-br-[4px] last:rounded-bl-[4px]"
              key={index}
              onClick={() => handleOptionsChange(item.value)}
            >
              {item.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default LangSelector;
