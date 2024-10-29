"use client";
import Image from "next/image";
import { ReactNode } from "react";
import { BodyText } from "@/components/Text";

type TCompanyInfoCardProp = {
  title: string;
  icon?: string;
  children: ReactNode | string;
  footer?: string;
  contentClassName?: string;
  url?: string;
};
const CompanyInfoCard = ({
  title,
  icon,
  children,
  footer,
  url,
  contentClassName,
}: TCompanyInfoCardProp) => {
  const handleClick = () => {
    if (!url || url == "") return;
    window.open(url, "_blank"); // Open the file in a new tab
  };

  return (
    <div className="flex flex-col justify-between gap-64 border-t border-gray-ash pt-16 font-inter text-12 leading-[1.25rem]">
      <div className={`flex flex-col gap-20 ${contentClassName}`}>
        <div className="text-xl text-black gap-16 flex font-supplymono">
          {icon && (
            <Image src={icon} alt={`${title}_icon`} width={30} height={30} />
          )}
          <span>{title}</span>
        </div>
        <div className="">{children}</div>
      </div>
      {footer && (
        <div className="text-blue-pacific cursor-pointer" onClick={handleClick}>
          <BodyText type="body3">{footer}</BodyText>
        </div>
      )}
    </div>
  );
};

export default CompanyInfoCard;
