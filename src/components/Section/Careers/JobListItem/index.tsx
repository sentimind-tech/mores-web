'use client'

import { ButtonPrimary } from '@/components/Button'
import Image from 'next/image'
import Link from 'next/link'

type TJobListProps = {
  title: string
  department: string
  type: string
  location: string
  url: string
}

const JobListItem = ({
  title,
  department,
  type,
  location,
  url,
}: TJobListProps) => {
  return (
    <div className="pt-10 pb-20 font-inter text-12 leading-[20px] border-t border-gray-cloud text-black grid grid-cols-3">
      <div className="col-span-2 flex flex-col gap-16 mobile-min:gap-32">
        <div className="font-supplymono text-sm mobile-min:text-xl lg:h-[70px] lg:text-clip lg:text-ellipsis flex items-center">{title}</div>
        <div className="flex flex-col items-start mobile-min:flex-row">
          <div className="flex gap-10 items-center mr-60">
            <Image
              src="/images/icon/file_user_fill.svg"
              width={12}
              height={13}
              alt="file_user_fill"
            />
            <span>{department}</span>
          </div>
          <div className="flex gap-10 items-center mr-20">
            <Image
              src="/images/icon/date_solid.svg"
              width={14}
              height={11}
              alt="date_solid"
            />
            <span>{type}</span>
          </div>
          <div className="flex gap-10 items-center">
            <Image
              src="/images/icon/place_icon.svg"
              width={16}
              height={24}
              alt="place_icon"
            />
            <span>{location}</span>
          </div>
        </div>
      </div>
      <div className="flex w-full justify-end">
        <Link className="" target="_blank" href={url}>
          <ButtonPrimary>Apply</ButtonPrimary>
        </Link>
      </div>
    </div>
  )
}

export default JobListItem
