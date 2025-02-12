import { useNavigate } from 'react-router-dom';
import {useDispatch } from 'react-redux';
import toast from 'react-hot-toast';
import { axiosInstanceAdmin } from '../../../api/axiosInstance';
import { useFormik } from 'formik';
import { setAdminInfo } from '../../../../Redux/Slices/AdminSlice';
import AdminNavbar from '../AdminNavbar/AdminNavbar';

const ChangePasswordAdmin= () => {
  const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).{6,}$/;

  const validate = (values) => {
    const errors = {};

    if (!values.oldPassword) {
      errors.oldPassword = 'Required';
    }

    if (!values.newPassword) {
      errors.newPassword = 'Required';
    } else if (values.newPassword.length < 6) {
      errors.newPassword = 'Must be 6 characters or more';
    } else if (!passwordRegex.test(values.newPassword)) {
      errors.newPassword = 'Password must contain at least 6 characters, including one uppercase letter, one lowercase letter, one digit, and one special character.';
    }

    if (!values.confirmPassword) {
      errors.confirmPassword = 'Required';
    } else if (values.confirmPassword !== values.newPassword) {
      errors.confirmPassword = 'Password does not match';
    }

    return errors;
  };

  const formik = useFormik({
    initialValues: {
      oldPassword: '',
      newPassword: '',
      confirmPassword: '',
    },
    validate,
    onSubmit: async (values) => {
      try {
        const response = await axiosInstanceAdmin.patch("/adminchangepassword", {
          oldPassword: values.oldPassword,
          newPassword: values.newPassword,
        });
        console.log(response,"response")

        if (response.data) {
          dispatch(setAdminInfo(response.data.admin));
          toast.success("Password updated successfully!");
          navigate("/admindashboard");
        }
      } catch (error) {
        if (error.response?.data?.error) {
          toast.error(error.response.data.error);
        } else {
          toast.error("An error occurred. Please try again.");
        }
      }
    }
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <>
      <AdminNavbar />
      <div className="bg-white w-full flex flex-col gap-5 px-3 md:px-16 lg:px-20 md:flex-row text-[#161931]">
        <aside className="py-4 md:w-1/3 lg:w-1/4 hidden md:block">
          
        </aside>
        <main className="w-full min-h-screen py-1 md:w-2/3 lg:w-3/4">
          <div className="p-2 md:p-4">
            <div className="w-full px-6 pb-8 mt-8 sm:max-w-xl sm:rounded-lg">
              <h2 className="pl-6 text-2xl font-bold sm:text-xl">Change Password</h2>
              <div className="grid max-w-2xl mx-auto mt-8">
                <form onSubmit={formik.handleSubmit} className="space-y-4">
                  <div className="mb-2 sm:mb-6">
                    <label htmlFor="oldPassword" className="block mb-2 text-sm font-medium text-indigo-900">Old Password</label>
                    <input
                      type="password"
                      id="oldPassword"
                      onBlur={formik.handleBlur}
                      value={formik.values.oldPassword}
                      onChange={formik.handleChange}
                      className="bg-indigo-50 border border-indigo-300 text-indigo-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5"
                      placeholder="Enter your old password"
                    />
                    {formik.touched.oldPassword && formik.errors.oldPassword && (
                      <div className="text-red-600 text-sm mt-1 font-medium">{formik.errors.oldPassword}</div>
                    )}
                  </div>
                  <div className="mb-2 sm:mb-6">
                    <label htmlFor="newPassword" className="block mb-2 text-sm font-medium text-indigo-900">New Password</label>
                    <input
                      type="password"
                      id="newPassword"
                      onBlur={formik.handleBlur}
                      value={formik.values.newPassword}
                      onChange={formik.handleChange}
                      className="bg-indigo-50 border border-indigo-300 text-indigo-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5"
                      placeholder="Enter your new password"
                    />
                    {formik.touched.newPassword && formik.errors.newPassword && (
                      <div className="text-red-600 text-sm mt-1 font-medium">{formik.errors.newPassword}</div>
                    )}
                  </div>
                  <div className="mb-2 sm:mb-6">
                    <label htmlFor="confirmPassword" className="block mb-2 text-sm font-medium text-indigo-900">Confirm Password</label>
                    <input
                      type="password"
                      id="confirmPassword"
                      onBlur={formik.handleBlur}
                      value={formik.values.confirmPassword}
                      onChange={formik.handleChange}
                      className="bg-indigo-50 border border-indigo-300 text-indigo-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5"
                      placeholder="Confirm your new password"
                    />
                    {formik.touched.confirmPassword && formik.errors.confirmPassword && (
                      <div className="text-red-600 text-sm mt-1 font-medium">{formik.errors.confirmPassword}</div>
                    )}
                  </div>
                  <div className="flex justify-end">
                    <button
                      type="submit"
                      className="text-white bg-indigo-700 hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
                    >
                      Save
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default ChangePasswordAdmin;

