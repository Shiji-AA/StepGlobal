import { useState, useEffect, useMemo } from "react";
import { axiosInstance } from "../../../api/axiosInstance";
import toast from "react-hot-toast";
import { useNavigate , useParams } from "react-router-dom";
import { useSelector } from "react-redux";

function JobListingByCategory() {
    const navigate = useNavigate();
    const user = useSelector((state) => state.auth.userdata);
    
    const [searchTerm, setSearchTerm] = useState("");
    const [locationFilter, setLocationFilter] = useState("");
    const [typeFilter, setTypeFilter] = useState("");
    const [jobDetails, setJobDetails] = useState([]);
    const [loading, setLoading] = useState(true);
    const { id } = useParams();
 

    // Fetch Job Details
    useEffect(() => {
        if (!id) return;
        setLoading(true);
        axiosInstance
            .get(`/userjoblistbycategory/${id}`)
            .then((response) => {
                const jobs = response.data?.jobDetails || [];              
                setJobDetails(jobs);
            })
            .catch((error) => {
                console.error("Error in fetching data", error);
                toast.error("Error in fetching data");
            })
            .finally(() => setLoading(false));
    }, [id]);


function handleApply(jobId) {
    if (!jobId) return;
      // Redirect to login if not authenticated
      if (!user) {
        toast.error("You need to log in first!");
        navigate("/login");
        return;
    }
    const confirmApply = window.confirm("Are you sure you want to apply for this job?");
    if (confirmApply) {
        axiosInstance.post(`/applyJob/${jobId}`) // Replace with your API endpoint
            .then((response) => {
                if (response.data.success) {
                    toast.success("You have successfully applied for the job!");
                } else {
                    toast.error(response.data.message || "Failed to apply for the job.");
                }
            })
            .catch((error) => {
                const errorMessage = error.response?.data?.message || "An error occurred while applying for the job.";
                toast.error(errorMessage);
            });
    }
}

   // Function to handle saving a job
   function handleSave(jobId) {
    if (!jobId) return;

// Redirect to login if not authenticated
if (!user) {
    toast.error("You need to log in first!");
    navigate("/login");
    return;
}
    const confirmSave = window.confirm("Are you sure you want to save this job?");
    if (confirmSave) {
        axiosInstance
            .post(`/saveJob/${jobId}`) // Replace with your save job API endpoint
            .then((response) => {
                if (response.data.success) {
                    toast.success("Job saved successfully!");
                } else {
                    toast.error(response.data.message || "Failed to save the job.");
                }
            })
            .catch((error) => {
                const errorMessage = error.response?.data?.message || "An error occurred while saving the job.";
                toast.error(errorMessage);
            });
    }
}


    // Filter jobs based on search term, location, and type
    const filteredJobs = useMemo(() => {
        return jobDetails.filter((job) => {
            const titleMatch = job?.jobTitle?.toLowerCase().includes(searchTerm.toLowerCase());
            const locationMatch = locationFilter
                ? job?.jobLocation?.city?.toLowerCase() === locationFilter.toLowerCase()
                : true;
            const typeMatch = typeFilter
                ? job?.jobLocationType?.toLowerCase() === typeFilter.toLowerCase()
                : true;
            return titleMatch && locationMatch && typeMatch;
        });
    }, [jobDetails, searchTerm, locationFilter, typeFilter]);

    
    return (
        <div className="bg-gray-50 min-h-screen p-6 sm:py-12">
            {/* Search and Filter Section */}
            <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-md p-5 mb-8">
                <h1 className="text-2xl font-bold text-gray-800 mb-4">Find Your Dream Job</h1>
                <div className="flex flex-wrap gap-4">
                    <input
                        type="text"
                        className="flex-grow p-3 border rounded-md focus:ring-2 focus:ring-purple-600 outline-none"
                        placeholder="Search by job title"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <input
                        type="text"
                        className="p-3 border rounded-md focus:ring-2 focus:ring-purple-600"
                        placeholder="Search by city"
                        value={locationFilter}
                        onChange={(e) => setLocationFilter(e.target.value)}
                    />
                    <select
                        className="p-3 border rounded-md focus:ring-2 focus:ring-purple-600"
                        value={typeFilter}
                        onChange={(e) => setTypeFilter(e.target.value)}
                    >
                        <option value="">All Job Types</option>
                        <option value="remote">Remote</option>
                        <option value="hybrid">Hybrid</option>
                        <option value="onsite">Onsite</option>
                    </select>
                    <button className="bg-purple-600 text-white px-6 py-3 rounded-md hover:bg-purple-700 transition">
                        Search
                    </button>
                </div>
            </div>

            {/* Job Listings */}
            <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols gap-6">
                {loading ? (
                    <p className="text-center text-gray-500">Loading jobs...</p>
                ) : filteredJobs.length > 0 ? (
                    filteredJobs.map((job, index) => (
                        <div
                            key={job?._id || index}
                            className="bg-white shadow-md rounded-md p-5 hover:shadow-lg transition"
                        >
                            <h3 className="text-lg font-semibold text-gray-800">{job?.jobTitle || "N/A"}</h3>
                            <p className="text-sm text-gray-600">{job?.companyName || "Unknown Company"}</p>
                            <p className="text-sm text-gray-500">{job?.companyDescription || "No Description"}</p>
                            <div className="flex items-center gap-2 mt-2 text-sm">
                                <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full">
                                    {job?.jobLocationType || "N/A"}
                                </span>
                                <span className="text-gray-500">
                                    {job?.jobLocation?.city}, {job?.jobLocation?.state}
                                </span>
                            </div>


                            <div className="flex justify-between mt-4">
                                <button
                                    onClick={() => handleSave(job?._id)}
                                    className="bg-teal-600 text-white px-4 py-2 rounded-md hover:bg-teal-700 transition"
                                >
                                    Save Job
                                </button>
                                <button onClick={() => handleApply(job?._id)} 
                                    className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 transition"
                                >
                                    Apply Now
                                </button>
                            </div>    
                        </div>                    ))
                ) : (
                    <p className="text-center text-gray-500">No jobs found.</p>
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

export default JobListingByCategory;
