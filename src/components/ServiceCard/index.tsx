import Link from 'next/link'
import { ReactNode } from 'react'
import Image from 'next/image'
import { useLocale } from 'next-intl'

type TServiceCardProp = {
  title: string
  description: string
  path: string
}
export const ServiceCard = ({ title, description, path }: TServiceCardProp) => {
  const localActive = useLocale()

  return (
    <div className="flex flex-col justify-between">
      <div className="flex flex-col">
        <div className="flex justify-between pt-16 border-t border-gray-silver">
          <div className="h-56 overflow-hidden text-ellipsis whitespace text-black font-normal text-base lg:text-xl font-supplymono">
            {title}
          </div>

          <div className="mt-4">
            <Image
              src={'/icon/next.svg'}
              alt={title}
              width="11"
              height="24"
              priority={true}
            />
          </div>
        </div>
        <div className="text-left mt-[6px] text-12 leading-[1.25rem] text-inter text-gray-medium">
          {description}
        </div>
      </div>
      <Link
        href={path}
        className="mt-5 flex justify-start items-center gap-10 cursor-pointer"
      >
        <span className="text-blue-pacific leading-[19.2px] font-normal text-16 font-supplymono">
          MORE
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
