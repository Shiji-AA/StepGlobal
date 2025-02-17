import {useNavigate } from "react-router-dom";
import logoArcite from "../../../assets/logo/StepLogo.png";
import { axiosInstance } from "../../../api/axiosInstance/";
import { useState } from "react";
import toast from "react-hot-toast";

export default function ForgotPassword() {
  const[email,setEmail] = useState('');
  const navigate= useNavigate()

  const EmailSubmit =(e)=>{
    e.preventDefault()
    axiosInstance.post('/forgotpassword',{email})
    .then((response)=>{
      if(response.data.message){
        toast.success(response.data.message)
        navigate('/login', {state : {email : email}})
      }
    })


    
  }
  return (
    <div className="flex min-h-screen justify-center items-center bg-teal-100">
      <div className="sm:max-w-md w-full bg-white p-6 rounded-lg shadow-md">
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
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                autoComplete="email"
                required
                className="block w-full py-2 px-3 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
          </div>
        
        <button
            type="submit"
            className="w-full mt-4 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Send 
          </button>
          
        </form>
      </div>
    </div>
  );
}
