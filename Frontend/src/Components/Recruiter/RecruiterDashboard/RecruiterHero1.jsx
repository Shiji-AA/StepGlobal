import { Parallax } from "react-parallax";
import hero from "../../../assets/heroImages/hero14.jpg";

const RecruiterHero1 = () => {
  return (
    <section className="relative py-1">
      <div className="relative w-full h-[200px] md:h-[250px] lg:h-[300px]">
        <Parallax
          bgImage={hero}
          strength={700}
          className="w-full h-full relative"
        >
          {/* Main Content Container */}
          <div className="container mx-auto px-6 md:px-12 lg:px-16 relative z-10 w-full h-full flex justify-center items-center text-center">
            <h4 className="font-custom pt-20 text-black text-2xl sm:text-3xl md:text-4xl font-bold leading-snug">
              We provide full staffing services to both <br />
              job seekers and companies
            </h4>
          </div>
        </Parallax>

        {/* Full-width faded overlay that covers the entire section */}
        <div className="absolute top-0 left-0 w-full h-full bg-gray-300 bg-opacity-85"></div>
      </div>
    </section>
  );
};

export default RecruiterHero1;
