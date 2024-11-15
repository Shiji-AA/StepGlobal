import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import logoArcite from "../../../assets/logoArcite.png"; // Keep the logo
import { useDispatch, useSelector } from "react-redux";
import { logout } from '../../../../Redux/Slices/RecruiterSlice'

function RecruiterNavbar() {
  const navigate = useNavigate();
  const recruiter = useSelector((state) => state.recruiter.recruiterdata); // Fetch recruiter data from the Redux store
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/recruiterlogin"); // Redirect to recruiter login page
  };

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev); // Toggle the mobile menu visibility
  };

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
          <Link to="/recruiterdashboard" className="text-white font-semibold hover:text-yellow-400">
            Dashboard
          </Link>
          <Link
            to="/job-listings"
            className="text-white font-semibold hover:text-yellow-400"
          >
            Job Listings
          </Link>
          <Link
            to="/post-job"
            className="text-white font-semibold hover:text-yellow-400"
          >
            Post a Job
          </Link>
          <Link
            to="/view-applicants"
            className="text-white font-semibold hover:text-yellow-400"
          >
            View Applicants
          </Link>
          <Link
            to="/account-settings"
            className="text-white font-semibold hover:text-yellow-400"
          >
            Settings
          </Link>

          {/* Buttons Section */}
          {recruiter ? (
            <>
              <button className="px-6 py-2 font-semibold text-white bg-green-500 hover:bg-green-600 rounded-lg transition duration-300 ease-in-out">
                {recruiter?.recruiterName}
              </button>
              <button
                onClick={handleLogout}
                className="px-6 py-2 font-semibold text-white bg-red-500 hover:bg-red-600 rounded-lg transition duration-300 ease-in-out"
              >
                Logout
              </button>
            </>
          ) : (
            // Optionally show login/signup if no recruiter data exists
            <Link
              to="/recruiterlogin"
              className="px-6 py-2 font-semibold text-white bg-blue-500 hover:bg-blue-600 rounded-lg transition duration-300 ease-in-out"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}

export default RecruiterNavbar;
