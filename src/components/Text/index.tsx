import { ReactNode } from "react";
import {
  TEXT_DISPLAY_HUGE,
  TEXT_DISPLAY_LARGE,
  TEXT_DISPLAY_MEDIUM,
  TEXT_DISPLAY_SMALL,
} from "@/store/constants";

type TTextComponentProps = {
  className?: string;
  children: ReactNode;
};

const DisplayText = ({
  type,
  className,
  children,
}: TTextComponentProps & {
  type?: "huge" | "large" | "medium" | "small";
}) => {
  const handleType =
    type == TEXT_DISPLAY_HUGE
      ? "text-[2.8rem] md:text-[4.5rem] leading-normal md:leading-[6rem]"
      : type == TEXT_DISPLAY_LARGE
      ? "text-[4rem] leading-[4.5rem] tracking-[-0.02em]"
      : type == TEXT_DISPLAY_MEDIUM
      ? "text-[3.5rem] leading-[4rem] tracking-[-0.02em]"
      : type == TEXT_DISPLAY_SMALL
      ? "text-[2.5rem] leading-[3rem] tracking-[-0.02em]"
      : "";

  return (
    <h1 className={`font-supplymono ${handleType} ${className ?? ""}`}>
      {children}
    </h1>
  );
};

const HeadingText = ({
  type,
  className,
  children,
}: TTextComponentProps & {
  type?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}) => {
  if (type == "h1") {
    return (
      <h1
        className={`font-supplymono text-[3rem] leading-[3.5rem] tracking-[-0.02em] ${
          className ?? ""
        }`}
      >
        {children}
      </h1>
    );
  }

  if (type == "h2") {
    return (
      <h2
        className={`font-supplymono text-32 md:text-[2.5rem] leading-[2.5rem] md:leading-[3rem] tracking-[-0.02em] ${
          className ?? ""
        }`}
      >
        {children}
      </h2>
    );
  }

  if (type == "h3") {
    return (
      <h3
        className={`font-supplymono text-20 md:text-[1.75rem] leading-[1.75rem] md:leading-[2.5rem] tracking-[-0.02em] ${
          className ?? ""
        }`}
      >
        {children}
      </h3>
    );
  }

  if (type == "h4") {
    return (
      <h4
        className={`font-supplymono text-18 md:text-[1.5rem] leading-[1.5rem] md:leading-[2rem] tracking-[-0.02em] ${
          className ?? ""
        }`}
      >
        {children}
      </h4>
    );
  }

  if (type == "h5") {
    return (
      <h5
        className={`font-supplymono text-16 md:text-[1.25rem] leading-[1.313rem] md:leading-[1.75rem] tracking-[-0.02em] ${
          className ?? ""
        }`}
      >
        {children}
      </h5>
    );
  }

  if (type == "h6") {
    return (
      <h6
        className={`font-supplymono text-[1rem] leading-[1.5rem] tracking-[-0.02em] ${
          className ?? ""
        }`}
      >
        {children}
      </h6>
    );
  }

  return <h6 className={`font-supplymono ${className ?? ""}`}>{children}</h6>;
};

const BodyText = ({
  type,
  className,
  children,
}: TTextComponentProps & {
  type?: "body1" | "body2" | "body3";
}) => {
  if (type == "body1") {
    return (
      <p
        className={`font-inter text-[1.125rem] leading-[1.625rem] ${
          className ?? ""
        }`}
      >
        {children}
      </p>
    );
  }

  if (type == "body2") {
    return (
      <p
        className={`font-inter text-[1rem] leading-[1.5rem] ${className ?? ""}`}
      >
        {children}
      </p>
    );
  }

  if (type == "body3") {
    return (
      <p
        className={`font-inter text-[0.875rem] leading-[1.5rem] ${
          className ?? ""
        }`}
      >
        {children}
      </p>
    );
  }

  return <span className={className ?? ""}>{children}</span>;
};

export { DisplayText, HeadingText, BodyText };
