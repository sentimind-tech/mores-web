'use client'
import { ReactNode } from 'react'

type TCompanyInfoCardProp = {
  title: string
  children: ReactNode | string
  footer?: string
  contentClassName?: string
  url?: string
}
const CompanyInfoCard = ({
  title,
  children,
  footer,
  url,
  contentClassName,
}: TCompanyInfoCardProp) => {
  const handleClick = () => {
    if (!url || url == '') return
    window.open(url, '_blank') // Open the file in a new tab
  }

  return (
    <div className="flex flex-col justify-between gap-64 border-t border-gray-ash pt-16 font-inter text-12 leading-[1.25rem]">
      <div className={`flex flex-col gap-20 ${contentClassName}`}>
        <div className="text-xl text-black">{title}</div>
        <div className="">{children}</div>
      </div>
      {footer && (
        <div className="text-blue-pacific cursor-pointer" onClick={handleClick}>
          {footer}
        </div>
      )}
    </div>
  )
}

export default CompanyInfoCard
