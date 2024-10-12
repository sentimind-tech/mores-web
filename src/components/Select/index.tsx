import Image from "next/image";
import { ChangeEventHandler, ReactNode } from "react";

type TSelectProps = {
  children: ReactNode | string;
  id?: string;
  className?: string;
  defaultValue?: string;
  onChange?: ChangeEventHandler<HTMLSelectElement>;
};

export const Select = ({
  children,
  id,
  className,
  onChange,
  defaultValue,
  ...props
}: TSelectProps) => {
  return (
    <div className="relative inline-block w-full">
      <select
        id={id}
        className={`block w-full py-8 pl-3 pr-10 text-base border-b-[1.5px] border-gray-silver focus:outline-none appearance-none font-inter font-normal text-blue-pacific text-base ${className}`}
        onChange={onChange}
        defaultValue={defaultValue}
        {...props}
      >
        {children}
      </select>
      <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
        <Image
          alt="dropdown-icon"
          width={20}
          height={8}
          src="/icon/dropdown-icon.svg"
        />
      </div>
    </div>
  );
};
