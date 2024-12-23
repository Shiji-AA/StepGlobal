import { useState, useEffect, useMemo } from "react";
import { axiosInstance } from "../../../api/axiosinstance";
import toast from "react-hot-toast";

function JobListing() {
    const [searchTerm, setSearchTerm] = useState("");
    const [locationFilter, setLocationFilter] = useState("");
    const [typeFilter, setTypeFilter] = useState("");
    const [jobDetails, setJobDetails] = useState([]);
    const [loading, setLoading] = useState(true);

    // Fetch Job Details
    useEffect(() => {
        setLoading(true);
        axiosInstance
            .get('/userjoblist')
            .then((response) => {
                const jobs = response.data?.jobDetails || [];
                setJobDetails(jobs);
            })
            .catch((error) => {
                console.error("Error in fetching data", error);
                toast.error("Error in fetching data");
            })
            .finally(() => setLoading(false));
    }, []);

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
                            <div className="flex justify-end ">
            <button className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 transition">
                Apply Now
            </button>
        </div>
                        </div>
                    ))
                ) : (
                    <p className="text-center text-gray-500">No jobs found.</p>
                )}
            </div>

            {/* Footer */}
            <div className="mt-12 text-center">
                <button className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition">
                    Load More Jobs
                </button>
            </div>
        </div>
    );
}

export default JobListing;
