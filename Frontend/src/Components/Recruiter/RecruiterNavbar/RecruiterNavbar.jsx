import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import logoArcite from "../../../assets/logo/StepLogo.png";
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
    <nav className="flex flex-wrap items-center justify-start p-3 bg-white relative">
      {/* Logo */}
      <img src={logoArcite} alt="ARCITE" width="110" className="mr-4" />

           {/* Vertical Line */}
           <div className="h-10 border-l-2 border-teal-500 mx-10"></div>

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
          <Link to="/recruiterdashboard" className=" font-custom text-gray-900 font-normal hover:text-teal-500">
            Home
          </Link>      
       
          <Link to="/viewjobs" className="font-custom text-gray-900 font-normal hover:text-teal-500">
            Manage Jobs
          </Link>
        
          <Link to="/applicantsList" className="font-custom text-gray-900 font-normal hover:text-teal-500">
            Applicants
          </Link>

          {/* Buttons Section */}
          {recruiter ? (
            <>
              {/* User Name with Dropdown */}
              <div className="relative">
                <button
                  onClick={toggleProfileMenu}
                  className="font-custom px-6 py-2 font-semibold text-gray-100 bg-teal-500 hover:bg-teal-600 rounded-lg transition duration-300 ease-in-out"
                >
                  {recruiter?.recruiterName}
                </button>

           
                {profileMenuOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-gray-100 rounded-md shadow-lg z-50">
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


