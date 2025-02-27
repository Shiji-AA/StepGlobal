import edu3 from '../../../../assets/education/edu3.jpg';
import { FaHome, FaUser, FaCog, FaChalkboardTeacher, FaFutbol } from 'react-icons/fa'; // Added more icons

const services = [
  { title: "Safety First", icon: FaHome, description: "Far far away, behind the word mountains, far from the countries Vokalia." },
  { title: "Regular Classes", icon: FaUser, description: "Far far away, behind the word mountains, far from the countries Vokalia." },
  { title: "Certified Teachers", icon: FaCog, description: "Far far away, behind the word mountains, far from the countries Vokalia." },
  { title: "Sufficient Classrooms", icon: FaChalkboardTeacher, description: "Far far away, behind the word mountains, far from the countries Vokalia." },
  { title: "Creative Lessons", icon: FaFutbol, description: "Far far away, behind the word mountains, far from the countries Vokalia." },
  { title: "Sports Facilities", icon: FaFutbol, description: "Far far away, behind the word mountains, far from the countries Vokalia." },
];

const EducationHero3 = () => {
  return (
    <section className="w-full py-12 bg-gray-100">
      <div className="container mx-auto px-6 md:px-12 lg:px-16">
        <div className="flex flex-col lg:flex-row-reverse items-center">
          
          {/* Right Side - Image */}
          <div className="w-full lg:w-5/12 lg:order-2 py-6">
            <div
              className="w-full h-[700px] bg-cover bg-center rounded-lg shadow-lg"
              style={{ backgroundImage: `url(${edu3})` }}
            ></div>
          </div>

          {/* Left Side - Content */}
          <div className="w-full lg:w-7/12 py-6 lg:pl-12">
            <h2 className="font-custom font-normal text-3xl  text-gray-800 mb-4">What We Offer</h2>
            <p className="font-custom font-normal text-gray-700 mb-6">
              On her way she met a copy. The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times.
            </p>
            
            {/* Service Items */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {services.map((service, index) => (
                <div key={index} className="flex items-start p-4 bg-white shadow-md rounded-lg">
                  <div className="text-4xl text-teal-500 flex-shrink-0">
                    <service.icon />
                  </div>
                  <div className="ml-4">
                    <h3 className="font-custom font-normal text-xl  text-gray-900">{service.title}</h3>
                    <p className="font-custom font-normal text-gray-700 mt-1">{service.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default EducationHero3;
