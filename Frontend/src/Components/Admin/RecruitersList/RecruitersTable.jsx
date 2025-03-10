import { useEffect, useState } from "react";
import AdminNavbar from "../AdminNavbar/AdminNavbar";
import { axiosInstanceAdmin } from "../../../api/axiosInstance";
import { toast } from "react-hot-toast";
import { useFormik } from "formik";

function RecruitersTable() {
  const [recruiterDetails, setrecruiterDetails] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  // Formik Validation Function
  const validate = (values) => {
    const errors = {};
    if (!values.searchInput) {
      errors.searchInput = "Search input is required";
    }
    return errors;
  };

  // Formik Configuration
  const formik = useFormik({
    initialValues: {
      searchInput: "",
    },
    validate,
    onSubmit: (values) => {
      axiosInstanceAdmin
        .get("/searchrecruiter", {
          params: {
            searchCriteria: values.searchInput, // Correct usage of Formik's value
          },
        })
        .then((response) => {
          if (response.data) {
            setFilteredData(response.data); // Update filteredData with API response
            if (response.data.length === 0) {
              toast.error("No matching recruiters found");
            }
          }
        })
        .catch((error) => {      
          toast.error("Error fetching search results",error);
        });
    },
  });

  // Fetch All recruiters
  useEffect(() => {
    axiosInstanceAdmin
      .get("/getallrecruiters")
      .then((response) => {
        if (response.data) {
          setrecruiterDetails(response.data.recruiterDetails);
        }
      })
      .catch((error) => {
        console.error("Error fetching recruiter data:", error);
        toast.error("Something went wrong while fetching recruiter data");
      });
  }, []);

  // Handle Blocking/Unblocking of recruiters
  const handleBlockrecruiter = (id) => {
    axiosInstanceAdmin
      .post(`/unlistrecruiter/${id}`)
      .then((response) => {
        const updatedrecruiters = recruiterDetails.map((recruiter) =>
          recruiter._id === id ? { ...recruiter, isBlocked: true } : recruiter
        );
        setrecruiterDetails(updatedrecruiters);
        toast.success(response.data.message || "Recruiter blocked successfully");
      })
      .catch((error) => {
        console.error("Error blocking Recruiter:", error);
        toast.error("Error blocking Recruiter");
      });
  };

  const handleUnblockrecruiter = (id) => {
    axiosInstanceAdmin
      .post(`/relistrecruiter/${id}`)
      .then((response) => {
        const updatedrecruiters = recruiterDetails.map((recruiter) =>
          recruiter._id === id ? { ...recruiter, isBlocked: false } : recruiter
        );
        setrecruiterDetails(updatedrecruiters);
        toast.success(response.data.message || "Recruiter unblocked successfully");
      })
      .catch((error) => {
        console.error("Error unblocking Recruiter:", error);
        toast.error("Error unblocking Recruiter");
      });
  };

  return (
    <>
      <AdminNavbar />
      <div className="bg-gradient-to-b from-tealLight to-white py-8 min-h-screen">
        <div className="container mx-auto xl:max-w-screen-xl">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="flex justify-between items-center mb-8">
              <h3 className="text-3xl font-bold text-tealDark">Recruiters Table</h3>

              {/* Search Bar */}

<form onSubmit={formik.handleSubmit} className="flex items-center space-x-2">
  <div className="flex-grow relative">
    <input
      type="text"
      name="searchInput"
      placeholder="Search recruiters..."
      className={`border border-gray-300 py-3 px-6 w-full focus:outline-none focus:ring ${
        formik.touched.searchInput && formik.errors.searchInput
          ? "border-red-500"
          : "focus:border-tealLight"
      } rounded-l-lg`}
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
      value={formik.values.searchInput}
    />
    {formik.touched.searchInput && formik.errors.searchInput && (
      <span className="text-red-500 text-sm absolute bottom-[-20px] left-0">
        {formik.errors.searchInput}
      </span>
    )}
  </div>
  <button
    type="submit"
    className="bg-tealLight hover:bg-tealDark text-white font-bold py-3 px-6 rounded-r-lg -ml-px"
  >
    Search
  </button>
</form>


              {/* End Search Bar */}
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse border border-gray-300">
                <thead className="bg-tealDark text-white">
                  <tr>
                    <th className="p-5 border border-gray-300">Sl No</th>
                    <th className="p-5 border border-gray-300">Name</th>
                    <th className="p-5 border border-gray-300">Email</th>
                    <th className="p-5 border border-gray-300">Phone</th>
                    <th className="p-5 border border-gray-300">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {(filteredData?.length > 0
                    ? filteredData
                    : recruiterDetails
                  ).map((recruiter, index) => (
                    <tr key={recruiter._id} className="bg-teal-50 hover:bg-teal-100">
                      <td className="p-5 border border-gray-300">{index + 1}</td>
                      <td className="p-5 border border-gray-300">
                        {recruiter?.recruiterName}
                      </td>
                      <td className="p-5 border border-gray-300">
                        {recruiter?.recruiterEmail}
                      </td>
                      <td className="p-5 border border-gray-300">
                        {recruiter.phone}
                      </td>
                      <td className="p-3">
                        {recruiter.isBlocked ? (
                          <button
                            onClick={() => handleUnblockrecruiter(recruiter._id)}
                            className="bg-red-500 text-white rounded-md px-4 py-2"
                          >
                            INACTIVE
                          </button>
                        ) : (
                          <button
                            onClick={() => handleBlockrecruiter(recruiter._id)}
                            className="bg-green-600 text-white rounded-md px-4 py-2"
                          >
                            ACTIVE
                          </button>
                        )}
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
}

export default RecruitersTable;
