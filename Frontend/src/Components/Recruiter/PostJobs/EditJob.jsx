import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { axiosInstanceRecruiter } from "../../../api/axiosinstance.jsx";
import RecruiterNavbar from "../RecruiterNavbar/RecruiterNavbar";
import toast from "react-hot-toast";

function EditJob() {
  const { id } = useParams(); // Get job ID from URL
  const navigate = useNavigate(); // For navigation after save

  // State for job details
  const [jobTitle, setJobTitle] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [companyDescription, setCompanyDescription] = useState("");
  const [categoryDetails, setCategoryDetails] = useState([]);
  const [selectCategory, setSelectCategory] = useState("");
  const [jobLocationType, setJobLocationType] = useState("");
  const [jobLocation, setJobLocation] = useState({
    street: "",
    city: "",
    state: "",
    pincode: ""
  });
  const [salary, setSalary] = useState("");

  // Fetch job details based on ID
  useEffect(() => {
    axiosInstanceRecruiter
      .get(`/editjob/${id}`)
      .then((response) => {
        if (response.data && response.data.jobDetails) {        
          const jobDetails = response.data.jobDetails;
console.log(jobDetails,"jobDetailsss")
          setJobTitle(jobDetails.jobTitle || "");
          setCompanyName(jobDetails.companyName || "");
          setCompanyDescription(jobDetails.companyDescription || "");
          setSelectCategory(jobDetails.category|| "");
          setJobLocationType(jobDetails.jobLocationType || "");

          if (jobDetails.jobLocation) {
            setJobLocation({
              street: jobDetails.jobLocation.street || "",
              city: jobDetails.jobLocation.city || "",
              state: jobDetails.jobLocation.state || "",
              pincode: jobDetails.jobLocation.pincode || ""
            });
          }

          setSalary(jobDetails.salary || "");
        }
      })
      .catch((error) => {
        console.error("Error fetching job details:", error);
        toast.error("Failed to load job details. Please try again.");
      });
  }, [id]);

  // Fetch all available categories
  useEffect(() => {
    axiosInstanceRecruiter
      .get("/categories")
      .then((response) => {
        if (response.data.categoryDetails) {
          setCategoryDetails(response.data.categoryDetails);
        }
      })
      .catch((error) => {
        console.error("Error fetching categories:", error);
        toast.error("Error fetching categories. Please try again later.");
      });
  }, []);

  // Handle form field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "street" || name === "city" || name === "state" || name === "pincode") {
      setJobLocation((prevLocation) => ({
        ...prevLocation,
        [name]: value
      }));
    } else {
      switch (name) {
        case "jobTitle":
          setJobTitle(value);
          break;
        case "companyName":
          setCompanyName(value);
          break;
        case "companyDescription":
          setCompanyDescription(value);
          break;
        case "jobLocationType":
          setJobLocationType(value);
          break;
        case "salary":
          setSalary(value);
          break;
        default:
          break;
      }
    }
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!jobTitle || !companyName || !selectCategory || !jobLocationType) {
      toast.error("Please fill in all required fields.");
      return;
    }

    const updatedJob = {
      jobTitle,
      companyName,
      companyDescription,
      category: selectCategory,
      jobLocationType,
      jobLocation,
      salary
    };

    axiosInstanceRecruiter
      .put(`/updatejob/${id}`, updatedJob)
      .then((response) => {
        if (response.data.message) {
          toast.success("Job updated successfully");
          navigate(`/viewjobs`);
        }
      })
      .catch((error) => {
        console.error("Error updating job:", error);
        toast.error("Failed to update the job. Please try again.");
      });
  };

  return (
    <>
      <RecruiterNavbar />
      <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-gray-50 p-6 sm:py-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Edit Job Details</h2>

        <form onSubmit={handleSubmit} className="w-full max-w-4xl bg-white p-6 rounded-md shadow-lg">
          <div className="grid gap-4 grid-cols-1 sm:grid-cols-2">
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Job Title</label>
              <input
                type="text"
                name="jobTitle"
                value={jobTitle}
                onChange={handleChange}
                className="mt-1 p-2 border border-gray-300 rounded-md w-full"
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Company Name</label>
              <input
                type="text"
                name="companyName"
                value={companyName}
                onChange={handleChange}
                className="mt-1 p-2 border border-gray-300 rounded-md w-full"
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Company Description</label>
              <textarea
                name="companyDescription"
                value={companyDescription}
                onChange={handleChange}
                className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                rows="3"
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Category</label>
              <select
                name="category"
                value={selectCategory}
                onChange={(e) => setSelectCategory(e.target.value)}
                className="mt-1 p-2 border border-gray-300 rounded-md w-full"
              >
                <option value="">Select Category</option>
                {categoryDetails.map((category) => (
                  <option key={category._id} value={category._id}>
                    {category.title}
                  </option>
                ))}
              </select>
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Job Location Type</label>
              <input
                type="text"
                name="jobLocationType"
                value={jobLocationType}
                onChange={handleChange}
                className="mt-1 p-2 border border-gray-300 rounded-md w-full"
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Street</label>
              <input
                type="text"
                name="street"
                value={jobLocation.street}
                onChange={handleChange}
                className="mt-1 p-2 border border-gray-300 rounded-md w-full"
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">City</label>
              <input
                type="text"
                name="city"
                value={jobLocation.city}
                onChange={handleChange}
                className="mt-1 p-2 border border-gray-300 rounded-md w-full"
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">State</label>
              <input
                type="text"
                name="state"
                value={jobLocation.state}
                onChange={handleChange}
                className="mt-1 p-2 border border-gray-300 rounded-md w-full"
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Pincode</label>
              <input
                type="text"
                name="pincode"
                value={jobLocation.pincode}
                onChange={handleChange}
                className="mt-1 p-2 border border-gray-300 rounded-md w-full"
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Salary</label>
              <input
                type="text"
                name="salary"
                value={salary}
                onChange={handleChange}
                className="mt-1 p-2 border border-gray-300 rounded-md w-full"
              />
            </div>
          </div>

          <div className="flex justify-end mt-6">
            <button type="submit" className="bg-blue-500 text-white px-6 py-2 rounded-md">
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default EditJob;
