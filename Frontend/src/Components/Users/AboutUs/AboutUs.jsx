
import vision from '../../../assets/images/vision2.jpeg';
import mission from '../../../assets/images/mission.jpg';
import heroimage3 from '../../../assets/images/IMAGE1.jpeg';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

function AboutUs() {
    return (
        <>
            <Navbar/>

            {/* Hero Section */}
            <div className="relative w-full text-tealDark py-16 bg-cover bg-center bg-no-repeat overflow-hidden" 
                style={{ backgroundImage: `url(${heroimage3})` }}>
                <div className="max-w-[1280px] mx-auto text-center px-6 py-16 rounded-lg">
                    <h2 className="font-body text-5xl font-extrabold mb-6 text-white">
                        <span className="bg-clip-text text-transparent animate-fade-left bg-gradient-to-r from-gray-400 to-white hover:from-white hover:to-gray-400"
                            style={{ animationDelay: "400ms" }}>
                            {`Imagine `}
                        </span>
                        <span className="bg-clip-text text-transparent bg-white animate-fade-left bg-gradient-to-r from-gray-400 to-white hover:from-white hover:to-gray-400"
                            style={{ animationDelay: "800ms" }}>
                            {`Excel `}
                        </span>
                        <span className="bg-clip-text text-transparent bg-white animate-fade-left bg-gradient-to-r from-gray-400 to-white hover:from-white hover:to-gray-400"
                            style={{ animationDelay: "1200ms" }}>
                            {`Inspire`}
                        </span>
                    </h2>
                    <p data-aos="zoom-in"
                        className="font-body text-xl font-bold max-w-3xl mx-auto opacity-0 animate-fade-in text-white"
                        style={{ animationDelay: "800ms" }}>
                        Igniting Creativity, Pursuing Brilliance, and Shaping Future Innovators 
                    </p>
                </div>
            </div>

            {/* Content Section */}
            <div data-aos="fade-up" className="bg-blue-50 px-6 py-12 shadow-lg rounded-lg w-full overflow-hidden">
                <div className="max-w-[1280px] mx-auto space-y-16">
                    
                    {/* Vision Section */}
                    <div className="flex flex-col lg:flex-row items-center bg-white rounded-2xl p-8 shadow-md transition-all duration-300 hover:shadow-xl hover:scale-[1.02] overflow-hidden">
                        <div className="lg:w-1/2">
                            <img src={vision} alt="Vision" className="w-full h-auto object-cover rounded-xl shadow-md" />
                        </div>
                        <div className="lg:w-1/2 lg:pl-12 mt-6 lg:mt-0 text-center lg:text-left">
                            <h3 className="font-body text-4xl font-semibold text-tealDark mb-4">Our Vision</h3>
                            <p className="font-heading text-tealDark text-lg leading-relaxed text-justify w-full sm:max-w-[800px] mx-auto px-4 sm:px-0">
    “To be the driving force behind accessible, affordable, and impactful education and skill development, shaping a brighter future for individuals worldwide.”
</p>
                        </div>
                    </div>

                    {/* Mission Section */}
                    <div data-aos="fade-up" className="flex flex-col lg:flex-row-reverse items-center bg-white rounded-2xl p-8 shadow-md transition-all duration-300 hover:shadow-xl hover:scale-[1.02] overflow-hidden">
                        <div className="lg:w-1/2">
                            <img src={mission} alt="Mission" className="w-full h-auto object-cover rounded-xl shadow-md" />
                        </div>
                        <div className="lg:w-1/2 lg:pr-12 mt-6 lg:mt-0 text-center lg:text-left">
                            <h3 className="font-body text-4xl font-semibold text-tealLight mb-4">Our Mission</h3>
                            <p className="font-heading text-tealDark text-lg leading-relaxed text-justify w-full sm:max-w-[800px] mx-auto px-4 sm:px-0">
    “To empower individuals globally through a strong network of franchises, offering accessible and top-tier education and skill-building opportunities that drive lifelong success.”
</p>

                        </div>
                    </div>
                </div>
            </div>

            {/* Call to Action */}
            <div className="bg-gray-800 py-8 w-full overflow-hidden">
                <div className="max-w-[1280px] mx-auto text-center px-6">
                    <h2 className="font-body text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-teal-400 mb-6 shadow-md">
                        Shape Tomorrow with Us
                    </h2>
                    <p className="font-heading text-lg text-gray-300 max-w-2xl mx-auto mb-6 shadow-sm">
                        Together, we can Revolutionize Global Education
                    </p>
                    <a href="https://wa.me/919633221153?text=Hi%20there!%20I'm%20interested%20in%20your%20services."
                        target="_blank"
                        rel="noopener noreferrer">
                        <button className="max-w-full font-heading bg-gradient-to-r from-teal-500 to-gray-500 text-white font-bold py-3 px-10 rounded-full shadow-lg transition-all duration-300 hover:from-gray-500 hover:to-teal-500 hover:shadow-xl">
                            Contact Us
                        </button>
                    </a>    
                </div>
            </div>

            <Footer/>
        </>
    );
}

export default AboutUs;