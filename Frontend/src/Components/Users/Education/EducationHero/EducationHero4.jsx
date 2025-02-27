import { Parallax } from "react-parallax";
import edu4 from "../../../../assets/education/edu4.jpg";
import bg2 from "../../../../assets/education/bg2.jpg";
import { PlayCircle } from "lucide-react"; // Using Lucide Icons for Play Button

const EducationHero4 = () => {
  return (
    <section className="relative py-10">
      
      <div className="relative w-full h-[700px]">      
        <Parallax
          bgImage={edu4}
          strength={700}
          className="w-full h-full relative flex items-center"
        >
          {/* Main Content Container */}
          <div className="container mx-auto px-6 md:px-12 lg:px-16 relative z-10 w-full">
            <div className="flex flex-col lg:flex-row items-center w-full">
              
              {/* Right Side - Video Section */}
              <div className="flex-1 relative p-4">
                <div
                  className="w-full h-96 bg-cover bg-center rounded-lg shadow-lg flex items-center justify-center relative"
                  style={{ backgroundImage: `url(${bg2})` }}
                >
                  {/* Play Button */}
                  <a
                    href="https://www.youtube.com/watch?v=_2wj2PkxQwg"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute flex items-center justify-center w-16 h-16 bg-teal-600 text-white rounded-full shadow-lg transition-transform transform hover:scale-110"
                  >
                    <PlayCircle size={48} className="text-white" />
                  </a>
                </div>
              </div>

              {/* Left Side - Content Section */}
              <div className="flex-1 p-8 rounded-lg text-white text-center lg:text-left">
                <h2 className="font-custom font-normal text-4xl  mb-4">ARCITE</h2>
                <p className="font-custom font-normal text-lg mb-6">
                  Separated they live in. A small river place and supplies
                   it with  necessary regelialia. It is a paradisematic country. 
                   it with the necessary regelialia. It is a paradisematic country.it with the necessary regelialia. It is a paradisematic country.
                   it with the necessary regelialia. It is a paradisematic country.
                   it with the necessary regelialia. It is a paradisematic country.
                </p>
                <p className="font-custom font-normal text-lg">
                  A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.
                </p>
              </div>

            </div>
          </div>
        </Parallax>

        {/* Full-width faded overlay that covers the entire section */}
        <div className="absolute top-0 left-0 w-full h-full bg-teal-900 bg-opacity-85"></div>
      </div>
    </section>
  );
};

export default EducationHero4;
