import { useEffect, useState } from 'react';
import { axiosInstance } from '../../../api/axiosinstance'; // Adjust with your axios instance
import toast from 'react-hot-toast';

function SavedJobs() {
  const [savedJobs, setSavedJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSavedJobs = async () => {
      setLoading(true);
      try {
        const response = await axiosInstance.get('/savedJobsList');
        console.log(response.data?.savedJobsList,"savedJobsList")
        setSavedJobs(response.data?.savedJobsList);
      } catch (error) {
        toast.error('Error fetching saved jobs.');
        console.error("Error fetching saved jobs:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchSavedJobs();
  }, []); // Empty dependency array to run the effect once on component mount

  function handleApply(jobId) {
    if (!jobId) return;
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

  return (
    <div className="saved-jobs bg-gradient-to-tl from-indigo-50 to-purple-100 min-h-screen py-12">
      <div className="max-w-6xl mx-auto px-8">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-6 text-center">Saved Jobs</h1>

        {loading ? (
          <div className="text-center text-lg text-gray-500">Loading saved jobs...</div>
        ) : savedJobs.length === 0 ? (
          <div className="text-center text-lg text-gray-500">No saved jobs found.</div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {savedJobs.map((savedJob) => (
              <div key={savedJob._id} className="bg-white rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:scale-105">
                <div className="relative">
                  <img
                    className="w-full h-48 object-cover rounded-t-xl"
              
                    alt={savedJob?.jobId?.companyName || 'Company Logo'}
                  />
                  <div className="absolute top-4 left-4 text-white text-xl font-bold bg-black bg-opacity-50 py-2 px-4 rounded-lg">
                    {savedJob?.jobId?.jobTitle || 'N/A'}
                  </div>
                </div>

                <div className="p-6">
                  <p className="text-gray-800 font-semibold text-lg">{savedJob?.jobId?.companyName || 'Unknown Company'}</p>
                  <p className="text-gray-600 mt-2">{savedJob?.jobId?.companyDescription || 'No Description'}</p>
                  <div className="mt-4 text-sm text-gray-500 flex items-center gap-2">
                    <span className="bg-purple-200 text-purple-700 px-3 py-1 rounded-full">
                      {savedJob?.jobId?.jobLocationType || 'N/A'}
                    </span>
                    <span className="text-gray-600">
                      {savedJob?.jobId?.jobLocation?.city}, {savedJob?.jobId?.jobLocation?.state}
                    </span>
                  </div>
                </div>

                <div className="p-6 bg-gray-100 rounded-b-xl">
                  <button
                    className="w-full bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700 transition-all"
                    onClick={() => handleApply(savedJob?.jobId?._id)}
                  >
                    Apply Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default SavedJobs;
