import { useEffect, useState } from "react";
import { axiosInstanceRecruiter } from "../../../api/axiosInstance";
import RecruiterNavbar from "../RecruiterNavbar/RecruiterNavbar";
import { Link } from "react-router-dom";

function JobListingRecruiter() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {  
    const fetchJobs = async () => {
      try {
        const response = await axiosInstanceRecruiter.get("/viewjobs");
        console.log(response.data.jobDetails,"Jobdetails") 
        setJobs(response.data.jobDetails || []);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  if (loading) {
    return <div>Loading jobs...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!jobs.length) {
    return <div>No jobs found.</div>;
  }


  const handleDelete = async (jobId) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this job?"
    );
    if (!confirmDelete) return;

    try {
      await axiosInstanceRecruiter.delete(`/deletejob/${jobId}`); // Replace with your actual API endpoint
      setJobs((prevJobs) => prevJobs.filter((job) => job._id !== jobId));
      alert("Job deleted successfully!");
    } catch (err) {
      alert(`Error deleting job: ${err.message}`);
    }
  };

  if (loading) {
    return <div>Loading jobs...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!jobs.length) {
    return <div>No jobs found.</div>;
  }


  return (
    <>
      <RecruiterNavbar />
      <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-gray-50 p-6 sm:py-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Job Listings</h2>
        {jobs.map((job) => (
          <div
            key={job._id}
            className="bg-white shadow-xl shadow-gray-100 w-full max-w-4xl flex flex-col sm:flex-row gap-3 sm:items-center justify-between px-5 py-4 rounded-md mb-4"
          >
            <div className="flex flex-col sm:flex-row gap-3 sm:items-start">
              <div>
                <span className="text-purple-800 text-sm">{job.category.title|| "N/A"}</span>
                <h3 className="font-bold mt-px">{job.jobTitle}</h3>
                <p className="text-gray-600 text-sm mt-1">
                  {job.companyName} - {job.companyDescription}
                </p>
                <div className="flex items-center gap-3 mt-2">
                  <span className="bg-purple-100 text-purple-700 rounded-full px-3 py-1 text-sm">
                    {job.jobLocationType || "Not specified"}
                  </span>
                  <span className="text-slate-600 text-sm flex gap-1 items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    {job.jobLocation
                      ? `${job.jobLocation.street}, ${job.jobLocation.city}, ${job.jobLocation.state}, ${job.jobLocation.pincode}`
                      : "Location not specified"}
                  </span>
                </div>
                <p className="text-gray-600 text-sm mt-2">Salary: {job.salary || "Not specified"}</p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-2 mt-4 sm:mt-0">
              <Link to={`/editjob/${job?._id}`}>
              <button className="bg-blue-500 text-white font-medium px-4 py-2 rounded-md flex gap-1 items-center">
                Edit Job
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </button>
              </Link>
            
            <Link>
            <button  onClick={() => handleDelete(job._id)} className="bg-red-500 text-white font-medium px-4 py-2 rounded-md flex gap-1 items-center">
                Delete Job
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 7l-7 7-7-7"
                  />
                </svg>
              </button>
            </Link>
           
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default JobListingRecruiter;
