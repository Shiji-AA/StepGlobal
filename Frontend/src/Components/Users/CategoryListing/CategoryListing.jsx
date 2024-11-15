import { FaChild } from "react-icons/fa";

const arr = [
  {
    name: "Marketing",
    vacancy: "150 Vacancy",
  },
  {
    name: "Business Development",
    vacancy: "126 Vacancy",
  },
  {
    name: "Customer service",
    vacancy: "120 Vacancy",
  },
  {
    name: "Human Resources",
    vacancy: "190 Vacancy",
  },
  {
    name: "Project Management",
    vacancy: "121 Vacancy",
  },
  {
    name: "Human Resources",
    vacancy: "190 Vacancy",
  },
  {
    name: "Business Development",
    vacancy: "126 Vacancy",
  },
  {
    name: "Marketing",
    vacancy: "150 Vacancy",
  },
];

function CategoryListing() {
  return (
    <>
      <div className="text-center py-8 bg-gray-100">
        <h2 className="text-3xl font-bold text-gray-800">Explore By Category</h2>
      </div>

      <div className="px-10 py-10 bg-gray-100">
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {arr.map((item, index) => (
            <div
              key={index}
              className="max-w-xs rounded-lg overflow-hidden p-4 bg-white shadow-lg hover:shadow-2xl transition duration-300 cursor-pointer transform hover:scale-105"
            >
              <FaChild className="text-7xl text-blue-600" />
              <h3 className="text-lg font-semibold text-gray-700">{item.name}</h3>
              <p className="mt-2 text-blue-500">{item.vacancy}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default CategoryListing;
