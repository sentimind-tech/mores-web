'use client'

import { ChangeEvent } from 'react'

type TInputFieldProp = {
  type?: string
  className?: string
  placeholder?: string
  value?: string
  setValue?: (value: string) => void
  error?: string
}
const InputField = ({
  error,
  className,
  type,
  placeholder,
  setValue,
  value,
}: TInputFieldProp) => {
  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    if (!setValue) return
    setValue(e.target.value)
  }
  return (
    <div className="flex flex-col gap-8">
      <input
        onChange={changeHandler}
        className={className}
        type={type}
        placeholder={placeholder}
        value={value || ''}
      />
      {error && <span className="error-text text-12">{error}</span>}
    </div>
  )
}

export default InputField
