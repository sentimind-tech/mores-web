"use client";

import { useState, useEffect } from "react";
import { ButtonPrimary } from "../Button";
import Image from "next/image";
import Link from "next/link";
import { BodyText, HeadingText } from "../Text";

type TCardSearchItemProps = {
  image: string;
  title: string;
  category: string;
  desc: string;
  link?: string;
};

const CardSearchItem = (props: TCardSearchItemProps) => {
  const { image, title, category, desc, link } = props;
  const [linkUrl, setLinkUrl] = useState(true);

  const checkUrl = (url: string) => {
    var tarea = url;

    if (tarea.indexOf("http://") == 0 || tarea.indexOf("https://") == 0) {
      setLinkUrl(true);
    } else {
      setLinkUrl(false);
    }
  };

  useEffect(() => {
    if (link) {
      checkUrl(link);
    }
  }, [link]);

  return (
    <div className="w-full flex flex-col md:flex-row items-start py-18">
      {image && image !== "" && (
        <div className="shrink-0 w-full md:max-w-[222px] md:mr-24 lg:mr-[3.125rem]">
          <div className="relative aspect-[16/10] bg-gray-100">
            <Image
              src={image}
              alt="Thumb"
              fill={true}
              priority={true}
              sizes="auto"
              className="block w-full h-full absolute object-center object-cover top-0 left-0 z-0"
            />
          </div>
        </div>
      )}
      <div className="flex-1 py-12 md:pr-20">
        <BodyText className="block mb-4 text-[0.688rem] leading-[1.375rem] text-blue-pacific uppercase">
          {category}
        </BodyText>
        <HeadingText className="text-black text-24 leading-[1.875rem] block uppercase">
          {title}
        </HeadingText>
        <BodyText className="text-[0.75rem] leading-[0.938rem] block mt-12">
          {desc}
        </BodyText>
      </div>
      <div className="shrink-0 pt-12 lg:pt-20 ml-auto">
        {link ? (
          <>
            {linkUrl ? (
              <Link href={link} target="_blank">
                <ButtonPrimary className="uppercase">Read</ButtonPrimary>
              </Link>
            ) : (
              <Link href={link}>
                <ButtonPrimary className="uppercase">Read</ButtonPrimary>
              </Link>
            )}
          </>
        ) : (
          <ButtonPrimary className="uppercase">Read</ButtonPrimary>
        )}
      </div>
    </div>
  );
};

export default CardSearchItem;
