import  { useEffect, useRef } from "react";
//import hero from "../../../../assets/heroImages/hero6.jpg";
import architect from "../../../../assets/heroImages/architect.avif";
import hr from "../../../../assets/heroImages/hr.png";
import edu from "../../../../assets/heroImages/edu.avif";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger);

function WelcomeHero1() {
  // Refs for the images
  const imgRef1 = useRef(null);
  const imgRef2 = useRef(null);
  const imgRef3 = useRef(null);

  // GSAP ScrollTrigger for animations
  useEffect(() => {
    // Create a GSAP timeline to chain the animations together
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: imgRef1.current,
        start: "top 80%",  // Trigger animation when 80% of the image comes into view
        toggleActions: "play none none none",  // Play animation on trigger
      }
    });

    // Animation for the first image (Architecture)
    tl.fromTo(
      imgRef1.current,
      { scale: 0.5 },  // Start from 50% size
      { scale: 1, duration: 1.5, ease: "power2.out" }  // End at original size (100%)
    )
    .to(
      imgRef1.current,
      { y: -5, duration: 0.1, yoyo: true, repeat: 2, ease: "bounce.out" }  // Jumping effect
    );

    // Animation for the second image (Job Portal)
    const tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: imgRef2.current,
        start: "top 80%",
        toggleActions: "play none none none",
      }
    });

    tl2.fromTo(
      imgRef2.current,
      { scale: 0.5 },
      { scale: 1, duration: 1.5, ease: "power2.out" }
    )
    .to(
      imgRef2.current,
      { y: -5, duration: 0.1, yoyo: true, repeat: 2, ease: "bounce.out" }
    );

    // Animation for the third image (Education Portal)
    const tl3 = gsap.timeline({
      scrollTrigger: {
        trigger: imgRef3.current,
        start: "top 80%",
        toggleActions: "play none none none",
      }
    });

    tl3.fromTo(
      imgRef3.current,
      { scale: 0.5 },
      { scale: 1, duration: 1.5, ease: "power2.out" }
    )
    .to(
      imgRef3.current,
      { y: -5, duration: 0.1, yoyo: true, repeat: 5, ease: "bounce.out" }
    );
  }, []);

  return (
    <section className="bg-white shadow-2xl shadow-blue-900/50">
      <div className="max-w-5xl px-6 py-16 mx-auto space-y-8 md:flex md:items-center md:space-y-0">
        <div className="md:w-2/3">
          <div className="hidden md:flex md:items-center md:space-x-10">
            <a href="/architectureportal">
              <img
                ref={imgRef1}
                className="object-cover object-center rounded-md shadow-2xl w-72 h-72"
                src={architect}
                alt="Architecture Portal"
              />
            </a>

            <a href="/jobportal">
              <img
                ref={imgRef2}
                className="object-cover object-center w-64 h-96 rounded-md shadow-2xl"
                src={hr}
                alt="Job Portal"
              />
            </a>
          </div>
          <h2 className="text-3xl font-normal text-gray-800 md:mt-6">Shaping the Future</h2>
          <p className="max-w-lg mt-4 text-gray-600 font-normal">
            Education fosters knowledge and skills for lifelong success. Architecture blends creativity with functionality to design inspiring spaces.
            HR consultancy empowers businesses by connecting talent with the right opportunities, ensuring professional growth and efficiency.
          </p>
        </div>
        <div className="md:w-1/3">
          <a href="/educationportal">
            <img
              ref={imgRef3}
              className="object-cover object-center w-full rounded-md shadow-2xl h-72 md:h-96 lg:h-[700px]"
              src={edu}
              alt="Education Portal"
            />
          </a>
        </div>
      </div>
    </section>
  );
}

export default WelcomeHero1;
