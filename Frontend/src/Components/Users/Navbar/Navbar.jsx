import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import stepLogo from "../../../assets/logo/stepLogo.png";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../../../Redux/Slices/AuthSlice";

function Navbar() {
  const navigate = useNavigate();
  const user = useSelector((state) => state.auth.userdata);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  const [menuOpen, setMenuOpen] = useState(false);
  const [profileMenuOpen, setProfileMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const toggleProfileMenu = () => setProfileMenuOpen((prev) => !prev);

  return (


  <>
    <nav className="flex items-center justify-between p-4 bg-white shadow-md">
      {/* Logo */}
      <img src={stepLogo} alt="ARCITE" width="110" className="mr-4" />

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
          <Link to="/" className="text-black font-semibold hover:text-yellow-400">
            Home
          </Link>
      
          <Link to="/findjobs" className="text-black font-semibold hover:text-yellow-400">
            Search Jobs
          </Link>
          <Link to="/appliedJobs" className="text-black font-semibold hover:text-yellow-400">
            My Applications
          </Link>

          <Link to="/aboutus" className="text-black font-semibold hover:text-yellow-400">
            About Us
          </Link>
        
          <Link to="/contactus" className="text-black font-semibold hover:text-yellow-400">
            Contact Us
          </Link>

          {/* Buttons Section */}
          {user ? (
            <>
              {/* User Name with Dropdown */}
              <div className="relative">
                <button
                  onClick={toggleProfileMenu}
                  className="px-6 py-2 font-semibold text-white bg-green-500 hover:bg-green-600 rounded-lg transition duration-300 ease-in-out"
                >
                  {user?.name}
                </button>

                {/* Dropdown Menu */}
                {profileMenuOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-50">
                    <Link
                      to="/profile"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                      onClick={() => setProfileMenuOpen(false)}
                    >
                      Profile
                    </Link>
                    <Link
                      to="/savedJobs"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                      onClick={() => setProfileMenuOpen(false)}
                    >
                      Saved Jobs
                    </Link>
                    <Link
                      to="/changePassword"
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
            <div className="flex space-x-3">
              <Link to="/register">
                <button className="px-6 py-2 font-semibold text-white bg-red-500 hover:bg-red-600 rounded-lg transition duration-300 ease-in-out">
                  Register
                </button>
              </Link>
              <Link to="/login">
                <button className="px-6 py-2 font-semibold text-gray-800 bg-white hover:bg-red-600 rounded-lg border border-gray-300 transition duration-300 ease-in-out">
                  Login
                </button>
              </Link>
              <Link to="/recruiterlogin">
                <button className="px-6 py-2 font-semibold text-white bg-blue-500 hover:bg-blue-600 rounded-lg transition duration-300 ease-in-out">
                  Recruiter?
                </button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  </>
  );
}

export default Navbar;


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