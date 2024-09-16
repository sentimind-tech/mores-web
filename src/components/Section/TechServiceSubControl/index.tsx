import { HeadingText, BodyText } from "@/components/Text";
import { useTranslations } from "next-intl";

const TechServiceSubControl = () => {
  const t = useTranslations("TechMores");

  const data = [
    {
      title: t("service_subcontrol_1"),
    },
    {
      title: t("service_subcontrol_2"),
    },
    {
      title: t("service_subcontrol_3"),
    },
    {
      title: t("service_subcontrol_4"),
    },
    {
      title: t("service_subcontrol_5"),
    },
  ];
  return (
    <section className="py-[3.125rem] md:py-[6.25rem] px-16">
      <div className="w-full max-w-[1041px] mx-auto">
        <div className="w-full md:w-1/2 mb-24">
          <HeadingText type="h3" className="text-blue-pacific uppercase">
            {t("service_subcontrol_title")}
          </HeadingText>
        </div>
        <div className="grid grid-cols-5 gap-24">
          {data.map((item, index) => (
            <div className="block" key={index}>
              <HeadingText type="h4" className="text-blue-pacific block">
                {(index + 1).toString().padStart(2, "0")}
              </HeadingText>
              <BodyText type="body1" className="">
                {item.title}
              </BodyText>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechServiceSubControl;
