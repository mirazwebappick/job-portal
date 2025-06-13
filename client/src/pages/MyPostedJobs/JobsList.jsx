import { use } from "react";
import { Link } from "react-router";

const JobsList = ({ jobsCreatedByPromises }) => {
  const myJobs = use(jobsCreatedByPromises);
  return (
    <div>
      <h2 className="text-3xl">Jobs created by you: {myJobs?.length}</h2>
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
            {myJobs.map((job, index) => (
              <tr>
                <th>{index + 1}</th>
                <td>{job?.jobTitle}</td>
                <td>{job?.deadline}</td>
                <td>
                  <Link to={`/applications/${job?._id}`}>
                    View Applications
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default JobsList;
