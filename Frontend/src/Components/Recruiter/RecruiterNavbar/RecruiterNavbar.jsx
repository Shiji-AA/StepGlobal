import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import logoArcite from "../../../assets/logoArcite.png";
import { useDispatch, useSelector } from "react-redux";
import { logout } from '../../../../Redux/Slices/RecruiterSlice'

function RecruiterNavbar() {
  const navigate = useNavigate(); 
  const recruiter = useSelector((state) => state.recruiter.recruiterdata); 
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/recruiterlogin"); // Redirect to recruiter login page
  };


  const [menuOpen, setMenuOpen] = useState(false);
  const [profileMenuOpen, setProfileMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const toggleProfileMenu = () => setProfileMenuOpen((prev) => !prev);

  return (
    <nav className="flex items-center justify-between p-4 bg-blue-600 shadow-md">
      {/* Logo */}
      <img src={logoArcite} alt="ARCITE" width="120" className="mr-4" />

      {/* Mobile Menu Toggle */}
      <div className="flex md:hidden">
        <button onClick={toggleMenu} className="focus:outline-none">
          <img
            className={menuOpen ? "hidden" : "block"}
            src="https://img.icons8.com/fluent-systems-regular/2x/menu-squared-2.png"
            width="30"
            height="30"
            alt="Menu"
          />
          <img
            className={menuOpen ? "block" : "hidden"}
            src="https://img.icons8.com/fluent-systems-regular/2x/close-window.png"
            width="30"
            height="30"
            alt="Close"
          />
        </button>
      </div>

      {/* Nav Links and Buttons */}
      <div
        className={`w-full md:flex md:items-center md:w-auto transition-all duration-300 ease-in-out ${
          menuOpen ? "block" : "hidden"
        }`}
      >
        <div className="flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-6 mt-4 md:mt-0">
          <Link to="/" className="text-white font-semibold hover:text-yellow-400">
            Home
          </Link>
          <Link to="/aboutus" className="text-white font-semibold hover:text-yellow-400">
            About Us
          </Link>
          <Link to="/postjobs" className="text-white font-semibold hover:text-yellow-400">
            Post Job
          </Link>
        
          <Link to="/contactus" className="text-white font-semibold hover:text-yellow-400">
            Contact Us
          </Link>

          {/* Buttons Section */}
          {recruiter ? (
            <>
              {/* User Name with Dropdown */}
              <div className="relative">
                <button
                  onClick={toggleProfileMenu}
                  className="px-6 py-2 font-semibold text-white bg-green-500 hover:bg-green-600 rounded-lg transition duration-300 ease-in-out"
                >
                  {recruiter?.recruiterName}
                </button>

                {/* Dropdown Menu */}
                {profileMenuOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-50">
                    <Link
                      to="/recruiterprofile"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                      onClick={() => setProfileMenuOpen(false)}
                    >
                      Profile
                    </Link>
                    <Link
                      to="/recruiterchangepassword"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                      onClick={() => setProfileMenuOpen(false)}
                    >
                      Account Settings
                    </Link>
                    <button
                      onClick={handleLogout}
                      className="block w-full text-left px-4 py-2 text-red-600 hover:bg-gray-100"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            </>
          ) : (
            null
          )}
        </div>
      </div>
    </nav>
  );
}

export default RecruiterNavbar;


{/* <div className="flex items-center  px-2">
<img
  className="object-cover mx-2 rounded-full h-9 w-9"
  src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
  alt="avatar"
/>
<h4 className="mx-2 font-medium text-gray-800 dark:text-gray-200 hover:underline">
  John Doe
</h4>
</div> */}