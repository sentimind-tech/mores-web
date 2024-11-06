import { ReactNode } from "react";
import { HeadingText } from "../Text";

type TPageHeaderProp = {
  title?: string;
  subtitle?: string;
  background: string;
  subtitleCustomClass?: string;
  overlay?: boolean;
};
export const PageHeader = ({
  title,
  background,
  subtitle,
  subtitleCustomClass,
  overlay,
}: TPageHeaderProp) => {
  return (
    <div
      className="flex flex-col items-center h-[320px] md:h-[400px] relative"
      style={{
        backgroundImage: `url('${background}')`,
        backgroundSize: "cover", // Ensures the image covers the entire div
        backgroundPosition: "center", // Centers the image within the div
        backgroundRepeat: "no-repeat", // Prevents the image from repeating
      }}
    >
      {overlay && (
        <div className="w-full h-full absolute bg-black opacity-20 top-0 left-0 z-0" />
      )}
      <div className="flex flex-col gap-10 justify-center h-full w-full px-24 mobile-min:px-32 lg:px-64 relative">
        <div
          className={`font-supplymono text-16 md:text-20 leading-[1.25rem] md:leading-[1.75rem] tracking-[-0.02em] text-blue-pacific ${subtitleCustomClass}`}
        >
          {subtitle}
        </div>
        <div className="font-supplymono text-28 md:text-[40px] leading-[34px] md:leading-[48px] text-white w-full max-w-[890px] flex justify-start uppercase ">
          {title}
        </div>
      </div>
    </div>
  );
};
