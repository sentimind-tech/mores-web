import Image from "next/image";
import { BodyText, HeadingText } from "../Text";
import { TMenuContentProps } from "@/types/Menu";
import Link from "next/link";
import { ButtonPrimary } from "../Button";
import { useLocale } from "next-intl";
import { ACTIVE_MENU_STATE } from "@/dictionaries/general";
import { TMoresTechServiceProps } from "@/types/mores_tech";

const MenuContent = (
  props: TMenuContentProps & {
    activeMenu: string;
    closeDrawer: () => void;
    techService: TMoresTechServiceProps[] | null;
  }
) => {
  const { slug, data, activeMenu, closeDrawer, techService } = props;
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
                <div className={`block`} key={index}>
                  <>
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

                    {slug == "mores-tech" &&
                      item.title == "Mores Tech Service" &&
                      techService && (
                        <div className="flex flex-col gap-8 mt-10">
                          {techService.map((tech, idx) => (
                            <div
                              className="block pl-[1.7rem] text-[0.875rem] leading-[1rem]"
                              key={idx}
                            >
                              <Link
                                href={`/${localActive}/tech/services/${tech.id}`}
                                className="inline-block transition-all duration-300 hover:text-blue-pacific"
                                key={idx}
                              >
                                <BodyText
                                  className="block relative before:content-['>'] before:w-[12px] before:h-[8px] before:absolute before:top-[-1px] before:left-[-17px] capitalize"
                                  key={idx}
                                >
                                  {tech.menu_title.toLowerCase()}
                                </BodyText>
                              </Link>
                            </div>
                          ))}
                        </div>
                      )}
                  </>
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
              <BodyText className="text-14 leading-[1.4rem] block">
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
