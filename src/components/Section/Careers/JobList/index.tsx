"use client";
import { Select } from "@/components/Select";
import JobListItem from "../JobListItem";
import { Option } from "@/components/Option";
import { useEffect, useState } from "react";
import { TVacancy } from "@/types/vacancy";
import { getVacancyList } from "@/services/vacancy";
import { useTranslations } from "next-intl";

type TJobListProps = {
  areaList: string[];
  jobList: TVacancy[];
};
type TFilter = {
  area?: string;
};
const JobList = ({ areaList, jobList }: TJobListProps) => {
  const t = useTranslations("CareerPage");
  const [filter, setFilter] = useState<TFilter>({});
  const [jobListState, setJobListState] = useState<TVacancy[]>(jobList);
  useEffect(() => {
    const fetchJobList = async () => {
      const response = await getVacancyList(filter);
      setJobListState(response || []);
    };
    fetchJobList();
  }, [filter]);
  return (
    <div className="flex flex-col gap-24 md:gap-[48px]">
      <div className="ml-auto w-full lg:w-1/3">
        <Select
          defaultValue={filter.area}
          onChange={(e) => setFilter({ ...filter, area: e.target.value })}
        >
          <Option value="">{t("jobs_dropdown_placeholder")}</Option>
          {areaList.map((area) => (
            <Option key={area} value={area}>
              {area}
            </Option>
          ))}
        </Select>
      </div>
      <div className="border-b border-gray-cloud">
        {jobListState.map((job) => {
          return (
            <JobListItem
              key={job.id}
              position_name={job.position_name}
              division={job.division}
              employment_type={job.employment_type}
              area={`Kota ${job.area}`}
              url={job.application_url}
            />
          );
        })}
      </div>
    </div>
  );
};

export default JobList;
