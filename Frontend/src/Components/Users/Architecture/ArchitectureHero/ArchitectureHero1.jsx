

function ArchitectureHero1() {
  return (
    <>
      {/* ONE */}
      <section className="relative h-screen overflow-hidden">
        {/* Video Background */}
        <video
  className="absolute inset-0 w-full h-full object-cover"
  autoPlay
  loop
  muted
>
  <source src="/video/video.mp4" type="video/mp4" />
</video>
        <div className="flex flex-col lg:flex-row items-center justify-between h-full bg-black opacity-85 ">
          {/* Left Side */}
          <div className="p-6 lg:p-20 flex-1 text-center lg:text-left">
            <p className="font-custom text-[3.5rem] lg:text-[5.5rem] leading-none mb-6 lg:mb-10 text-white">
              The fastest <br /> on planet
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="font-custom btn bg-teal-600 text-white w-full sm:w-auto">Request a call</button>
              <button className="font-custom btn border border-gray-600 text-white w-full sm:w-auto">Get Consultation</button>
            </div>
          </div>

          {/* Right Side (Images) */}
          <div className="flex-1 flex flex-wrap gap-6 justify-center lg:justify-end">
            <img className="img max-w-[45%] lg:max-w-full" src="/photo/1.jpg" alt="img1" />
            <img className="img max-w-[45%] lg:max-w-full" src="/photo/2.jpeg" alt="img2" />
            <img className="img max-w-[45%] lg:max-w-full" src="/photo/3.jpeg" alt="img3" />
            <img className="img max-w-[45%] lg:max-w-full" src="/photo/1.jpg" alt="img4" />
            <img className="img max-w-[45%] lg:max-w-full" src="/photo/2.jpeg" alt="img5" />
          </div>
        </div>
      </section>
    </>
  );
}

export default ArchitectureHero1;
