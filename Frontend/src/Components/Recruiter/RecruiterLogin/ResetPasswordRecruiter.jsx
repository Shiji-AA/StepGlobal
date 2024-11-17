import {useNavigate, useParams } from "react-router-dom";
import logoArcite from "../../../assets/logoArcite.png";
import { useState } from "react";
import toast from "react-hot-toast";
import { axiosInstanceRecruiter } from "../../../api/axiosinstance";

export default function ResetPasswordRecruiter() {
  const[recruiterPassword,setrecruiterPassword] = useState('');
  const navigate= useNavigate()
  const{id,token}=useParams()
  
  const EmailSubmit =(e)=>{
    e.preventDefault()
    axiosInstanceRecruiter.post(`/reset_password-recruiter/${id}/${token}`,{recruiterPassword})
    
    .then((response)=>{
      if(response.data.message){
        toast.success(response.data.message)
        navigate('/recruiterlogin')
      }
    })    
  }
  return (
    <div className="flex min-h-screen justify-center items-center bg-blue-100">
      <div className="sm:max-w-md w-full bg-white p-6 rounded-lg shadow-md">
        <img
          className="mx-auto h-9 w-auto"
          src={logoArcite}
          alt="Arcite logo"
        />
        <h2 className="mt-6 text-center text-xl font-bold leading-9 text-gray-900">
        Reset Password
        </h2>

        <form onSubmit={EmailSubmit} className="mt-8 space-y-6" action="#" method="POST">
          <div className="rounded-md shadow-sm">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              New Password
            </label>
            <div className="mt-1">
              <input
                id="password"
                name="password"
                type="password"
                value={recruiterPassword}
                onChange={(e) => setrecruiterPassword(e.target.value)}
                placeholder="Enter your password"
                autoComplete="password"
                required
                className="block w-full py-2 px-3 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
          </div>
        
        <button
            type="submit"
            className="w-full mt-4 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Update
          </button>
          
        </form>
      </div>
    </div>
  );
}
