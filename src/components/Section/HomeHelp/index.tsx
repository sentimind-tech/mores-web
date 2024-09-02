import { ButtonOutline } from "@/components/Button";
import { HeadingText } from "@/components/Text";

const HomeHelp = () => {
  return (
    <section className="block relative bg-blue-pacific h-[302px]">
      <div className="absolute w-full h-full top-0 left-0 bg-home-help z-[0]" />
      <div className="h-full w-full max-w-[1280px] mx-auto relative z-[1] flex flex-col items-center justify-center">
        <HeadingText
          type="h3"
          className="uppercase leading-[2.4rem] text-white block mb-[1.875rem]"
        >
          Have questions or need assistance?
        </HeadingText>
        <ButtonOutline className="uppercase">Contact Us</ButtonOutline>
      </div>
    </section>
  );
};

export default HomeHelp;
