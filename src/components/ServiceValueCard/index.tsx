import { ReactNode } from "react";
import Image from "next/image";

type TServiceValueCardProp = {
    title: string
    description: string
    image: string
};
export const ServiceValueCard = ({ title, description, image }: TServiceValueCardProp) => {
    return <div className="flex flex-col gap-24 bg-gray-light border-b-8 border-blue-pacific text-left py-16 px-24 font-normal">
        <div className="flex flex-col gap-12">
            <div className="text-18 lg:text-28 leading-10 text-black font-supplymono">{title}</div>
            <div className="font-inter text-14 lg:text-16 text-gray-medium">{description}</div>
        </div>
        <div className="grid grid-cols-3 flex-grow">
            <div></div>
            <div className="col-span-2 h-full flex items-center">
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
        </div>
    </div>
}