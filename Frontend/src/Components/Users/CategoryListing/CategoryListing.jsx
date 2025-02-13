import { Link } from "react-router-dom";

// Static imports for images
import electrical from "../../../assets/images/electrical1.jpg";
import mechanical from "../../../assets/images/mech3.jpg";
import civil from "../../../assets/images/civil22.jpg";
import computer1 from "../../../assets/images/computer1.jpg";

// Define the job categories as an array of objects
const jobCategories = [
  {
    _id: 1,
    category: "Electrical Engineering",
    jobTitle: "Electrical Design Engineer",
    mode: "Remote/On-site",
    availability: "Full-Time",
    photo: electrical,
  },
  {
    _id: 2,
    category: "Civil Engineering",
    jobTitle: "BIM Specialist",
    mode: "Remote/On-site",
    availability: "Part-Time",
    photo: civil,
  },
  {
    _id: 3,
    category: "Mechanical Engineering",
    jobTitle: "EV Technology Specialist",
    mode: "Remote/On-site",
    availability: "Full-Time",
    photo: mechanical,
  }, 
  {
    _id: 4,
    category: "Computer Science Engineering",
    jobTitle: "Software Developer",
    mode: "Remote/On-site",
    availability: "Full-Time",
    photo: computer1,
  },
];

function CategoryListing() {
  return (
    <>
      <div className="bg-white py-24 px-6 flex flex-col items-center">
        <h2 className="text-3xl font-bold text-aqua mb-8">Search Jobs by Category</h2>
        <div className="max-w-6xl w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {jobCategories.map((category) => (
              <div
                key={category._id}
                className="bg-gray-100 overflow-hidden p-6 shadow-lg rounded-lg hover:shadow-xl transition-transform duration-300 hover:scale-105"
              >
                <Link to={"/findjobs"}>
                  <div className="w-full h-48 overflow-hidden rounded-t-lg">
                    <img
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                      src={category.photo}
                      alt={category.category}
                    />
                  </div>
                </Link>
                <div className="text-start mt-4">
                  <div className="bg-tealLight text-white font-medium py-1 px-4 inline-block rounded-md">
                    {category.category}
                  </div>
                 
                  
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default CategoryListing;
