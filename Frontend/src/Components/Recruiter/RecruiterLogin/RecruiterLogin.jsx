import { useSelector, useDispatch } from "react-redux";
import { useEffect} from "react";
import { Link, useNavigate } from "react-router-dom";
import { axiosInstanceRecruiter } from "../../../api/axiosInstance/";
import toast from "react-hot-toast";
import { setRecruiterInfo } from "../../../../Redux/Slices/RecruiterSlice";
import logoArcite from "../../../assets/logo/StepLogo.png";
import admin1 from "../../../assets/admin1.jpg";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import { useFormik } from 'formik';

function RecruiterLogin() {
  const recruiter = useSelector((state) => state.recruiter.recruiterdata);
  const client_id = import.meta.env.VITE_CLIENT_ID || "";
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const validate=values=>{
    const errors={};
    if (!values.recruiterEmail) {
      errors.recruiterEmail = 'Required';
    } 
    if (!values.recruiterPassword) {
      errors.recruiterPassword = 'Required';
    } 
    return errors;
  }

  const formik = useFormik({
    initialValues: {
      recruiterEmail: '',
      recruiterPassword: ''
    },
    validate, 
    onSubmit: (values) => {
      axiosInstanceRecruiter
        .post('/recruiterlogin', values)
        .then((response) => {
          if (response.data.message) {
            dispatch(setRecruiterInfo(response.data.recruiterData));        
            localStorage.setItem("recruiterToken", response.data.token);     
            toast.success(response.data.message);          
            navigate("/recruiterdashboard");
          }
        })
        .catch((error) => {
          if (error.response && error.response.data.error) {
            switch (error.response.data.error) {
              case 'Your account has been blocked.':
                toast.error("Your account has been blocked.");
                break;
              case 'Invalid email or password':
                toast.error("Invalid email or password.");
                break;
              default:
                toast.error("An unexpected error occurred.");
            }
          } else {
            toast.error(error.message);
          }
        });     
    }
  });
  
  
  useEffect(() => {
    if (recruiter) {
      navigate("/recruiterdashboard");
    }
  }, [recruiter, navigate]);


  return (
    <section>
      <GoogleOAuthProvider clientId={client_id}>
        <div
          className="flex min-h-screen justify-center items-center bg-blue-50"
          style={{
            backgroundImage: `url(${admin1})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "100vh",
            width: "100vw",
          }}
        >
          <div className="bg-white rounded-lg border border-gray-300 shadow-md overflow-hidden sm:max-w-sm sm:w-full">
            <div className="px-6 py-8">
              <img
                className="mx-auto h-9 w-30"
                src={logoArcite}
                alt="Arcite Logo"
              />
              <h2 className="mt-3 text-center text-xl font-bold leading-9 text-gray-900">
                Login to your account
              </h2>

              <form
                onSubmit={formik.handleSubmit}
                className="mt-6 space-y-6"
                action="#"
                method="POST"
              >
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Email address
                  </label>
                  <div className="mt-1">
                    <input
                      id="recruiterEmail"
                      name="recruiterEmail"
                      type="email"
                      value={formik.values.recruiterEmail}
                      onBlur={formik.handleBlur}
                      onChange={formik.handleChange}
                      placeholder="Enter your mail"
                      autoComplete="email"
                      required
                      className="block w-full px-4 py-3 rounded-md border border-gray-300 placeholder-gray-400 shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                     {formik.touched.recruiterEmail && formik.errors.recruiterEmail ? <div className="text-red-600 text-sm mt-1 font-medium">{formik.errors.recruiterEmail}</div> : null}
                  </div>
                </div>

                <div>
                  <div className="flex justify-between">
                    <label
                      htmlFor="password"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Password
                    </label>
                  
                  </div>
                  <div className="mt-1">
                    <input
                      id="password"
                      name="recruiterPassword"
                      type="password"
                      value={formik.values.recruiterPassword}
                      onBlur={formik.handleBlur}
                      onChange={formik.handleChange}
                      placeholder="Enter your password"
                      autoComplete="current-password"
                      required
                      className="block w-full px-4 py-3 rounded-md border border-gray-300 placeholder-gray-400 shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                     {formik.touched.recruiterPassword && formik.errors.recruiterPassword? <div className="text-red-600 text-sm mt-1 font-medium">{formik.errors.recruiterPassword}</div> : null}
                  </div>
                  <a href="/forgotpasswordrecruiter" className=" flex justify-end text-sm pt-1 font-semibold text-indigo-600 hover:text-indigo-500">
               Forgot password?
              </a>
                </div>

                <div>
                  <button
                    type="submit"
                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    RECRUITER LOGIN
                  </button>
                </div>
              </form> 
              <br />
              <p className="text-center text-sm font-semibold text-gray-900 dark:text-gray-400">
                Dont have an account?{" "}
                <Link
                  to="/recruiterregister"
                  className="font-medium text-customColor hover:underline dark:text-customColor"
                >
                  Register Here
                </Link>
              </p>

              {/* Google Authentication */}
              <div id="signInButton">
                <GoogleLogin
                  type="standard"
                  theme="filled_black"
                  size="large"
                  onSuccess={(response) => {
                    axiosInstanceRecruiter
                      .post("/google/recruiterlogin", response)
                      .then((res) => {
                        console.log(res, "google @");
                        if (res.data.message) {
                          localStorage.setItem(
                            "recruiterToken",
                            res.data.token
                          );
                          dispatch(setRecruiterInfo(res.data.recruiterData));
                          toast.success(res.data.message);
                          navigate("/recruiterdashboard");
                        }
                      })
                      .catch((error) => {
                        console.log(error);
                        toast.error(error.response.data.error);
                      });
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </GoogleOAuthProvider>
    </section>
  );
}

export default RecruiterLogin;
