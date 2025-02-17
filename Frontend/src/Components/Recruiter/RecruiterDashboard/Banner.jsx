import { Link } from "react-router-dom";
import hero from '../../../assets/heroImages/hero2.jpg';

function Banner() {
  return (
    <section className="relative bg-gradient-to-r from-teal-700 to-teal-900 text-white min-h-screen flex items-center justify-center px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between min-h-screen">
        
        {/* Left Content */}
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-5xl font-extrabold leading-tight">
            Hire Top Talent <br /> Faster & Smarter
          </h1>
          <p className="mt-4 text-lg text-gray-200">
            Streamline your hiring process with AI-powered job postings and candidate management.
          </p>
          <Link
            to="/postjobs"
            className="mt-6 inline-block bg-yellow-400 text-teal-900 px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover:bg-yellow-300 transition"
          >
            Post a Job Now
          </Link>
        </div>

        {/* Right Image with Increased Height */}
        <div className="md:w-1/2 flex justify-center items-center h-full">
          <img 
            src={hero}
            alt="Recruitment process illustration"
            className="rounded-lg shadow-3xl w-full h-[80vh] object-cover"
          />
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-10 left-10 w-24 h-24 bg-yellow-400 rounded-full opacity-30 blur-lg"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-purple-500 rounded-full opacity-20 blur-xl"></div>
    </section>
  );
}

export default Banner;
