import { useState } from "react";
import { logout } from '../../../../Redux/Slices/AdminSlice'
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import logoArcite from "../../../assets/logoArcite.png"; // Keep the same logo for consistency

function AdminNavbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const adminUser = useSelector((state) => state.admin.admindata);

  const handleLogout = () => {
    dispatch(logout());
    navigate("/admin"); // Redirect to login page or admin login page
  };

  return (
    <div>
      <nav className="flex flex-wrap items-center justify-between p-3 bg-blue-700">
        <img src={logoArcite} className="h-10 w-36" alt="Job Portal" width="120" />
        
        <div className="flex md:hidden">
          <button onClick={toggleMenu}>
            <img
              className={menuOpen ? "hidden" : "block"}
              src="https://img.icons8.com/fluent-systems-regular/2x/menu-squared-2.png"
              width="40"
              height="40"
            />
            <img
              className={menuOpen ? "block" : "hidden"}
              src="https://img.icons8.com/fluent-systems-regular/2x/close-window.png"
              width="40"
              height="40"
            />
          </button>
        </div>

        <div
          className={`w-full flex-grow md:flex md:items-center md:w-auto ${menuOpen ? "block" : "hidden"}`}
        >
          <div className="ml-40 text-right text-bold mt-5 md:mt-0 border-t-2 border-white-900 md:border-none">
            <a
              href="/admin-dashboard"
              className="block md:inline-block text-white hover:text-yellow-400 px-3 py-3 border-b-2 border-white-900 md:border-none"
            >
              Dashboard
            </a>
            <a
              href="/job-listings"
              className="block md:inline-block text-white hover:text-yellow-400 px-3 py-3 border-b-2 border-white-900 md:border-none"
            >
              Job Listings
            </a>
            <a
              href="/applicants"
              className="block md:inline-block text-white hover:text-yellow-400 px-3 py-3 border-b-2 border-white-900 md:border-none"
            >
              Applicants
            </a>
            <a
              href="/employers"
              className="block md:inline-block text-white hover:text-yellow-400 px-3 py-3 border-b-2 border-white-900 md:border-none"
            >
              Employers
            </a>
            <a
              href="/settings"
              className="block md:inline-block text-white hover:text-yellow-400 px-3 py-3 border-b-2 border-white-900 md:border-none"
            >
              Settings
            </a>
          </div>
        </div>

        {adminUser && (
          <button
            onClick={handleLogout}
            className={`toggle hidden md:flex w-full md:w-auto px-4 py-2 text-right bg-red-500 hover:bg-red-700 text-white md:rounded ${
              menuOpen ? "block" : "hidden"
            }`}
          >
            Logout
          </button>
        )}
      </nav>
    </div>
  );
}

export default AdminNavbar;
