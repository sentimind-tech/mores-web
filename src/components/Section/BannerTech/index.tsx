import { ReactNode } from "react";
import Image from "next/image";

type TBannerTechProps = {
  background: string;
  overlay?: boolean;
  children: ReactNode;
};

const BannerTech = (props: TBannerTechProps) => {
  const { children, background, overlay = true } = props;

  return (
    <section className="relative h-[400px] md:h-[520px] lg:h-[653px] px-16 bg-gray-100">
      {background && (
        <>
          <Image
            src={background}
            alt="Banner Image"
            fill={true}
            priority={true}
            sizes="auto"
            className="block w-full h-full absolute object-center object-cover top-0 left-0 z-0"
          />

          {overlay && (
            <div className="absolute w-full h-full top-0 left-0 bg-tech-banner-overlay z-[1]" />
          )}

          <div className="w-full max-w-[1130px] h-full mx-auto relative z-[2] flex justify-center items-start flex-col">
            {children}
          </div>
        </>
      )}
    </section>
  );
};

export default BannerTech;
