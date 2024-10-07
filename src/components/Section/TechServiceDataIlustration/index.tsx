import Image from "next/image";
import { HeadingText } from "@/components/Text";
import { useTranslations } from "next-intl";

const TechServiceDataIlustration = () => {
  const t = useTranslations("TechMores");

  return (
    <div className="px-16 mt-[2.5rem] md:mt-[4.375rem]">
      <div className="w-full max-w-[1041px] mx-auto">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-32">
          <div className="flex flex-1">
            <HeadingText
              type="h4"
              className="text-blue-pacific uppercase text-center lg:text-left"
            >
              {t("service_data_ilustration_title")}
            </HeadingText>
          </div>
          <div className="relative aspect-[4/3.5] w-full max-w-[449px] shrink-0">
            <Image
              src="/images/thumb/thumb-service-data-ilustration.jpg"
              alt="Thumb"
              fill={true}
              priority={true}
              sizes="auto"
              className="block w-full h-full absolute object-center object-cover top-0 left-0 z-0"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechServiceDataIlustration;
