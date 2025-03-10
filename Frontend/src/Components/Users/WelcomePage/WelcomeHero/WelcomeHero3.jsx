import { Parallax } from "react-parallax";
import edu4 from "../../../../assets/heroImages/hero14.jpg";

function WelcomeHero3() {
  return (
    <section className="relative bg-white">
      <div className="relative w-full sm:min-h-[400px] md:h-[600px]">
        <Parallax
          bgImage={edu4}
          strength={700}
          className="w-full h-full"
          bgImageStyle={{ objectFit: "cover", width: "100%", height: "100%" }} // Ensures proper scaling
        >
          {/* Main Content Container */}
          <div className="container mx-auto px-6 py-16 md:px-12 lg:px-16 relative z-10 w-full">
            {/* Centered Content */}
            <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 sm:px-10 md:px-20">
              <p className="font-custom text-white text-lg pb-4 font-normal tracking-wide">
                Unlock Your Potential with Quality Education
              </p>
              <h1 className="font-custom font-normal text-3xl text-white leading-snug mt-4">
                Access top-tier learning resources, expert-led courses, and interactive experiences.
                Join a global community of learners and experts, all in one place.
                Join a global community of learners and experts, all in one place.
                Join a global community of learners and experts, all in one place.
                Join a global community of learners and experts, all in one place.
                Join a global community of learners and experts, all in one place.
                Join a global community of learners and experts, all in one place.
                Join a global community of learners and experts, all in one place.
             
            
              </h1>
            </div>
          </div>
        </Parallax>

        {/* Full-width faded overlay that covers the entire section */}
        <div className="absolute inset-0 bg-gray-900 bg-opacity-80"></div>
      </div>
    </section>
  );
}

export default WelcomeHero3;
