import { useTranslations } from "next-intl";
import { HeadingText } from "@/components/Text";
import Image from "next/image";

const TechServiceSecurityIntro = () => {
  const t = useTranslations("TechMores");
  return (
    <section className="py-[3.5rem] md:py-[4.375rem] px-16">
      <div className="w-full max-w-[1045px] mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="w-full md:w-1/2 text-center md:text-left mb-24 md:mb-0">
            <HeadingText
              type="h3"
              className="text-blue-pacific uppercase block max-w-[400px]"
            >
              {t("service_data_security_title")}
            </HeadingText>
          </div>
          <div className="w-full md:w-1/2">
            <div className="shrink-0">
              <div className="relative aspect-[16/3.15] max-w-[250px] md:max-w-[400px] mx-auto md:mr-0 md:ml-auto">
                <Image
                  src="/images/logo/logo-anomali-big.png"
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
      </div>
    </section>
  );
};

export default TechServiceSecurityIntro;
