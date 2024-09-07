import { ReactNode } from 'react'

type TPageHeaderProp = {
  title?: string
  subtitle?: string
  background: string
  subtitleCustomClass?: string
}
export const PageHeader = ({
  title,
  background,
  subtitle,
  subtitleCustomClass,
}: TPageHeaderProp) => {
  return (
    <div
      className="flex flex-col items-center h-[400px] relative"
      style={{
        backgroundImage: `url('${background}')`,
        backgroundSize: 'cover', // Ensures the image covers the entire div
        backgroundPosition: 'center', // Centers the image within the div
        backgroundRepeat: 'no-repeat', // Prevents the image from repeating
      }}
    >
      <div className="flex flex-col gap-10 justify-center h-full w-full px-64">
        <div
          className={`font-supplymono text-xl text-blue-pacific ${subtitleCustomClass}`}
        >
          {subtitle}
        </div>
        <div className="font-supplymono text-40 leading-12 text-white w-full flex justify-start uppercase ">
          {title}
        </div>
      </div>
    </div>
  )
}
