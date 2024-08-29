import { ReactNode } from "react";

type TSectionHeader = {
    title: string,
};
export const SectionHeader = ({ title }: TSectionHeader) => {
    return <div className="flex flex-col gap-50">
        <div className="flex items-center w-full gap-48">
            <div className="flex-grow w-full h-[1px] border-t border-gray-silver"></div>
            <div className="whitespace-nowrap font-supplymono text-2xl text-black font-normal">{title}</div>
            <div className="flex-grow w-full h-[1px] border-t border-gray-silver"></div>
        </div>

    </div>
}