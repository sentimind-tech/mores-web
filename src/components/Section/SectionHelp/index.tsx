import { ButtonOutline } from "@/components/Button";
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
          <HeadingText
            type="h3"
            className="uppercase leading-[2.4rem] text-white block mb-[1.875rem] text-center"
          >
            {title}
          </HeadingText>
        )}
        {button_text && (
          <Link href={link}>
            <ButtonOutline className="uppercase">{button_text}</ButtonOutline>
          </Link>
        )}
      </div>
    </section>
  );
};

export default SectionHelp;
