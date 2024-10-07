import Image from 'next/image'
import Link from 'next/link'
import { ReactNode } from 'react'

type TInsightCardProp = {
  image: string
  title: string
  subtitle: string
  description: string
  path: string
}

export const InsightCard = ({
  image,
  title,
  subtitle,
  description,
  path,
}: TInsightCardProp) => {
  return (
    <div className="flex flex-col">
      <div className="w-full h-[125px]">
        <Image
          src={image}
          alt={title}
          width="0"
          height="0"
          sizes="100vw"
          className="w-full h-full"
          priority={true}
        />
      </div>
      <div className="flex flex-col font-normal font-inter mt-8">
        <div className="text-10 leading-[22px] text-blue-pacific font-supplymono">
          {subtitle}
        </div>
        <div className="mt-[2px] text-14 mb-[7px] text-12 leading-[1.25rem] text-black ">
          {title}
        </div>
        <div className="text-10 leading-[15px] text-gray-medium">
          {description}
        </div>
      </div>
      <Link
        href={path}
        className="mt-[25px] flex justify-start items-center gap-10 cursor-pointer"
      >
        <span className="text-blue-pacific leading-3 font-normal text-12 font-supplymono">
          READ NOW
        </span>
        <Image
          src={'/icon/arrow-right.svg'}
          alt={title}
          width="17"
          height="12"
          priority={true}
        />
      </Link>
    </div>
  )
}
