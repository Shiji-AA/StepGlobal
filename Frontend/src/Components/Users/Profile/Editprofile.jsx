import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useFormik } from "formik";
import Navbar from "../Navbar/Navbar";
import axios from "axios";
import toast from "react-hot-toast";
import { axiosInstance } from "../../../api/axiosinstance";
import { updateProfile } from "../../../../Redux/Slices/AuthSlice";

function EditProfile() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  const validate = (values) => {
    const errors = {};
      
    if(!values.studentName){
      errors.studentName='Required';
    }else if(values.studentName.length<3){
      errors.studentName='Must be 3 characters or more'
    }

    if (!values.studentEmail) {
      errors.studentEmail = "Required";
    } else if (!/\S+@\S+\.\S+/.test(values.studentEmail)) {
      errors.studentEmail = "Invalid email address";
    }

    if (!values.studentEmail) {
      errors.studentEmail = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.studentEmail)) {
      errors.studentEmail = 'Invalid email address';
    }

    if (!values.phone) {
      errors.phone = "Required";
    } else if (!/^\d{10}$/.test(values.phone)) {
      errors.phone = "Phone must be a 10-digit number";
    }

    if (!values.image) {
      errors.image = "Image is required";
    }

    return errors;
  };

  const formik = useFormik({
    initialValues: {
      studentName: "",
      studentEmail: "",
      phone: "",
      image: null,
    },
    validate,
    onSubmit: async (values) => {
      setLoading(true);
      try {
        const data = new FormData();
        data.append("file", values.image);
        data.append("upload_preset", "stepglobal");
        data.append("cloud_name", "shijiaa04");

        const response = await axios.post(
          "https://api.cloudinary.com/v1_1/shijiaa04/image/upload",
          data
        );

        if (response.data && response.data.url) {
          const imgUrl = response.data.url;

          const updateResponse = await axiosInstance.put("/updateprofile", {
            studentName: values.studentName,
            studentEmail: values.studentEmail,
            phone: values.phone,
            photo: imgUrl,
          });

          if (updateResponse.data) {
            toast.success("Profile updated successfully!");
            dispatch(updateProfile(updateResponse.data.userData));
            navigate("/profile");
          }
        }
      } catch (error) {
        toast.error(
          error.response?.data?.error || "Failed to update profile. Try again."
        );
      } finally {
        setLoading(false);
      }
    },
  });

  useEffect(() => {
    axiosInstance
      .get("/editProfile")
      .then((response) => {
        if (response.data) {
          const { name, email, phone, photo } = response.data.studentDetails;
          formik.setValues({
            studentName: name || "",
            studentEmail: email || "",
            phone: phone || "",
            image: photo || null,
          });
        }
      })
      .catch(console.error);
  }, []);

  return (
    <>
      <Navbar />
      <div className="bg-gradient-to-b from-blue-200 to-white p-4 rounded-lg">
        <div className="min-h-screen">
          <form onSubmit={formik.handleSubmit} className="p-8 space-y-8">
            <div className="text-3xl font-semibold mb-8 text-center">
              Edit Profile
            </div>
            <div className="flex justify-center items-center">
              <div className="max-w-md w-full mx-auto">
                <div className="bg-white border border-gray-200 rounded-lg shadow-md p-8">
                  <div className="mb-4">
                    <label
                      htmlFor="studentName"
                      className="block text-gray-700 text-sm font-bold mb-2"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="studentName"
                      name="studentName"
                      className="w-full rounded-lg bg-gray-100 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 text-sm p-2"
                      value={formik.values.studentName}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                    {formik.touched.studentName && formik.errors.studentName && (
                      <div className="text-red-500 text-sm">
                        {formik.errors.studentName}
                      </div>
                    )}
                  </div>

                  <div className="mb-4">
                    <label
                      htmlFor="studentEmail"
                      className="block text-gray-700 text-sm font-bold mb-2"
                    >
                      Email
                    </label>
                    <input
                      type="text"
                      id="studentEmail"
                      name="studentEmail"
                      className="w-full rounded-lg bg-gray-100 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 text-sm p-2"
                      value={formik.values.studentEmail}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                    {formik.touched.studentEmail &&
                      formik.errors.studentEmail && (
                        <div className="text-red-500 text-sm">
                          {formik.errors.studentEmail}
                        </div>
                      )}
                  </div>

                  <div className="mb-4">
                    <label
                      htmlFor="phone"
                      className="block text-gray-700 text-sm font-bold mb-2"
                    >
                      Phone
                    </label>
                    <input
                      type="text"
                      id="phone"
                      name="phone"
                      className="w-full rounded-lg bg-gray-100 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 text-sm p-2"
                      value={formik.values.phone}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                    {formik.touched.phone && formik.errors.phone && (
                      <div className="text-red-500 text-sm">
                        {formik.errors.phone}
                      </div>
                    )}
                  </div>

                  {/* <div className="mb-4">
                    <label
                      htmlFor="image"
                      className="block text-gray-700 text-sm font-bold mb-2"
                    >
                      Image
                    </label>
                    <input
                      type="file"
                      id="image"
                      name="image"
                      className="w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border rounded"
                      onChange={(e) =>
                        formik.setFieldValue("image", e.target.files[0])
                      }
                    />
                    {formik.touched.image && formik.errors.image && (
                      <div className="text-red-500 text-sm">
                        {formik.errors.image}
                      </div>
                    )}
                    {formik.values.image && (
                      <img
                        src={
                          typeof formik.values.image === "string"
                            ? formik.values.image
                            : URL.createObjectURL(formik.values.image)
                        }
                        alt="Profile Preview"
                        className="mt-2 h-16 w-16 object-cover rounded"
                      />
                    )}
                  </div> */}


<div className="mb-4">
  <label
    htmlFor="image"
    className="block text-gray-700 text-sm font-bold mb-2"
  >
    Image
  </label>
  <input
    type="file"
    id="image"
    name="image"
    className="w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border rounded"
    onChange={(e) => {
      const file = e.target.files[0];
      if (file) {
        const allowedFileTypes = ["png", "jpg", "jpeg"];
        const fileExtension = file.name.split(".").pop().toLowerCase();
        const maxSize = 5 * 1024 * 1024; // 5 MB size limit

        if (!allowedFileTypes.includes(fileExtension)) {
          toast.error(
            `Invalid file type. Only ${allowedFileTypes.join(", ")} allowed.`
          );
          formik.setFieldError("image", "Invalid file type.");
          return;
        }

        if (file.size > maxSize) {
          toast.error("File size exceeds 5 MB. Please upload a smaller file.");
          formik.setFieldError("image", "File size exceeds 5 MB.");
          return;
        }

        formik.setFieldValue("image", file);
        toast.success("Image selected successfully.");
      } else {
        formik.setFieldValue("image", null);
        formik.setFieldError("image", "Image is required.");
      }
    }}
    onBlur={formik.handleBlur}
  />
  {formik.touched.image && formik.errors.image && (
    <div className="text-red-500 text-sm">{formik.errors.image}</div>
  )}
  {formik.values.image && (
    <img
      src={
        typeof formik.values.image === "string"
          ? formik.values.image
          : URL.createObjectURL(formik.values.image)
      }
      alt="Profile Preview"
      className="mt-2 h-16 w-16 object-cover rounded"
    />
  )}
</div>


                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-2 px-4 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    {loading ? "Updating..." : "Update Profile"}
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default EditProfile;
