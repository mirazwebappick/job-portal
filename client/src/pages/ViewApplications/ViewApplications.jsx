import React from "react";
import { useLoaderData, useParams } from "react-router";

const ViewApplications = () => {
  const { job_id } = useParams();
  const applications = useLoaderData();
  console.log(applications);
  return (
    <div>
      <h2 className="text-4xl">
        {applications.length} Application for: {job_id}
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Job</th>
                <th>Favorite Color</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {applications.map((application, index) => (
                <tr>
                  {console.log(application)}
                  <th>{index + 1}</th>
                  <td>{application?.email}</td>
                  <td>Quality Control Specialist</td>
                  <td>
                    <select defaultValue="Select Status" className="select">
                      <option disabled={true}>Select Status</option>
                      <option>Crimson</option>
                      <option>Amber</option>
                      <option>Velvet</option>
                    </select>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </h2>
    </div>
  );
};

export default ViewApplications;
