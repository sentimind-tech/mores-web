import { HeadingText } from "@/components/Text";
import { useTranslations } from "next-intl";
import Image from "next/image";

const TechServiceDataPackageList = () => {
  const t = useTranslations("TechMores");

  const dataEcosystem = [
    {
      image: "/images/logo/logo-ecosystem-hadoop.png",
    },
    {
      image: "/images/logo/logo-ecosystem-apachepig.png",
    },
    {
      image: "/images/logo/logo-ecosystem-mahout.png",
    },
    {
      image: "/images/logo/logo-ecosystem-spark.png",
    },
    {
      image: "/images/logo/logo-ecosystem-hive.png",
    },
  ];

  const dataDB = [
    {
      image: "/images/logo/logo-database-pivotal.png",
    },
    {
      image: "/images/logo/logo-database-couchdb.png",
    },
    {
      image: "/images/logo/logo-database-cassandra.png",
    },
    {
      image: "/images/logo/logo-database-apachehbase.png",
    },
    {
      image: "/images/logo/logo-database-mongodb.png",
    },
  ];

  return (
    <>
      <div className="mt-[3.5rem] md:mt-[4.375rem] px-16">
        <div className="w-full max-w-[1045px] mx-auto">
          <div className="text-center block relative">
            <div className="w-full h-[1px] bg-gray-cloud absolute top-[50%] left-0 z-[0]"></div>
            <HeadingText
              type="h4"
              className="bg-white text-black uppercase relative z-[1] inline-block px-16 md:px-[2.375rem]"
            >
              {t("service_data_ecosystem_title")}
            </HeadingText>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-16">
            {dataEcosystem.map((item, index) => (
              <div className="" key={index}>
                <div className="relative aspect-[16/12]">
                  <Image
                    src={item.image}
                    alt="Thumb"
                    fill={true}
                    priority={true}
                    sizes="auto"
                    className="block w-full h-full absolute object-center object-cover top-0 left-0 z-0"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-[3.5rem] md:mt-[4.375rem] px-16">
        <div className="w-full max-w-[1045px] mx-auto">
          <div className="text-center block relative mb-12">
            <div className="w-full h-[1px] bg-gray-cloud absolute top-[50%] left-0 z-[0]"></div>
            <HeadingText
              type="h4"
              className="bg-white text-black uppercase relative z-[1] inline-block px-16 md:px-[2.375rem]"
            >
              {t("service_data_db_title")}
            </HeadingText>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-16">
            {dataDB.map((item, index) => (
              <div className="" key={index}>
                <div className="relative aspect-[16/10]">
                  <Image
                    src={item.image}
                    alt="Thumb"
                    fill={true}
                    priority={true}
                    sizes="auto"
                    className="block w-full h-full absolute object-center object-cover top-0 left-0 z-0"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default TechServiceDataPackageList;
