'use client'
import { TInsight } from '@/types/insight'
import Image from 'next/image'
import Link from 'next/link'
import { ReactNode, useEffect } from 'react'
import toastr from 'toastr'
import { customConfig } from '../../../config'

type TInsightCardProp = {
  insight: TInsight
}

export const InsightAction = ({ insight }: TInsightCardProp) => {
  useEffect(() => {
    // Initialize Toastr options if needed
    toastr.options = {
      closeButton: true,
      progressBar: true,
      positionClass: 'toast-bottom-right',
      timeOut: 3000,
      extendedTimeOut: 1000,
      showEasing: 'swing',
      hideEasing: 'linear',
      showMethod: 'fadeIn',
      hideMethod: 'fadeOut',
    }
  }, [])

  const handleCopy = () => {
    const currentUrl = window.location.href // Get the current URL

    navigator.clipboard.writeText(currentUrl).then(
      () => {
        toastr.success('URL copied to clipboard!')
      },
      () => {
        toastr.error('Failed to copy the URL!')
      }
    )
  }

  const handlePrint = () => {
    window.print() // Open the print dialog
  }

  const handleDownload = () => {
    const pdfFile = insight.pdf_file
    const pdfFilePath = `${customConfig.POCKETBASE_FILE_URL}/insights/${insight.id}/${pdfFile}`

    window.open(pdfFilePath, '_blank') // Open the file in a new tab
  }

  return (
    <div className="flex gap-12 mobile-min:gap-16 lg:gap-24">
      <div
        className="insight-action-container"
        onClick={handleCopy}
      >
        <Image
          src="/images/icon/share.svg"
          width={14}
          height={16}
          alt="share"
        />
        <span>Share</span>
      </div>
      <div
        className="insight-action-container"
        onClick={handlePrint}
      >
        <Image
          src="/images/icon/print.svg"
          width={14}
          height={16}
          alt="share"
        />
        <span>Print</span>
      </div>
      <div
        className="insight-action-container"
        onClick={handleDownload}
      >
        <Image
          src="/images/icon/download.svg"
          width={14}
          height={16}
          alt="share"
        />
        <span>Download</span>
      </div>
    </div>
  )
}
