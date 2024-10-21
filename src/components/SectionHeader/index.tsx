import { ReactNode } from "react";

type TSectionHeaderProp = {
    title: string,
};
export const SectionHeader = ({ title }: TSectionHeaderProp) => {
    return <div className="section-header-container">
        <div className="flex items-center w-full gap-48">
            <div className="hidden md:flex flex-grow w-full h-[1px] border-t border-gray-silver"></div>
            <div className="whitespace-nowrap font-supplymono text-lg lg:text-2xl text-black font-normal">{title}</div>
            <div className="hidden md:flex flex-grow w-full h-[1px] border-t border-gray-silver"></div>
        </div>

    </div>
}