import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import {axiosInstanceRecruiter} from '../../../api/axiosInstance/'
import logoArcite from "../../../assets/logo/StepLogo.png";
import tutor6 from '../../../assets/tutor6.jpg'
import {GoogleOAuthProvider,GoogleLogin} from '@react-oauth/google';
import {useFormik } from 'formik';
 
function RecruiterRegister() {
  const client_id=import.meta.env.VITE_CLIENT_ID || "";
  const navigate = useNavigate();
const validate=(values)=>{
  const errors={}
  const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).{6,}$/;
  if(!values.recruiterName){
    errors.recruiterName='Required';
  }else if(values.recruiterName.length<3){
    errors.recruiterName='Must be 3 characters or more'
  }
  if (!values.recruiterEmail) {
    errors.recruiterEmail = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.recruiterEmail)) {
    errors.recruiterEmail = 'Invalid email address';
  }
  if (!values.recruiterPassword) {
    errors.recruiterPassword = 'Required';
  } else if (values.recruiterPassword.length<6) {
    errors.recruiterPassword = 'Must be 6 characters or more';
  }else if(!passwordRegex.test(values.recruiterPassword)){
    errors.recruiterPassword='Password must contain at least 6 characters, including one uppercase letter, one lowercase letter, one digit, and one special character.'
  }
  if (!values.confirmpassword) {
    errors.confirmpassword = 'Required';
  } else if (values.confirmpassword!==values.recruiterPassword) {
    errors.confirmpassword = 'Password does not match';
  }
  return errors;

}
  const formik=useFormik({
    initialValues:{
      recruiterName:'',
      recruiterEmail:'',
      recruiterPassword:'',
      confirmpassword:''
    },
    validate,
    onSubmit:values=>{
       
    axiosInstanceRecruiter.post('/recruiterregister',values)
    .then((response)=>{
        console.log(response.data)
        toast.success(response.data.message)
        navigate("/recruiterLogin")
    })
    .catch((error) => {
      console.log(error);
      toast.error(error.response?.data?.message || "Registration failed");
    });
       //toast.success(`Form Submitted: ${JSON.stringify(values, null, 2)}`);
    }
  })
 
   return (  
      <section>
        <GoogleOAuthProvider clientId={client_id} >
        <div className="flex min-h-full flex-1 flex-col px-6 py-12 lg:px-8 bg-gray-500"style={{ backgroundImage: `url(${tutor6})`, backgroundSize: 'cover', backgroundPosition: 'center', height: '120vh', width: '100vw' }}>
          <div className="flex flex-col items-center px-6 py-4 md:h-screen lg:py-0">
           

            <div className="w-full bg-white border border-customColor lg:mt-0 sm:max-w-lg xl:p-0">
              <div className="p-6 space-y-4 md:space-y-2 sm:p-8">
              <div className="flex justify-center items-center">
                <img
                  src={logoArcite}
                  className="h-9 w-110"
                  alt="ACME"
                  width="120"
                />
              </div>
                <h1 className="font-semibold text-xl text-tealDark">Sign up To your account</h1>
                <form onSubmit={formik.handleSubmit} className="space-y-4 md:space-y-5">
                  <div>
                    <input
                      type="text"
                      name="recruiterName"
                      id="name"
                      value={formik.values.recruiterName}
                      onBlur={formik.handleBlur}
                      onChange={formik.handleChange}
                      className="bg-white border border-gray-400 text-gray-900 text-sm block w-full p-2.5"
                      placeholder="Name"
                      required
                    />
                    {formik.touched.recruiterName && formik.errors.recruiterName ? <div className="text-red-600 text-sm mt-1 font-medium">{formik.errors.recruiterName}</div>:null}
                  </div>

                  <div>
                    <input
                      type="email"
                      name="recruiterEmail"
                      id="email"
                      value={formik.values.recruiterEmail}
                      onBlur={formik.handleBlur}
                      onChange={formik.handleChange}
                      placeholder="Email"
                      className="bg-white border border-gray-400 text-gray-900 text-sm block w-full p-2.5"
                      required
                    />
                    {formik.touched.recruiterEmail && formik.errors.recruiterEmail ? <div className="text-red-600 text-sm mt-1 font-medium">{formik.errors.recruiterEmail}</div>:null}
                  </div>

                  <div>
                    <input
                      type="password"
                      name="recruiterPassword"
                      id="password"
                      value={formik.values.recruiterPassword}
                      onBlur={formik.handleBlur}
                      onChange={formik.handleChange}
                      placeholder="Password"
                      className="bg-white border border-gray-400 text-gray-900 text-sm block w-full p-2.5"
                      required
                    />
                    {formik.touched.recruiterPassword && formik.errors.recruiterPassword ? <div className="text-red-600 text-sm mt-1 font-medium">{formik.errors.recruiterPassword}</div>:null}
                  </div>

                  <div>
                    <input
                      type="password"
                      name="confirmpassword"
                      id="confirmpassword"
                      value={formik.values.confirmpassword}
                      onBlur={formik.handleBlur}
                      onChange={formik.handleChange}
                      placeholder="Confirm Password"
                      className="bg-white border border-gray-400 text-gray-900 text-sm block w-full p-2.5"
                      required
                    />
                    {formik.touched.confirmpassword && formik.errors.confirmpassword? <div className="text-red-600 text-sm mt-1 font-medium">{formik.errors.confirmpassword}</div>:null}
                  </div>

                  <button
                    type="submit"
                    className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium bg-teal-600 text-white bg-customColor hover:bg-customColor focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-customColor"
                  >
                    Signup
                  </button>
                </form>

             

                <p className="text-center text-sm font-semibold text-gray-900 dark:text-gray-400">
                  Already have an account?{" "}
                  <Link
                    to="/recruiterlogin"
                    className="font-medium text-customColor hover:underline dark:text-customColor text-tealLight"
                  >
                    Login
                  </Link>
                </p>

    {/* //GOOGLE Authentication */}
            <div id="signInButton">
              <GoogleLogin
                type="standard"
                theme="filled_black"
                size="large"
                ux_mode="popup"
                onSuccess={(response) => {
                  axiosInstanceRecruiter
                    .post("/google/recruiterregister", response)
                    .then((res) => {
                      console.log(res);
                      if (res.data.message) {
                        toast.success(res.data.message);
                        navigate("/recruiterlogin");
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
        </div>
        </GoogleOAuthProvider>
      
      </section>
 
  );
}

export default RecruiterRegister;