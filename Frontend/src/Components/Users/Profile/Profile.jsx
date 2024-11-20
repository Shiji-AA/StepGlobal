import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { axiosInstance } from "../../../api/axiosinstance";

function Profile() {
  const userData = useSelector((state) => state.auth.userdata); 
  const [profileData, setProfileData] = useState(null);

  // Fetching user profile data
  useEffect(() => {
    const userId = userData?.id;
    if (userId) {
      axiosInstance.get(`/userprofile`)
        .then((response) => {
            console.log(response,"I am  response")
          if (response.data) {
            setProfileData(response.data.userData);
          }
        })
        .catch((error) => {
          console.error("Error fetching user profile:", error);
        });
    }
  }, [userData]);
  
  const handleFileChange=()=>{

  }
  const handleRemovePhoto=()=>{

  }

  return (
    <>
      {/* Navbar */}
      <Navbar />

      {/* Layout: Sidebar and Profile Content */}
      <div className="flex">
        {/* Sidebar on the left */}
        <div className="w-1/4">
          <Sidebar />
        </div>

        {/* Profile Content on the right */}
        <div className="w-3/4 bg-gradient-to-b  p-4 rounded-lg">
          <div className="text-2xl font-semibold mb-4 text-center">Profile</div>

          {/* Profile content */}
          <div className="flex justify-center items-center pb-8">
            <div className="max-w-4xl w-full mx-4">
              <div className="flex flex-col">
                {/* Profile Picture Section */}
                <div className="bg-white border border-gray-200 rounded-lg shadow-md w-4/5 mx-auto mb-4">
  <div className="flex flex-col items-center p-6">
    {/* Profile Picture */}
    <img
      className="w-40 h-40 mb-3 rounded-full shadow-lg"
      src={profileData?.photo}
    //   src="https://res.cloudinary.com/dboafhu31/image/upload/v1625318266/imagen_2021-07-03_091743_vtbkf8.png"
      alt="photo"
    />

 
    {/* File Upload Section */}
    <div className="mt-4 space-x-4">
      <label className="cursor-pointer px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
        Choose a file
        <input type="file" className="hidden" onChange={(e) => handleFileChange(e)} />
      </label>
      {/* Remove Photo Button */}
      <button
        className="px-4 py-2 text-sm font-medium text-white bg-red-600 rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500"
        onClick={handleRemovePhoto}
      >
        Remove Photo
      </button>
    </div>
  </div>
</div>


                {/* Profile Details Section */}
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

                    {/* Edit Profile Button */}
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
