import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { axiosInstance } from "../../../api/axiosInstance/";
import toast from "react-hot-toast";
import { setUserInfo } from "../../../../Redux/Slices/AuthSlice";
import logoArcite from "../../../assets/logoArcite.png";
import admin1 from '../../../assets/admin1.jpg'
import {GoogleOAuthProvider,GoogleLogin} from '@react-oauth/google'

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const user = useSelector((state) => state.auth.userdata);
  const client_id=import.meta.env.VITE_CLIENT_ID || "";

  useEffect(() => {
    if (user) {
      navigate("/home");
    }
  }, [user, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axiosInstance.post("/login", { email, password });
      if (response.data.message) {
        dispatch(setUserInfo(response.data.userData));
        localStorage.setItem("token", response.data.token);
        toast.success(response.data.message);
        navigate("/home");
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
<GoogleOAuthProvider clientId={client_id} >
<div className="flex min-h-screen justify-center items-center bg-blue-50"style={{ backgroundImage: `url(${admin1})`, backgroundSize: 'cover', backgroundPosition: 'center', height: '100vh', width: '100vw' }}>
      <div className="bg-white rounded-lg border border-gray-300 shadow-md overflow-hidden sm:max-w-sm sm:w-full">
        <div className="px-6 py-8">
          <img
            className="mx-auto h-8 w-30"
            src={logoArcite}
            alt="Arcite logo"
          />
          <h2 className="mt-6 text-center text-xl font-bold leading-9 text-gray-900">
            Login to your account
          </h2>

          <form onSubmit ={handleSubmit} className="mt-8 space-y-6" action="#" method="POST">
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Email address
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={email}
                  onChange={(e)=>setEmail(e.target.value)}
                  placeholder="Enter your username"
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
              
              </div>
              <div className="mt-1">
                <input
                  id="password"
                  name="password"
                  type="password"
                  value={password}
                  onChange={(e)=>setPassword(e.target.value)}
                  placeholder="Enter your password"
                  autoComplete="current-password"
                  required
                  className="block w-full px-4 py-3 rounded-md border border-gray-300 placeholder-gray-400 shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
              <a href="/forgotpassword" className=" flex justify-end text-xs pt-2 font-semibold text-indigo-600 hover:text-indigo-500">
               Forgot password?
              </a>
            </div> 
            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
               LOGIN
              </button>


            </div>
          </form>
          <br/>
          <p className="text-center text-sm font-semibold text-gray-900 dark:text-gray-400">
                Dont have an account?{" "}
                <Link
                  to="/register"
                  className="font-medium text-customColor hover:underline dark:text-customColor"
                >
                  Register Here
                </Link>
              </p>

                  {/* Google Authentication */}
                  <div id="signInButton">
                <GoogleLogin
                  type='standard'
                  theme='filled_black'
                  size='large'
                  onSuccess={response => {
                    axiosInstance.post('/google/login', response)
                      .then((res) => {
                        console.log(res, 'google @')
                        if (res.data.message) {
                          localStorage.setItem("token", res.data.token);                        
                          dispatch(setUserInfo(res.data.userData));
                          toast.success(res.data.message);
                          navigate('/home');
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

export default Login;
