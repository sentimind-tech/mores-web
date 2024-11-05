import Image from "next/image";
import { HeadingText } from "../Text";

type CardTechServiceItem = {
  image: string | null;
  title: string;
  ornament?: string;
};

const CardTechServiceItem = (props: CardTechServiceItem) => {
  const { image, title, ornament } = props;
  return (
    <div className="w-full h-full bg-gray-light">
      <div className="relative w-full aspect-[16/12] bg-gray-100 flex items-center justify-center">
        {image && (
          <Image
            src={image}
            alt="Thumb"
            fill={true}
            priority={true}
            sizes="auto"
            className="block w-full h-full absolute object-center object-cover top-0 left-0 z-0 transition-all scale-100 group-hover:scale-110"
          />
        )}
        {ornament && (
          <img src={ornament} alt="" className="relative max-w-[70%]" />
        )}
      </div>
      <div className="w-full h-[6px] bg-blue-pacific"></div>
      <div className="px-12 md:px-18 py-16 md:py-32 bg-gray-light flex items-center justify-between self-center">
        <HeadingText className="uppercase text-black text-12 md:text-16 leading-[1.313rem] md:leading-[1.5rem] tracking-[-0.02em]">
          {title}
        </HeadingText>

        <svg
          width="40"
          height="16"
          viewBox="0 0 40 16"
          fill="none"
          className="shrink-0"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M39.8574 7.62035L32.4547 15.2407L31.2506 14.0033L36.6024 8.49545L-0.000172033 8.49545L-0.000171956 6.74526L36.6024 6.74526L31.2506 1.23914L32.4547 -3.23585e-07L39.8574 7.62035Z"
            fill="black"
          />
        </svg>
      </div>
    </div>
  );
};

export default CardTechServiceItem;
