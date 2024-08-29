import { ReactNode } from "react";

type TSectionInfo = {
    title: string,
    children: ReactNode | string;
};
export const SectionInfo = ({ title, children }: TSectionInfo) => {
    return <div className="grid grid-cols-3">
        <div className="font-supplymono text-28 leading-10 font-normal text-blue-pacific">
            {title}
        </div>
        <div className="col-span-2">
            {children}
        </div>
    </div>
}