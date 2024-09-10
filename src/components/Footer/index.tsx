import Image from "next/image";
import { BodyText, HeadingText } from "../Text";
import Link from "next/link";
import LangSelector from "../LangSelector";

const navlink = [
  {
    title: "CONTACT US",
    link: "",
  },
  {
    title: "TERM OF USE",
    link: "",
  },
  {
    title: "PRIVACY",
    link: "",
  },
  {
    title: "COOKIES",
    link: "",
  },
];

const Footer = () => {
  return (
    <div className="bg-white font-supplymono px-16 lg:px-[3.938rem] pt-[2.063rem] md:pt-[4.5rem] pb-[1.375rem] md:pb-[3.125rem] text-black">
      <div className="w-full max-w-[80rem] mx-auto hidden md:block">
        <div className="flex justify-between gap-18">
          <div className="block">
            <div className="relative block w-full max-w-[7.688rem] md:max-w-[11rem] aspect-[16/5] z-[0]">
              <Image
                src="/images/logo-mores-main.png"
                alt="Main Logo"
                fill={true}
                priority={true}
                sizes="auto"
                className="block w-full h-full object-center object-contain"
              />
            </div>
            <BodyText className="block uppercase font-graphik text-10 leading-[0.688rem] mt-24">
              © 2024 MORES STRATEGICS. <br className="hidden md:block" /> ALL
              RIGHTS RESERVED.
            </BodyText>
          </div>

          <div className="flex gap-[3.75rem]">
            <div className="block">
              <HeadingText className="text-18 leading-[1.35rem] text-blue-pacific uppercase block mb-12">
                FOLLOW US
              </HeadingText>

              <div className="flex gap-12 mb-32">
                <Link href="" target="_blank">
                  <svg width="25" height="25" viewBox="0 0 25 25" fill="none">
                    <ellipse
                      cx="12.5"
                      cy="12.5"
                      rx="12.5"
                      ry="12.5"
                      fill="black"
                    />
                    <path
                      d="M5.95239 7.99575C5.95239 7.52476 6.34376 7.14307 6.82665 7.14307H16.9829C17.4658 7.14307 17.8572 7.52476 17.8572 7.99575V18.1952C17.8572 18.6661 17.4658 19.0478 16.9829 19.0478H6.82665C6.34376 19.0478 5.95239 18.6661 5.95239 18.1952V7.99575ZM9.63022 17.1088V11.7331H7.84376V17.1088H9.63022ZM8.73736 10.9987C9.36013 10.9987 9.74778 10.5865 9.74778 10.0701C9.73662 9.54262 9.36087 9.14158 8.74927 9.14158C8.13766 9.14158 7.73811 9.54336 7.73811 10.0701C7.73811 10.5865 8.12576 10.9987 8.72546 10.9987H8.73736ZM12.3891 17.1088V14.1066C12.3891 13.9459 12.4011 13.7852 12.4487 13.6706C12.5774 13.3499 12.8713 13.0173 13.3653 13.0173C14.0119 13.0173 14.2701 13.5099 14.2701 14.2331V17.1088H16.0566V14.0255C16.0566 12.3737 15.1756 11.6059 14 11.6059C13.0521 11.6059 12.6272 12.1267 12.3891 12.4935V12.5121H12.3772L12.3891 12.4935V11.7331H10.6034C10.6258 12.2376 10.6034 17.1088 10.6034 17.1088H12.3891Z"
                      fill="white"
                    />
                  </svg>
                </Link>
                <Link href="" target="_blank">
                  <svg width="26" height="25" viewBox="0 0 26 25" fill="none">
                    <ellipse
                      cx="13.4048"
                      cy="12.5"
                      rx="12.5"
                      ry="12.5"
                      fill="black"
                    />
                    <path
                      d="M18.7236 10.6568C18.7169 10.157 18.6232 9.66207 18.4466 9.19429C18.2935 8.79972 18.0596 8.44138 17.7599 8.14217C17.4601 7.84295 17.1012 7.60944 16.706 7.45656C16.2434 7.28322 15.7548 7.18949 15.2608 7.17937C14.6249 7.15099 14.4233 7.14307 12.8089 7.14307C11.1945 7.14307 10.9876 7.14307 10.3563 7.17937C9.86256 7.18956 9.37415 7.28329 8.91182 7.45656C8.51653 7.60934 8.15754 7.84281 7.85781 8.14204C7.55809 8.44127 7.32422 8.79966 7.17119 9.19429C6.99722 9.65571 6.90353 10.1434 6.8942 10.6364C6.86577 11.2719 6.85718 11.4732 6.85718 13.0849C6.85718 14.6966 6.85718 14.9025 6.8942 15.5334C6.90411 16.0271 6.99733 16.5142 7.17119 16.9768C7.32448 17.3713 7.55852 17.7296 7.85834 18.0287C8.15817 18.3278 8.5172 18.5611 8.91248 18.7139C9.37354 18.8942 9.86204 18.9946 10.3569 19.0109C10.9936 19.0392 11.1952 19.0478 12.8096 19.0478C14.4239 19.0478 14.6308 19.0478 15.2622 19.0109C15.7561 19.0012 16.2448 18.9076 16.7073 18.7343C17.1024 18.5813 17.4613 18.3477 17.761 18.0485C18.0606 17.7493 18.2946 17.3911 18.4479 16.9966C18.6218 16.5346 18.715 16.0475 18.7249 15.5532C18.7533 14.9183 18.7619 14.717 18.7619 13.1047C18.7606 11.493 18.7606 11.2884 18.7236 10.6568ZM12.8049 16.1327C11.1165 16.1327 9.74875 14.7672 9.74875 13.0816C9.74875 11.396 11.1165 10.0305 12.8049 10.0305C13.6155 10.0305 14.3928 10.3519 14.966 10.9241C15.5391 11.4963 15.8611 12.2724 15.8611 13.0816C15.8611 13.8908 15.5391 14.6668 14.966 15.239C14.3928 15.8112 13.6155 16.1327 12.8049 16.1327ZM15.9828 10.6291C15.8891 10.6292 15.7964 10.6108 15.7099 10.5751C15.6234 10.5394 15.5448 10.487 15.4786 10.4209C15.4124 10.3548 15.36 10.2764 15.3242 10.19C15.2884 10.1036 15.27 10.0111 15.2701 9.91763C15.2701 9.82425 15.2885 9.73177 15.3243 9.64549C15.3601 9.55922 15.4126 9.48082 15.4787 9.41479C15.5449 9.34875 15.6234 9.29637 15.7098 9.26063C15.7963 9.2249 15.8889 9.2065 15.9824 9.2065C16.076 9.2065 16.1686 9.2249 16.255 9.26063C16.3414 9.29637 16.42 9.34875 16.4861 9.41479C16.5522 9.48082 16.6047 9.55922 16.6405 9.64549C16.6763 9.73177 16.6947 9.82425 16.6947 9.91763C16.6947 10.311 16.3761 10.6291 15.9828 10.6291Z"
                      fill="white"
                    />
                  </svg>
                </Link>
                <Link href="" target="_blank">
                  <svg width="26" height="25" viewBox="0 0 26 25" fill="none">
                    <ellipse
                      cx="13.3096"
                      cy="12.5"
                      rx="12.5"
                      ry="12.5"
                      fill="black"
                    />
                    <path
                      d="M12.2646 15.1362L15.8344 13.0954L12.2646 11.0546V15.1362ZM20.2159 9.80969C20.3053 10.1294 20.3673 10.558 20.4085 11.1022C20.4567 11.6464 20.4773 12.1158 20.4773 12.524L20.5186 13.0954C20.5186 14.5852 20.4085 15.6804 20.2159 16.3811C20.044 16.9934 19.645 17.3879 19.026 17.558C18.7027 17.6464 18.1112 17.7076 17.2032 17.7485C16.3091 17.7961 15.4905 17.8165 14.7339 17.8165L13.6403 17.8573C10.7583 17.8573 8.96302 17.7485 8.25456 17.558C7.63551 17.3879 7.23657 16.9934 7.06461 16.3811C6.97519 16.0614 6.91329 15.6328 6.87202 15.0886C6.82387 14.5444 6.80323 14.075 6.80323 13.6668L6.76196 13.0954C6.76196 11.6056 6.87202 10.5104 7.06461 9.80969C7.23657 9.19744 7.63551 8.80288 8.25456 8.63282C8.57784 8.54438 9.16937 8.48316 10.0773 8.44234C10.9715 8.39472 11.79 8.37431 12.5466 8.37431L13.6403 8.3335C16.5223 8.3335 18.3175 8.44234 19.026 8.63282C19.645 8.80288 20.044 9.19744 20.2159 9.80969Z"
                      fill="white"
                    />
                  </svg>
                </Link>
                <Link href="" target="_blank">
                  <svg width="26" height="25" viewBox="0 0 26 25" fill="none">
                    <ellipse
                      cx="13.2144"
                      cy="12.5"
                      rx="12.5"
                      ry="12.5"
                      fill="black"
                    />
                    <path
                      d="M17.0841 7.14307H19.1125L14.6813 12.1861L19.8943 19.0478H15.8123L12.6158 14.8858L8.95775 19.0478H6.92733L11.6674 13.6543L6.66675 7.14307H10.8519L13.7421 10.9473L17.0841 7.14307ZM16.3724 17.8388H17.4968L10.2408 8.28857H9.03447L16.3724 17.8388Z"
                      fill="white"
                    />
                  </svg>
                </Link>
              </div>
              <Link href="" className="flex items-center gap-[0.563rem] mb-18">
                <div className="shrink-0">
                  <svg width="20" height="21" viewBox="0 0 20 21" fill="none">
                    <circle cx="10" cy="10.5" r="10" fill="black" />
                    <path
                      d="M15 6.5H5V14.5H15V6.5ZM14 8.5L10 11L6 8.5V7.5L10 10L14 7.5V8.5Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <BodyText
                  type="body2"
                  className="uppercase leading-[1.05rem] font-supplymono"
                >
                  office@mores.id
                </BodyText>
              </Link>
              <Link href="" className="flex items-center gap-[0.563rem]">
                <div className="shrink-0">
                  <svg width="20" height="21" viewBox="0 0 20 21" fill="none">
                    <circle cx="10" cy="10.5" r="10" fill="black" />
                    <path
                      d="M14 12.7305L11.3648 12.4255L10.1047 13.6856C8.68513 12.9637 7.53133 11.8099 6.80938 10.3903L8.07449 9.12523L7.76946 6.5H5.01422C4.72419 11.5904 8.90956 15.7758 14 15.4858V12.7305Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <BodyText
                  type="body2"
                  className="uppercase leading-[1.05rem] font-supplymono"
                >
                  (+62) 21 31912101
                </BodyText>
              </Link>
            </div>
            <div className="block">
              <div className="block mb-[2.594rem]">
                <LangSelector />
              </div>

              <div className="max-w-[212px] mb-[2.875rem]">
                <HeadingText className="text-16 leading-[1.2rem] text-blue-pacific uppercase block mb-[0.313rem]">
                  OFFICE
                </HeadingText>
                <BodyText className="uppercase leading-[0.975rem] text-[0.813rem] block">
                  GONDANGDIA LAMA 25 BUILDING 3A FLOOR UNIT A-B JL.RP.SOEROSO
                  NO.25 JAKARTA 10330 - INDONESIA
                </BodyText>
              </div>
              <div className="max-w-[212px]">
                <HeadingText className="text-16 leading-[1.2rem] text-blue-pacific uppercase block mb-[0.313rem]">
                  WORKSHOP
                </HeadingText>
                <BodyText className="uppercase leading-[0.975rem] text-[0.813rem] block">
                  AT BRAGA TECH OFFICE JL. CILAKI NO.23, BANDUNG WETAN, BANDUNG
                  CITY 40114 - INDONESIA
                </BodyText>
              </div>
            </div>
          </div>
        </div>
        <ul className="flex gap-[2.875rem] mt-[3.375rem]">
          {navlink.map((item, index) => (
            <li
              className="text-[0.813rem] leading-[1rem] uppercase"
              key={index}
            >
              <Link href={item.link} className="hover:underline">
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="w-full block md:hidden">
        <div className="flex flex-col gap-[2.625rem]">
          <div className="text-right">
            <LangSelector />
          </div>
          <div className="relative block w-full max-w-[9.5rem] aspect-[16/5] z-[0]">
            <Image
              src="/images/logo-mores-main.png"
              alt="Main Logo"
              fill={true}
              priority={true}
              sizes="auto"
              className="block w-full h-full object-center object-contain"
            />
          </div>

          <div className="grid grid-cols-2 gap-12">
            <div className="block">
              <BodyText
                type="body2"
                className="block uppercase font-supplymono text-blue-pacific leading-[1.05rem] mb-[0.938rem]"
              >
                FOLLOW US
              </BodyText>
              <div className="flex gap-12">
                <Link href="" target="_blank">
                  <svg width="25" height="25" viewBox="0 0 25 25" fill="none">
                    <ellipse
                      cx="12.5"
                      cy="12.5"
                      rx="12.5"
                      ry="12.5"
                      fill="black"
                    />
                    <path
                      d="M5.95239 7.99575C5.95239 7.52476 6.34376 7.14307 6.82665 7.14307H16.9829C17.4658 7.14307 17.8572 7.52476 17.8572 7.99575V18.1952C17.8572 18.6661 17.4658 19.0478 16.9829 19.0478H6.82665C6.34376 19.0478 5.95239 18.6661 5.95239 18.1952V7.99575ZM9.63022 17.1088V11.7331H7.84376V17.1088H9.63022ZM8.73736 10.9987C9.36013 10.9987 9.74778 10.5865 9.74778 10.0701C9.73662 9.54262 9.36087 9.14158 8.74927 9.14158C8.13766 9.14158 7.73811 9.54336 7.73811 10.0701C7.73811 10.5865 8.12576 10.9987 8.72546 10.9987H8.73736ZM12.3891 17.1088V14.1066C12.3891 13.9459 12.4011 13.7852 12.4487 13.6706C12.5774 13.3499 12.8713 13.0173 13.3653 13.0173C14.0119 13.0173 14.2701 13.5099 14.2701 14.2331V17.1088H16.0566V14.0255C16.0566 12.3737 15.1756 11.6059 14 11.6059C13.0521 11.6059 12.6272 12.1267 12.3891 12.4935V12.5121H12.3772L12.3891 12.4935V11.7331H10.6034C10.6258 12.2376 10.6034 17.1088 10.6034 17.1088H12.3891Z"
                      fill="white"
                    />
                  </svg>
                </Link>
                <Link href="" target="_blank">
                  <svg width="26" height="25" viewBox="0 0 26 25" fill="none">
                    <ellipse
                      cx="13.4048"
                      cy="12.5"
                      rx="12.5"
                      ry="12.5"
                      fill="black"
                    />
                    <path
                      d="M18.7236 10.6568C18.7169 10.157 18.6232 9.66207 18.4466 9.19429C18.2935 8.79972 18.0596 8.44138 17.7599 8.14217C17.4601 7.84295 17.1012 7.60944 16.706 7.45656C16.2434 7.28322 15.7548 7.18949 15.2608 7.17937C14.6249 7.15099 14.4233 7.14307 12.8089 7.14307C11.1945 7.14307 10.9876 7.14307 10.3563 7.17937C9.86256 7.18956 9.37415 7.28329 8.91182 7.45656C8.51653 7.60934 8.15754 7.84281 7.85781 8.14204C7.55809 8.44127 7.32422 8.79966 7.17119 9.19429C6.99722 9.65571 6.90353 10.1434 6.8942 10.6364C6.86577 11.2719 6.85718 11.4732 6.85718 13.0849C6.85718 14.6966 6.85718 14.9025 6.8942 15.5334C6.90411 16.0271 6.99733 16.5142 7.17119 16.9768C7.32448 17.3713 7.55852 17.7296 7.85834 18.0287C8.15817 18.3278 8.5172 18.5611 8.91248 18.7139C9.37354 18.8942 9.86204 18.9946 10.3569 19.0109C10.9936 19.0392 11.1952 19.0478 12.8096 19.0478C14.4239 19.0478 14.6308 19.0478 15.2622 19.0109C15.7561 19.0012 16.2448 18.9076 16.7073 18.7343C17.1024 18.5813 17.4613 18.3477 17.761 18.0485C18.0606 17.7493 18.2946 17.3911 18.4479 16.9966C18.6218 16.5346 18.715 16.0475 18.7249 15.5532C18.7533 14.9183 18.7619 14.717 18.7619 13.1047C18.7606 11.493 18.7606 11.2884 18.7236 10.6568ZM12.8049 16.1327C11.1165 16.1327 9.74875 14.7672 9.74875 13.0816C9.74875 11.396 11.1165 10.0305 12.8049 10.0305C13.6155 10.0305 14.3928 10.3519 14.966 10.9241C15.5391 11.4963 15.8611 12.2724 15.8611 13.0816C15.8611 13.8908 15.5391 14.6668 14.966 15.239C14.3928 15.8112 13.6155 16.1327 12.8049 16.1327ZM15.9828 10.6291C15.8891 10.6292 15.7964 10.6108 15.7099 10.5751C15.6234 10.5394 15.5448 10.487 15.4786 10.4209C15.4124 10.3548 15.36 10.2764 15.3242 10.19C15.2884 10.1036 15.27 10.0111 15.2701 9.91763C15.2701 9.82425 15.2885 9.73177 15.3243 9.64549C15.3601 9.55922 15.4126 9.48082 15.4787 9.41479C15.5449 9.34875 15.6234 9.29637 15.7098 9.26063C15.7963 9.2249 15.8889 9.2065 15.9824 9.2065C16.076 9.2065 16.1686 9.2249 16.255 9.26063C16.3414 9.29637 16.42 9.34875 16.4861 9.41479C16.5522 9.48082 16.6047 9.55922 16.6405 9.64549C16.6763 9.73177 16.6947 9.82425 16.6947 9.91763C16.6947 10.311 16.3761 10.6291 15.9828 10.6291Z"
                      fill="white"
                    />
                  </svg>
                </Link>
                <Link href="" target="_blank">
                  <svg width="26" height="25" viewBox="0 0 26 25" fill="none">
                    <ellipse
                      cx="13.3096"
                      cy="12.5"
                      rx="12.5"
                      ry="12.5"
                      fill="black"
                    />
                    <path
                      d="M12.2646 15.1362L15.8344 13.0954L12.2646 11.0546V15.1362ZM20.2159 9.80969C20.3053 10.1294 20.3673 10.558 20.4085 11.1022C20.4567 11.6464 20.4773 12.1158 20.4773 12.524L20.5186 13.0954C20.5186 14.5852 20.4085 15.6804 20.2159 16.3811C20.044 16.9934 19.645 17.3879 19.026 17.558C18.7027 17.6464 18.1112 17.7076 17.2032 17.7485C16.3091 17.7961 15.4905 17.8165 14.7339 17.8165L13.6403 17.8573C10.7583 17.8573 8.96302 17.7485 8.25456 17.558C7.63551 17.3879 7.23657 16.9934 7.06461 16.3811C6.97519 16.0614 6.91329 15.6328 6.87202 15.0886C6.82387 14.5444 6.80323 14.075 6.80323 13.6668L6.76196 13.0954C6.76196 11.6056 6.87202 10.5104 7.06461 9.80969C7.23657 9.19744 7.63551 8.80288 8.25456 8.63282C8.57784 8.54438 9.16937 8.48316 10.0773 8.44234C10.9715 8.39472 11.79 8.37431 12.5466 8.37431L13.6403 8.3335C16.5223 8.3335 18.3175 8.44234 19.026 8.63282C19.645 8.80288 20.044 9.19744 20.2159 9.80969Z"
                      fill="white"
                    />
                  </svg>
                </Link>
                <Link href="" target="_blank">
                  <svg width="26" height="25" viewBox="0 0 26 25" fill="none">
                    <ellipse
                      cx="13.2144"
                      cy="12.5"
                      rx="12.5"
                      ry="12.5"
                      fill="black"
                    />
                    <path
                      d="M17.0841 7.14307H19.1125L14.6813 12.1861L19.8943 19.0478H15.8123L12.6158 14.8858L8.95775 19.0478H6.92733L11.6674 13.6543L6.66675 7.14307H10.8519L13.7421 10.9473L17.0841 7.14307ZM16.3724 17.8388H17.4968L10.2408 8.28857H9.03447L16.3724 17.8388Z"
                      fill="white"
                    />
                  </svg>
                </Link>
              </div>
            </div>
            <div className="block">
              <Link href="" className="flex items-center gap-[0.563rem] mb-18">
                <div className="shrink-0">
                  <svg width="25" height="25" viewBox="0 0 25 25" fill="none">
                    <circle cx="12.5" cy="12.5" r="12.5" fill="black" />
                    <path
                      d="M18.75 7.5H6.25V17.5H18.75V7.5ZM17.5 10L12.5 13.125L7.5 10V8.75L12.5 11.875L17.5 8.75V10Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <BodyText
                  type="body2"
                  className="uppercase !text-10 leading-[0.75rem] font-supplymono"
                >
                  office@mores.id
                </BodyText>
              </Link>
              <Link href="" className="flex items-center gap-[0.563rem]">
                <div className="shrink-0">
                  <svg width="25" height="25" viewBox="0 0 25 25" fill="none">
                    <circle cx="12.5" cy="12.5" r="12.5" fill="black" />
                    <path
                      d="M17.5 15.2882L14.206 14.9069L12.6308 16.482C10.8564 15.5796 9.41416 14.1373 8.51172 12.3629L10.0931 10.7815L9.71182 7.5H6.26778C5.90524 13.8631 11.1369 19.0948 17.5 18.7322V15.2882Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <BodyText
                  type="body2"
                  className="uppercase !text-10 leading-[0.75rem] font-supplymono"
                >
                  (+62) 21 31912101
                </BodyText>
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-12">
            <div className="block">
              <HeadingText className="text-14 leading-[1.05rem] text-blue-pacific uppercase block mb-[0.313rem]">
                OFFICE
              </HeadingText>
              <BodyText className="uppercase !text-10 leading-[0.75rem] block">
                GONDANGDIA LAMA 25 BUILDING 3A FLOOR UNIT A-B JL.RP.SOEROSO
                NO.25 JAKARTA 10330 - INDONESIA
              </BodyText>
            </div>
            <div className="block">
              <HeadingText className="text-14 leading-[1.05rem] text-blue-pacific uppercase block mb-[0.313rem]">
                WORKSHOP
              </HeadingText>
              <BodyText className="uppercase !text-10 leading-[0.75rem] block">
                AT BRAGA TECH OFFICE JL. CILAKI NO.23, BANDUNG WETAN, BANDUNG
                CITY 40114 - INDONESIA
              </BodyText>
            </div>
          </div>

          <ul className="flex flex-wrap gap-18">
            {navlink.map((item, index) => (
              <li className="text-10 leading-[0.75rem] uppercase" key={index}>
                <Link href={item.link} className="hover:underline">
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
