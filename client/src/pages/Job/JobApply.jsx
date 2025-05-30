import { Link, useParams } from "react-router";
import useAuth from "../../hook/useAuth";
import axios from "axios";
import toast from "react-hot-toast";

const JobApply = () => {
  const { id: jobId } = useParams();
  const { user } = useAuth();
  console.log({ user, jobId });
  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const linkedin = form.linkedin.value;
    const github = form.github.value;
    const resume = form.resume.value;
    const applicable = {
      jobId,
      email: user.email,
      linkedin,
      github,
      resume,
    };
    axios
      .post("http://localhost:3000/application", applicable)
      .then((result) => {
        if (result?.data?.insertedId) {
          console.log("application data pass after database", result.data);
          toast.success("Your Application has been submitted");
        }
      })
      .catch((error) => {
        console.log("Error application data to Database", error);
      });
  };
  return (
    <div>
      <h2>
        Apply for this job : <Link to={`/jobs/${jobId}`}>Details</Link>
      </h2>
      <form onSubmit={handleSubmit}>
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs mx-auto border p-4">
          <label className="label">LinkedIn Link</label>
          <input
            type="url"
            className="input"
            name="linkedin"
            placeholder="LinkedIn Link"
          />

          <label className="label">Github Link</label>
          <input
            type="text"
            className="input"
            name="github"
            placeholder="Github Link"
          />

          <label className="label">Resume Link</label>
          <input
            type="text"
            className="input"
            name="resume"
            placeholder="Resume Link"
          />
          <input type="submit" className="btn btn-primary" value="Apply" />
        </fieldset>
      </form>
    </div>
  );
};

export default JobApply;
