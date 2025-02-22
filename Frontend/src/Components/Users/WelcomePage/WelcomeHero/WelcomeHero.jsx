import { Link } from "react-router-dom";
import hero from "../../../../assets/heroImages/hero6.jpg";
import architect from "../../../../assets/heroImages/architect.avif";
import hr from "../../../../assets/heroImages/hr.png"
import edu from "../../../../assets/heroImages/edu.avif"
function WelcomeHero() {
    return (
        <>
            <section className="relative bg-white">
                <div className="relative pt-16 pb-24 flex content-center items-center justify-center min-h-[130vh]">
                    <div 
                        className="absolute top-0 w-full h-full bg-center bg-cover"
                        style={{ backgroundImage: `url(${hero})` }}

                    >
                        <span className="w-full h-full absolute opacity-60 bg-black"></span>
                    </div>
                    <div className="container relative mx-auto">
                        <div className="items-center flex flex-wrap">
                            <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                                <div className="pr-12">
                                    <h1 className="text-white font-semibold text-5xl">
                                    Empower Your Future with Us
                                    </h1>
                                    <p className="mt-4 text-lg text-gray-200">
                                    Explore tailored solutions in architecture, career development, and education support that empower your future.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-[70px]">
                        <svg className="absolute bottom-0 overflow-hidden" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" viewBox="0 0 2560 100">
                            <polygon className="fill-current text-gray-200" points="2560 0 2560 100 0 100"></polygon>
                        </svg>
                    </div>
                </div>

                <section className="pb-10 bg-gray-200 -mt-24">
                    <div className="container mx-auto px-6">
                        <div className="flex flex-wrap">
                            {[{
                              
                                title: "Architecture", 
                                text: "Divide details about your product or agency work into parts.", 
                                link: "/architectureportal"
                            }, {
                                
                                title: "HR Consultancy Services", 
                                text: "Keep users engaged by providing meaningful information.", 
                                link: "/jobportal"
                            }, {
                                 
                                title: "Education Support Activities", 
                                text: "Providing personalized tutoring and learning resources for success.",
                                 
                                link: "/educationportal"
                            }].map((item, index) => (
                                <div key={index} className="w-full md:w-4/12 px-4 text-center pt-6">
                                    <Link to={item.link}>
                                        <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-2xl cursor-pointer hover:shadow-xl transition-shadow duration-300">
                                            <div className="px-4 py-5 flex-auto">
                                                <div className={`text-white p-3 text-center inline-flex items-center justify-center w-12 h-24 mb-5  ${item.color}`}>
                                                    <i className={item.icon}></i>
                                                </div>
                                                <h6 className="text-xl font-semibold">{item.title}</h6>
                                                <p className="mt-2 mb-4 text-gray-500">{item.text}</p>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>

                </section>
            </section>


{/* THREE */}

<section className="bg-white shadow-2xl shadow-blue-900/50">
    <div className="max-w-5xl px-6 py-16 mx-auto space-y-8 md:flex md:items-center md:space-y-0 ">
        <div className="md:w-2/3">
            <div className="hidden md:flex md:items-center md:space-x-10">
                <img className="object-cover object-center rounded-md shadow-2xl w-72 h-72"
                    src={architect}/>
                <img className="object-cover object-center w-64 h-96 rounded-md shadow-2xl"
                    src={hr}/>
            </div>
            <h2 className="text-3xl font-semibold text-gray-800 md:mt-6">Shaping the Future</h2>
<p className="max-w-lg mt-4 text-gray-600">
    Education fosters knowledge and skills for lifelong success. Architecture blends creativity with functionality to design inspiring spaces.  
    HR consultancy empowers businesses by connecting talent with the right opportunities, ensuring professional growth and efficiency.
</p>

        </div>
        <div className="md:w-1/3">
            <img className="object-cover object-center w-full rounded-md shadow-2xl h-72 md:h-96 lg:h-700" 
                src={edu} />
        </div>
    </div>
</section>


        </>
    );
}

export default WelcomeHero;
