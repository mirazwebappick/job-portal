import React, { use } from "react";

const ApplicationList = ({ myApplicationsPromises }) => {
  const applications = use(myApplicationsPromises);
  console.log(applications);
  return (
    <div>
      <h2 className="text-3xl">Jobs Applied so far : {applications?.length}</h2>
    </div>
  );
};

export default ApplicationList;
