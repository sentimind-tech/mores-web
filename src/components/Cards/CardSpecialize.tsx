import Image from "next/image";
import { HeadingText } from "../Text";
import Link from "next/link";

type TCardSpecializeProps = {
  title: string;
  image: string | null;
  link?: string;
};

const Content = ({ title, image }: TCardSpecializeProps) => {
  return (
    <div className="block relative">
      <div className="relative">
        <div className="relative w-full aspect-square overflow-hidden bg-[#d8d8d8] md:bg-[#EFF1F3]">
          {image ? (
            <Image
              src={image}
              alt="Thumb"
              fill={true}
              priority={true}
              sizes="auto"
              className="block w-full h-full absolute object-center object-cover top-0 left-0 z-0 transition-all scale-100 group-hover:scale-110"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <svg
                width="800px"
                height="800px"
                viewBox="0 0 120 120"
                fill="none"
                className="w-1/2 h-1/2 mb-[20%]"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M33.2503 38.4816C33.2603 37.0472 34.4199 35.8864 35.8543 35.875H83.1463C84.5848 35.875 85.7503 37.0431 85.7503 38.4816V80.5184C85.7403 81.9528 84.5807 83.1136 83.1463 83.125H35.8543C34.4158 83.1236 33.2503 81.957 33.2503 80.5184V38.4816ZM80.5006 41.1251H38.5006V77.8751L62.8921 53.4783C63.9172 52.4536 65.5788 52.4536 66.6039 53.4783L80.5006 67.4013V41.1251ZM43.75 51.6249C43.75 54.5244 46.1005 56.8749 49 56.8749C51.8995 56.8749 54.25 54.5244 54.25 51.6249C54.25 48.7254 51.8995 46.3749 49 46.3749C46.1005 46.3749 43.75 48.7254 43.75 51.6249Z"
                  fill="#687787"
                />
              </svg>
            </div>
          )}
        </div>
        <div className="absolute w-full bottom-0 left-0 bg-blue-pacific px-[1.5rem]">
          <div className="flex justify-between items-center gap-24 min-h-[5.438rem]">
            <HeadingText
              type="h5"
              className="leading-[1.563rem] text-white uppercase"
            >
              {title}
            </HeadingText>

            <svg width="41" height="16" viewBox="0 0 41 16" fill="none">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M40.636 8.13964L33.2332 15.76L32.0292 14.5226L37.381 9.01474L0.778377 9.01474L0.778377 7.26454L37.381 7.26454L32.0292 1.75843L33.2332 0.519287L40.636 8.13964Z"
                fill="white"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

const CardSpecialize = (props: TCardSpecializeProps) => {
  return props.link ? (
    <Link href={props.link}>
      <Content {...props} />
    </Link>
  ) : (
    <Content {...props} />
  );
};

export default CardSpecialize;
