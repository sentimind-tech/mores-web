import { ButtonSecondary } from "@/components/Button";
import { HeadingText } from "@/components/Text";
import Link from "next/link";

type TSectionHelpProps = {
  title: string;
  button_text: string;
  link: string;
};

const SectionHelp = (props: TSectionHelpProps) => {
  const { title, button_text, link } = props;
  return (
    <section className="block relative bg-blue-pacific h-[250px] md:h-[302px] px-24">
      <div className="absolute w-full h-full top-0 left-0 bg-home-help z-[0]" />
      <div className="h-full w-full max-w-[1280px] mx-auto relative z-[1] flex flex-col items-center justify-center">
        {title && (
          <HeadingText className="uppercase text-[1.5rem] md:text-32 lg:text-[2.5rem] leading-[1.813rem] md:leading-[2.5rem] lg:leading-[3rem] text-white block mb-[1.875rem] text-center md:max-w-[500px]">
            {title}
          </HeadingText>
        )}
        {button_text && (
          <Link href={link}>
            <ButtonSecondary className="uppercase">
              {button_text}
            </ButtonSecondary>
          </Link>
        )}
      </div>
    </section>
  );
};

export default SectionHelp;
