import React from "react";
import { useLoaderData, useParams } from "react-router";
import axios from "axios";

const ViewApplications = () => {
  const { job_id } = useParams();
  const applications = useLoaderData();
  const handleStatus = (e, app_id) => {
    console.log(e.target.value, app_id);
    axios
      .patch(`http://localhost:3000/applications/${app_id}`, {
        status: e.target.value,
      })
      .then((res) => {
        console.log("Updated Successful", res.data);
      })
      .catch((error) => {
        console.log("update failed", error);
      });
  };
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
                  <th>{index + 1}</th>
                  <td>{application?.email}</td>
                  <td>Quality Control Specialist</td>
                  <td>
                    <select
                      onChange={(e) => handleStatus(e, application._id)}
                      defaultValue={application.status}
                      className="select"
                    >
                      <option disabled={true}>Select Status</option>
                      <option>Pending</option>
                      <option>In Interview</option>
                      <option>Hired</option>
                      <option>Rejected</option>
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
