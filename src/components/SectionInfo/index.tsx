import { ReactNode } from "react";

type TSectionInfoProp = {
  title: string;
  children: ReactNode | string;
  subtitle?: ReactNode | string;
};
export const SectionInfo = ({
  title,
  children,
  subtitle,
}: TSectionInfoProp) => {
  return (
    <div className="w-full mx-auto">
      <div className="grid grid-cols-1 mobile-min:grid-cols-3 gap-12 mobile-min:gap-[40px]">
        <div className="block">
          <div className="font-supplymono text-lg lg:text-28 lg:leading-10 font-normal text-blue-pacific">
            {title.toUpperCase()}
          </div>
          {subtitle && (
            <div className="text-14 leading-[1.5rem] text-ironside mt-12">
              {subtitle}
            </div>
          )}
        </div>
        <div className="col-span-2">{children}</div>
      </div>
    </div>
  );
};
