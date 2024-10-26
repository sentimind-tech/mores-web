import { ReactNode } from "react";

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
          className={`font-supplymono text-lg lg:text-xl text-blue-pacific ${subtitleCustomClass}`}
        >
          {subtitle}
        </div>
        <div className="font-supplymono text-[36px] leading-[40px] lg:text-[48px] lg:leading-[60px] text-white w-full flex justify-start uppercase ">
          {title}
        </div>
      </div>
    </div>
  );
};
