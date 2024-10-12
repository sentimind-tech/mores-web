import Image from "next/image";
import { BodyText, HeadingText } from "../Text";
import { TMenuContentProps } from "@/types/Menu";
import Link from "next/link";
import { ButtonPrimary } from "../Button";
import { useLocale } from "next-intl";

const MenuContent = (props: TMenuContentProps) => {
  const { slug, data } = props;
  const localActive = useLocale();

  return (
    <div className="block">
      {data?.title && (
        <div className="w-full block pb-[1.188rem] border-b border-gray-cloud">
          <HeadingText
            type="h3"
            className="uppercase text-blue-pacific leading-[1.8rem]"
          >
            {data?.title}
          </HeadingText>
        </div>
      )}

      <div className="w-full block pt-24 lg:pt-[2.375rem]">
        <div className="flex flex-col-reverse lg:flex-row gap-24">
          <div className="w-full lg:w-1/2 flex flex-col gap-[0.938rem]">
            {data?.menus &&
              data.menus.map((item, index) => (
                <div
                  className="flex items-center justify-between gap-12"
                  key={index}
                >
                  {item.link && item.link !== "" ? (
                    <Link
                      href={`/${localActive}${item.link}`}
                      className="block"
                    >
                      <BodyText
                        type="body1"
                        className="leading-[1.21rem] text-black transition-all duration-300 hover:text-blue-pacific"
                      >
                        {item.title}
                      </BodyText>
                    </Link>
                  ) : (
                    <BodyText
                      type="body1"
                      className="leading-[1.21rem] text-black transition-all duration-300 hover:text-blue-pacific"
                    >
                      {item.title}
                    </BodyText>
                  )}
                </div>
              ))}
          </div>

          <div className="w-full lg:w-1/2 block">
            <div className="w-full aspect-[16/7] rounded-[10px] overflow-hidden relative mb-[1.188rem] bg-gray-cloud">
              {data?.thumb && (
                <Image
                  src={data.thumb}
                  alt="Thumb Menu"
                  fill={true}
                  priority={true}
                  sizes="auto"
                  className="absolute block w-full h-full object-center object-cover rounded-[10px]"
                />
              )}
            </div>
            {data?.thumb_name && (
              <HeadingText
                type="h5"
                className="text-[1.313rem] leading-[1.575] block mb-12 text-blue-pacific uppercase"
              >
                {data.thumb_name}
              </HeadingText>
            )}
            {data?.thumb_desc && (
              <BodyText className="text-12 leading-[1.25rem] block">
                {data.thumb_desc}
              </BodyText>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuContent;
