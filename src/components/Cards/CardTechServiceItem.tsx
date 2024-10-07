import Image from "next/image";
import { HeadingText } from "../Text";

type CardTechServiceItem = {
  image: string;
  title: string;
  ornament?: string;
};

const CardTechServiceItem = (props: CardTechServiceItem) => {
  const { image, title, ornament } = props;
  return (
    <div className="w-full h-full bg-gray-light">
      <div className="relative w-full aspect-[16/12] bg-gray-100 flex items-center justify-center">
        {image !== "" && (
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
      <div className="px-12 md:px-18 py-16 md:py-32 bg-gray-light">
        <HeadingText className="uppercase text-black text-12 md:text-16 leading-[1.313rem] md:leading-[1.5rem] tracking-[-0.02em]">
          {title}
        </HeadingText>
      </div>
    </div>
  );
};

export default CardTechServiceItem;
