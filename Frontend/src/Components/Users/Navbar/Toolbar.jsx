import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faTwitter,
  faLinkedin,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

function Toolbar() {
  return (
    <div className="font-body w-full bg-gradient-to-r from-tealLight via-tealLight to-gray-800 text-white py-3 px-4 flex flex-col sm:flex-row justify-between items-center text-m shadow-lg">
      {/* Top Section: Email and Phone */}
      <div className="flex flex-wrap items-center space-x-4">
        <div className="flex items-center space-x-1">
          <FaEnvelope className="text-white hover:text-navy" />
          <a
            href="mailto:info@urbancad.in"
            className="hover:underline text-white hover:text-navy ml-[-4px]"
          >
            info@stepglobal.in
          </a>
        </div>
        <div className="flex items-center space-x-1">
          <FaPhoneAlt className="text-white hover:text-navy" />
          <a
            href="tel:+919633221153"
            className="hover:underline text-white hover:text-navy ml-[-4px]"
          >
            +91-9633221153
          </a>
        </div>
      </div>

      {/* Bottom Section: Follow Us */}
      <div className="flex items-center space-x-4 mt-2 sm:mt-0">
        <span className="text-white hover:text-aqua">Follow Us:</span>
        <a
          href="https://www.facebook.com/arciteschooloftechnicaleducation"
          className="text-white hover:text-aqua"
        >
          <FontAwesomeIcon icon={faFacebookF} size="lg" />
        </a>
        <a
          href="https://www.instagram.com/arcite.in"
          className="text-white hover:text-aqua"
        >
          <FontAwesomeIcon icon={faInstagram} size="lg" />
        </a>
        <a
          href="https://twitter.com/arcite_in"
          className="text-white hover:text-aqua"
        >
          <FontAwesomeIcon icon={faTwitter} size="lg" />
        </a>
        <a
          href="https://www.linkedin.com/company/arc-institute-of-technical-education/posts/?feedView=all"
          className="text-white hover:text-aqua"
        >
          <FontAwesomeIcon icon={faLinkedin} size="lg" />
        </a>
        <a
          href="https://www.youtube.com/@arciteschooloftechnicaledu6571"
          className="text-white hover:text-aqua"
        >
          <FontAwesomeIcon icon={faYoutube} size="lg" />
        </a>
      </div>
    </div>
  );
}

export default Toolbar;