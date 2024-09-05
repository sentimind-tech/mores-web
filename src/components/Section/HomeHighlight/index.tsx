import Image from "next/image";
import { BodyText, HeadingText } from "@/components/Text";
import { ButtonPrimary } from "@/components/Button";

const HomeHighlight = () => {
  return (
    <section className="block relative px-16 pt-[7.75rem] pb-[3.313rem]">
      <div className="w-full max-w-[1037px] mx-auto">
        <div className="bg-blue-pacific pb-6">
          <div className="bg-white-smoke flex items-center h-[345px] a">
            <div className="w-full flex items-center justify-start pl-[8%]">
              <div className="w-2/3 text-black">
                <BodyText type="body2" className="block mb-[0.125rem]">
                  MORES OUTLOOK 2023:
                </BodyText>
                <HeadingText type="h4" className="block mb-[0.688rem]">
                  DECISIVE MOMENT FOR COMPETITIVENESS AND RESILIENCE
                </HeadingText>
                <ButtonPrimary size="small">EXPLORE NOW</ButtonPrimary>
              </div>
            </div>
            <div className="w-[408px] h-full relative shrink-0">
              <Image
                src="https://picsum.photos/id/113/816/690"
                alt="Thumb highlight"
                fill={true}
                priority={true}
                sizes="auto"
                className="block w-full h-full absolute object-center object-cover top-0 left-0 z-0"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeHighlight;
