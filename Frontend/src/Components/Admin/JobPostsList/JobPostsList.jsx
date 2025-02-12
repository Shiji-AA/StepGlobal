import { useEffect, useState } from "react";
import { axiosInstanceAdmin } from "../../../api/axiosInstance"; // Adjust the import as per your API configuration
import toast from "react-hot-toast";
import AdminNavbar from "../../../Components/Admin/AdminNavbar/AdminNavbar"; // Assuming you have this component
import { format } from "date-fns";
const JobPostsList = () => {
  const [jobDetails, setJobDetails] = useState([]);
  
  //to display JobDetails
  useEffect(() => {
    axiosInstanceAdmin
      .get('/adminjoblist')
      .then((response) => {
        if (response.data.jobDetails) {
          console.log(response.data.jobDetails,"Job details")
          setJobDetails(response.data.jobDetails);
        }
      })
      .catch((error) => {
        console.log("Error in fetching data", error);
        toast("Error in fetching data");
      });
  }, []);

   //AdminApproval for job
   const handleToggleStatus = (id) => {
    axiosInstanceAdmin
      .post(`/toggleJobStatus/${id}`)
      .then((response) => {
        const updatedJobDetails = jobDetails.map((job) => {
          if (job._id === id) {
            return { ...job, isApproved: !job.isApproved };
          }
          return job;
        });
        setJobDetails(updatedJobDetails);
        toast.success(response.data.message);
      })
      .catch((error) => {
        console.error("Error toggling job status:", error);
        toast.error("Error toggling job status");
      });
  };

  return (
    <>
      <AdminNavbar />
      <div className="bg-gradient-to-b from-blue-200 to-white p-4 rounded-lg">
        <div className="px-3 mt-10">
          <div className="max-w-4xl mx-auto bg-white rounded-lg overflow-hidden shadow-md">
            <div className="bg-white p-4 sm:flex sm:justify-between items-center rounded-t-lg">
              <h3 className="text-2xl font-bold mb-4 sm:mb-0 sm:mr-4">Job Approval List</h3>
            </div>
            <div className="overflow-x-auto w-full">
              <table className="table text-gray-400 border-separate space-y-6 text-sm w-full">
                <thead className="bg-blue-500 text-white">
                  <tr>
                    <th className="p-3">Sl No</th>
                    <th className="p-3 text-left">Category</th>
                    <th className="p-3 text-left">Company Name</th>
                    <th className="p-3 text-left">Job Title</th>
                    <th className="p-3 text-left">Job Location</th>
                    <th className="p-3 text-left">Salary</th>
                    <th className="p-3 text-left">Created Date</th>                 
                    <th className="p-3 text-left">Actions</th>
                  </tr>
                </thead>
                <tbody>            

{jobDetails.map((job, index) => (

  
    <tr key={job._id} className="bg-blue-100 lg:text-black">
      <td className="p-3 font-medium capitalize">{index + 1}</td>
      <td className="p-3">{job.category?.title || "N/A"}</td>
      <td className="p-3">{job.companyName}</td>
      <td className="p-3">{job.jobTitle}</td>
      <td className="p-3">{job.jobLocation?.street || "Not specified"}</td>
      <td className="p-3">{job.salary}</td>     
      <td className="p-3">{format(new Date(job.createdAt), "dd-MM-yyyy")}</td>

      <td className="px-6 py-4">
        <button
          onClick={() => handleToggleStatus(job._id)}
          className={
            job.isApproved
              ? "text-green-900 bg-gradient-to-r from-green-300 via-green-400 to-green-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
              : "text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 font-medium rounded-lg text-sm px-7 py-2.5 text-center mr-2 mb-2"
          }
        >
          {job.isApproved ? "Approved" : "Not Approved"}
        </button>
      </td>
    </tr>
  
))}



                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default JobPostsList;
