"use client";

import React, { ReactNode, useState, useRef, useEffect } from "react";
import { HeadingText } from "../Text";

type TCollapsibleProps = {
  open?: boolean;
  title: string | ReactNode;
  children: ReactNode;
  collapsedContent?: ReactNode;
};

const Collapsible = ({
  open,
  title,
  children,
  collapsedContent,
}: TCollapsibleProps) => {
  const [isOpen, setIsOpen] = useState(open);
  const [height, setHeight] = useState<number | undefined>(
    open ? undefined : 0
  );
  const [heightCollapsedContent, setHeightCollapsedContent] = useState<
    number | undefined
  >(open ? undefined : 0);
  const bodyCollapseRef = useRef<HTMLDivElement>(null);
  const collapsedContentRef = useRef<HTMLDivElement>(null);

  const toggleCollapsible = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (isOpen) {
      setHeight(bodyCollapseRef.current?.getBoundingClientRect().height);
      setHeightCollapsedContent(0);
    } else {
      setHeight(0);
      setHeightCollapsedContent(
        collapsedContentRef.current?.getBoundingClientRect().height
      );
    }
  }, [isOpen]);

  return (
    <div className="relative bg-surface-1 overflow-hidden">
      <div className="flex justify-between items-center pr-[2rem] lg:pr-[2.5rem] mb-24 relative">
        {typeof title == "string" ? (
          <HeadingText
            type="h4"
            className="uppercase text-black block border-b border-gray-cloud py-[11px] w-full"
          >
            {title}
          </HeadingText>
        ) : (
          <div className="border-b border-gray-cloud py-[11px] w-full">
            {title}
          </div>
        )}

        <div
          className={`w-[32px] h-[32px] cursor-pointer absolute right-0 bottom-[-16px]`}
          onClick={toggleCollapsible}
        >
          <svg width="32" height="33" viewBox="0 0 32 33" fill="none">
            <rect
              x="0.5"
              y="1"
              width="31"
              height="31"
              rx="15.5"
              className={`transition-all duration-500 ${
                isOpen ? "fill-neutral-0" : "fill-brand-50"
              }`}
            />
            <rect
              x="0.5"
              y="1"
              width="31"
              height="31"
              rx="15.5"
              className="stroke-brand-100"
            />
            {isOpen ? (
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10.8334 16.5C10.8334 16.2239 11.0572 16 11.3334 16H20.6667C20.9428 16 21.1667 16.2239 21.1667 16.5C21.1667 16.7761 20.9428 17 20.6667 17H11.3334C11.0572 17 10.8334 16.7761 10.8334 16.5Z"
                className="fill-blue-pacific"
              />
            ) : (
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M16 11C16.2761 11 16.5 11.2239 16.5 11.5V16H21C21.2761 16 21.5 16.2239 21.5 16.5C21.5 16.7761 21.2761 17 21 17H16.5V21.5C16.5 21.7761 16.2761 22 16 22C15.7239 22 15.5 21.7761 15.5 21.5V17H11C10.7239 17 10.5 16.7761 10.5 16.5C10.5 16.2239 10.7239 16 11 16H15.5V11.5C15.5 11.2239 15.7239 11 16 11Z"
                className="fill-blue-pacific"
              />
            )}
          </svg>
        </div>
      </div>
      <div
        className={`overflow-hidden transition-all ease-in-out duration-500`}
        style={{ height }}
      >
        <div className="pr-0 lg:pr-[2.5rem]" ref={bodyCollapseRef}>
          {children}
        </div>
      </div>
      {collapsedContent && (
        <div
          className="w-full overflow-hidden transition-all ease-in-out duration-500 h-0"
          style={{ height: heightCollapsedContent }}
        >
          <div className="" ref={collapsedContentRef}>
            {collapsedContent}
          </div>
        </div>
      )}
    </div>
  );
};

export default Collapsible;
