'use client'
import { Select } from '@/components/Select'
import JobListItem from '../JobListItem'
import { Option } from '@/components/Option'
import { useEffect, useState } from 'react'
import { TVacancy } from '@/types/vacancy'
import { getVacancyList } from '@/services/vacancy'

type TJobListProps = {
  areaList: string[]
  jobList: TVacancy[]
}
type TFilter = {
  area?: string
}
const JobList = ({ areaList, jobList }: TJobListProps) => {
  const [filter, setFilter] = useState<TFilter>({})
  const [jobListState, setJobListState] = useState<TVacancy[]>(jobList)
  useEffect(() => {
    const fetchJobList = async () => {
      const response = await getVacancyList(filter)
      setJobListState(response?.items || [])
    }
    fetchJobList()
  }, [filter])
  return (
    <div className="flex flex-col gap-24">
      <div className="ml-auto w-full lg:w-1/3">
        <Select
          defaultValue={filter.area}
          onChange={(e) => setFilter({ ...filter, area: e.target.value })}
        >
          <Option value="">Works Areas</Option>
          {areaList.map((area) => (
            <Option value={area}>{area}</Option>
          ))}
        </Select>
      </div>
      <div className="border-b border-gray-cloud">
        {jobListState.map((job) => {
          return (
            <JobListItem
              position_name={job.position_name}
              division={job.division}
              employment_type={job.employment_type}
              area={`Kota ${job.area}`}
              url=""
            />
          )
        })}
      </div>
    </div>
  )
}

export default JobList
