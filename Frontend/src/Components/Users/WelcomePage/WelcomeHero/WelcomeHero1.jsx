import { useEffect, useRef } from "react";
import architect from "../../../../assets/heroImages/architect.jpg";
import hr from "../../../../assets/heroImages/hr.png";
import edu from "../../../../assets/heroImages/edu.jpeg";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger);

function WelcomeHero1() {
  const imgRef1 = useRef(null);
  const imgRef2 = useRef(null);
  const imgRef3 = useRef(null);

  useEffect(() => {
    const animateImage = (imgRef) => {
      gsap.fromTo(
        imgRef.current,
        { scale: 0.8, opacity: 0, y: 20 },
        { scale: 1, opacity: 1, y: 0, duration: 1.2, ease: "power2.out" }
      );
    };

    // Initial animation when page loads
    animateImage(imgRef1);
    animateImage(imgRef2);
    animateImage(imgRef3);

    // Scroll-triggered animation
    [imgRef1, imgRef2, imgRef3].forEach((imgRef) => {
      gsap.fromTo(
        imgRef.current,
        { scale: 0.8, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1.5, ease: "power2.out", scrollTrigger: {
          trigger: imgRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        }}
      );
    });
  }, []);

  return (
    <section className="bg-white shadow-2xl shadow-blue-900/50 py-10">
      {/* Title Section */}
      <div className="text-center mb-8">
        <h2 className="font-custom text-4xl font-normal text-gray-800">
          Explore Our Platforms
        </h2>
        <p className="font-custom text-gray-600 mt-2">
          Discover opportunities in Architecture, Careers, and Education.
        </p>
      </div>

      <div className="max-w-6xl px-6 py-8 mx-auto grid md:grid-cols-3 gap-8">
        {/* Architecture Portal */}
        <div className="text-center">
          <a href="/architectureportal" className="relative group block">
            <img
              ref={imgRef1}
              className="object-cover object-center rounded-md shadow-2xl w-full h-72 transition-transform duration-300 group-hover:scale-105"
              src={architect}
              alt="Architecture Portal"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
              <span className="bg-white font-custom text-black text-2xl font-normal p-1">
                Architecture Portal
              </span>
            </div>
          </a>
          <h3 className="font-custom text-xl font-normal mt-4">Architecture & Design</h3>
          <p className="font-custom text-gray-600 text-sm mt-2">
            Explore cutting-edge architectural trends, tools, and innovations.
          </p>
          <a href="/architectureportal">
          <button className="font-custom px-4 py-2 bg-teal-600 text-white rounded-md hover:bg-teal-700">
  Learn More
</button>
          </a>
        </div>

        {/* Job Portal */}
        <div className="text-center">
          <a href="/jobportal" className="relative group block">
            <img
              ref={imgRef2}
              className="object-cover object-center w-full h-72 rounded-md shadow-2xl transition-transform duration-300 group-hover:scale-105"
              src={hr}
              alt="Job Portal"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
              <span className="bg-white font-custom text-black text-2xl font-normal p-1">
                Job Portal
              </span>
            </div>
          </a>
          <h3 className="font-custom text-xl font-medium mt-4">Career Opportunities</h3>
          <p className="font-custom text-gray-600 text-sm mt-2">
            Find your dream job and connect with top recruiters worldwide.
          </p>
          <a href="/jobportal">
          <button className="font-custom px-4 py-2 bg-teal-600 text-white rounded-md hover:bg-teal-700">
  Learn More
</button>
          </a>
        </div>

        {/* Education Portal */}
        <div className="text-center">
          <a href="/educationportal" className="relative group block">
            <img
              ref={imgRef3}
              className="object-cover object-center w-full h-72 rounded-md shadow-2xl transition-transform duration-300 group-hover:scale-105"
              src={edu}
              alt="Education Portal"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
              <span className="bg-white font-custom text-black text-2xl font-normal p-1">
                Education Portal
              </span>
            </div>
          </a>
          <h3 className="font-custom text-xl font-medium mt-4">Learning & Growth</h3>
          <p className="font-custom text-gray-600 text-sm mt-2">
            Access courses, study materials, and expert guidance to excel.
          </p>
          <a href="/educationportal">
          <button className="font-custom px-4 py-2 bg-teal-600 text-white rounded-md hover:bg-teal-700">
  Learn More
</button>
          </a>
        </div>
      </div>
    </section>
  );
}

export default WelcomeHero1;
