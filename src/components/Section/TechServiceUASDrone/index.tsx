import { HeadingText, BodyText } from "@/components/Text";
import { useTranslations } from "next-intl";
import Image from "next/image";

const TechServiceUASDrone = () => {
  const t = useTranslations("TechMores");

  return (
    <section className="pt-[3.125rem] pb-32 md:pb-[2.688rem] md:pt-[6.25rem] px-16">
      <div className="w-full max-w-[1040px] mx-auto">
        <div className="text-center block relative">
          <div className="w-full h-[1px] bg-gray-cloud absolute top-[50%] left-0 z-[0]"></div>
          <HeadingText
            type="h4"
            className="bg-white text-black uppercase relative z-[1] inline-block px-16 md:px-[2.375rem]"
          >
            {t("service_data_uas_drone_title")}
          </HeadingText>
        </div>

        <div className="mt-[2.688rem]">
          <HeadingText type="h4" className="uppercase text-blue-pacific">
            1. Surveillance Video
          </HeadingText>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[1.5rem] lg:gap-0 mt-[1.5rem] lg:mt-[2.5rem]">
            <div className="block">
              <div className="block relative aspect-square overflow-hidden">
                <Image
                  src="/images/thumb/thumb-uas-1.jpg"
                  alt="Thumb"
                  fill={true}
                  priority={true}
                  sizes="auto"
                  className="block w-full h-full absolute object-center object-cover top-0 left-0 z-0"
                />
              </div>
              <BodyText
                type="body2"
                className="text-black block mt-12 lg:mt-20"
              >
                Thermal Surveillance
              </BodyText>
            </div>
            <div className="block">
              <div className="block relative aspect-square overflow-hidden">
                <Image
                  src="/images/thumb/thumb-uas-2.jpg"
                  alt="Thumb"
                  fill={true}
                  priority={true}
                  sizes="auto"
                  className="block w-full h-full absolute object-center object-cover top-0 left-0 z-0"
                />
              </div>
              <BodyText
                type="body2"
                className="text-black block mt-12 lg:mt-20"
              >
                Thermal Inspection
              </BodyText>
            </div>
            <div className="block">
              <div className="block relative aspect-square overflow-hidden">
                <Image
                  src="/images/thumb/thumb-uas-3.jpg"
                  alt="Thumb"
                  fill={true}
                  priority={true}
                  sizes="auto"
                  className="block w-full h-full absolute object-center object-cover top-0 left-0 z-0"
                />
              </div>
              <BodyText
                type="body2"
                className="text-black block mt-12 lg:mt-20"
              >
                RGB Video
              </BodyText>
            </div>
            <div className="block">
              <div className="block relative aspect-square overflow-hidden">
                <Image
                  src="/images/thumb/thumb-uas-4.jpg"
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
        <div className="mt-[2.688rem]">
          <HeadingText type="h4" className="uppercase text-blue-pacific">
            2. Orthomosaic Map
          </HeadingText>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[1.5rem] lg:gap-0 mt-[1.5rem] lg:mt-[2.5rem]">
            <div className="block">
              <div className="block relative aspect-square overflow-hidden">
                <Image
                  src="/images/thumb/thumb-uas-5.jpg"
                  alt="Thumb"
                  fill={true}
                  priority={true}
                  sizes="auto"
                  className="block w-full h-full absolute object-center object-cover top-0 left-0 z-0"
                />
              </div>
              <BodyText
                type="body2"
                className="text-black block mt-12 lg:mt-20"
              >
                Cadastral Plan
              </BodyText>
            </div>
            <div className="block">
              <div className="block relative aspect-square overflow-hidden">
                <Image
                  src="/images/thumb/thumb-uas-6.jpg"
                  alt="Thumb"
                  fill={true}
                  priority={true}
                  sizes="auto"
                  className="block w-full h-full absolute object-center object-cover top-0 left-0 z-0"
                />
              </div>
              <BodyText
                type="body2"
                className="text-black block mt-12 lg:mt-20"
              >
                Distance and Area Calculation
              </BodyText>
            </div>
            <div className="block">
              <div className="block relative aspect-square overflow-hidden">
                <Image
                  src="/images/thumb/thumb-uas-7.jpg"
                  alt="Thumb"
                  fill={true}
                  priority={true}
                  sizes="auto"
                  className="block w-full h-full absolute object-center object-cover top-0 left-0 z-0"
                />
              </div>
              <BodyText
                type="body2"
                className="text-black block mt-12 lg:mt-20"
              >
                Thermal and Spectral Imaging
              </BodyText>
            </div>
            <div className="block">
              <div className="block relative aspect-square overflow-hidden">
                <Image
                  src="/images/thumb/thumb-uas-8.jpg"
                  alt="Thumb"
                  fill={true}
                  priority={true}
                  sizes="auto"
                  className="block w-full h-full absolute object-center object-cover top-0 left-0 z-0"
                />
              </div>
              <BodyText
                type="body2"
                className="text-black block mt-12 lg:mt-20"
              >
                Land Measurement and Planning
              </BodyText>
            </div>
          </div>
        </div>
        <div className="mt-[3.125rem] md:mt-[5.375rem]">
          <HeadingText type="h4" className="uppercase text-blue-pacific">
            3. 3D Reconstruction
          </HeadingText>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-[1.5rem] lg:gap-0 mt-[1.5rem] lg:mt-[2.5rem]">
            <div className="block">
              <div className="block relative aspect-[12/16] overflow-hidden">
                <Image
                  src="/images/thumb/thumb-uas-reconstruction-1.jpg"
                  alt="Thumb"
                  fill={true}
                  priority={true}
                  sizes="auto"
                  className="block w-full h-full absolute object-center object-cover top-0 left-0 z-0"
                />
              </div>
              <BodyText
                type="body2"
                className="text-black block mt-12 lg:mt-20"
              >
                Cadastral Plan
              </BodyText>
            </div>
            <div className="block">
              <div className="block relative aspect-[12/16] overflow-hidden">
                <Image
                  src="/images/thumb/thumb-uas-reconstruction-2.jpg"
                  alt="Thumb"
                  fill={true}
                  priority={true}
                  sizes="auto"
                  className="block w-full h-full absolute object-center object-cover top-0 left-0 z-0"
                />
              </div>
              <BodyText
                type="body2"
                className="text-black block mt-12 lg:mt-20"
              >
                Digital Terrain Model
              </BodyText>
            </div>
            <div className="block">
              <div className="block relative aspect-[12/16] overflow-hidden">
                <Image
                  src="/images/thumb/thumb-uas-reconstruction-3.jpg"
                  alt="Thumb"
                  fill={true}
                  priority={true}
                  sizes="auto"
                  className="block w-full h-full absolute object-center object-cover top-0 left-0 z-0"
                />
              </div>
              <BodyText
                type="body2"
                className="text-black block mt-12 lg:mt-20"
              >
                Digital Surface Model
              </BodyText>
            </div>
            <div className="block">
              <div className="block relative aspect-[12/16] overflow-hidden">
                <Image
                  src="/images/thumb/thumb-uas-reconstruction-4.jpg"
                  alt="Thumb"
                  fill={true}
                  priority={true}
                  sizes="auto"
                  className="block w-full h-full absolute object-center object-cover top-0 left-0 z-0"
                />
              </div>
              <BodyText
                type="body2"
                className="text-black block mt-12 lg:mt-20"
              >
                Contour Lines
              </BodyText>
            </div>
            <div className="block">
              <div className="block relative aspect-[12/16] overflow-hidden">
                <Image
                  src="/images/thumb/thumb-uas-reconstruction-5.jpg"
                  alt="Thumb"
                  fill={true}
                  priority={true}
                  sizes="auto"
                  className="block w-full h-full absolute object-center object-cover top-0 left-0 z-0"
                />
              </div>
              <BodyText
                type="body2"
                className="text-black block mt-12 lg:mt-20"
              >
                3D Model
              </BodyText>
            </div>
            <div className="block">
              <div className="block relative aspect-[12/16] overflow-hidden">
                <Image
                  src="/images/thumb/thumb-uas-reconstruction-6.jpg"
                  alt="Thumb"
                  fill={true}
                  priority={true}
                  sizes="auto"
                  className="block w-full h-full absolute object-center object-cover top-0 left-0 z-0"
                />
              </div>
              <BodyText
                type="body2"
                className="text-black block mt-12 lg:mt-20"
              >
                Volume Measurement
              </BodyText>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechServiceUASDrone;
