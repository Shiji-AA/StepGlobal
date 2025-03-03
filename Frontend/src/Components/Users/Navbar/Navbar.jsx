import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import stepLogo from "../../../assets/logo/StepLogo.png";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../../../Redux/Slices/AuthSlice";
//import Toolbar from "./Toolbar";


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
    {/* <Toolbar/> */}
      <nav className="flex items-center justify-between p-3 bg-white shadow-md">
      
        {/* Logo */}
        <img src={stepLogo} alt="ARCITE" width="110" className="mr-4" />

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
          className={`w-full flex-grow md:flex md:items-center md:w-auto ${
            menuOpen ? "block" : "hidden"
          }`}
        >
       <div className="flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-6 mt-4 md:mt-0 w-full">
  <Link to="/" className="font-custom text-black font-normal hover:text-teal-400">
    Home
  </Link>
  <Link to="" className="font-custom text-black font-normal hover:text-teal-400">
    About Us
  </Link>
  <Link to="" className="font-custom text-black font-normal hover:text-teal-400">
    Contact Us
  </Link>

  {user ? (
    <>
      <Link to="/appliedJobs" className="font-custom text-black font-normal hover:text-teal-400">
        My Applications
      </Link>


      <div className="relative ">
        <button
          onClick={toggleProfileMenu}
          className=" font-custom px-6 py-2 font-normal text-white bg-teal-500 hover:bg-teal-600 rounded-lg transition duration-300 ease-in-out"
        >
          {user?.name}
        </button>

        {profileMenuOpen && (
          <div className="font-custom  absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-50">
            <Link to="/profile" className="block px-4 py-2 text-gray-800 hover:bg-gray-100" onClick={() => setProfileMenuOpen(false)}>
              Profile
            </Link>
            <Link to="/savedJobs" className="font-custom  block px-4 py-2 text-gray-800 hover:bg-gray-100" onClick={() => setProfileMenuOpen(false)}>
              Saved Jobs
            </Link>
            <Link to="/changePassword" className="font-custom  block px-4 py-2 text-gray-800 hover:bg-gray-100" onClick={() => setProfileMenuOpen(false)}>
              Account Settings
            </Link>
            <button
              onClick={handleLogout}
              className="font-custom  block w-full text-left px-4 py-2 text-red-600 hover:bg-gray-100"
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </>
  ) : (
    <div className="ml-auto">
      <Link to="/register">
        <button className="font-custom font-normal px-4 py-2 text-white bg-teal-500 hover:bg-teal-600 rounded-lg transition duration-300 ease-in-out">
          Create my Profile
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

{
  /* <div className="flex items-center  px-2">
<img
  className="object-cover mx-2 rounded-full h-9 w-9"
  src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
  alt="avatar"
/>
<h4 className="mx-2 font-medium text-gray-800 dark:text-gray-200 hover:underline">
  John Doe
</h4>
</div> */
}
