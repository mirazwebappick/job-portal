import axios from "axios";
import useAuth from "../../hook/useAuth";

const AddJob = () => {
  const { user } = useAuth();
  const handleAddJob = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    // process salary range
    const { min, max, currency, ...newJob } = data;
    newJob.salaryRange = { min, max, currency };

    // process requirements
    newJob.requirements = newJob.requirement
      .split(",")
      .map((req) => req.trim());

    // process Responsibilities
    newJob.responsibilities = newJob.responsibilities
      .split(",")
      .map((req) => req.trim());

    newJob.status = "active";

    // save job to the database
    axios
      .post("http://localhost:3000/jobs", newJob)
      .then((result) => {
        console.log("job data store after database", result?.data);
      })
      .catch((error) => {
        console.log("job stored failed to database", error);
      });
  };
  return (
    <div>
      <h2>Add Job</h2>

      <form action="" onSubmit={handleAddJob}>
        {/* Basic Info */}
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <legend className="fieldset-legend">Basic Info</legend>

          <label className="label">Job Title</label>
          <input
            type="text"
            className="input"
            name="jobTitle"
            placeholder="Job Title"
          />

          <label className="label">Company</label>
          <input
            type="text"
            className="input"
            name="companyName"
            placeholder="Company Name"
          />

          <label className="label">Location</label>
          <input
            type="text"
            className="input"
            placeholder="Company Location"
            name="companyLocation"
          />

          <label className="label">Company logo</label>
          <input
            type="text"
            className="input"
            placeholder="Company Logo URL"
            name="companyLocation"
          />
        </fieldset>

        {/* Job Type */}
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <legend className="fieldset-legend">Job Type</legend>
          <div className="filter">
            <input
              className="btn filter-reset"
              type="radio"
              name="jobType"
              aria-label="All"
            />
            <input
              className="btn"
              type="radio"
              name="jobType"
              aria-label="Remote"
              value="remote"
            />
            <input
              className="btn"
              type="radio"
              name="jobType"
              aria-label="Onsite"
              value="onsite"
            />
            <input
              className="btn"
              type="radio"
              name="jobType"
              aria-label="Hybrid"
              value="hybrid"
            />
          </div>
        </fieldset>

        {/* Job Category */}
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <legend className="fieldset-legend">Job Category</legend>
          <select
            defaultValue="Job Category"
            name="category"
            className="select"
          >
            <option disabled={true}>Job Category</option>
            <option>Engineering</option>
            <option>Marketing</option>
            <option>Finance</option>
            <option>Teaching</option>
            <option>Management</option>
            <option>Data Science</option>
            <option>Design</option>
            <option>Development</option>
          </select>
        </fieldset>

        {/* Application Deadline */}
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <legend className="fieldset-legend">Application Deadline</legend>
          <input type="date" name="deadline" className="input" />
        </fieldset>

        {/* Salary Range */}
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <legend className="fieldset-legend">Salary Range</legend>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
            <div>
              <label className="label">Minimum Salary</label>
              <input
                type="text"
                className="input"
                name="min"
                placeholder="Minimum Salary"
              />
            </div>

            <div>
              <label className="label">Maximum Salary</label>
              <input
                type="text"
                className="input"
                name="max"
                placeholder="Maximum Salary"
              />
            </div>

            <div>
              <label className="label">Currency</label>
              <select
                defaultValue="Select a Currency"
                name="currency"
                className="select"
              >
                <option disabled={true}>Job Category</option>
                <option>BDT</option>
                <option>USD</option>
                <option>EU</option>
              </select>
            </div>
          </div>
        </fieldset>

        {/* Job Description */}
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <legend className="fieldset-legend">Job Description</legend>
          <textarea
            className="textarea"
            placeholder="Job Description"
            name="description"
          ></textarea>
        </fieldset>

        {/* Job Requirement*/}
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <legend className="fieldset-legend">Job Requirements</legend>
          <textarea
            className="textarea"
            placeholder="Job Requirements (separate by comma)"
            name="requirement"
          ></textarea>
        </fieldset>

        {/* Job Responsibilities*/}
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <legend className="fieldset-legend">Job Responsibilities</legend>
          <textarea
            className="textarea"
            placeholder="Job responsibilities (separate by comma)"
            name="responsibilities"
          ></textarea>
        </fieldset>

        {/* HR Related Info */}
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <legend className="fieldset-legend">HR Related Info</legend>

          <label className="label">HR Name</label>
          <input
            type="text"
            className="input"
            name="hr_name"
            placeholder="HR Name"
          />

          <label className="label">HR Email</label>
          <input
            type="email"
            className="input"
            name="hr_email"
            placeholder="HR Email"
            defaultValue={user?.email}
          />
        </fieldset>

        <input type="submit" className="btn" value="Add Job" />
      </form>
    </div>
  );
};

export default AddJob;
