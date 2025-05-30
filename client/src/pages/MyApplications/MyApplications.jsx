import React, { Suspense } from "react";
import ApplicationStats from "./ApplicationStats";
import ApplicationList from "./ApplicationList";
import useAuth from "../../hook/useAuth";
import { myApplicationsPromises } from "../../api/applicationsApi";

const MyApplications = () => {
  const { user } = useAuth();
  return (
    <div>
      <h2>My Applications</h2>
      <ApplicationStats />
      <Suspense fallback={"loading your applications"}>
        <ApplicationList
          myApplicationsPromises={myApplicationsPromises(user?.email)}
        />
      </Suspense>
    </div>
  );
};

export default MyApplications;
