
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChalkboardTeacher, faBookOpen, faGraduationCap, faUserGraduate } from "@fortawesome/free-solid-svg-icons";

const services = [
  {
    title: "Certified Teachers",
    description: "Even the all-powerful Pointing has no control about the blind texts; it is almost unorthographic.",
    icon: faChalkboardTeacher,
    bgColor: "bg-teal-600",
  },
  {
    title: "Special Education",
    description: "Even the all-powerful Pointing has no control about the blind texts; it is almost unorthographic.",
    icon: faBookOpen,
    bgColor: "bg-gray-900",
  },
  {
    title: "Book & Library",
    description: "Even the all-powerful Pointing has no control about the blind texts; it is almost unorthographic.",
    icon: faGraduationCap,
    bgColor: "bg-teal-600",
  },
  {
    title: "Sport Clubs",
    description: "Even the all-powerful Pointing has no control about the blind texts; it is almost unorthographic.",
    icon: faUserGraduate,
    bgColor: "bg-gray-900",
  },
];

const EducationeHero2 = () => {
  return (
    <section className="w-screen bg-gray-200">
      <div className="container mx-auto max-w-full px-0">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 ">
          {services.map((service, index) => (
            <div
              key={index}
              className={` border-2 border-yellow-300 p-8 text-white text-center shadow-lg flex flex-col items-center justify-center min-h-[250px] ${service.bgColor}`}
            >
              <div className="flex justify-center items-center text-4xl ">
              <FontAwesomeIcon icon={service.icon} />
              </div>
              <h3 className="font-custom text-2xl font-normal mt-4">{service.title}</h3>
              <p className="font-custom font-normal mt-2">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationeHero2;
