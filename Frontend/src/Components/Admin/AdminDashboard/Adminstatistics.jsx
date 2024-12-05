import { useState, useEffect } from "react";
import { axiosInstanceAdmin } from "../../../api/axiosinstance";

function Adminstatistics() {
  const [count, setCount] = useState({
    totalJobsCount: 0,
    totalApplicantsCount: 0,
    totalEmployersCount: 0,
    totalHiresCount: 0,
  });

  useEffect(() => {
    axiosInstanceAdmin
      .get("/totalcount")
      .then((response) => {
        if (response) {
          console.log(response.data, "totalStats");
          setCount(response.data);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <div className="bg-gray-100 ml-3 mt-10 flex flex-col md:flex-row md:justify-between">
        <div className="flex flex-col gap-6 md:flex-row md:gap-16">
          <div
            className="bg-gradient-to-r from-blue-500  to-blue-400 p-6 rounded-lg border-2 border-blue-400 mb-6 md:mb-0"
            style={{ minWidth: "250px", minHeight: "180px" }}
          >
            <div className="text-lg text-blue-300">Total Jobs</div>
            <div className="text-4xl text-blue-100">{count?.totalJobsCount}</div>
          </div>
          <div
            className="bg-gradient-to-r from-blue-500  to-blue-400 p-6 rounded-lg border-2 border-blue-500 mb-6 md:mb-0"
            style={{ minWidth: "250px", minHeight: "180px" }}
          >
            <div className="text-lg text-blue-300">Total Employers</div>
            <div className="text-4xl text-blue-100">{count?.totalEmployersCount}</div>
          </div>
        </div>
        <div className="flex flex-col gap-6 md:flex-row md:gap-14">
          <div
            className="bg-gradient-to-r from-blue-500  to-blue-400 p-6 rounded-lg border-2 border-blue-500 mb-6 md:mb-0"
            style={{ minWidth: "250px", minHeight: "180px" }}
          >
            <div className="text-lg text-blue-300">Total Applicants</div>
            <div className="text-4xl text-blue-100">{count?.totalApplicantsCount}</div>
          </div>
          <div
            className="bg-gradient-to-r from-blue-500 to-blue-400 p-6 rounded-lg border-2 border-blue-500 mb-6 md:mb-0 mr-3"
            style={{ minWidth: "250px", minHeight: "180px" }}
          >
            <div className="text-lg text-blue-300">Total Hires</div>
            <div className="text-4xl text-blue-100">{count?.totalHiresCount}</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Adminstatistics;
