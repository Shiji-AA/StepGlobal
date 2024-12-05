import { useEffect, useState } from "react";
import AdminNavbar from "../AdminNavbar/AdminNavbar";
import { axiosInstanceAdmin } from "../../../api/axiosinstance";
import { toast } from "react-hot-toast";
import { useFormik } from "formik";

function UsersTable() {
  const [studentDetails, setstudentDetails] = useState([]);
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
        .get("/searchstudent", {
          params: {
            searchCriteria: values.searchInput, // Correct usage of Formik's value
          },
        })
        .then((response) => {
          if (response.data) {
            setFilteredData(response.data); // Update filteredData with API response
            if (response.data.length === 0) {
              toast.error("No matching students found");
            }
          }
        })
        .catch((error) => {      
          toast.error("Error fetching search results",error);
        });
    },
  });

  // Fetch All Students
  useEffect(() => {
    axiosInstanceAdmin
      .get("/getallstudents")
      .then((response) => {
        if (response.data) {
          setstudentDetails(response.data.studentDetails);
        }
      })
      .catch((error) => {
        console.error("Error fetching student data:", error);
        toast.error("Something went wrong while fetching student data");
      });
  }, []);

  // Handle Blocking/Unblocking of Students
  const handleBlockStudent = (id) => {
    axiosInstanceAdmin
      .post(`/unliststudent/${id}`)
      .then((response) => {
        const updatedStudents = studentDetails.map((student) =>
          student._id === id ? { ...student, isBlocked: true } : student
        );
        setstudentDetails(updatedStudents);
        toast.success(response.data.message || "Student blocked successfully");
      })
      .catch((error) => {
        console.error("Error blocking student:", error);
        toast.error("Error blocking student");
      });
  };

  const handleUnblockStudent = (id) => {
    axiosInstanceAdmin
      .post(`/reliststudent/${id}`)
      .then((response) => {
        const updatedStudents = studentDetails.map((student) =>
          student._id === id ? { ...student, isBlocked: false } : student
        );
        setstudentDetails(updatedStudents);
        toast.success(response.data.message || "Student unblocked successfully");
      })
      .catch((error) => {
        console.error("Error unblocking student:", error);
        toast.error("Error unblocking student");
      });
  };

  return (
    <>
      <AdminNavbar />
      <div className="bg-gradient-to-b from-blue-200 to-white py-8 min-h-screen">
        <div className="container mx-auto xl:max-w-screen-xl">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="flex justify-between items-center mb-8">
              <h3 className="text-3xl font-bold">Users Table</h3>

              {/* Search Bar */}

<form onSubmit={formik.handleSubmit} className="flex items-center space-x-2">
  <div className="flex-grow relative">
    <input
      type="text"
      name="searchInput"
      placeholder="Search students..."
      className={`border border-gray-300 py-3 px-6 w-full focus:outline-none focus:ring ${
        formik.touched.searchInput && formik.errors.searchInput
          ? "border-red-500"
          : "focus:border-blue-400"
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
    className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-r-lg -ml-px"
  >
    Search
  </button>
</form>


              {/* End Search Bar */}
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse border border-gray-300">
                <thead className="bg-blue-600 text-white">
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
                    : studentDetails
                  ).map((student, index) => (
                    <tr key={student._id} className="bg-blue-100 hover:bg-blue-200">
                      <td className="p-5 border border-gray-300">{index + 1}</td>
                      <td className="p-5 border border-gray-300">
                        {student.name}
                      </td>
                      <td className="p-5 border border-gray-300">
                        {student.email}
                      </td>
                      <td className="p-5 border border-gray-300">
                        {student.phone}
                      </td>
                      <td className="p-3">
                        {student.isBlocked ? (
                          <button
                            onClick={() => handleUnblockStudent(student._id)}
                            className="bg-red-500 text-white rounded-md px-4 py-2"
                          >
                            INACTIVE
                          </button>
                        ) : (
                          <button
                            onClick={() => handleBlockStudent(student._id)}
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

export default UsersTable;
