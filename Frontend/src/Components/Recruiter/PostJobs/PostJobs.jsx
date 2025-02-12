import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import RecruiterNavbar from "../RecruiterNavbar/RecruiterNavbar";
import jobpost from "../../../assets/jobpost.jpg";
import { axiosInstanceRecruiter } from "../../../api/axiosInstance";
import toast from "react-hot-toast";
import { useState } from "react";

function PostJobs() {
  const navigate = useNavigate();
  const [categoryDetails, setCategoryDetails] = useState([]);
  const [companyName, setCompanyName] = useState("");
  const [companyDescription, setCompanyDescription] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [jobLocationType, setJobLocationType] = useState("");
  const [city, setCity] = useState("");
  const [pincode, setPincode] = useState("");
  const [street, setStreet] = useState("");
  const [state, setState] = useState("");
  const [salary, setSalary] = useState("");
  const [selectcategory, setSelectcategory] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axiosInstanceRecruiter.post("/addJobPost", {
        category: selectcategory,
        companyName,
        companyDescription,
        jobTitle,
        jobLocationType,
        jobLocation: {
          street,
          city,
          state,
          pincode,
        },
        salary,
      });

      if (response.data) {
        toast.success("Job posted successfully!");
        navigate("/viewjobs");
      }
    } catch (error) {
      console.error("Error posting job:", error);
      toast.error("An unexpected error occurred. Please try again.");
    }
  };

  useEffect(() => {
    axiosInstanceRecruiter
      .get("/categories")
      .then((response) => {
        if (response.data.categoryDetails) {
          setCategoryDetails(response.data.categoryDetails);
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        toast("Error fetching data. Please try again later.");
      });
  }, []);

  return (
    <>
      <RecruiterNavbar />
      <div className="flex justify-center p-5">
        <div className="flex flex-col w-full max-w-4xl bg-white p-6 rounded-lg shadow-lg gap-8">
          {/* Header Section */}
          <div className="flex flex-col md:flex-row gap-8">
            <div className="flex-1">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Add Job Basics
              </h2>
              <p className="text-gray-600 mb-6">
                Enter the essential details of the job you are posting.
              </p>
            </div>
            <div className="flex-1">
              <img
                src={jobpost}
                alt="jobpost"
                className="object-cover w-full h-64 md:h-full rounded-lg shadow-lg"
                loading="lazy"
              />
            </div>
          </div>

          {/* Form Section */}
          <form
            onSubmit={handleSubmit}
            className="bg-white p-6 rounded-lg shadow-lg w-full"
          >
            <div className="space-y-6">
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Companys Category
                </label>

                <select
                  value={selectcategory}
                  onChange={(e) => setSelectcategory(e.target.value)}
                >
                  <option value="">Select Category</option>
                  {categoryDetails?.map((category) => (
                    <option key={category?._id} value={category?._id}>
                      {category?.title}
                    </option>
                  ))}
                </select>
              </div>

              {/* Company Name */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Company Name *
                </label>
                <input
                  type="text"
                  name="companyName"
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter company name"
                  required
                />
              </div>

              {/* Company Description */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Company Description
                  <span className="block text-xs text-gray-500">
                    Introduce your company in a few lines.
                  </span>
                </label>
                <textarea
                  name="companyDescription"
                  value={companyDescription}
                  onChange={(e) => setCompanyDescription(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  rows="4"
                ></textarea>
              </div>

              {/* Job Title */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Job Title *
                </label>
                <input
                  type="text"
                  name="jobTitle"
                  value={jobTitle}
                  onChange={(e) => setJobTitle(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter job title"
                  required
                />
              </div>

              {/* Job Location Details */}
              <h2 className="text-2xl font-bold text-gray-800 mt-6">
                Job Location
              </h2>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Job Location Type *
                </label>
                <select
                  name="jobLocationType"
                  value={jobLocationType}
                  onChange={(e) => setJobLocationType(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                >
                  <option value="">Select location type</option>
                  <option value="On-site">On-site</option>
                  <option value="Hybrid">Hybrid</option>
                  <option value="Remote">Remote</option>
                </select>
              </div>

              {/* City */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  City *
                </label>
                <input
                  type="text"
                  name="city"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter city"
                  required
                />
              </div>

              {/* State */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  State *
                </label>
                <input
                  type="text"
                  name="state"
                  value={state}
                  onChange={(e) => setState(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter state"
                  required
                />
              </div>

              {/* Pincode */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Pincode *
                </label>
                <input
                  type="text"
                  name="pincode"
                  value={pincode}
                  onChange={(e) => setPincode(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter pincode"
                  required
                />
              </div>

              {/* Street */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Street Address *
                </label>
                <input
                  type="text"
                  name="street"
                  value={street}
                  onChange={(e) => setStreet(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter street address"
                  required
                />
              </div>
            </div>

            {/* Salary */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Salary
              </label>
              <input
                type="text"
                name="salary"
                value={salary}
                onChange={(e) => setSalary(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter salary"
              />
            </div>

            {/* Submit Button */}
            <div className="mt-8 text-right">
              <button
                type="submit"
                className="bg-blue-500 text-white px-6 py-3 rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default PostJobs;
