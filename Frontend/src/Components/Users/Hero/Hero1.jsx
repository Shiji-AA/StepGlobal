import { Parallax } from "react-parallax";
import hero from "../../../assets/heroImages/hero14.jpg";

const EducationHero4 = () => {
  return (
    <section className="relative py-1">
      <div className="relative w-full h-[200px]">
        <Parallax
          bgImage={hero}
          strength={700}
          className="w-full h-full relative"
        >
          {/* Main Content Container */}
          <div className="container mt-16 mx-auto px-6 md:px-12 lg:px-16 relative z-10 w-full h-full flex flex-col lg:flex-row items-center">
            <div className="flex flex-col lg:flex-row w-full justify-between items-center">
              {/* Content Section */}
              <div className="text-left w-full lg:w-8/12 mb-4 lg:mb-0">
                <h2 className="font-custom font-normal text-white text-3xl sm:text-4xl">
                  Looking For A Job?
                </h2>
                <p className="font-custom font-normal mb-0 text-white text-lg sm:text-xl">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit tempora adipisci impedit.
                </p>
              </div>

              {/* Button Section */}
              <div className="ml-auto">
                <a
                  href="#"
                  className="font-custom font-normal btn btn-teal bg-teal-500 text-white px-12 py-3 rounded-lg sm:px-16 sm:py-4 transition duration-300 hover:bg-teal-600"
                >
                  Sign Up
                </a>
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
