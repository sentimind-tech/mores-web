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
      title: "Real-time Indoor Positioning",
      filled: true,
    },
    {
      title: "Heatmaps",
      filled: true,
    },
    {
      title: "Geofencing",
      filled: true,
    },
    {
      title: "Trajectories",
      filled: false,
    },
    {
      title: "Visit Duration",
      filled: false,
    },
    {
      title: "Floor Plan",
      filled: false,
    },
    {
      title: "Routes",
      filled: false,
    },
  ];

  const pertaminaAssetFeature = [
    {
      title: "People Counting",
      filled: true,
    },
    {
      title: "Vehicle Counting",
      filled: true,
    },
    {
      title: "Heat Map",
      filled: false,
    },
    {
      title: "CCTV Streaming",
      filled: false,
    },
    {
      title: "Bar Charting",
      filled: false,
    },
    {
      title: "Line Charting",
      filled: false,
    },
    {
      title: "Statistics Number",
      filled: false,
    },
    {
      title: "Data Filtering",
      filled: false,
    },
  ];

  const pertaminaAssetFeature2 = [
    {
      title: "Asset Location",
      filled: true,
    },
    {
      title: "Routing",
      filled: true,
    },
    {
      title: "Location-based Reporting Feature",
      filled: false,
    },
    {
      title: "Photo Tagging",
      filled: false,
    },
    {
      title: "Management Dashboard",
      filled: false,
    },
    {
      title: "Manifestation",
      filled: false,
    },
    {
      title: "Performance Reporting",
      filled: false,
    },
  ];

  return (
    <>
      <div className="px-16 xl:px-0">
        <Collapsible title="DASHBOARD ONLINE MONITORING SLA" open={true}>
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
                INDOOR POSITIONING SYSTEM
              </HeadingText>
              <HeadingText
                type="h6"
                className="text-black block w-full uppercase mt-20"
              >
                Product :{" "}
                <span className="text-blue-pacific">
                  Building Intelligence Dashboard, Magnetic Tagging
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
                  DESCRIPTION
                </HeadingText>
                <BodyText type="body1" className="block mt-10">
                  The Indoor Positioning System (IPS) is the latest innovation
                  in positioning technology. IPS does not rely on location data
                  obtained from satellites, but rather utilizes the reflection
                  of waves emitted at points installed on each floor against
                  magnetic tags attached to individuals. This enables accurate
                  monitoring of a person’s location within a building.
                </BodyText>
              </div>
              <div className="">
                <HeadingText type="h5" className="text-blue-pacific uppercase">
                  Fitur
                </HeadingText>
                <div className="mt-10 columns-2 gap-32 md:gap-[50px] lg:gap-[100px]">
                  {indoorSystemFeature.map((item, index) => (
                    <div className="w-full py-4" key={index}>
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
                PERTAMINA ASSET MANAGEMENT
              </HeadingText>
              <HeadingText
                type="h6"
                className="text-black block w-full uppercase mt-20"
              >
                Product :{" "}
                <span className="text-blue-pacific">
                  Geospatial Dashboard, Mobile Application
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
                  DESCRIPTION
                </HeadingText>
                <BodyText type="body1" className="block mt-10">
                  PT Pertamina EP Asset 2 Field Limau aims for integrated asset
                  management with real-time monitoring of the physical and
                  functional conditions of the assets. Pertamina Asset
                  Management can perform asset manifestation and asset reporting
                  on-site, enabling quick actions to anticipate operational
                  losses.
                </BodyText>
              </div>
              <div className="">
                <HeadingText type="h5" className="text-blue-pacific uppercase">
                  Fitur
                </HeadingText>
                <div className="mt-10 columns-2 gap-32 md:gap-[50px] lg:gap-[100px]">
                  {pertaminaAssetFeature.map((item, index) => (
                    <div className="w-full py-4" key={index}>
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
                PERTAMINA ASSET MANAGEMENT
              </HeadingText>
              <HeadingText
                type="h6"
                className="text-black block w-full uppercase mt-20"
              >
                Product :{" "}
                <span className="text-blue-pacific">
                  Geospatial Dashboard, Mobile Application
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
                  DESCRIPTION
                </HeadingText>
                <BodyText type="body1" className="block mt-10">
                  PT Pertamina EP Asset 2 Field Limau aims for integrated asset
                  management with real-time monitoring of the physical and
                  functional conditions of the assets. Pertamina Asset
                  Management can perform asset manifestation and asset reporting
                  on-site, enabling quick actions to anticipate operational
                  losses.
                </BodyText>
              </div>
              <div className="">
                <HeadingText type="h5" className="text-blue-pacific uppercase">
                  Fitur
                </HeadingText>
                <div className="min-h-[165px] mt-10 columns-2 gap-32 md:gap-[50px] lg:gap-[100px]">
                  {pertaminaAssetFeature2.map((item, index) => (
                    <div className="w-full py-4" key={index}>
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
                PERTAMINA ASSET MANAGEMENT
              </HeadingText>
              <HeadingText
                type="h6"
                className="text-black block w-full uppercase mt-20"
              >
                Product :{" "}
                <span className="text-blue-pacific">
                  National Maritime security system Dashboard
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
                  DESCRIPTION
                </HeadingText>
                <BodyText type="body1" className="block mt-10">
                  The development of the National Maritime security system will
                  be developed by combining human intelligence and the use of
                  technology. In using the BAKAMLA’s technology, in the future
                  it will develop intelligent and integrated border surveillance
                  that utilizes big data as an instrument for data processing
                  before making decisions by human beings as users.
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
                  Tactical/in-field operations
                </BodyText>
                <ul className="list-disc pl-16 mt-12">
                  <li className="text-14 leading-[1.375rem]">
                    Connectivty for operation forces
                  </li>
                  <li className="text-14 leading-[1.375rem]">
                    LTE and/or Satellite, MW
                  </li>
                  <li className="text-14 leading-[1.375rem]">
                    Wireless routers & connectivity to specific equipmen
                  </li>
                </ul>
              </div>
              <div className="border-t border-gray-silver py-20">
                <BodyText type="body1" className="font-semibold">
                  Surveillance/Operational
                </BodyText>
                <ul className="list-disc pl-16 mt-12">
                  <li className="text-14 leading-[1.375rem]">
                    Last mile acces
                  </li>
                  <li className="text-14 leading-[1.375rem]">
                    IP and optical routing, MW
                  </li>
                  <li className="text-14 leading-[1.375rem]">
                    Sites / specific equipment interconnection
                  </li>
                </ul>
              </div>
              <div className="border-t border-gray-silver py-20">
                <BodyText type="body1" className="font-semibold">
                  Strategics/National Authority
                </BodyText>
                <ul className="list-disc pl-16 mt-12">
                  <li className="text-14 leading-[1.375rem]">
                    Infrastructure networks (IProuting,optical)
                  </li>
                  <li className="text-14 leading-[1.375rem]">
                    Backbones with MW links where optical deployment is not
                    feasible
                  </li>
                  <li className="text-14 leading-[1.375rem]">
                    Sites / specific equipment interconnection
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
