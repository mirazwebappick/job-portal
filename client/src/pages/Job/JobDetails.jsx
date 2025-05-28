import React from "react";
import { Link, useLoaderData } from "react-router";

const JobDetails = () => {
  const {
    title,
    location,
    jobType,
    category,
    applicationDeadline,
    salaryRange,
    description,
    company,
    requirements,
    responsibilities,
    hr_email,
    hr_name,
    company_logo,
    _id,
  } = useLoaderData();

  return (
    <div className="max-w-5xl mx-auto p-6 bg-white shadow-lg rounded-2xl mt-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row items-start md:items-center gap-4 mb-6">
        <img
          src={company_logo}
          alt={company}
          className="w-16 h-16 object-contain"
        />
        <div>
          <h1 className="text-2xl font-bold">{title}</h1>
          <p className="text-sm text-gray-500">
            {company} • {location}
          </p>
        </div>
        <span className="ml-auto bg-blue-100 text-blue-700 text-sm font-semibold px-3 py-1 rounded-full">
          {jobType}
        </span>
      </div>

      {/* Description */}
      <p className="text-gray-700 mb-4">{description}</p>

      {/* Info Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
        <div>
          <p className="text-gray-600 font-semibold">Category:</p>
          <p>{category}</p>
        </div>
        <div>
          <p className="text-gray-600 font-semibold">Application Deadline:</p>
          <p>{new Date(applicationDeadline).toLocaleDateString()}</p>
        </div>
        <div>
          <p className="text-gray-600 font-semibold">Salary Range:</p>
          <p>
            {salaryRange.min} - {salaryRange.max}{" "}
            {salaryRange.currency.toUpperCase()}
          </p>
        </div>
        <div>
          <p className="text-gray-600 font-semibold">Contact Email:</p>
          <p className="text-blue-600 underline">{hr_email}</p>
        </div>
      </div>

      {/* Requirements & Responsibilities */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
        <div>
          <h2 className="text-lg font-semibold mb-2">Requirements</h2>
          <ul className="list-disc list-inside space-y-1 text-gray-700">
            {requirements.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-lg font-semibold mb-2">Responsibilities</h2>
          <ul className="list-disc list-inside space-y-1 text-gray-700">
            {responsibilities.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* HR Info */}
      <div className="border-t pt-4 text-sm text-gray-600">
        <p>
          HR Contact: <span className="font-semibold">{hr_name}</span>
        </p>
        <p>
          Status:{" "}
          <span className="text-green-600 font-semibold capitalize">
            Active
          </span>
        </p>
      </div>

      <div className="mt-6 text-center">
        <Link
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg transition duration-200"
          to={`/job_apply/${_id}`}
        >
          Apply Now
        </Link>
      </div>
    </div>
  );
};

export default JobDetails;
