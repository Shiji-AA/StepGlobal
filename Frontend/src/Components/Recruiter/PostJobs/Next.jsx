import RecruiterNavbar from "../RecruiterNavbar/RecruiterNavbar";
import jobpost from "../../../assets/jobpost.jpg";


function Next() {
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
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Add Job Details</h2>
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
          

       
<div>
<label>Job Type*</label>
    <div className="mt-6 pt-3 flex flex-wrap mx-6 border-t">
        <div className="text-xs mr-2 my-1 uppercase tracking-wider border px-2 py-1 text-indigo-600 border-indigo-600 rounded-[50px] hover:bg-indigo-600 hover:text-indigo-100 cursor-default">
          User experience
        </div>
        <div className="text-xs mr-2 my-1 uppercase tracking-wider border px-2 py-1 text-indigo-600 border-indigo-600 rounded-[50px] hover:bg-indigo-600 hover:text-indigo-100 cursor-default">
          VueJS
        </div>
        <div className="text-xs mr-2 my-1 uppercase tracking-wider border px-2 py-1 text-indigo-600 border-indigo-600 rounded-[50px] hover:bg-indigo-600 hover:text-indigo-100 cursor-default">
          TailwindCSS
        </div>
        <div className="text-xs mr-2 my-1 uppercase tracking-wider border px-2 py-1 text-indigo-600 border-indigo-600 rounded-[50px] hover:bg-indigo-600 hover:text-indigo-100 cursor-default">
          React
        </div>
        <div className="text-xs mr-2 my-1 uppercase tracking-wider border px-2 py-1 text-indigo-600 border-indigo-600 rounded-[50px] hover:bg-indigo-600 hover:text-indigo-100 cursor-default">
          Painting
        </div>
        <div className="text-xs mr-2 my-1 uppercase tracking-wider border px-2 py-1 text-indigo-600 border-indigo-600 rounded-[50px] hover:bg-indigo-600 hover:text-indigo-100 cursor-default">
          TailwindCSS
        </div>
        <div className="text-xs mr-2 my-1 uppercase tracking-wider border px-2 py-1 text-indigo-600 border-indigo-600 rounded-[50px] hover:bg-indigo-600 hover:text-indigo-100 cursor-default">
          React
        </div>
        <div className="text-xs mr-2 my-1 uppercase tracking-wider border px-2 py-1 text-indigo-600 border-indigo-600 rounded-[50px] hover:bg-indigo-600 hover:text-indigo-100 cursor-default">
          Painting
        </div>
        <br/>
        <div className="text-xs mr-2 my-1 uppercase tracking-wider border px-2 py-1 text-indigo-600 border-indigo-600 rounded-[50px] hover:bg-indigo-600 hover:text-indigo-100 cursor-default">
          React
        </div>
        <div className="text-xs mr-2 my-1 uppercase tracking-wider border px-2 py-1 text-indigo-600 border-indigo-600 rounded-[50px] hover:bg-indigo-600 hover:text-indigo-100 cursor-default">
          +Painting
        </div>
        <div className="text-xs mr-2 my-1 uppercase tracking-wider border px-2 py-1 text-indigo-600 border-indigo-600 rounded-[50px] hover:bg-indigo-600 hover:text-indigo-100 cursor-default">
          +TailwindCSS
        </div>
        <div className="text-xs mr-2 my-1 uppercase tracking-wider border px-2 py-1 text-indigo-600 border-indigo-600 rounded-[50px] hover:bg-indigo-600 hover:text-indigo-100 cursor-default">
          +React
        </div>
        <div className="text-xs mr-2 my-1 uppercase tracking-wider border px-4 py-1 text-indigo-600 border-indigo-600 rounded-[50px] hover:bg-indigo-600 hover:text-indigo-100 cursor-default">
 + Painting
</div>
</div>
</div>

    <br/>  
    <br/>  
    <br/>  
    <hr/>

<div>
<label>Schedule*</label>
    <div className="mt-6 pt-3 flex flex-wrap mx-6 border-t">
        <div className="text-xs mr-2 my-1 uppercase tracking-wider border px-2 py-1 text-indigo-600 border-indigo-600 rounded-[50px] hover:bg-indigo-600 hover:text-indigo-100 cursor-default">
          User experience
        </div>
        <div className="text-xs mr-2 my-1 uppercase tracking-wider border px-2 py-1 text-indigo-600 border-indigo-600 rounded-[50px] hover:bg-indigo-600 hover:text-indigo-100 cursor-default">
          VueJS
        </div>
        <div className="text-xs mr-2 my-1 uppercase tracking-wider border px-2 py-1 text-indigo-600 border-indigo-600 rounded-[50px] hover:bg-indigo-600 hover:text-indigo-100 cursor-default">
          TailwindCSS
        </div>
        <div className="text-xs mr-2 my-1 uppercase tracking-wider border px-2 py-1 text-indigo-600 border-indigo-600 rounded-[50px] hover:bg-indigo-600 hover:text-indigo-100 cursor-default">
          React
        </div>
        <div className="text-xs mr-2 my-1 uppercase tracking-wider border px-2 py-1 text-indigo-600 border-indigo-600 rounded-[50px] hover:bg-indigo-600 hover:text-indigo-100 cursor-default">
          Painting
        </div>
        <div className="text-xs mr-2 my-1 uppercase tracking-wider border px-2 py-1 text-indigo-600 border-indigo-600 rounded-[50px] hover:bg-indigo-600 hover:text-indigo-100 cursor-default">
          TailwindCSS
        </div>
        <div className="text-xs mr-2 my-1 uppercase tracking-wider border px-2 py-1 text-indigo-600 border-indigo-600 rounded-[50px] hover:bg-indigo-600 hover:text-indigo-100 cursor-default">
          React
        </div>
        <div className="text-xs mr-2 my-1 uppercase tracking-wider border px-2 py-1 text-indigo-600 border-indigo-600 rounded-[50px] hover:bg-indigo-600 hover:text-indigo-100 cursor-default">
          Painting
        </div>
        <br/>
        <div className="text-xs mr-2 my-1 uppercase tracking-wider border px-2 py-1 text-indigo-600 border-indigo-600 rounded-[50px] hover:bg-indigo-600 hover:text-indigo-100 cursor-default">
          React
        </div>
        <div className="text-xs mr-2 my-1 uppercase tracking-wider border px-2 py-1 text-indigo-600 border-indigo-600 rounded-[50px] hover:bg-indigo-600 hover:text-indigo-100 cursor-default">
          Painting
        </div>
        <div className="text-xs mr-2 my-1 uppercase tracking-wider border px-2 py-1 text-indigo-600 border-indigo-600 rounded-[50px] hover:bg-indigo-600 hover:text-indigo-100 cursor-default">
          TailwindCSS
        </div>
        <div className="text-xs mr-2 my-1 uppercase tracking-wider border px-2 py-1 text-indigo-600 border-indigo-600 rounded-[50px] hover:bg-indigo-600 hover:text-indigo-100 cursor-default">
          React
        </div>
        <div className="text-xs mr-2 my-1 uppercase tracking-wider border px-4 py-1 text-indigo-600 border-indigo-600 rounded-[50px] hover:bg-indigo-600 hover:text-indigo-100 cursor-default">
  Painting
</div>
</div>
</div>


          </div>
        </div>
      </div>
    </>
  );
}

export default Next;
