import Image from 'next/image'
import { ChangeEventHandler, ReactNode } from 'react'

type TSelectProps = {
  children: ReactNode | string
  value?: string
  className?: string
}

export const Option = ({ children, value, className }: TSelectProps) => {
  return (
    <option value={value} className={`${className}`}>
      {children}
    </option>
  )
}
