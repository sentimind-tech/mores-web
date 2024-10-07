import { ReactNode } from "react";

type TButtonProps = {
  children: ReactNode | string;
  className?: string;
  onClick?: (e: any) => void;
  isLoading?: boolean;
  size?: "xl" | "large" | "small";
};

export const ButtonPrimary = ({
  children,
  className,
  isLoading,
  size,
  ...props
}: TButtonProps) => {
  const handleSize =
    size == "xl"
      ? "h-[4.5rem]"
      : size == "large"
      ? "h-[3.75rem]"
      : size == "small"
      ? "h-[2.625rem]"
      : "";

  return (
    <button
      className={`transition-all font-supplymono text-16 leading-[1.188rem] bg-blue-pacific lg:hover:bg-blue-teal lg:active:bg-black text-white lg:active:text-white px-[1rem] py-[0.625rem] flex justify-center items-center ${handleSize} ${
        className ?? ""
      }`}
      {...props}
    >
      {children}
    </button>
  );
};

export const ButtonSecondary = ({
  children,
  className,
  isLoading,
  size,
  ...props
}: TButtonProps) => {
  const handleSize =
    size == "xl"
      ? "h-[4.5rem]"
      : size == "large"
      ? "h-[3.75rem]"
      : size == "small"
      ? "h-[2.625rem]"
      : "";

  return (
    <button
      className={`transition-all font-supplymono text-16 leading-[1.188rem] bg-white lg:hover:bg-white-smoke lg:active:bg-black text-blue-pacific lg:active:text-white px-[1rem] py-[0.625rem] flex justify-center items-center ${handleSize} ${
        className ?? ""
      }`}
      {...props}
    >
      {children}
    </button>
  );
};

export const ButtonOutline = ({
  children,
  className,
  isLoading,
  size,
  ...props
}: TButtonProps) => {
  const handleSize =
    size == "xl"
      ? "h-[4.5rem]"
      : size == "large"
      ? "h-[3.75rem]"
      : size == "small"
      ? "h-[2.625rem]"
      : "";

  return (
    <button
      className={`transition-all font-supplymono text-16 leading-[1.188rem] bg-transparent border border-white lg:hover:bg-white text-white lg:hover:text-blue-pacific px-[1rem] py-[0.625rem] flex justify-center items-center ${handleSize} ${
        className ?? ""
      }`}
      {...props}
    >
      {children}
    </button>
  );
};
