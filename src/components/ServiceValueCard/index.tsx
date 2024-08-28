import { ReactNode } from "react";

type TServiceValueCard = {
    title: string
    description: string
    image: string
};
export const ServiceValueCard = ({ title, description, image }: TServiceValueCard) => {
    return <div className="flex flex-col justify-between bg-gray-light border-b-8 border-blue-pacific">
        <div className="flex flex-col gap-12">
            <div className="">{title}</div>
            <div>{description}</div>
        </div>
        <div></div>
    </div>
}