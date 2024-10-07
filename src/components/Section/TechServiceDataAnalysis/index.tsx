import { HeadingText, BodyText } from "@/components/Text";
import { useTranslations } from "next-intl";

const TechServiceDataAnalysis = () => {
  const t = useTranslations("TechMores");

  const data = [
    {
      title: t("service_data_1"),
      image: "/images/icon/ico-service-data-1.svg",
    },
    {
      title: t("service_data_2"),
      image: "/images/icon/ico-service-data-2.svg",
    },
    {
      title: t("service_data_3"),
      image: "/images/icon/ico-service-data-3.svg",
    },
    {
      title: t("service_data_4"),
      image: "/images/icon/ico-service-data-4.svg",
    },
    {
      title: t("service_data_5"),
      image: "/images/icon/ico-service-data-5.svg",
    },
  ];

  return (
    <div className="w-full px-16">
      <div className="w-full max-w-[1041px] mx-auto">
        <div className="w-full w-full md:w-1/2 lg:w-1/3 mb-32">
          <HeadingText type="h3" className="text-blue-pacific uppercase">
            {t("service_data_title")}
          </HeadingText>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-24 md:gap-[40px] lg:gap-[50px]">
          {data.map((item, index) => (
            <div
              className="block border-t border-gray-silver py-16 md:py-24 text-center"
              key={index}
            >
              <div className="w-full aspect-square relative flex items-center justify-center">
                <img src={item.image} alt="" className="mx-auto" />
              </div>
              <BodyText type="body2" className="block mt-12 text-black">
                {item.title}
              </BodyText>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechServiceDataAnalysis;
