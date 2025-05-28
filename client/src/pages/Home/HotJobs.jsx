import React, { use } from "react";
import JobCard from "../Shared/JobCard";

const HotJobs = ({ jobsPromise }) => {
  const jobsData = use(jobsPromise);
  return (
    <div className="py-10">
      <h2 className="text-4xl font-semibold text-center py-5">
        Hot Jobs of the Day
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {jobsData?.map((job, index) => (
          <JobCard key={index} job={job} />
        ))}
      </div>
    </div>
  );
};

export default HotJobs;
