import { FaMapMarkerAlt } from "react-icons/fa";
import { Link } from "react-router";

const JobCard = ({ job }) => {
  const {
    title,
    company,
    description,
    location,
    company_logo,
    salaryRange,
    requirements,
    _id,
  } = job;
  return (
    <div className="card bg-base-100 w-96 shadow-sm">
      <div className="flex items-center gap-2">
        <figure>
          <img src={company_logo} className="w-16" alt="Shoes" />
        </figure>
        <div className="">
          <h2>{company}</h2>
          <div className="flex items-center gap-1">
            <FaMapMarkerAlt />
            <p>{location}</p>
          </div>
        </div>
      </div>
      <div className="card-body">
        <h2 className="card-title">
          {title}
          <div className="badge badge-secondary">NEW</div>
        </h2>
        <p>
          Salary: {salaryRange.min} - {salaryRange.max} {salaryRange.currency}
        </p>

        <p>{description}</p>
        <div className="card-actions">
          {requirements?.map((skill, index) => (
            <div key={index} className="badge badge-outline">
              {skill}
            </div>
          ))}
        </div>
        <div className="text-end">
          <Link className="btn btn-primary" to={`/jobs/${_id}`}>
            Show Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
