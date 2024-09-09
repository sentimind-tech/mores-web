'use client'

import { ChangeEvent } from 'react'

type TTextAreaProp = {
  className?: string
  placeholder?: string
  value?: string
  setValue?: (value: string) => void
  error?: string
  rows?: number
}
const TextArea = ({
  error,
  className,
  placeholder,
  setValue,
  value,
  rows,
}: TTextAreaProp) => {
  const changeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    if (!setValue) return
    setValue(e.target.value)
  }
  return (
    <div className="flex flex-col gap-8">
      <textarea
        onChange={changeHandler}
        className={className}
        placeholder={placeholder}
        rows={rows || 1}
      >
        {value || ''}
      </textarea>
      {error && <span className="error-text text-12">{error}</span>}
    </div>
  )
}

export default TextArea
