'use client'
import { useState } from 'react'
import { ButtonPrimary } from '../Button'
import InputField from './InputField'
import TextArea from './TextArea'

type TForm = {
  first_name: string
  last_name: string
  email: string
  subject: string
  message: string
}
type TError = {
  first_name?: string
  last_name?: string
  email?: string
  subject?: string
  message?: string
}
const ReactUsForm = () => {
  const [inputForm, setInputForm] = useState<TForm>({
    first_name: '',
    last_name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [error, setError] = useState<TError>({})

  const validate = (form: TForm) => {
    setError({})
    if (form.first_name == '') {
      setError((prevState) => {
        return { ...prevState, first_name: 'First Name is required' }
      })
    }
    if (form.last_name == '') {
      setError((prevState) => {
        return { ...prevState, last_name: 'Last Name is required' }
      })
    }
    if (form.email == '') {
      setError((prevState) => {
        return { ...prevState, email: 'Email is required' }
      })
    }
    if (form.subject == '') {
      setError((prevState) => {
        return { ...prevState, subject: 'Subject is required' }
      })
    }
    if (form.message == '') {
      setError((prevState) => {
        return { ...prevState, message: 'Message is required' }
      })
    }
  }

  const handleSubmit = () => {
    validate(inputForm)
  }

  return (
    <div className="mb-[107px] font-supplymono flex flex-col gap-[58px]">
      <div className="text-blue-pacific text-[28px] leading-[2.5rems]">
        REACH US
      </div>
      <div className="pl-[91px] flex flex-col gap-[31px]">
        <div className="contact-us-form-container">
          {/* Name */}
          <div className="">
            NAME <span className="text-[0.875rem]">(required)</span>
          </div>
          <div className="grid grid-cols-2 gap-[58px]">
            <InputField
              className={`contact-us-input ${error.first_name ? 'error' : ''}`}
              type="text"
              placeholder="First Name"
              value={inputForm?.first_name}
              error={error?.first_name}
              setValue={(value: string) =>
                setInputForm((prevState) => {
                  return {
                    ...prevState,
                    first_name: value,
                  }
                })
              }
            />
            <InputField
              className={`contact-us-input ${error.last_name ? 'error' : ''}`}
              type="text"
              placeholder="Last Name"
              value={inputForm?.last_name}
              error={error?.last_name}
              setValue={(value: string) =>
                setInputForm((prevState) => {
                  return {
                    ...prevState,
                    last_name: value,
                  }
                })
              }
            />
          </div>
        </div>
        {/* End of name */}

        {/* Email */}
        <div className="contact-us-form-container">
          <div className="">
            EMAIL <span className="text-[0.875rem]">(required)</span>
          </div>
          <div className="grid grid-cols-1">
            <InputField
              className={`contact-us-input ${error.email ? 'error' : ''}`}
              type="email"
              placeholder="Your Email"
              value={inputForm?.email}
              error={error?.email}
              setValue={(value: string) =>
                setInputForm((prevState) => {
                  return {
                    ...prevState,
                    email: value,
                  }
                })
              }
            />
          </div>
        </div>
        {/* End Of Email */}

        {/* Subject */}
        <div className="contact-us-form-container">
          <div className="">
            SUBJECT <span className="text-[0.875rem]">(required)</span>
          </div>
          <div className="grid grid-cols-1">
            <InputField
              className={`contact-us-input ${error.subject ? 'error' : ''}`}
              type="text"
              placeholder="Your Subject"
              value={inputForm?.subject}
              error={error?.subject}
              setValue={(value: string) =>
                setInputForm((prevState) => {
                  return {
                    ...prevState,
                    subject: value,
                  }
                })
              }
            />
          </div>
        </div>
        {/* End Of Message */}
        {/* Subject */}
        <div className="contact-us-form-container">
          <div className="">
            MESSAGE <span className="text-[0.875rem]">(required)</span>
          </div>
          <div className="grid grid-cols-1">
            <TextArea
              className={`contact-us-input ${error.message ? 'error' : ''}`}
              placeholder="Your Subject"
              rows={3}
              value={inputForm?.message}
              error={error?.message}
              setValue={(value: string) =>
                setInputForm((prevState) => {
                  return {
                    ...prevState,
                    message: value,
                  }
                })
              }
            ></TextArea>
          </div>
        </div>
        {/* End Of Subject */}
        <div className="flex justify-end pt-20">
          <ButtonPrimary onClick={handleSubmit}>SUBMIT</ButtonPrimary>
        </div>
      </div>
    </div>
  )
}

export default ReactUsForm
