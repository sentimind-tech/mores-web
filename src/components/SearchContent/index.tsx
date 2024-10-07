import { HeadingText } from "../Text";
import CardSearchItem from "../Cards/CardSearchItem";

const dataItem = [
  {
    image: "https://picsum.photos/id/265/444/294",
    title: "To execute every project,Mores gains insights from local",
    category: "TRAVEL & TOURISM",
    desc: "The Travel & Tourism industry is a dynamic and expansive sector that encompasses a wide range of businesses and services dedicated to facilitating travel, exploration, and experiences across the globe.",
    link: "/",
  },
  {
    image: "https://picsum.photos/id/289/444/294",
    title: "To execute every project,Mores gains insights from local",
    category: "TRAVEL & TOURISM",
    desc: "The Travel & Tourism industry is a dynamic and expansive sector that encompasses a wide range of businesses and services dedicated to facilitating travel, exploration, and experiences across the globe.",
    link: "/",
  },
  {
    image: "https://picsum.photos/id/292/444/294",
    title: "To execute every project,Mores gains insights from local",
    category: "TRAVEL & TOURISM",
    desc: "The Travel & Tourism industry is a dynamic and expansive sector that encompasses a wide range of businesses and services dedicated to facilitating travel, exploration, and experiences across the globe.",
    link: "/",
  },
  {
    image: "https://picsum.photos/id/299/444/294",
    title: "To execute every project,Mores gains insights from local",
    category: "TRAVEL & TOURISM",
    desc: "The Travel & Tourism industry is a dynamic and expansive sector that encompasses a wide range of businesses and services dedicated to facilitating travel, exploration, and experiences across the globe.",
    link: "/",
  },
  {
    image: "https://picsum.photos/id/204/444/294",
    title: "To execute every project,Mores gains insights from local",
    category: "TRAVEL & TOURISM",
    desc: "The Travel & Tourism industry is a dynamic and expansive sector that encompasses a wide range of businesses and services dedicated to facilitating travel, exploration, and experiences across the globe.",
    link: "/",
  },
];

const SearchContent = () => {
  return (
    <section className="py-32 md:py-[5rem] px-16">
      <div className="w-full max-w-[1045px] mx-auto">
        <HeadingText className="upoercase text-black text-32 md:text-[3rem] leading-[2.7rem] md:leading-[3.75rem]">
          SEARCH RESULT
        </HeadingText>
        <div className="mt-20 md:mt-[2.5rem] lg:mt-[5rem]">
          <HeadingText
            type="h3"
            className="font-inter font-semibold text-18 md:text-24 leading-[1.5rem] md:leading-[2rem] text-black"
          >
            Showing 1 - 10 of 13 results
          </HeadingText>

          <div className="mt-6 md:mt-[1.375rem]">
            {dataItem.map((item, index) => (
              <div
                className="block border-b border-gray-cloud last:border-b-[0]"
                key={index}
              >
                <CardSearchItem {...item} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SearchContent;
