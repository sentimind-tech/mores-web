"use client";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import { useRouter } from "next/navigation";
import { MouseEvent } from "react";

type TInsightCardProp = {
  image: string;
  title: string;
  subtitle: string;
  description: string;
  path: string;
};

export const InsightCard = ({
  image,
  title,
  subtitle,
  description,
  path,
}: TInsightCardProp) => {
  const router = useRouter();

  const handleClick = (event: MouseEvent<HTMLDivElement>) => {
    event.preventDefault();
    router.push(path);
  };

  return (
    <div onClick={handleClick} className="flex flex-col group cursor-pointer">
      <div className="w-full h-[125px] xl:h-[150px]">
        <Image
          src={image}
          alt={title}
          width="0"
          height="0"
          sizes="100vw"
          className="w-full h-full"
          priority={true}
        />
      </div>
      <div className="flex flex-col font-normal font-inter mt-8">
        <div className="text-14 leading-[26px] text-blue-pacific font-supplymono">
          {subtitle.toUpperCase()}
        </div>
        <div className="font-semibold mt-[2px] text-16 mb-[7px] leading-[1.4rem] text-black group-hover:text-blue-pacific">
          {title}
        </div>
        <div className="text-14 leading-[20px] text-gray-medium">
          {description}
        </div>
      </div>
      <Link
        href={path}
        className="mt-[25px] flex justify-start items-center gap-10 cursor-pointer"
      >
        <span className="text-blue-pacific leading-3 font-normal text-12 font-supplymono">
          READ NOW
        </span>
        <Image
          src={"/icon/arrow-right.svg"}
          alt={title}
          width="17"
          height="12"
          priority={true}
        />
      </Link>
    </div>
  );
};
