
import hero9 from '../../../../assets/heroImages/hero9.jpg';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef,useEffect } from 'react';

gsap.registerPlugin(ScrollTrigger);

function VERuthe() {


  const imageRef = useRef(null)
  const textRef = useRef(null);
  useEffect(() => {
    gsap.fromTo(
      imageRef.current,
      { x: "100%", opacity: 0 },
      {
        x: "0%",
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: imageRef.current,
          start: "top 80%",
          end: "top 50%",
          scrub: true,
        },
      }
    );

    gsap.fromTo(
      textRef.current,
      { x: "-100%", opacity: 0 },
      {
        x: "0%",
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 80%",
          end: "top 50%",
          scrub: true,
        },
      }
    );
  }, []);


  return (
    <>

    <section className="bg-white dark:bg-gray-900 h-full w-full flex justify-center  shadow-2xl shadow-blue-900/50">
      <div className="w-full max-w-8xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center ">
    
        {/* Right Side - Image */}
        <div ref={imageRef} className="flex justify-center lg:justify-start">
          <img
            src={hero9}
            alt="kids"
            className="max-w-full h-auto"
          />
        </div>


    
   
       {/* Left Side - Heading & Content */}
    <div ref={textRef} className=" font-custom flex flex-col items-start text-left space-y-6 p-10 lg:p-16 w-full max-w-2xl ">
      <p className="text-lg font-medium text-gray-600 dark:text-gray-300">
        Workmonitor 2025
      </p>
    
      <h1 className=" text-2xl leading-none md:text-4xl xl:text-5xl dark:text-white">
        innovative Solutions for Education, Architecture & HR
      </h1>
    
      <p className="font-light text-gray-500 md:text-lg lg:text-xl dark:text-gray-400">
        Our Workmonitor 2025 report shows that a new workplace baseline is emerging — 
        where success is defined not just by what we do, but by why we do it, how we do it, 
        and who we do it with. Talent expectations are continuing to evolve, shaped by 
        economic uncertainty, technological advancements, and shifting social landscapes. 
        There’s a clear mission here for employers. By acknowledging the new baseline — the why, 
        who, and how — and closing the gaps in expectations between talent and employers, 
        organizations can gain trust and drive meaningful, talent-centric progress economic uncertainty, technological advancements, and shifting social landscapes. 
        There’s a clear mission here for employers. By acknowledging the new baseline — the why, 
        who, and how — and closing the gaps in expectations between talent and employers, 
        organizations can gain trust and drive meaningful, talent-centric progress.
      </p>
    
      {/* Button */}
      <div>
      <a
      href="#"
      className="rounded-lg inline-flex items-center justify-center px-6 py-4 text-teal-700 border border-teal-300 
                 hover:bg-teal-700 hover:text-white focus:ring-4 focus:ring-teal-100 
                 dark:text-white dark:border-white dark:hover:bg-white dark:hover:text-black dark:focus:ring-white"
    >
      Speak to an Expert
    </a>
    
      </div>
    </div>
    
    
      </div>
    </section>
      
    </>
  )
}

export default VERuthe
