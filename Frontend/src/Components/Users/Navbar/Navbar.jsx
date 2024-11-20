import { Link } from "react-router-dom";
import { useState } from "react";
import logoArcite from "../../../assets/logoArcite.png";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../../../Redux/Slices/AuthSlice";

function Navbar() {
  const user = useSelector((state) => state.auth.userdata);
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout());
  };

  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const toggleDropdown = () => {
    setDropdownOpen((prev) => !prev);
  };

  return (
    <nav className="flex items-center justify-between p-4 bg-white shadow-md">
      {/* Logo */}
      <img src={logoArcite} alt="ARCITE" width="120" className="mr-4" />

      {/* Center Navigation Links */}
      <div className="flex-1 hidden md:flex justify-center space-x-6">
        <Link to="/" className="text-black font-semibold hover:text-blue-500">
          Home
        </Link>
       
        <Link
          to="/findjobs"
          className="text-black font-semibold hover:text-blue-500"
        >
          Find Jobs
        </Link>
        <Link
          to="/aboutus"
          className="text-black font-semibold hover:text-blue-500"
        >
          About Us
        </Link>
        <Link
          to="/contactus"
          className="text-black font-semibold hover:text-blue-500"
        >
          Contact Us
        </Link>
      </div>

      {/* Right Section: User Dropdown or Guest Buttons */}
      <div className="flex items-center space-x-3 pr-10">
        {user ? (
          <div className="relative">
            <button
              onClick={toggleDropdown}
              className="px-6 py-2 font-semibold text-white bg-blue-500 hover:bg-blue-600 rounded-lg transition duration-300 ease-in-out"
            >
              {user?.name}
            </button>
            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white border rounded-lg shadow-lg z-10">
                <Link
                  to="/profile"
                  className="block px-4 py-2 text-gray-800 hover:bg-blue-500 hover:text-white rounded-t-lg"
                >
                  Profile
                </Link>
                <Link
                  to="/myjobs"
                  className="block px-4 py-2 text-gray-800 hover:bg-blue-500 hover:text-white"
                >
                  My Jobs
                </Link>
                <Link
                  to="/accountsettings"
                  className="block px-4 py-2 text-gray-800 hover:bg-blue-500 hover:text-white"
                >
                  Account Settings
                </Link>
                <hr />
                <button
                  onClick={handleLogout}
                  className="block w-full text-left px-4 py-2 text-red-600 hover:bg-red-100"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
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

      {/* Mobile Menu Toggle */}
      <div className="md:hidden">
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
    </nav>
  );
}

export default Navbar;
