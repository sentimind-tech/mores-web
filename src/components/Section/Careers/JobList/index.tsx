import JobListItem from '../JobListItem'

const JobList = () => {
  return (
    <div className="flex flex-col">
      <div></div>
      <div className="border-b border-gray-cloud">
        <JobListItem
          title="Customer Success Senior Specialist, Next Generation Software Solutions"
          department="Design"
          type="Permanent Full Time"
          location="Kota Bandung"
          url=""
        />
        <JobListItem
          title="Customer Success"
          department="Design"
          type="Permanent Full Time"
          location="Kota Bandung"
          url=""
        />
      </div>
    </div>
  )
}

export default JobList
