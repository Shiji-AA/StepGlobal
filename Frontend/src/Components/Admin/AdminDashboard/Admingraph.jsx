import { useState, useEffect } from "react";
import LineChart from "../../../Components/Admin/Charts/LineChart";

function AdminStatistics() {
  const [applicationsMonthlyData, setApplicationsMonthlyData] = useState();
  const [hiresMonthlyData, setHiresMonthlyData] = useState();

  useEffect(() => {

    const dummyApplicationsMonthlyData = [120, 150, 170, 130, 180, 220, 210, 190, 200, 240, 210, 230];
    const dummyHiresMonthlyData = [15, 18, 20, 17, 22, 25, 24, 23, 26, 29, 28, 27];

    setApplicationsMonthlyData(dummyApplicationsMonthlyData);
    setHiresMonthlyData(dummyHiresMonthlyData);
  }, []);

  return (
    <>
      <div className="bg-gray-100 flex justify-center">
        <div className="flex justify-center items-center bg-red-300 border-2 border-blue-500 p-4">
          <div
            id="chart"
            className="bg-white p-8 rounded-lg shadow-md violet-shadow"
            style={{ height: "550px", width: "900px" }} // Adjust height and width here
          >
            <LineChart
              applicationsMonthlyData={applicationsMonthlyData}
              hiresMonthlyData={hiresMonthlyData}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default AdminStatistics;
