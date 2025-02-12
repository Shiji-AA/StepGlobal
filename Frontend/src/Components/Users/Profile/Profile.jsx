import { useSelector } from "react-redux";
import {Link} from 'react-router-dom';
import { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import { axiosInstance } from "../../../api/axiosInstance";

function Profile() {
   const userData = useSelector((state) => state.auth.userdata); 
  const [profileData, setProfileData] = useState(null);

    useEffect(() => {
    const userId = userData?.id;
    if (userId) {
axiosInstance.get(`/userprofile`)     
      .then((response) => {
        console.log(response, "I am  response");
      if (response.data) {
      setProfileData(response.data.userData);
      }
        })
        .catch((error) => {
        console.error("Error fetching user profile:", error);
        });
    }
  }, [userData]); 


   return (
    <>
    
 <Navbar/>

<div className="flex">
<div className="w-1/4">
          <Sidebar />
        </div>

<div className="w-3/4 bg-gradient-to-b from-blue-200 to-white rounded-lg">
    <br/>
      <div className="text-2xl font-semibold mb-4 text-center">Profile</div>

      {/* Content */}
      <div className="flex justify-center items-center pb-8">
        <div className="max-w-4xl w-full mx-4">
          <div className="flex flex-col">
            {/* First box */}
            <div className="bg-white border border-gray-200 rounded-lg shadow-md w-4/5 mx-auto mb-4">
              <div className="flex flex-col items-center p-6">
                <img
                  className="w-24 h-24 mb-3 rounded-full shadow-lg"
                  src={profileData?.photo}
                  alt="photo"
                />
                <span className="text-lg font-semibold text-gray-800 dark:text-gray-300">
                  {profileData?.name}
                </span>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  {profileData?.email}
                </span>
                <div className="mt-4">
                  <label className="flex items-center mt-2">
                    <input type="file" className="hidden" />                   
                  </label>
                </div>
              </div>
            </div>

            {/* Second box */}
            <div className="bg-white border border-gray-200 rounded-lg shadow-md w-4/5 mx-auto">
              <div className="p-4 space-y-4">
                <div className="flex items-center">
                  <label className="block w-1/3 text-sm font-medium text-gray-900 dark:text-white">
                    Username
                  </label>
                  <p>{profileData?.name}</p>
                </div>

                <div className="flex items-center">
                  <label className="block w-1/3 text-sm font-medium text-gray-900 dark:text-white">
                    Email
                  </label>
                  <p>{profileData?.email}</p>
                </div>

                <div className="flex items-center">
                  <label className="block w-1/3 text-sm font-medium text-gray-900 dark:text-white">
                    Phone
                  </label>
                  <p>{profileData?.phone}</p>
                </div>

             
                <Link to={`/editprofile/${userData?.id}`}>              
                <button className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
                  Edit Profile
                </button>
                </Link>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

</div>

    
    </>
    
  );
}

export default Profile;
