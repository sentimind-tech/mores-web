import { ReactNode } from "react";

type TServiceValueCard = {
    title: string
    description: string
    image: string
};
export const ServiceValueCard = ({ title, description, image }: TServiceValueCard) => {
    return <div className="flex flex-col gap-24 justify-between bg-gray-light border-b-8 border-blue-pacific text-left py-16 px-24 font-normal">
        <div className="flex flex-col gap-12">
            <div className="text-28 leading-10 text-black">{title}</div>
            <div>{description}</div>
        </div>
        <div></div>
    </div>
}