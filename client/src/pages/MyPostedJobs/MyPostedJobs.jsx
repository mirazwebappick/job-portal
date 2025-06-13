import useAuth from "../../hook/useAuth";
import { Suspense } from "react";
import JobsList from "./JobsList";
import { myPostedJob } from "../../api/jobsApi";

const MyPostedJobs = () => {
  const { user } = useAuth();
  return (
    <div>
      <h2>My Posted Jobs: </h2>
      <Suspense>
        <JobsList jobsCreatedByPromises={myPostedJob(user.email)} />
      </Suspense>
    </div>
  );
};

export default MyPostedJobs;
