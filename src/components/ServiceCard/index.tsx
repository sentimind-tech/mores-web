import { ReactNode } from "react";

type TServiceCard = {
    title: string
    description: string
    path: string
};
export const ServiceCard = ({ title, description, path }: TServiceCard) => {
    return <div className="flex flex-col justify-between">
        <div className="flex flex-col">
            <div className="flex justify-between pt-16 border-t border-gray-silver">
                <div className="h-56 overflow-hidden text-ellipsis whitespace text-black font-normal text-xl font-supplymono">{title}</div>
                <div className="">
                    <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.572401 1.58023L1.62001 0.520235L7.32609 6.29723C7.41807 6.3898 7.49107 6.49988 7.54088 6.62113C7.59069 6.74238 7.61633 6.87241 7.61633 7.00373C7.61633 7.13506 7.59069 7.26509 7.54088 7.38634C7.49107 7.50759 7.41807 7.61767 7.32609 7.71023L1.62001 13.4902L0.573389 12.4302L5.92895 7.00523L0.572401 1.58023Z" fill="black" />
                    </svg>
                </div>
            </div>
            <div className="text-left mt-[6px] text-12 leading-[1.25rem] text-inter text-gray-medium">{description}</div>
        </div>
        <div className="mt-5 flex justify-start items-center gap-10 cursor-pointer">
            <div className="text-blue-pacific">More</div>
            <div>
                <svg width="17" height="12" viewBox="0 0 17 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M16.7341 5.61903L11.3444 11.2381L10.4678 10.3256L14.3643 6.2643L0.381759 6.2643L0.381759 4.97376L14.3643 4.97376L10.4678 0.913705L11.3444 -2.38602e-07L16.7341 5.61903Z" fill="#00A2B6" />
                </svg>
            </div>
        </div>
    </div>
}