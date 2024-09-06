"use client";

import { HeadingText, BodyText } from "@/components/Text";
import { ButtonPrimary, ButtonOutline } from "@/components/Button";
import Image from "next/image";
import Link from "next/link";
import { TInsightPagination } from "@/types/insight";
import { customConfig } from "../../../../config";

type THomeInsightProps = {
  list: TInsightPagination | null;
};

const imageInsightPath = (id: string, name: string) => {
  return `${customConfig.POCKETBASE_FILE_URL}/insights/${id}/${name}`;
};

const HomeInsight = (props: THomeInsightProps) => {
  const { list } = props;

  let data1 = list?.items[0];
  let data2 = list?.items[1];
  let data3 = list?.items[2];

  return (
    <>
      {list !== null && (
        <section className="bg-white-smoke md:bg-white block md:pt-[3.125rem] md:pb-[5rem] lg:pb-[8.75rem] text-black w-full overflow-hidden">
          <div className="w-full max-w-[1037px] mx-auto px-[20px]">
            <div className="flex justify-center md:justify-between items-center py-12 border-b border-gray-cloud text-black">
              <HeadingText
                type="h3"
                className="uppercase text-24 md:text-28 leading-[1.75rem] md:leading-[2.5rem]"
              >
                EXPLORE OUR Insight
              </HeadingText>

              <Link href="" className="hidden md:block">
                <ButtonPrimary size="small" className="uppercase">
                  MORE ARTICLE
                </ButtonPrimary>
              </Link>
            </div>
          </div>
          <div className="pt-[1.5rem] lg:pt-[1.875rem]">
            <div className="flex flex-col md:flex-row w-full md:aspect-[16/6.3] md:min-h-[400px] lg:min-h-[500px]">
              <div className="w-full md:w-1/3 h-[340px] md:h-full">
                <div className="w-full h-full relative">
                  {data1?.button_image && (
                    <Image
                      src={imageInsightPath(data1.id, data1.button_image)}
                      alt="Image thumb"
                      fill={true}
                      priority={true}
                      sizes="auto"
                      className="block w-full h-full absolute object-center object-cover top-0 left-0 z-0"
                    />
                  )}

                  <div className="absolute w-full h-full top-0 left-0 z-[1] bg-home-insight-thumb" />

                  <div className="block absolute bottom-0 left-0 p-16 xl:p-32 z-[2] text-white">
                    <BodyText
                      type="body3"
                      className="block uppercase mb-8 text-[12px] leading-[0.813rem] font-graphik font-semibold"
                    >
                      JOURNAL
                    </BodyText>
                    {data1?.title && (
                      <HeadingText
                        type="h4"
                        className="text-24 md:text-16 lg:text-20 xl:text-24 leading-[1.75rem] md:leading-[1.3rem] lg:leading-[1.6rem] xl:leading-[1.75rem] uppercase"
                      >
                        {data1.title}
                      </HeadingText>
                    )}

                    <Link
                      href=""
                      className="mt-32 inline-block transition-all lg:hover:text-blue-pacific"
                    >
                      <div className="flex items-center gap-[4px]">
                        <span className="block uppercase text-[12px] leading-[0.813rem] font-graphik font-semibold">
                          READ MORE
                        </span>

                        <svg
                          width="13"
                          height="10"
                          viewBox="0 0 13 10"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M12.9385 4.84543L8.67396 9.2353L7.98035 8.52248L11.0634 5.34955L-7.93689e-05 5.34955L-7.93248e-05 4.34131L11.0634 4.34132L7.98035 1.1694L8.67396 0.455566L12.9385 4.84543Z"
                            fill="#00A2B6"
                          />
                        </svg>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-2/3 md:h-[50%]">
                <div className="w-full h-full relative flex flex-col md:flex-row">
                  <div className="w-full md:w-2/3 relative h-[220px] md:h-full">
                    {data2?.button_image && (
                      <Image
                        src={imageInsightPath(data2.id, data2.button_image)}
                        alt="Image thumb"
                        fill={true}
                        priority={true}
                        sizes="auto"
                        className="block w-full h-full absolute object-center object-cover top-0 left-0 z-0"
                      />
                    )}
                    <div className="absolute w-full h-full top-0 left-0 z-[1] bg-home-insight-thumb" />
                  </div>
                  <div className="w-full md:w-1/3 h-full">
                    <div className="w-full h-full flex flex-col justify-between relative p-[2.125rem] md:p-16 xl:p-32 z-[2] text-white bg-blue-pacific">
                      <div className="absolute w-full h-full top-0 left-0 z-[0] bg-home-insight-thumb-2" />

                      <div className="block relative z-[1]">
                        <BodyText
                          type="body3"
                          className="block uppercase mb-8 text-[12px] leading-[0.813rem] font-graphik font-semibold"
                        >
                          JOURNAL
                        </BodyText>
                        {data2?.title && (
                          <HeadingText
                            type="h4"
                            className="text-24 md:text-16 lg:text-20 xl:text-24 leading-[1.75rem] md:leading-[1.3rem] lg:leading-[1.6rem] xl:leading-[1.75rem] uppercase"
                          >
                            {data2.title}
                          </HeadingText>
                        )}
                      </div>

                      <Link
                        href=""
                        className="mt-32 inline-block relative z-[1] transition-all lg:hover:text-blue-pacific"
                      >
                        <div className="flex items-center gap-[4px]">
                          <span className="block uppercase text-[12px] leading-[0.813rem] font-graphik font-semibold">
                            READ MORE
                          </span>

                          <svg
                            width="13"
                            height="10"
                            viewBox="0 0 13 10"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M12.9385 4.84543L8.67396 9.2353L7.98035 8.52248L11.0634 5.34955L-7.93689e-05 5.34955L-7.93248e-05 4.34131L11.0634 4.34132L7.98035 1.1694L8.67396 0.455566L12.9385 4.84543Z"
                              fill="#00A2B6"
                            />
                          </svg>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="w-full h-full relative flex flex-col md:flex-row">
                  <div className="w-full md:w-1/3 relative h-[220px] md:h-full">
                    {data3?.button_image && (
                      <Image
                        src={imageInsightPath(data3.id, data3.button_image)}
                        alt="Image thumb"
                        fill={true}
                        priority={true}
                        sizes="auto"
                        className="block w-full h-full absolute object-center object-cover top-0 left-0 z-0"
                      />
                    )}
                    <div className="absolute w-full h-full top-0 left-0 z-[1] bg-home-insight-thumb" />
                  </div>
                  <div className="w-full md:w-2/3 h-full">
                    <div className="w-full h-full flex flex-col justify-between relative p-[2.125rem] md:p-16 xl:p-32 z-[2] text-black bg-blue-pacific">
                      <div className="absolute w-full h-full top-0 left-0 z-[0] bg-white" />

                      <div className="block relative z-[1] md:max-w-[50%]">
                        <BodyText
                          type="body3"
                          className="block uppercase mb-8 text-[12px] leading-[0.813rem] font-graphik font-semibold"
                        >
                          JOURNAL
                        </BodyText>
                        {data3?.title && (
                          <HeadingText
                            type="h4"
                            className="text-24 md:text-16 lg:text-20 xl:text-24 leading-[1.75rem] md:leading-[1.3rem] lg:leading-[1.6rem] xl:leading-[1.75rem] uppercase"
                          >
                            {data3.title}
                          </HeadingText>
                        )}
                      </div>

                      <Link
                        href=""
                        className="mt-32 inline-block relative z-[1] transition-all lg:hover:text-blue-pacific"
                      >
                        <div className="flex items-center gap-[4px]">
                          <span className="block uppercase text-[12px] leading-[0.813rem] font-graphik font-semibold">
                            READ MORE
                          </span>

                          <svg
                            width="13"
                            height="10"
                            viewBox="0 0 13 10"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M12.9385 4.84543L8.67396 9.2353L7.98035 8.52248L11.0634 5.34955L-7.93689e-05 5.34955L-7.93248e-05 4.34131L11.0634 4.34132L7.98035 1.1694L8.67396 0.455566L12.9385 4.84543Z"
                              fill="#00A2B6"
                            />
                          </svg>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center py-[2.375rem] bg-white-smoke md:hidden">
            <Link href="">
              <ButtonOutline
                size="small"
                className="uppercase !border-blue-pacific !text-blue-pacific"
              >
                <div className="flex items-center gap-10">
                  <span>MORE ARTICLE</span>

                  <svg width="20" height="14" viewBox="0 0 20 14" fill="none">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M19.8599 6.54098L13.3141 13.082L12.2495 12.0198L16.9817 7.29213L5.49848e-05 7.29213L5.50524e-05 5.78984L16.9817 5.78984L12.2495 1.06362L13.3141 -2.77752e-07L19.8599 6.54098Z"
                      fill="#00A2B6"
                    />
                  </svg>
                </div>
              </ButtonOutline>
            </Link>
          </div>
        </section>
      )}
    </>
  );
};

export default HomeInsight;
