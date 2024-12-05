import RecruiterNavbar from "../RecruiterNavbar/RecruiterNavbar";
import jobpost from "../../../assets/jobpost.jpg";
import {Link} from 'react-router-dom'

function PostJobs() {
  return (
    <>
      <RecruiterNavbar />
      <div className="flex justify-center p-5">
        {/* Parent container with reduced width */}
        <div className="flex flex-col w-full max-w-4xl bg-white p-6 rounded-lg shadow-lg gap-8">

          {/* First section: Add Job Basics */}
          <div className="flex flex-col md:flex-row gap-8">
            {/* Left side div (Text) */}
            <div className="flex-1">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Add Job Basics</h2>
              <p className="text-gray-600 mb-6">
                Enter the essential details of the job you are posting.
              </p>
            </div>

            {/* Right side div (Image) */}
            <div className="flex-1">
              <img
                src={jobpost}
                alt="jobpost"
                className="object-cover w-full h-64 md:h-full rounded-lg shadow-lg"
                loading="lazy"
              />
            </div>
          </div>

          {/* Form Fields Container below the first section */}
          <div className="bg-white p-6 rounded-lg shadow-lg w-full">
            <div className="space-y-6">
              
              {/* Company Industry Dropdown */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Companys Industry *
                </label>
                <select className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option>IT Services</option>
                  <option>Finance</option>
                  <option>Healthcare</option>
                  <option>Manufacturing</option>
                </select>
              </div>

              {/* Company Description Text Area */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Company Description
                  <span className="block text-xs text-gray-500">
                    Introduce your company to people in a few lines.
                  </span>
                </label>
                <textarea
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  rows="4"
                ></textarea>
              </div>

              {/* Job Title Input */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Job Title *
                </label>
                <input
                  type="text"
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter job title"
                />
              </div>
            </div>

            {/* Job Posting Location */}
            <div className="mt-6 space-y-4">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Job Posting Location</h2>

              {/* Location Description */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Which option best describes this job's location? *
                </label>
                <select className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option>On-site</option>
                  <option>Remote</option>
                </select>
              </div>

              {/* City */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">City *</label>
                <select className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option>City 1</option>
                  <option>City 2</option>
                </select>
              </div>

              {/* Area */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Area</label>
                <select className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option>Area 1</option>
                  <option>Area 2</option>
                </select>
              </div>

              {/* Pincode */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Pincode</label>
                <input
                  type="text"
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter pincode"
                />
              </div>

              {/* Street Address */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Street Address</label>
                <input
                  type="text"
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter street address"
                />
              </div>
            </div>

            {/* Submit Button */}
            <div className="mt-8 text-right">
            <Link to="/postjobs/next">
  <button
    className="bg-blue-500 text-white px-6 py-3 rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
  >
    Continue &rarr;
  </button>
</Link>
            
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PostJobs;
