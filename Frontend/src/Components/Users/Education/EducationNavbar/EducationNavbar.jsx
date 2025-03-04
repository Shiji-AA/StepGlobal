import { useState } from "react";
import { Link } from "react-router-dom";
import logoArcite from "../../../../assets/logo/StepLogo.png";
import squaremenu from "../../../../assets/logo/squaremenu1.png";
import closewindow from "../../../../assets/logo/closewindow.png";
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaTimes } from "react-icons/fa"; // React Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookF,
  faInstagram,
  faTwitter as faXTwitter,
  faLinkedin,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons"; // Correct import for FontAwesome icons

function EducationNavbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const toggleModal = () => {
    setModalOpen((prev) => !prev);
  };

  return (
    <>
      {/* Navbar */}
      <nav className="flex flex-wrap items-center justify-between p-3 bg-white relative">
        <img src={logoArcite} alt="Step logo" width="110" />

        {/* Vertical Line */}
        <div className="h-10 border-l-2 border-teal-500 mx-10"></div>

        {/* Mobile Menu Button (Only for Mobile View) */}
        <div className="flex md:hidden">
          <button onClick={toggleMenu}>
            <img
              className={menuOpen ? "hidden" : "block"}
              src={squaremenu}
              width="37"
              height="37"
              alt="Menu"
            />
            <img
              className={menuOpen ? "block" : "hidden"}
              src={closewindow}
              width="37"
              height="37"
              alt="Close"
            />
          </button>
        </div>

        {/* Menu Items */}
        <div
          className={`w-full flex-grow md:flex md:items-center md:w-auto ${
            menuOpen ? "block" : "hidden"
          }`}
        >
          <div className="font-custom font-normal ml-10 text-right  mt-5 md:mt-0 border-t-2 border-white-900 md:border-none">
            <Link
              to="/"
              className="block md:inline-block text-navy  hover:text-aqua px-3 py-3 border-b-2 border-white-900 md:border-none"
            >
              Home
            </Link>
            <Link
              to="/architectureportal"
              className="block md:inline-block text-navy  hover:text-aqua px-3 py-3 border-b-2 border-white-900 md:border-none"
            >
              Architecture Portal
            </Link>
            <Link
              to="/jobportal"
              className="block md:inline-block text-navy  hover:text-aqua px-3 py-3 border-b-2 border-white-900 md:border-none"
            >
              Job Portal
            </Link>
            <Link
              to=""
              className="block md:inline-block text-navy  hover:text-aqua px-3 py-3 border-b-2 border-white-900 md:border-none"
            >
              Contact Us
            </Link>
            <Link
              to=""
              className="block md:inline-block text-navy  hover:text-aqua px-3 py-3 border-b-2 border-white-900 md:border-none"
            >
              About Us
            </Link>
          </div>
        </div>

   
        <div className="hidden md:flex pr-5">
          <button onClick={toggleModal}>
            <img
              src={squaremenu}
              width="37"
              height="37"
              alt="Contact Info"
              className="cursor-pointer"
            />
          </button>
        </div>
      </nav>

      {/* Modal for Contact Info */}
      {modalOpen && (
        <div className="fixed top-0 right-0 m-4 w-96 bg-white p-6 rounded-lg shadow-lg z-50">
          <img src={logoArcite} alt="Arcite Logo" className="mb-4" width="100" height="100" />

          {/* Description Text */}
          <div className="hidden sm:block mb-4">
            <p className="font-custom font-normal text-sm text-gray-700">
              We provide the student community with 100 percent practically oriented training so that they are forged into industry professionals to have a successful career in their respective industry.
            </p>
          </div>

          <h2 className="font-custom text-lg font-normal mb-4 text-gray-800">Contact Info</h2>

          <ul>
            <li className="flex items-center mb-3">
              <FaMapMarkerAlt className="text-teal-500 mr-3" />
              <a
                href="https://goo.gl/maps/2Yp6cbXpG44B4rdA8"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-teal-500 text-sm"
              >
                2nd Floor, SAS Arcade, Opp. Vyapara Bhavan, Kottiyam, Kollam, Kerala 691571
              </a>
            </li>
            <li className="flex items-center mb-3 text-sm">
              <FaPhone className="text-teal-500 mr-3" />
              <a href="tel:917994211144" className="text-gray-700 hover:text-teal-500">
                +91-799 421 1144
              </a>
            </li>

            {/* Email */}
            <li className="flex items-center mb-3 text-sm">
              <FaEnvelope className="text-teal-500 mr-3" />
              <a href="mailto:info@arcite.in" className="text-gray-700 hover:text-teal-500">
                info@arcite.in
              </a>
            </li>
          </ul>

          {/* Social Media Icons */}
          <div className="flex justify-around mt-4">
            <a
              href="https://www.facebook.com/arciteschooloftechnicaleducation/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-500 hover:text-teal-800 p-2"
            >
              <FontAwesomeIcon icon={faFacebookF} size="lg" />
            </a>
            <a
              href="https://x.com/arcite_in"
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-500 hover:text-teal-800 p-2"
            >
              <FontAwesomeIcon icon={faXTwitter} size="lg" />
            </a>
            <a
              href="https://www.youtube.com/@arciteschooloftechnicaledu6571"
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-500 hover:text-teal-800 p-2"
            >
              <FontAwesomeIcon icon={faYoutube} size="lg" />
            </a>
            <a
              href="https://www.linkedin.com/company/arc-institute-of-technical-education/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-500 hover:text-teal-800 p-2"
            >
              <FontAwesomeIcon icon={faLinkedin} size="lg" />
            </a>
            <a
              href="https://www.instagram.com/arcite.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-500 hover:text-teal-800 p-2"
            >
              <FontAwesomeIcon icon={faInstagram} size="lg" />
            </a>
          </div>

          {/* Close Button with Icon */}
          <button
            onClick={toggleModal}
            className="absolute top-2 right-2 text-teal-500 p-2 hover:bg-teal-100 rounded-full"
          >
            <FaTimes size={24} />
          </button>
        </div>
      )}
    </>
  );
}

export default EducationNavbar;
