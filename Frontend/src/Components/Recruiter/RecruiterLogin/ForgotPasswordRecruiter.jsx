import { useNavigate } from "react-router-dom";
import logoArcite from "../../../assets/logo/StepLogo.png";
import { useState } from "react";
import toast from "react-hot-toast";
import { axiosInstanceRecruiter } from "../../../api/axiosInstance/";

export default function ForgotPasswordRecruiter() {
  const [recruiterEmail, setrecruiterEmail] = useState('');
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const EmailSubmit = (e) => {
    e.preventDefault();
    setLoading(true);  // Set loading to true when the form is submitted

    axiosInstanceRecruiter
      .post('/forgotpasswordrecruiter', { recruiterEmail })
      .then((response) => { 
        console.log(response.data, "i am response.data");

        if (response.data.message) {
          toast.success(response.data.message);
          navigate('/recruiterlogin', { state: { email: recruiterEmail } });
        } else {
          toast.error("Unexpected response from server.");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        toast.error(error.response?.data?.message || "Failed to send email. Please try again.");
      })
      .finally(() => setLoading(false));  // Set loading to false after request completes
  }

  return (
    <div className="flex min-h-screen justify-center items-center bg-gray-100">
      <div className="sm:max-w-md w-full bg-white p-6 rounded-lg shadow-md border-2 border-gray-200">
        <img
          className="mx-auto h-9 w-auto"
          src={logoArcite}
          alt="Arcite logo"
        />
        <h2 className="mt-6 text-center text-xl font-bold leading-9 text-gray-900">
          Forgot Password
        </h2>

        <form onSubmit={EmailSubmit} className="mt-8 space-y-6" action="#" method="POST">
          <div className="rounded-md shadow-sm">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email Address
            </label>
            <div className="mt-1">
              <input
                id="email"
                name="email"
                type="email"
                value={recruiterEmail}
                onChange={(e) => setrecruiterEmail(e.target.value)}
                placeholder="Enter your email address"
                autoComplete="email"
                required
                className="block w-full py-2 px-3 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`w-full mt-4 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white ${loading ? 'bg-gray-500' : 'bg-teal-600 hover:bg-teal-700'} focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500`}
          >
            {loading ? "Sending..." : "Send"}
          </button>
          
        </form>
      </div>
    </div>
  );
}
