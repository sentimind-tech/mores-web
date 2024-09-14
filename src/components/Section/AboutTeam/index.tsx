"use client";

import { useState } from "react";
import { HeadingText, BodyText } from "@/components/Text";
import { useTranslations, useLocale } from "next-intl";
import Image from "next/image";
import Modal from "@/components/Modal";
import Link from "next/link";
import { TService } from "@/types/service";
import { TMenuServicesProps } from "@/types/Menu";

const AboutTeam = () => {
  const t = useTranslations("About");
  const [openModal, setOpenModal] = useState(false);
  const localActive = useLocale();

  const handleOpenModal = () => {
    setOpenModal(!openModal);
  };

  //   const transformData = (data: TService[]): TMenuServicesProps[] => {
  //     const groupedData: TMenuServicesProps[] = [];

  //     if (data == undefined || data == null) return [];

  //     data
  //       .filter((service) => service.parent_service_id === "")
  //       .map((service) => {
  //         const transform = {
  //           name: service.name,
  //           name_link: `/${localActive}/services/${service.id}`,
  //           submenu: data
  //             .filter((item) => item.parent_service_id === service.id)
  //             .map((item) => ({
  //               title: item.name,
  //               link: `/${localActive}/services/${item.id}/${item.parent_service_id}`,
  //             })),
  //         };

  //         groupedData.push(transform);
  //       });

  //     return groupedData;
  //   };

  //   const transformedServiceData = transformData(services);

  return (
    <>
      <section className="px-16 pb-[3.75rem] md:pb-[4.688rem] lg:pb-[6.25rem]">
        <div className="w-full max-w-[1040px] mx-auto">
          <div className="text-center block relative mb-16 md:mb-[3.125rem]">
            <div className="w-full h-[1px] bg-gray-cloud absolute top-[50%] left-0 z-[0]"></div>
            <HeadingText
              type="h4"
              className="bg-white text-black uppercase relative z-[1] inline-block px-[2.375rem]"
            >
              {t("team_title")}
            </HeadingText>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 md:gap-[2.5rem] lg:gap-[2.5rem]">
            {[...Array(5)].map((_item, index) => (
              <div
                className="block relative group pr-[35px] cursor-pointer"
                key={index}
                onClick={handleOpenModal}
              >
                <div className="flex items-center py-20 md:py-[0.625rem] border-b-[1.5px] border-gray-cloud transition-all duration-300 bg-white lg:group-hover:bg-gray-light">
                  <div className="w-[86px] aspect-square relative shrink-0">
                    <Image
                      src="/images/thumb/team-1.png"
                      alt="Team 1"
                      fill={true}
                      priority={true}
                      sizes="auto"
                      className="block w-full h-full absolute object-center object-cover top-0 left-0 z-0"
                    />
                  </div>

                  <div className="px-[0.625rem]">
                    <BodyText
                      type="body2"
                      className="font-semibold text-black block mb-[0.313rem]"
                    >
                      M. Ilham Fauzi
                    </BodyText>
                    <BodyText type="body3" className="text-gray-dove block">
                      Director & Partner
                    </BodyText>
                  </div>
                </div>

                <div className="absolute bottom-[-6.5px] right-0">
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.16787 0.434814V6.9944H0.641602V8.30631H7.16787V14.8659H8.47313V8.30631H14.9994V6.9944H8.47313V0.434814H7.16787Z"
                      className="fill-blue-pacific"
                    />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Modal isOpen={openModal} className="z-[300]" noClickBg>
        <div className="w-full h-screen md:h-auto overflow-auto max-w-[901px] mx-auto relative bg-white p-16 md:py-[3.125rem] md:px-[2.5rem] modal-confirm-content">
          <div
            className="absolute right-[1.25rem] top-[1.25rem] cursor-pointer group"
            onClick={handleOpenModal}
          >
            <svg
              width="17"
              height="16"
              viewBox="0 0 17 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.7829 0.375175L8.35465 6.80342L1.97947 0.428243L0.693823 1.71389L7.069 8.08907L0.640755 14.5173L1.91579 15.7923L8.34403 9.3641L14.7192 15.7393L16.0049 14.4536L9.62968 8.07845L16.0579 1.65021L14.7829 0.375175Z"
                className="fill-blue-pacific"
              />
            </svg>
          </div>
          <div className="flex flex-col md:flex-row gap-32 md:gap-[100px] min-h-[400px]">
            <div className="w-full md:w-1/2">
              <div className="flex items-center">
                <div className="w-[86px] aspect-square relative shrink-0">
                  <Image
                    src="/images/thumb/team-1.png"
                    alt="Team 1"
                    fill={true}
                    priority={true}
                    sizes="auto"
                    className="block w-full h-full absolute object-center object-cover top-0 left-0 z-0"
                  />
                </div>
                <div className="pl-16">
                  <BodyText className="text-black text-16 leading-[1.5rem] font-semibold block">
                    Darmastyo Wicaktomo
                  </BodyText>
                  <BodyText className="text-gray-dove text-12 leading-[1.375rem] block mt-[2px]">
                    Director & Partners
                  </BodyText>
                </div>
              </div>

              <div className="border-t-[0.5px] border-b-[0.5px] border-gray-cloud py-[3px] mt-16">
                <HeadingText
                  type="h6"
                  className="uppercase text-blue-pacific text-[0.875rem] leading-[1.75rem]"
                >
                  areas of expertise
                </HeadingText>
              </div>

              <div className="flex gap-24 mt-10">
                <div className="w-1/2">
                  <HeadingText className="uppercase text-black text-10 leading-[1.375rem]">
                    SERVICES
                  </HeadingText>
                  <div className="mt-10">
                    <ul className="">
                      <li className="text-[0.563rem] leading-[0.938rem]">
                        <Link
                          href=""
                          className="transition-all duration-300 text-gray-dove md:hover:text-blue-pacific"
                        >
                          <span className="">Risk Management</span>
                        </Link>
                      </li>
                      <li className="text-[0.563rem] leading-[0.938rem]">
                        <Link
                          href=""
                          className="transition-all duration-300 text-gray-dove md:hover:text-blue-pacific"
                        >
                          <span className="">Business & Investment</span>
                        </Link>
                        <div className="pl-18 mt-[2px] mb-[8px]">
                          <div className="block">
                            <Link
                              href=""
                              className="transition-all duration-300 text-gray-dove md:hover:text-blue-pacific"
                            >
                              <span className="">
                                Public-Private Partnerships (PPP)
                              </span>
                            </Link>
                          </div>
                          <div className="block">
                            <Link
                              href=""
                              className="transition-all duration-300 text-gray-dove md:hover:text-blue-pacific"
                            >
                              <span className="">Loan Bilateral</span>
                            </Link>
                          </div>
                          <div className="block">
                            <Link
                              href=""
                              className="transition-all duration-300 text-gray-dove md:hover:text-blue-pacific"
                            >
                              <span className="">Loan B to B</span>
                            </Link>
                          </div>
                        </div>
                      </li>
                      <li className="text-[0.563rem] leading-[0.938rem]">
                        <Link
                          href=""
                          className="transition-all duration-300 text-gray-dove md:hover:text-blue-pacific"
                        >
                          <span className="">Risk Management</span>
                        </Link>
                      </li>
                      <li className="text-[0.563rem] leading-[0.938rem]">
                        <Link
                          href=""
                          className="transition-all duration-300 text-gray-dove md:hover:text-blue-pacific"
                        >
                          <span className="">Sustainability</span>
                        </Link>
                      </li>
                      <li className="text-[0.563rem] leading-[0.938rem]">
                        <Link
                          href=""
                          className="transition-all duration-300 text-gray-dove md:hover:text-blue-pacific"
                        >
                          <span className="">
                            Feasibility Study & Strategic Planning
                          </span>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="w-1/2">
                  <HeadingText className="uppercase text-black text-10 leading-[1s.375rem]">
                    INDUSTRIES
                  </HeadingText>
                  <div className="mt-10">
                    <ul className="">
                      <li className="text-[0.563rem] leading-[0.938rem]">
                        <Link
                          href=""
                          className="transition-all duration-300 text-gray-dove md:hover:text-blue-pacific"
                        >
                          <span className="">Infrastructure</span>
                        </Link>
                      </li>
                      <li className="text-[0.563rem] leading-[0.938rem]">
                        <Link
                          href=""
                          className="transition-all duration-300 text-gray-dove md:hover:text-blue-pacific"
                        >
                          <span className="">Energy & Natural Resources</span>
                        </Link>
                      </li>
                      <li className="text-[0.563rem] leading-[0.938rem]">
                        <Link
                          href=""
                          className="transition-all duration-300 text-gray-dove md:hover:text-blue-pacific"
                        >
                          <span className="">Manufacturing</span>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 relative">
              <div className="w-[1px] h-[90%] bg-gray-cloud absolute left-[-50px] top-0 bottom-0 m-auto hidden md:block"></div>
              <div className="h-full w-full relative flex flex-col justify-between">
                <p className="font-graphik text-10 leading-[1rem] text-black">
                  Darmastyo is part of Mores Strategics, specializing in
                  consulting and infrastructure development. He has experience
                  in preparing and reviewing Preliminary Study Documents,
                  Pre-Feasibility Study Documents (OBC & FBC), as well as
                  Feasibility Studies (FS) for infrastructure projects,
                  particularly in the maritime sector, for both government and
                  private entities.
                  <br />
                  <br />
                  As an Individual Consultant at Bappenas, Darmastyo serves as
                  an Expert in Monitoring and Evaluation at the Directorate of
                  Government Cooperation and the Directorate of Development
                  Funding Planning. His expertise includes offshore construction
                  engineering (ports, maritime) and risk management analysis. He
                  also possesses skills in developing infrastructure projects
                  using the Public-Private Partnership (PPP) scheme, with
                  certification as a PPP Professional.
                  <br />
                  <br />
                  Darmastyo earned his Master’s degree in Marine Engineering
                  from the Bandung Institute of Technology.
                </p>

                <div className="flex flex-wrap gap-[0.313rem] mt-18">
                  <Link href="" className="block" target="_blank">
                    <svg width="25" height="25" viewBox="0 0 25 25" fill="none">
                      <circle cx="12.5" cy="12.5" r="12.5" fill="black" />
                      <path
                        d="M5.95215 7.9955C5.95215 7.52452 6.34352 7.14282 6.8264 7.14282H16.9827C17.4655 7.14282 17.8569 7.52452 17.8569 7.9955V18.1949C17.8569 18.6659 17.4655 19.0476 16.9827 19.0476H6.8264C6.34352 19.0476 5.95215 18.6659 5.95215 18.1949V7.9955ZM9.62998 17.1086V11.7329H7.84352V17.1086H9.62998ZM8.73712 10.9985C9.35989 10.9985 9.74754 10.5863 9.74754 10.0699C9.73637 9.54238 9.36063 9.14133 8.74902 9.14133C8.13742 9.14133 7.73786 9.54312 7.73786 10.0699C7.73786 10.5863 8.12551 10.9985 8.72521 10.9985H8.73712ZM12.3889 17.1086V14.1064C12.3889 13.9457 12.4008 13.7849 12.4484 13.6704C12.5771 13.3497 12.871 13.0171 13.3651 13.0171C14.0117 13.0171 14.2699 13.5096 14.2699 14.2329V17.1086H16.0563V14.0253C16.0563 12.3735 15.1754 11.6056 13.9998 11.6056C13.0519 11.6056 12.627 12.1265 12.3889 12.4933V12.5119H12.377L12.3889 12.4933V11.7329H10.6032C10.6255 12.2373 10.6032 17.1086 10.6032 17.1086H12.3889Z"
                        className="fill-white"
                      />
                    </svg>
                  </Link>
                  <Link href="" className="block" target="_blank">
                    <svg width="26" height="25" viewBox="0 0 26 25" fill="none">
                      <circle cx="13.2617" cy="12.5" r="12.5" fill="black" />
                      <path
                        d="M10.5965 19.0476H13.1027V14.0288H15.3609L15.609 11.5351H13.1027V10.2757C13.1027 10.1095 13.1687 9.95011 13.2863 9.83261C13.4038 9.7151 13.5631 9.64909 13.7293 9.64909H15.609V7.14282H13.7293C12.8984 7.14282 12.1016 7.47289 11.5141 8.06041C10.9265 8.64793 10.5965 9.44478 10.5965 10.2757V11.5351H9.34334L9.09521 14.0288H10.5965V19.0476Z"
                        className="fill-white"
                      />
                    </svg>
                  </Link>
                  <Link href="" className="block" target="_blank">
                    <svg width="26" height="25" viewBox="0 0 26 25" fill="none">
                      <circle cx="13.0239" cy="12.5" r="12.5" fill="black" />
                      <path
                        d="M16.8934 7.14282H18.9218L14.4906 12.1858L19.7036 19.0476H15.6216L12.4251 14.8855L8.76708 19.0476H6.73666L11.4767 13.6541L6.47607 7.14282H10.6613L13.5515 10.9471L16.8934 7.14282ZM16.1818 17.8386H17.3061L10.0501 8.28832H8.8438L16.1818 17.8386Z"
                        className="fill-white"
                      />
                    </svg>
                  </Link>
                  <Link href="" className="block" target="_blank">
                    <svg width="26" height="25" viewBox="0 0 26 25" fill="none">
                      <circle cx="12.7856" cy="12.5" r="12.5" fill="black" />
                      <path
                        d="M18.1047 10.6566C18.098 10.1567 18.0043 9.66183 17.8277 9.19405C17.6746 8.79948 17.4407 8.44114 17.141 8.14192C16.8412 7.84271 16.4823 7.6092 16.0871 7.45631C15.6245 7.28297 15.1359 7.18925 14.642 7.17912C14.006 7.15074 13.8044 7.14282 12.19 7.14282C10.5756 7.14282 10.3687 7.14282 9.73739 7.17912C9.24366 7.18932 8.75525 7.28305 8.29292 7.45631C7.89764 7.60909 7.53864 7.84257 7.23892 8.14179C6.93919 8.44102 6.70533 8.79942 6.5523 9.19405C6.37832 9.65546 6.28464 10.1432 6.2753 10.6361C6.24688 11.2717 6.23828 11.473 6.23828 13.0846C6.23828 14.6963 6.23828 14.9022 6.2753 15.5332C6.28522 16.0268 6.37843 16.5139 6.5523 16.9766C6.70559 17.3711 6.93962 17.7293 7.23945 18.0284C7.53927 18.3275 7.8983 18.5609 8.29358 18.7136C8.75465 18.8939 9.24314 18.9944 9.73805 19.0106C10.3747 19.039 10.5763 19.0476 12.1907 19.0476C13.805 19.0476 14.0119 19.0476 14.6433 19.0106C15.1372 19.0009 15.6259 18.9074 16.0884 18.7341C16.4835 18.581 16.8424 18.3475 17.1421 18.0483C17.4418 17.7491 17.6757 17.3908 17.829 16.9964C18.0029 16.5344 18.0961 16.0473 18.106 15.553C18.1344 14.9181 18.143 14.7168 18.143 13.1044C18.1417 11.4928 18.1417 11.2882 18.1047 10.6566ZM12.186 16.1324C10.4976 16.1324 9.12985 14.7669 9.12985 13.0813C9.12985 11.3957 10.4976 10.0302 12.186 10.0302C12.9966 10.0302 13.7739 10.3517 14.3471 10.9239C14.9202 11.4961 15.2422 12.2721 15.2422 13.0813C15.2422 13.8905 14.9202 14.6666 14.3471 15.2388C13.7739 15.811 12.9966 16.1324 12.186 16.1324ZM15.3639 10.6288C15.2702 10.6289 15.1775 10.6106 15.091 10.5749C15.0045 10.5391 14.9259 10.4867 14.8597 10.4207C14.7936 10.3546 14.7411 10.2761 14.7053 10.1898C14.6695 10.1034 14.6511 10.0108 14.6512 9.91739C14.6512 9.824 14.6696 9.73153 14.7054 9.64525C14.7412 9.55897 14.7937 9.48058 14.8598 9.41454C14.926 9.34851 15.0045 9.29613 15.0909 9.26039C15.1774 9.22465 15.27 9.20626 15.3635 9.20626C15.4571 9.20626 15.5497 9.22465 15.6361 9.26039C15.7225 9.29613 15.8011 9.34851 15.8672 9.41454C15.9334 9.48058 15.9858 9.55897 16.0216 9.64525C16.0574 9.73153 16.0758 9.824 16.0758 9.91739C16.0758 10.3107 15.7572 10.6288 15.3639 10.6288Z"
                        className="fill-white"
                      />
                    </svg>
                  </Link>
                  <Link href="" className="block" target="_blank">
                    <svg width="26" height="25" viewBox="0 0 26 25" fill="none">
                      <circle cx="12.5479" cy="12.5" r="12.5" fill="black" />
                      <path
                        d="M11.5026 15.136L15.0725 13.0952L11.5026 11.0543V15.136ZM19.454 9.80944C19.5434 10.1292 19.6053 10.5577 19.6466 11.102C19.6947 11.6462 19.7153 12.1156 19.7153 12.5237L19.7566 13.0952C19.7566 14.585 19.6466 15.6802 19.454 16.3809C19.282 16.9931 18.8831 17.3877 18.264 17.5577C17.9407 17.6462 17.3492 17.7074 16.4413 17.7482C15.5471 17.7958 14.7286 17.8162 13.972 17.8162L12.8783 17.8571C9.9963 17.8571 8.20106 17.7482 7.49259 17.5577C6.87355 17.3877 6.4746 16.9931 6.30265 16.3809C6.21323 16.0611 6.15132 15.6326 6.11005 15.0884C6.0619 14.5441 6.04127 14.0747 6.04127 13.6666L6 13.0952C6 11.6054 6.11005 10.5101 6.30265 9.80944C6.4746 9.1972 6.87355 8.80264 7.49259 8.63257C7.81587 8.54414 8.40741 8.48291 9.31534 8.4421C10.2095 8.39448 11.028 8.37407 11.7847 8.37407L12.8783 8.33325C15.7603 8.33325 17.5556 8.4421 18.264 8.63257C18.8831 8.80264 19.282 9.1972 19.454 9.80944Z"
                        className="fill-white"
                      />
                    </svg>
                  </Link>
                  <Link href="" className="block" target="_blank">
                    <svg width="26" height="25" viewBox="0 0 26 25" fill="none">
                      <circle cx="13.3096" cy="12.5" r="12.5" fill="black" />
                      <path
                        d="M13.1625 5.96231C13.7858 5.95239 14.4043 5.95735 15.0228 5.95239C15.0609 6.71131 15.3226 7.48511 15.8554 8.02082C16.3883 8.57141 17.1401 8.82438 17.8728 8.9087V10.9077C17.1876 10.8829 16.4978 10.7341 15.8745 10.4265C15.6033 10.2976 15.3511 10.1339 15.1037 9.96524C15.0989 11.4136 15.1084 12.862 15.0942 14.3055C15.0561 14.9999 14.8372 15.6894 14.4519 16.2598C13.8286 17.2122 12.7485 17.8322 11.6399 17.852C10.9596 17.8917 10.2792 17.6983 9.69872 17.3411C8.73763 16.7509 8.06201 15.6695 7.96209 14.5088C7.95258 14.2608 7.94782 14.0128 7.95734 13.7698C8.04298 12.8273 8.49022 11.9245 9.18487 11.3095C9.97468 10.5952 11.0785 10.2529 12.111 10.4563C12.1205 11.1904 12.0919 11.9245 12.0919 12.6587C11.6209 12.4999 11.069 12.5446 10.6551 12.8422C10.3553 13.0456 10.1269 13.3581 10.008 13.7102C9.90807 13.9632 9.93662 14.241 9.94138 14.5088C10.0556 15.3223 10.8073 16.0068 11.6066 15.9324C12.1395 15.9275 12.6486 15.605 12.9246 15.1338C13.015 14.9701 13.1149 14.8015 13.1196 14.608C13.1672 13.7202 13.1482 12.8372 13.153 11.9493C13.1577 9.95036 13.1482 7.95634 13.1625 5.96231Z"
                        className="fill-white"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default AboutTeam;
