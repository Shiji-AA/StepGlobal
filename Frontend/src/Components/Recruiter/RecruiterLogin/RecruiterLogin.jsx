import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { axiosInstanceRecruiter } from "../../../api/axiosInstance/";
import toast from "react-hot-toast";
import { setRecruiterInfo } from "../../../../Redux/Slices/RecruiterSlice";
import logoArcite from "../../../assets/logoArcite.png";
import admin1 from '../../../assets/admin1.jpg'

function RecruiterLogin() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [recruiterEmail, setrecruiterEmail] = useState("");
  const [recruiterPassword, setrecruiterPassword] = useState("");
  const recruiter = useSelector((state) => state.recruiter.recruiterdata);

  useEffect(() => {
    if (recruiter) {
      navigate("/recruiterdashboard");
    }
  }, [recruiter, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axiosInstanceRecruiter.post("/recruiterlogin", {
        recruiterEmail,
        recruiterPassword,
      });
      if (response.data.message) {
        dispatch(setRecruiterInfo(response.data.recruiterData));
        localStorage.setItem("recruiterToken", response.data.token);
        toast.success(response.data.message);
        navigate("/recruiterdashboard");
      }
    } catch (error) {
      if (error.response && error.response.data.error) {
        toast.error(error.response.data.error);
      } else {
        toast.error("An unexpected error occurred.");
      }
    }
  };

  return (
    <section>
          <div className="flex min-h-screen justify-center items-center bg-blue-50"style={{ backgroundImage: `url(${admin1})`, backgroundSize: 'cover', backgroundPosition: 'center', height: '100vh', width: '100vw' }}>
      <div className="bg-white rounded-lg border border-gray-300 shadow-md overflow-hidden sm:max-w-sm sm:w-full">
        <div className="px-6 py-8">
          <img
            className="mx-auto h-20 w-auto"
            src={logoArcite}
            alt="Arcite Logo"
          />
          <h2 className="mt-6 text-center text-2xl font-bold leading-9 text-gray-900">
            Login to your account
          </h2>

          <form onSubmit ={handleSubmit} className="mt-8 space-y-6" action="#" method="POST">
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Email address
              </label>
              <div className="mt-1">
                <input
                  id="recruiterEmail"
                  name="email"
                  type="email"
                  value={recruiterEmail}
                  onChange={(e)=>setrecruiterEmail(e.target.value)}
                  placeholder="Enter your mail"
                  autoComplete="email"
                  required
                  className="block w-full px-4 py-3 rounded-md border border-gray-300 placeholder-gray-400 shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
            </div>

            <div>
              <div className="flex justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                  Password
                </label>
                {/* <div className="text-sm">
                  <a href="/" className="font-semibold text-indigo-600 hover:text-indigo-500">
                    Forgot password?
                  </a>
                </div> */}
              </div>
              <div className="mt-1">
                <input
                  id="password"
                  name="password"
                  type="password"
                  value={recruiterPassword}
                  onChange={(e)=>setrecruiterPassword(e.target.value)}
                  placeholder="Enter your password"
                  autoComplete="current-password"
                  required
                  className="block w-full px-4 py-3 rounded-md border border-gray-300 placeholder-gray-400 shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
              RECRUITER  LOGIN 
              </button>


            </div>
          </form>
          <br/>
          <p className="text-center text-sm font-semibold text-gray-900 dark:text-gray-400">
                Dont have an account?{" "}
                <Link
                  to="/recruiterregister"
                  className="font-medium text-customColor hover:underline dark:text-customColor"
                >
                  Register Here
                </Link>
              </p>

        </div>
      </div>
    </div>
    </section>
  );
}

export default RecruiterLogin;