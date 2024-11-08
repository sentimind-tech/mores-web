"use client";
import { BodyText, HeadingText } from "../Text";
import he from "he";

const CardFooterAddress = ({
  title,
  address,
}: {
  title: string;
  address: string;
}) => {
  return (
    <div className="w-full">
      <HeadingText className="text-16 leading-[1.2rem] text-blue-pacific uppercase inline-block mb-[0.313rem]">
        {title}
      </HeadingText>
      {address && (
        <BodyText className="font-inter leading-[1.125rem] text-[0.75rem] md:text-[0.875rem] inline-block">
          <span
            dangerouslySetInnerHTML={{
              __html: he.decode(address),
            }}
          ></span>
        </BodyText>
      )}
    </div>
  );
};

export default CardFooterAddress;
