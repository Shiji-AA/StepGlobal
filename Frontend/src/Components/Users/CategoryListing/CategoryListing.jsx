import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { axiosInstance } from "../../../api/axiosInstance";
import toast from "react-hot-toast";

function CategoryListing() {
  const [jobDetails, setJobDetails] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch Job Details
  useEffect(() => {
    setLoading(true);
    axiosInstance
      .get("/userjoblist")
      .then((response) => {
  
        const jobs = response.data?.jobDetails || [];
        setJobDetails(jobs);
      })
      .catch((error) => {
        console.error("Error in fetching data", error);
        toast.error("Error in fetching data");
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="bg-white py-24 px-6 flex flex-col items-center">
      <h2 className="font-custom font-weight-normal text-3xl  text-aqua mb-8">
        Search Jobs by Category
      </h2>
      <div className="max-w-6xl w-full">
        {loading ? (
          <p>Loading...</p>
        ) : jobDetails.length === 0 ? (
          <p>No jobs available</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {jobDetails.map((item) => (
              <div
                key={item._id}
                className="bg-gray-100 overflow-hidden p-6 shadow-lg rounded-lg hover:shadow-xl transition-transform duration-300 hover:scale-105"
              >
               <Link to={`/findjobsbycategory/${item.category?._id}`}>
                  <div className=" font-custom font-weight-normal w-full h-48 overflow-hidden rounded-t-lg">
                    <img
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                      src={item.category?.photo}
                      alt={item.category?.title}
                      onError={(e) => (e.target.src = "/fallback-image.jpg")} // Optional: Fallback image
                    />
                  </div>
                </Link>
                <div className="text-start mt-4">
                  <div className="bg-tealLight font-custom  text-white py-1 px-4 inline-block rounded-md">
                    {typeof item.category?.title === "string"
                      ? item.category?.title
                      : "Unknown Category"}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default CategoryListing;
