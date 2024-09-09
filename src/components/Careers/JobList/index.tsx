'use client'
type TJobListProps = {
  title: string
  department: string
  type: string
  location: string
  url: string
}

const JobList = ({ title, department, type, location, url }: TJobListProps) => {
  return (
    <div className="pt-10 pb-22 font-inter text-12 leading-[20px] border-t border-gray-cloud text-black grid grid-cols-3">
      <div className="col-span-2">
        <div className="font-supplymono text-xl">{title}</div>
        <div className="grid grid-cols-3">
          <div className="flex gap-10"></div>
        </div>
      </div>
    </div>
  )
}

export default JobList
