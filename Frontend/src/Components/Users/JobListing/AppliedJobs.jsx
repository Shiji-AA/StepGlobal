import  { useState, useEffect } from "react";
import { axiosInstance } from "../../../api/axiosInstance";
import toast from "react-hot-toast";

function AppliedJobs() {
  const [appliedJobs, setAppliedJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch applied jobs for the user
    setLoading(true);
    axiosInstance
      .get("/appliedJobs") // Replace with your actual API endpoint
      .then((response) => {
        console.log(response.data?.appliedJobs ,"appliedJobs")
        const jobs = response.data?.appliedJobs;
        setAppliedJobs(response.data?.appliedJobs || []);
        
        if(jobs.length ===0){
          toast.error("No applied jobs yet");
        }
      })
     
      .catch((error) => {
        console.error("Error fetching applied jobs:", error);
      
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="bg-gray-50 min-h-screen p-6 sm:py-12">
      {/* Section Heading */}
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-md p-5 mb-8">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">My Applied Jobs</h1>
      </div>

      {/* Applied Jobs List */}
      <div className="max-w-4xl mx-auto space-y-6">
        {loading ? (
          <p className="text-center text-gray-500">Loading applied jobs...</p>
        ) : appliedJobs.length > 0 ? (
          appliedJobs.map((job, index) => (
            <div
              key={job?._id || index}
              className="bg-white shadow-md rounded-md p-5 hover:shadow-lg transition"
            >
              <h3 className="text-lg font-semibold text-gray-800">
                {job?.jobId?.jobTitle || "N/A"}
              </h3>
              <p className="text-sm text-gray-600">{job?.jobId?.companyName || "Unknown Company"}</p>
              <p className="text-sm text-gray-500">{job?.jobId?.companyDescription || "No Description"}</p>
              <div className="flex items-center gap-2 mt-2 text-sm">
                <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full">
                  {job?.jobId?.jobLocationType || "N/A"}
                </span>
                <span className="text-gray-500">
                  {job?.jobId?.jobLocation?.city}, {job?.jobLocation?.state}
                </span>
              </div>

              {/* Application Status */}
              <div className="mt-3">
                <span
                  className={`${
                    job?.status === "Accepted"
                      ? "bg-green-100 text-green-700"
                      : job?.status === "Rejected"
                      ? "bg-red-100 text-red-700"
                      : "bg-yellow-100 text-yellow-700"
                  } px-3 py-1 rounded-full text-sm font-medium`}
                >
                  {job?.status || "Pending"}
                </span>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500">You havent applied for any jobs yet.</p>
        )}
      </div>

      {/* Footer */}
      <div className="mt-12 text-center">
        <button className="bg-teal-600 text-white px-6 py-3 rounded-md hover:bg-teal-700 transition">
          Load More Jobs
        </button>
      </div>
    </div>
  );
}

export default AppliedJobs;
