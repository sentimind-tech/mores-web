import Collapsible from "@/components/Collapsible";
import { useTranslations } from "next-intl";
import { HeadingText, BodyText } from "@/components/Text";
import Image from "next/image";

const BarFeature = ({
  title,
  filled = false,
}: {
  title: string;
  filled: boolean;
}) => {
  return (
    <div className="relative">
      <BodyText type="body1" className="text-gray-dove">
        {title}
      </BodyText>
      <div
        className={`relative w-full h-[2px] mt-[3px] ${
          filled ? "bg-blue-pacific" : "bg-black"
        }`}
      />
    </div>
  );
};

const TechProfileCollapseContent = () => {
  const t = useTranslations("TechMores");

  const indoorSystemFeature = [
    {
      title: t("product_indoor_positioning_system_fitur_1"),
      filled: true,
    },
    {
      title: t("product_indoor_positioning_system_fitur_2"),
      filled: true,
    },
    {
      title: t("product_indoor_positioning_system_fitur_3"),
      filled: true,
    },
    {
      title: t("product_indoor_positioning_system_fitur_4"),
      filled: false,
    },
    {
      title: t("product_indoor_positioning_system_fitur_5"),
      filled: false,
    },
    {
      title: t("product_indoor_positioning_system_fitur_6"),
      filled: false,
    },
    {
      title: t("product_indoor_positioning_system_fitur_7"),
      filled: false,
    },
  ];

  const pertaminaAssetFeature = [
    {
      title: t("product_pertamina_asset_management_fitur_1"),
      filled: true,
    },
    {
      title: t("product_pertamina_asset_management_fitur_2"),
      filled: true,
    },
    {
      title: t("product_pertamina_asset_management_fitur_3"),
      filled: false,
    },
    {
      title: t("product_pertamina_asset_management_fitur_4"),
      filled: false,
    },
    {
      title: t("product_pertamina_asset_management_fitur_5"),
      filled: false,
    },
    {
      title: t("product_pertamina_asset_management_fitur_6"),
      filled: false,
    },
    {
      title: t("product_pertamina_asset_management_fitur_7"),
      filled: false,
    },
  ];

  const pertaminaAssetFeature2 = [
    {
      title: t("product_pertamina_asset_management_fitur_1_2"),
      filled: true,
    },
    {
      title: t("product_pertamina_asset_management_fitur_2_2"),
      filled: true,
    },
    {
      title: t("product_pertamina_asset_management_fitur_3_2"),
      filled: false,
    },
    {
      title: t("product_pertamina_asset_management_fitur_4_2"),
      filled: false,
    },
    {
      title: t("product_pertamina_asset_management_fitur_5_2"),
      filled: false,
    },
    {
      title: t("product_pertamina_asset_management_fitur_6_2"),
      filled: false,
    },
    {
      title: t("product_pertamina_asset_management_fitur_7_2"),
      filled: false,
    },
  ];

  return (
    <>
      <div className="px-16 xl:px-0">
        <Collapsible
          title={t("product_dashboard_online_monitoring_title")}
          open={true}
        >
          <div className="w-full md:mt-32">
            <div className="max-w-[664px] w-full aspect-[16/8] mx-auto relative">
              <Image
                src="/images/thumb/thumb-tech-profile-3.jpg"
                alt="Thumb 1"
                fill={true}
                priority={true}
                sizes="auto"
                className="block w-full h-full absolute object-center object-contain top-0 left-0 z-0"
              />
            </div>
          </div>
        </Collapsible>
      </div>

      <div className="px-16 xl:px-0">
        <Collapsible
          title={
            <div className="block text-black">
              <HeadingText type="h3" className="uppercase">
                {t("product_indoor_positioning_system_title")}
              </HeadingText>
              <HeadingText
                type="h6"
                className="text-black block w-full uppercase mt-20"
              >
                {t("product")} :{" "}
                <span className="text-blue-pacific">
                  {t("product_indoor_positioning_system_subtitle")}
                </span>
              </HeadingText>
            </div>
          }
          open={true}
        >
          <div className="w-full mt-20 pb-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-32 md:gap-[50px]">
              <div className="">
                <HeadingText type="h5" className="text-blue-pacific uppercase">
                  {t("product_description")}
                </HeadingText>
                <BodyText type="body1" className="block mt-10">
                  {t("product_indoor_positioning_system_desc")}
                </BodyText>
              </div>
              <div className="">
                <HeadingText type="h5" className="text-blue-pacific uppercase">
                  {t("product_fitur")}
                </HeadingText>
                <div className="mt-10 columns-2 gap-32 md:gap-[50px] lg:gap-[100px]">
                  {indoorSystemFeature.map((item, index) => (
                    <div className="w-full py-4 break-inside-avoid" key={index}>
                      <BarFeature title={item.title} filled={item.filled} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="max-w-[731px] w-full aspect-[16/7.4] mx-auto relative mt-32 md:mt-[3rem] lg:mt-[5rem]">
              <Image
                src="/images/thumb/thumb-tech-profile-4.jpg"
                alt="Thumb 1"
                fill={true}
                priority={true}
                sizes="auto"
                className="block w-full h-full absolute object-center object-contain top-0 left-0 z-0"
              />
            </div>
          </div>
        </Collapsible>
      </div>

      <div className="px-16 xl:px-0">
        <Collapsible
          title={
            <div className="block text-black">
              <HeadingText type="h3" className="uppercase">
                {t("product_pertamina_asset_management_title")}
              </HeadingText>
              <HeadingText
                type="h6"
                className="text-black block w-full uppercase mt-20"
              >
                {t("product")} :{" "}
                <span className="text-blue-pacific">
                  {t("product_pertamina_asset_management_subtitle")}
                </span>
              </HeadingText>
            </div>
          }
          open={true}
        >
          <div className="w-full mt-20 pb-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-32 md:gap-[50px]">
              <div className="">
                <HeadingText type="h5" className="text-blue-pacific uppercase">
                  {t("product_description")}
                </HeadingText>
                <BodyText type="body1" className="block mt-10">
                  {t("product_pertamina_asset_management_desc")}
                </BodyText>
              </div>
              <div className="">
                <HeadingText type="h5" className="text-blue-pacific uppercase">
                  {t("product_fitur")}
                </HeadingText>
                <div className="mt-10 columns-2 gap-32 md:gap-[50px] lg:gap-[100px]">
                  {pertaminaAssetFeature.map((item, index) => (
                    <div className="w-full py-4 break-inside-avoid" key={index}>
                      <BarFeature title={item.title} filled={item.filled} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="max-w-[393px] w-full aspect-[16/15] mx-auto relative mt-32 md:mt-[3rem] lg:mt-[5rem]">
              <Image
                src="/images/thumb/thumb-tech-profile-5.jpg"
                alt="Thumb 1"
                fill={true}
                priority={true}
                sizes="auto"
                className="block w-full h-full absolute object-center object-contain top-0 left-0 z-0"
              />
            </div>
          </div>
        </Collapsible>
      </div>

      <div className="px-16 xl:px-0">
        <Collapsible
          title={
            <div className="block text-black">
              <HeadingText type="h3" className="uppercase">
                {t("product_pertamina_asset_management_title")}
              </HeadingText>
              <HeadingText
                type="h6"
                className="text-black block w-full uppercase mt-20"
              >
                {t("product")} :{" "}
                <span className="text-blue-pacific">
                  {t("product_pertamina_asset_management_subtitle")}
                </span>
              </HeadingText>
            </div>
          }
          open={true}
        >
          <div className="w-full mt-20 pb-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-32 md:gap-[50px]">
              <div className="">
                <HeadingText type="h5" className="text-blue-pacific uppercase">
                  {t("product_description")}
                </HeadingText>
                <BodyText type="body1" className="block mt-10">
                  {t("product_pertamina_asset_management_desc")}
                </BodyText>
              </div>
              <div className="">
                <HeadingText type="h5" className="text-blue-pacific uppercase">
                  {t("product_fitur")}
                </HeadingText>
                <div className="min-h-[165px] mt-10 columns-2 gap-32 md:gap-[50px] lg:gap-[100px]">
                  {pertaminaAssetFeature2.map((item, index) => (
                    <div className="w-full py-4 break-inside-avoid" key={index}>
                      <BarFeature title={item.title} filled={item.filled} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="max-w-[393px] w-full aspect-[16/15] mx-auto relative mt-32 md:mt-[3rem] lg:mt-[5rem]">
              <Image
                src="/images/thumb/thumb-tech-profile-6.jpg"
                alt="Thumb 1"
                fill={true}
                priority={true}
                sizes="auto"
                className="block w-full h-full absolute object-center object-contain top-0 left-0 z-0"
              />
            </div>
          </div>
        </Collapsible>
      </div>

      <div className="px-16 xl:px-0">
        <Collapsible
          title={
            <div className="block text-black">
              <HeadingText type="h3" className="uppercase">
                {t("product_pertamina_asset_management_title")}
              </HeadingText>
              <HeadingText
                type="h6"
                className="text-black block w-full uppercase mt-20"
              >
                {t("product")} :{" "}
                <span className="text-blue-pacific">
                  {t("product_pertamina_asset_management_subtitle_2")}
                </span>
              </HeadingText>
            </div>
          }
          open={true}
        >
          <div className="w-full mt-20 pb-20">
            <div className="grid grid-cols-1">
              <div className="">
                <HeadingText type="h5" className="text-blue-pacific uppercase">
                  {t("product_description")}
                </HeadingText>
                <BodyText type="body1" className="block mt-10">
                  {t("product_pertamina_asset_management_desc_2")}
                </BodyText>
              </div>
            </div>
            <div className="w-full aspect-[16/4] mx-auto relative mt-[5rem]">
              <Image
                src="/images/thumb/thumb-tech-profile-7.jpg"
                alt="Thumb 1"
                fill={true}
                priority={true}
                sizes="auto"
                className="block w-full h-full absolute object-center object-contain top-0 left-0 z-0"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 md:gap-32 mt-[40px] md:mt-[80px]">
              <div className="border-t border-gray-silver py-24 md:py-20">
                <BodyText type="body1" className="font-semibold">
                  {t("product_pertamina_security_system_title_1")}
                </BodyText>
                <ul className="list-disc pl-16 mt-12">
                  <li className="text-14 leading-[1.375rem]">
                    {t("product_pertamina_security_system_fitur_1")}
                  </li>
                  <li className="text-14 leading-[1.375rem]">
                    {t("product_pertamina_security_system_fitur_2")}
                  </li>
                  <li className="text-14 leading-[1.375rem]">
                    {t("product_pertamina_security_system_fitur_3")}
                  </li>
                </ul>
              </div>
              <div className="border-t border-gray-silver py-20">
                <BodyText type="body1" className="font-semibold">
                  {t("product_pertamina_security_system_title_2")}
                </BodyText>
                <ul className="list-disc pl-16 mt-12">
                  <li className="text-14 leading-[1.375rem]">
                    {t("product_pertamina_security_system_fitur_4")}
                  </li>
                  <li className="text-14 leading-[1.375rem]">
                    {t("product_pertamina_security_system_fitur_5")}
                  </li>
                  <li className="text-14 leading-[1.375rem]">
                    {t("product_pertamina_security_system_fitur_6")}
                  </li>
                </ul>
              </div>
              <div className="border-t border-gray-silver py-20">
                <BodyText type="body1" className="font-semibold">
                  {t("product_pertamina_security_system_title_3")}
                </BodyText>
                <ul className="list-disc pl-16 mt-12">
                  <li className="text-14 leading-[1.375rem]">
                    {t("product_pertamina_security_system_fitur_7")}
                  </li>
                  <li className="text-14 leading-[1.375rem]">
                    {t("product_pertamina_security_system_fitur_8")}
                  </li>
                  <li className="text-14 leading-[1.375rem]">
                    {t("product_pertamina_security_system_fitur_9")}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Collapsible>
      </div>
    </>
  );
};

export default TechProfileCollapseContent;
