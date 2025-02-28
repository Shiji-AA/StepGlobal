import { useRef } from "react";
import hero from "../../../../assets/heroImages/hero6.jpg";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function WelcomeHero() {

    const heroRef = useRef(null);
    const textRef = useRef(null);
    const bgRef = useRef(null);
    const sectionRef = useRef(null);
    const sectionTextRef = useRef(null); // Ref for the text content of section TWO
    const headingRef = useRef(null);
  
    useGSAP(() => {
        const tl = gsap.timeline();
  
        // Background Image Zoom-in effect
        tl.from(bgRef.current, {
            scale: 1.3,
            duration: 2,
            ease: "power2.out",
        });
  
        // Fade in the Hero Section
        tl.from(heroRef.current, {
            opacity: 0,
            y: 100,
            duration: 1.5,
            ease: "power2.out",
        }, "-=1.5"); 
  
        // Staggered text animation
        tl.from(textRef.current.children, {
            opacity: 0,
            y: 50,
            duration: 1,
            ease: "power2.out",
            stagger: 0.3,
        }, "-=1"); // Start slightly before the previous animation ends
    });
  
    // GSAP ScrollTrigger for Section TWO animation
    useGSAP(() => {
        const tl2 = gsap.timeline({
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top 80%", // Trigger when 80% of the section comes into view
                toggleActions: "play none none none", // Play animation when it enters the viewport
            }
        });
    
        // Fade in and slide up animation for the section text
        tl2.from(sectionTextRef.current, {
            opacity: 0,
            y: 50,
            duration: 1.2,
            ease: "power2.out",
        });
    
        // Fade in and slide up animation for the heading
        tl2.from(headingRef.current, {
            opacity: 0,
            y: 30,
            duration: 1,
            ease: "power2.out",
        }, "-=0.5");
    });
    
    return (
        <>
        {/* ONE */}
        <section ref={heroRef} className=" relative bg-white overflow-hidden">
            <div className="relative pt-16 pb-24 flex content-center items-center justify-center min-h-[130vh]">
                {/* Background Image */}
                <div 
                    ref={bgRef}
                    className="absolute top-0 w-full h-full bg-center bg-cover"
                    style={{ backgroundImage: `url(${hero})` }}
                >
                    <span className="w-full h-full absolute opacity-80 bg-black"></span>
                </div>
    
                {/* Text Content */}
                <div className="container relative mx-auto">
                    <div className="items-center flex flex-wrap">
                        <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                            <div ref={textRef} className="pr-12">
                                <h1 className="text-white font-normal text-5xl">
                                    Empower Your Future with Us
                                </h1>
                                <p className="mt-4 text-lg text-gray-200 font-normal">
                                    Explore tailored solutions in architecture, career development, and education support that empower your future.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
 
        </>
    );
}

export default WelcomeHero;
