import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";

type TInsightCardProp = {
    image: string,
    title: string,
    subtitle: string,
    description: string,
    path: string,
};

export const InsightCard = ({
    image,
    title,
    subtitle,
    description,
    path,
}: TInsightCardProp) => {

    return <div className="flex flex-col">
        <div className="w-full">
            <Image
                src={image}
                alt={title}
                width="0"
                height="0"
                sizes="100vw"
                className="w-full h-auto"
                priority={true}
            />
        </div>
        <div className="flex flex-col font-normal font-inter">
            <div className="text-[7px] leading-[22px] text-blue-pacific font-supplymono">{subtitle}</div>
            <div className="mt-[5px] mb-[2px] text-12 leading-[1.25rem] text-black ">{title}</div>
            <div className="text-[7px] leading-[15px] text-gray-medium">{description}</div>
        </div>
        <div className="mt-5 flex justify-start items-center gap-10 cursor-pointer">
            <Link href={path} className="text-black leading-3 font-normal text-10 font-supplymono">READ NOW</Link>
            <Image
                src={"/icon/arrow-right.svg"}
                alt={title}
                width="17"
                height="12"
                priority={true}
            />
        </div>
    </div>
};
