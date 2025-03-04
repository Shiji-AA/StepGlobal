import bg2 from '../../../../assets/architect/bg2.jpeg';
import img1 from "../../../../assets/architect/1.jpg";
import img2 from "../../../../assets/architect/2.jpeg";
import img3 from "../../../../assets/architect/3.jpeg";
import img4 from "../../../../assets/architect/1.jpg";
import img5 from "../../../../assets/architect/2.jpeg";

function ArchitectureHero1() {
  return (
    <>
      {/* ONE */}
      <section className="relative h-screen overflow-hidden">
        {/* Scrolling Background */}
        <div
         className="absolute inset-0 bg-[url('/path/to/bg2.jpg')] bg-contain bg-repeat-x animate-scroll-bg"
         style={{ backgroundImage: `url(${bg2})` }}
        ></div>
        <div className="relative flex items-center justify-between h-full bg-black bg-opacity-85">
          {/* Left Side */}
          <div className="p-6 lg:p-20 flex-1 text-center lg:text-left">
            <p className="font-custom text-[3.5rem] lg:text-[5.5rem] leading-none mb-6 lg:mb-10 text-white">
              The fastest <br /> on planet
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="font-custom btn bg-teal-600 text-white w-full sm:w-auto">
                Request a call
              </button>
              <button className="font-custom btn border border-gray-600 text-white w-full sm:w-auto">
                Get Consultation
              </button>
            </div>
          </div>

          {/* Right Side (Images) */}
          <div className="flex-1 flex flex-wrap gap-6 justify-center lg:justify-end">
            <img className="img max-w-[45%] lg:max-w-full" src={img1} alt="img1" />
            <img className="img max-w-[45%] lg:max-w-full" src={img2} alt="img2" />
            <img className="img max-w-[45%] lg:max-w-full" src={img3} alt="img3" />
            <img className="img max-w-[45%] lg:max-w-full" src={img4} alt="img4" />
            <img className="img max-w-[45%] lg:max-w-full" src={img5} alt="img5" />
          </div>
        </div>
      </section>
    </>
  );
}

export default ArchitectureHero1;
