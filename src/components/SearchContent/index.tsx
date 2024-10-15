"use client";

import { HeadingText, BodyText } from "../Text";
import CardSearchItem from "../Cards/CardSearchItem";
import { Select } from "@/components/Select";
import { Option } from "@/components/Option";
import {
  DROPDOWN_FILTER_SEARCH_ALL,
  DROPDOWN_FILTER_SEARCH_INSIGHT,
  DROPDOWN_FILTER_SEARCH_SERVICE,
  DROPDOWN_FILTER_SEARCH_CAREER,
} from "@/store/constants";
import { ButtonPrimary } from "../Button";
import { SkeletonSearchResult } from "../Skeleton";
import { useSearchContext } from "@/context/SearchContext";

const SearchContent = () => {
  const {
    defaultValueInput,
    handleEnterSearch,
    handleDropdownChange,
    initialLoadPage,
    loading,
    dataItems,
    totalResults,
    handleLoadMore,
  } = useSearchContext();

  return (
    <section className="py-32 md:py-[5rem] px-16" id="search-container">
      <div className="w-full max-w-[1045px] mx-auto">
        <HeadingText className="upoercase text-black text-32 md:text-[3rem] leading-[2.7rem] md:leading-[3.75rem]">
          SEARCH RESULT
        </HeadingText>
        <div className="mt-20 md:mt-[2.5rem] lg:mt-[5rem]">
          <div className="flex items-center justify-between gap-24 md:gap-[42px] mb-[46px]">
            <div className="w-2/3">
              <div className="flex border-b-[1.5px] py-6 border-gray-silver">
                <div className="shrink-0">
                  <div className="w-[29px]">
                    <svg
                      width="29"
                      height="28"
                      viewBox="0 0 29 28"
                      fill="none"
                      className="w-full"
                    >
                      <path
                        d="M26.2812 23.4062L19.2533 16.6195C20.3859 15.1168 20.9951 13.3057 20.9933 11.4472C20.9933 6.58274 16.8942 2.625 11.856 2.625C6.81783 2.625 2.71875 6.58274 2.71875 11.4472C2.71875 16.3116 6.81783 20.2694 11.856 20.2694C13.7809 20.2712 15.6567 19.6829 17.2131 18.5894L24.2422 25.375L26.2812 23.4062ZM11.856 17.483C10.6194 17.4832 9.4106 17.1292 8.38238 16.466C7.35416 15.8027 6.55274 14.86 6.07947 13.7569C5.6062 12.6539 5.48234 11.4401 5.72356 10.2691C5.96478 9.09813 6.56023 8.0225 7.43462 7.17826C8.30901 6.33402 9.42306 5.75909 10.6359 5.5262C11.8487 5.2933 13.1058 5.41288 14.2482 5.86983C15.3907 6.32678 16.3671 7.10057 17.054 8.09333C17.741 9.0861 18.1076 10.2533 18.1074 11.4472C18.1055 13.0474 17.4462 14.5816 16.2743 15.7131C15.1023 16.8446 13.5134 17.4812 11.856 17.483Z"
                        fill="#00A2B6"
                      />
                    </svg>
                  </div>
                </div>
                <div className="flex-1 px-12 md:px-20">
                  <input
                    id="input-search"
                    type="text"
                    className="w-full outline-0 border-0 font-graphik text-18 leading-[1.25rem] capitalize"
                    placeholder="Search"
                    defaultValue={defaultValueInput}
                    onKeyDown={handleEnterSearch}
                  />
                </div>
              </div>
            </div>
            <div className="w-1/3">
              <Select onChange={(e) => handleDropdownChange(e.target.value)}>
                <Option value={DROPDOWN_FILTER_SEARCH_ALL}>All Result</Option>
                <Option value={DROPDOWN_FILTER_SEARCH_INSIGHT}>Insight</Option>
                <Option value={DROPDOWN_FILTER_SEARCH_SERVICE}>Services</Option>
                <Option value={DROPDOWN_FILTER_SEARCH_CAREER}>Careers</Option>
              </Select>
            </div>
          </div>

          {initialLoadPage ? (
            <SkeletonSearchResult />
          ) : (
            <>
              {loading ? (
                <SkeletonSearchResult />
              ) : (
                <>
                  {dataItems.length > 0 ? (
                    <>
                      {!loading && (
                        <BodyText className="font-inter font-semibold text-18 md:text-24 leading-[1.5rem] md:leading-[2rem] text-black">
                          Showing {dataItems.length} of {totalResults} results
                        </BodyText>
                      )}

                      <div className="mt-6 md:mt-[1.375rem]">
                        {dataItems.map((item: any, index: number) => (
                          <div
                            className="block border-b border-gray-cloud last:border-b-[0]"
                            key={index}
                          >
                            <CardSearchItem {...item} />
                          </div>
                        ))}
                      </div>

                      {loading ? (
                        <div className="flex items-center justify-center h-[200px]">
                          <div className="w-[48px] h-[48px]">
                            <img
                              src="/icon/ico-loading.svg"
                              alt=""
                              className="w-full h-full"
                            />
                          </div>
                        </div>
                      ) : (
                        <>
                          {dataItems.length < totalResults && (
                            <div className="flex justify-center items-center mt-[44px]">
                              <ButtonPrimary
                                className="uppercase"
                                onClick={handleLoadMore}
                              >
                                More
                              </ButtonPrimary>
                            </div>
                          )}
                        </>
                      )}
                    </>
                  ) : (
                    <div className="flex flex-col items-center justify-center h-[300px]">
                      <div className="w-[160px]">
                        <img
                          src="/icon/ico-empty-data.svg"
                          alt=""
                          className="w-full"
                        />
                      </div>
                      <span className="block mt-24">Data Not Found</span>
                    </div>
                  )}
                </>
              )}
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default SearchContent;
