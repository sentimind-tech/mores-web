import Image from "next/image";
import { HeadingText, BodyText } from "@/components/Text";
import { useTranslations } from "next-intl";
import Collapsible from "@/components/Collapsible";

const TechServiceUASDroneTech = () => {
  const t = useTranslations("TechMores");
  return (
    <section className="py-[3.125rem] md:py-[6.25rem] px-16">
      <div className="w-full max-w-[1040px] mx-auto">
        <div className="text-center block relative">
          <div className="w-full h-[1px] bg-gray-cloud absolute top-[50%] left-0 z-[0]"></div>
          <HeadingText
            type="h4"
            className="bg-white text-black uppercase relative z-[1] inline-block px-16 md:px-[2.375rem]"
          >
            {t("service_data_uas_drone_tech_title")}
          </HeadingText>
        </div>

        <div className="py-32 md:py-[2.5rem]">
          <div className="flex flex-col lg:flex-row gap-32">
            <div className="w-full lg:w-1/3">
              <HeadingText type="h4" className="uppercase text-blue-pacific">
                1. OMNIBE
              </HeadingText>
              <BodyText
                type="body2"
                className="text-black block mt-18 lg:mt-32"
              >
                {t("service_data_uas_omnibe_desc")}
              </BodyText>
            </div>
            <div className="w-full lg:w-2/3">
              <div className="flex flex-wrap justify-center lg:justify-start gap-12">
                <div className="">
                  <img
                    src="/images/thumb/thumb-drone-1.png"
                    alt=""
                    className="max-w-[310px]"
                  />
                </div>
                <div className="">
                  <img
                    src="/images/thumb/thumb-drone-2.png"
                    alt=""
                    className="max-w-[310px]"
                  />
                </div>
                <div className="">
                  <img
                    src="/images/thumb/thumb-drone-3.png"
                    alt=""
                    className="max-w-[310px]"
                  />
                </div>
              </div>
            </div>
          </div>
          <Collapsible
            title={
              <HeadingText type="h4" className="uppercase text-blue-pacific">
                {t("service_data_uas_drone_spec_title")}
              </HeadingText>
            }
            open={true}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-[1.75rem] border-b border-gray-cloud">
              <div className="block">
                <BodyText type="body1" className="font-semibold text-black">
                  Performance
                </BodyText>
                <div className="mt-8 pl-[1px]">
                  <BodyText
                    type="body2"
                    className="text-black relative leading-[24px] pl-16 before:content-['-'] before:absolute before:top-0 before:left-0"
                  >
                    Battery weight: 7 kg
                  </BodyText>
                  <BodyText
                    type="body2"
                    className="text-black relative leading-[24px] pl-16 before:content-['-'] before:absolute before:top-0 before:left-0"
                  >
                    MTOW: 12 kg
                  </BodyText>
                  <BodyText
                    type="body2"
                    className="text-black relative leading-[24px] pl-16 before:content-['-'] before:absolute before:top-0 before:left-0"
                  >
                    Payload weight: 1 kg
                  </BodyText>
                  <BodyText
                    type="body2"
                    className="text-black relative leading-[24px] pl-16 before:content-['-'] before:absolute before:top-0 before:left-0"
                  >
                    Flight time: 60-90 min.
                  </BodyText>
                  <BodyText
                    type="body2"
                    className="text-black relative leading-[24px] pl-16 before:content-['-'] before:absolute before:top-0 before:left-0"
                  >
                    Radius range: 25-50 km
                  </BodyText>
                  <BodyText
                    type="body2"
                    className="text-black relative leading-[24px] pl-16 before:content-['-'] before:absolute before:top-0 before:left-0"
                  >
                    Coverage range: 50-100 km
                  </BodyText>
                  <BodyText
                    type="body2"
                    className="text-black relative leading-[24px] pl-16 before:content-['-'] before:absolute before:top-0 before:left-0"
                  >
                    Standard video range: 2-20 km
                  </BodyText>
                  <BodyText
                    type="body2"
                    className="text-black relative leading-[24px] pl-16 before:content-['-'] before:absolute before:top-0 before:left-0"
                  >
                    Max. video range: 100 km
                  </BodyText>
                  <BodyText
                    type="body2"
                    className="text-black relative leading-[24px] pl-16 before:content-['-'] before:absolute before:top-0 before:left-0"
                  >
                    Max. speed: 28 m/s
                  </BodyText>
                  <BodyText
                    type="body2"
                    className="text-black relative leading-[24px] pl-16 before:content-['-'] before:absolute before:top-0 before:left-0"
                  >
                    Stall speed: 14-15 m/s
                  </BodyText>
                  <BodyText
                    type="body2"
                    className="text-black relative leading-[24px] pl-16 before:content-['-'] before:absolute before:top-0 before:left-0"
                  >
                    Cruise speed: 19-20 m/s
                  </BodyText>
                </div>
              </div>
              <div className="block">
                <BodyText type="body1" className="font-semibold text-black">
                  Communication
                </BodyText>
                <div className="mt-8 pl-[1px]">
                  <BodyText
                    type="body2"
                    className="text-black relative leading-[24px] pl-16 before:content-['-'] before:absolute before:top-0 before:left-0"
                  >
                    Telemetry freq.: 900 MHz
                  </BodyText>
                  <BodyText
                    type="body2"
                    className="text-black relative leading-[24px] pl-16 before:content-['-'] before:absolute before:top-0 before:left-0"
                  >
                    RC freq.: 2.4 GHz
                  </BodyText>
                  <BodyText
                    type="body2"
                    className="text-black relative leading-[24px] pl-16 before:content-['-'] before:absolute before:top-0 before:left-0"
                  >
                    Video trans. Freq.: 1.2 GHz / 5.8 GHz
                  </BodyText>
                </div>
              </div>
              <div className="block">
                <BodyText type="body1" className="font-semibold text-black">
                  System
                </BodyText>
                <div className="mt-8 pl-[1px]">
                  <BodyText
                    type="body2"
                    className="text-black relative leading-[24px] pl-16 before:content-['-'] before:absolute before:top-0 before:left-0"
                  >
                    Brushless motor
                  </BodyText>
                  <BodyText
                    type="body2"
                    className="text-black relative leading-[24px] pl-16 before:content-['-'] before:absolute before:top-0 before:left-0"
                  >
                    Battery 6S 4500 mAh (99Wh) x 4-8
                  </BodyText>
                  <BodyText
                    type="body2"
                    className="text-black relative leading-[24px] pl-16 before:content-['-'] before:absolute before:top-0 before:left-0"
                  >
                    Autopilot IMU + GPS
                  </BodyText>
                  <BodyText
                    type="body2"
                    className="text-black relative leading-[24px] pl-16 before:content-['-'] before:absolute before:top-0 before:left-0"
                  >
                    Airspeed sensor
                  </BodyText>
                </div>
              </div>
              <div className="block">
                <BodyText type="body1" className="font-semibold text-black">
                  Operation
                </BodyText>
                <div className="mt-8 pl-[1px]">
                  <BodyText
                    type="body2"
                    className="text-black relative leading-[24px] pl-16 before:content-['-'] before:absolute before:top-0 before:left-0"
                  >
                    Autonomous take-off / vertical
                  </BodyText>
                  <BodyText
                    type="body2"
                    className="text-black relative leading-[24px] pl-16 before:content-['-'] before:absolute before:top-0 before:left-0"
                  >
                    Autonomous landing / vertical
                  </BodyText>
                </div>
              </div>
              <div className="block">
                <BodyText type="body1" className="font-semibold text-black">
                  Frame
                </BodyText>
                <div className="mt-8 pl-[1px]">
                  <BodyText
                    type="body2"
                    className="text-black relative leading-[24px] pl-16 before:content-['-'] before:absolute before:top-0 before:left-0"
                  >
                    Material: Composite
                  </BodyText>
                  <BodyText
                    type="body2"
                    className="text-black relative leading-[24px] pl-16 before:content-['-'] before:absolute before:top-0 before:left-0"
                  >
                    Wingspan: 2,900 mm
                  </BodyText>
                  <BodyText
                    type="body2"
                    className="text-black relative leading-[24px] pl-16 before:content-['-'] before:absolute before:top-0 before:left-0"
                  >
                    Planform: 2,000 mm
                  </BodyText>
                  <BodyText
                    type="body2"
                    className="text-black relative leading-[24px] pl-16 before:content-['-'] before:absolute before:top-0 before:left-0"
                  >
                    Center module: 1,100 mm
                  </BodyText>
                </div>
              </div>
            </div>
          </Collapsible>
        </div>

        <div className="py-32 md:py-[2.5rem]">
          <div className="flex flex-col lg:flex-row gap-32">
            <div className="w-full lg:w-1/3">
              <HeadingText type="h4" className="uppercase text-blue-pacific">
                2. MINIBE
              </HeadingText>
              <BodyText
                type="body2"
                className="text-black block mt-18 lg:mt-32"
              >
                {t("service_data_uas_minibe_desc")}
              </BodyText>
            </div>
            <div className="w-full lg:w-2/3">
              <div className="flex flex-wrap justify-center lg:justify-start gap-12">
                <div className="">
                  <img
                    src="/images/thumb/thumb-drone-4.png"
                    alt=""
                    className="max-w-[310px]"
                  />
                </div>
                <div className="">
                  <img
                    src="/images/thumb/thumb-drone-5.png"
                    alt=""
                    className="max-w-[310px]"
                  />
                </div>
                <div className="">
                  <img
                    src="/images/thumb/thumb-drone-6.png"
                    alt=""
                    className="max-w-[310px]"
                  />
                </div>
              </div>
            </div>
          </div>
          <Collapsible
            title={
              <HeadingText type="h4" className="uppercase text-blue-pacific">
                {t("service_data_uas_drone_spec_title")}
              </HeadingText>
            }
            open={true}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-[1.75rem] border-b border-gray-cloud">
              <div className="block">
                <BodyText type="body1" className="font-semibold text-black">
                  Performance
                </BodyText>
                <div className="mt-8 pl-[1px]">
                  <BodyText
                    type="body2"
                    className="text-black relative leading-[24px] pl-16 before:content-['-'] before:absolute before:top-0 before:left-0"
                  >
                    MTO weight: 2.1 kg
                  </BodyText>
                  <BodyText
                    type="body2"
                    className="text-black relative leading-[24px] pl-16 before:content-['-'] before:absolute before:top-0 before:left-0"
                  >
                    FBodyTextght time: 50 min.
                  </BodyText>
                  <BodyText
                    type="body2"
                    className="text-black relative leading-[24px] pl-16 before:content-['-'] before:absolute before:top-0 before:left-0"
                  >
                    Radius range: 25-50 km
                  </BodyText>
                  <BodyText
                    type="body2"
                    className="text-black relative leading-[24px] pl-16 before:content-['-'] before:absolute before:top-0 before:left-0"
                  >
                    Max. speed: 22 m/s
                  </BodyText>
                  <BodyText
                    type="body2"
                    className="text-black relative leading-[24px] pl-16 before:content-['-'] before:absolute before:top-0 before:left-0"
                  >
                    Cruise speed: 19-20 m/s
                  </BodyText>
                </div>
              </div>
              <div className="block">
                <BodyText type="body1" className="font-semibold text-black">
                  Communication
                </BodyText>
                <div className="mt-8 pl-[1px]">
                  <BodyText
                    type="body2"
                    className="text-black relative leading-[24px] pl-16 before:content-['-'] before:absolute before:top-0 before:left-0"
                  >
                    Command & Control RF 900 MHz / 2.4 GHz / 5.8 GHz
                  </BodyText>
                  <BodyText
                    type="body2"
                    className="text-black relative leading-[24px] pl-16 before:content-['-'] before:absolute before:top-0 before:left-0"
                  >
                    Command & Control range up to 15 km
                  </BodyText>
                  <BodyText
                    type="body2"
                    className="text-black relative leading-[24px] pl-16 before:content-['-'] before:absolute before:top-0 before:left-0"
                  >
                    Autonomous / waypoints array navigation
                  </BodyText>
                </div>
              </div>
              <div className="block">
                <BodyText type="body1" className="font-semibold text-black">
                  System
                </BodyText>
                <div className="mt-8 pl-[1px]">
                  <BodyText
                    type="body2"
                    className="text-black relative leading-[24px] pl-16 before:content-['-'] before:absolute before:top-0 before:left-0"
                  >
                    Brushless motor
                  </BodyText>
                  <BodyText
                    type="body2"
                    className="text-black relative leading-[24px] pl-16 before:content-['-'] before:absolute before:top-0 before:left-0"
                  >
                    Onboard power Li-Po battery
                  </BodyText>
                  <BodyText
                    type="body2"
                    className="text-black relative leading-[24px] pl-16 before:content-['-'] before:absolute before:top-0 before:left-0"
                  >
                    Autopilot IMU + GPS
                  </BodyText>
                  <BodyText
                    type="body2"
                    className="text-black relative leading-[24px] pl-16 before:content-['-'] before:absolute before:top-0 before:left-0"
                  >
                    Airspeed sensor
                  </BodyText>
                </div>
              </div>
              <div className="block">
                <BodyText type="body1" className="font-semibold text-black">
                  Operation
                </BodyText>
                <div className="mt-8 pl-[1px]">
                  <BodyText
                    type="body2"
                    className="text-black relative leading-[24px] pl-16 before:content-['-'] before:absolute before:top-0 before:left-0"
                  >
                    Autonomous take-off / hand launch
                  </BodyText>
                  <BodyText
                    type="body2"
                    className="text-black relative leading-[24px] pl-16 before:content-['-'] before:absolute before:top-0 before:left-0"
                  >
                    Autonomous landing / belly landing
                  </BodyText>
                  <BodyText
                    type="body2"
                    className="text-black relative leading-[24px] pl-16 before:content-['-'] before:absolute before:top-0 before:left-0"
                  >
                    Shake to activate (one-man operation)
                  </BodyText>
                  <BodyText
                    type="body2"
                    className="text-black relative leading-[24px] pl-16 before:content-['-'] before:absolute before:top-0 before:left-0"
                  >
                    User pre-programmed emergency failsafe
                  </BodyText>
                </div>
              </div>
              <div className="block">
                <BodyText type="body1" className="font-semibold text-black">
                  Airframe
                </BodyText>
                <div className="mt-8 pl-[1px]">
                  <BodyText
                    type="body2"
                    className="text-black relative leading-[24px] pl-16 before:content-['-'] before:absolute before:top-0 before:left-0"
                  >
                    Material: Composite
                  </BodyText>
                  <BodyText
                    type="body2"
                    className="text-black relative leading-[24px] pl-16 before:content-['-'] before:absolute before:top-0 before:left-0"
                  >
                    Wingspan: 1,250 mm
                  </BodyText>
                  <BodyText
                    type="body2"
                    className="text-black relative leading-[24px] pl-16 before:content-['-'] before:absolute before:top-0 before:left-0"
                  >
                    Platform: 760 mm
                  </BodyText>
                  <BodyText
                    type="body2"
                    className="text-black relative leading-[24px] pl-16 before:content-['-'] before:absolute before:top-0 before:left-0"
                  >
                    Center module: 420 mm
                  </BodyText>
                </div>
              </div>
              <div className="block">
                <BodyText type="body1" className="font-semibold text-black">
                  Payload / Sensor
                </BodyText>
                <div className="mt-8 pl-[1px]">
                  <BodyText
                    type="body2"
                    className="text-black relative leading-[24px] pl-16 before:content-['-'] before:absolute before:top-0 before:left-0"
                  >
                    RGB camera
                  </BodyText>
                  <BodyText
                    type="body2"
                    className="text-black relative leading-[24px] pl-16 before:content-['-'] before:absolute before:top-0 before:left-0"
                  >
                    Thermal camera
                  </BodyText>
                </div>
              </div>
            </div>
          </Collapsible>
        </div>

        <div className="py-32 md:py-[2.5rem]">
          <div className="flex flex-col lg:flex-row gap-32">
            <div className="w-full lg:w-1/3">
              <HeadingText type="h4" className="uppercase text-blue-pacific">
                3. MULTI ROTOR
              </HeadingText>
              <BodyText
                type="body2"
                className="text-black block mt-18 lg:mt-32"
              >
                {t("service_data_uas_multirotor_desc")}
              </BodyText>
            </div>
            <div className="w-full lg:w-2/3">
              <div className="flex flex-wrap justify-center lg:justify-start gap-12">
                <div className="">
                  <img
                    src="/images/thumb/thumb-drone-7.png"
                    alt=""
                    className="max-w-[310px]"
                  />
                </div>
                <div className="">
                  <img
                    src="/images/thumb/thumb-drone-8.png"
                    alt=""
                    className="max-w-[310px]"
                  />
                </div>
                <div className="">
                  <img
                    src="/images/thumb/thumb-drone-9.png"
                    alt=""
                    className="max-w-[310px]"
                  />
                </div>
                <div className="">
                  <img
                    src="/images/thumb/thumb-drone-10.png"
                    alt=""
                    className="max-w-[310px]"
                  />
                </div>
              </div>
            </div>
          </div>
          <Collapsible
            title={
              <HeadingText type="h4" className="uppercase text-blue-pacific">
                {t("service_data_uas_drone_spec_title")}
              </HeadingText>
            }
            open={true}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-[1.75rem] border-b border-gray-cloud">
              <div className="block">
                <BodyText type="body1" className="font-semibold text-black">
                  Performance
                </BodyText>
                <div className="mt-8 pl-[1px]">
                  <BodyText
                    type="body2"
                    className="text-black relative leading-[24px] pl-16 before:content-['-'] before:absolute before:top-0 before:left-0"
                  >
                    MTO weight: 2.1 kg
                  </BodyText>
                  <BodyText
                    type="body2"
                    className="text-black relative leading-[24px] pl-16 before:content-['-'] before:absolute before:top-0 before:left-0"
                  >
                    Flight time: 50 min.
                  </BodyText>
                  <BodyText
                    type="body2"
                    className="text-black relative leading-[24px] pl-16 before:content-['-'] before:absolute before:top-0 before:left-0"
                  >
                    Radius range: 25-50 km
                  </BodyText>
                  <BodyText
                    type="body2"
                    className="text-black relative leading-[24px] pl-16 before:content-['-'] before:absolute before:top-0 before:left-0"
                  >
                    Max. speed: 22 m/s
                  </BodyText>
                  <BodyText
                    type="body2"
                    className="text-black relative leading-[24px] pl-16 before:content-['-'] before:absolute before:top-0 before:left-0"
                  >
                    Cruise speed: 19-20 m/s
                  </BodyText>
                </div>
              </div>
            </div>
          </Collapsible>
        </div>

        <div className="py-32 md:py-[2.5rem]">
          <div className="flex flex-col lg:flex-row gap-32">
            <div className="w-full ">
              <HeadingText type="h4" className="uppercase text-blue-pacific">
                4. CUSTOMIZED DRONE
              </HeadingText>
              <BodyText
                type="body2"
                className="text-black block mt-18 lg:mt-32"
              >
                {t("service_data_uas_costumedrone_desc")}
              </BodyText>
            </div>
          </div>
        </div>

        <div className="py-32 md:py-[2.5rem]">
          <div className="flex flex-col lg:flex-row gap-32">
            <div className="w-full ">
              <HeadingText type="h4" className="uppercase text-blue-pacific">
                5. OTHER UAS SERVICE
              </HeadingText>
              <BodyText
                type="body2"
                className="text-black block mt-18 lg:mt-32"
              >
                {t("service_data_uas_other_desc")}
              </BodyText>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechServiceUASDroneTech;
