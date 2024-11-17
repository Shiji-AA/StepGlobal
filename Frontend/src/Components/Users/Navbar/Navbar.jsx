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
  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <nav className="flex items-center justify-between p-4 bg-white shadow-md">
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
          <Link to="/" className="text-black font-semibold hover:text-blue-500">
            Home
          </Link>

          <Link
            to="/profile"
            className="text-black font-semibold hover:text-blue-500"
          >
            Profile
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
            to="/page"
            className="text-black font-semibold hover:text-blue-500"
          >
            Page
          </Link>
          <Link
            to="/contactus"
            className="text-black font-semibold hover:text-blue-500"
          >
            Contact Us
          </Link>

          {/* Buttons Section */}
          {user ? (
            <>
              <button className="px-6 py-2 font-semibold text-white bg-blue-500 hover:bg-blue-600 rounded-lg transition duration-300 ease-in-out">
                {user?.name}
              </button>
              <button
                onClick={handleLogout}
                className="px-6 py-2 font-semibold text-white bg-blue-500 hover:bg-blue-600 rounded-lg transition duration-300 ease-in-out"
              >
                Logout
              </button>
            </>
          ) : (
            <div className="flex flex-col md:flex-row md:space-x-3 space-y-3 md:space-y-0 mt-4 md:mt-0">
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
  );
}

export default Navbar;
