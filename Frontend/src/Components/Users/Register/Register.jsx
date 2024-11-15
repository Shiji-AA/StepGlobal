import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import toast from "react-hot-toast";
import {axiosInstance} from '../../../api/axiosInstance/'
import logoArcite from "../../../assets/logoArcite.png";
import tutor6 from '../../../assets/tutor6.jpg'
 
function Register() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmpassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmpassword) {
      return toast.error("Passwords do not match");
    }
    if (!name.trim() || !email.trim() || !password.trim() || !confirmpassword.trim()) {
      return toast.error("All fields are required");
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      return toast.error("Invalid email address");
    }
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).{6,}$/;
    if (!passwordRegex.test(password)) {
      return toast.error(
        "Password must contain at least 6 characters including at least one uppercase letter, one lowercase letter, one digit, and one special character."
      );
    }

  
    axiosInstance.post('/register',{name,email,password})
    .then((response)=>{
        console.log(response.data)
        toast.success(response.data.message)
        navigate("/login")
    })
      
  }; 

  return (
  
      <section>
        <div className="flex min-h-full flex-1 flex-col px-6 py-12 lg:px-8 bg-gray-500 "style={{ backgroundImage: `url(${tutor6})`, backgroundSize: 'cover', backgroundPosition: 'center', height: '120vh', width: '100vw' }}>
          <div className="flex flex-col items-center px-6 py-4 md:h-screen lg:py-0">
           

            <div className="w-full bg-white border border-customColor lg:mt-0 sm:max-w-lg xl:p-0">
              <div className="p-6 space-y-4 md:space-y-2 sm:p-8">
              <div className="flex justify-center items-center">
                <img
                  src={logoArcite}
                  className="h-12 w-120"
                  alt="ACME"
                  width="120"
                />
              </div>
                <h1 className="font-semibold text-2xl">Sign up To your account</h1>
                <form onSubmit={handleSubmit} className="space-y-4 md:space-y-5">
                  <div>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="bg-white border border-gray-400 text-gray-900 text-sm block w-full p-2.5"
                      placeholder="Name"
                      required
                    />
                  </div>

                  <div>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Email"
                      className="bg-white border border-gray-400 text-gray-900 text-sm block w-full p-2.5"
                      required
                    />
                  </div>

                  <div>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Password"
                      className="bg-white border border-gray-400 text-gray-900 text-sm block w-full p-2.5"
                      required
                    />
                  </div>

                  <div>
                    <input
                      type="password"
                      name="confirmpassword"
                      id="confirmpassword"
                      value={confirmpassword}
                      onChange={(e) => setConfirmpassword(e.target.value)}
                      placeholder="Confirm Password"
                      className="bg-white border border-gray-400 text-gray-900 text-sm block w-full p-2.5"
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium bg-indigo-600 text-gray-900 bg-customColor hover:bg-customColor focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-customColor"
                  >
                    Signup
                  </button>
                </form>

             

                <p className="text-center text-sm font-semibold text-gray-900 dark:text-gray-400">
                  Already have an account?{" "}
                  <Link
                    to="/login"
                    className="font-medium text-customColor hover:underline dark:text-customColor"
                  >
                    Login
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
 
  );
}

export default Register;