import { Link } from "react-router-dom";

function WelcomeHero() {
    return (
        <>
            <section className="relative bg-gray-50">
                <div className="relative pt-16 pb-32 flex content-center items-center justify-center min-h-[75vh]">
                    <div 
                        className="absolute top-0 w-full h-full bg-center bg-cover"
                        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80')" }}
                    >
                        <span className="w-full h-full absolute opacity-75 bg-black"></span>
                    </div>
                    <div className="container relative mx-auto">
                        <div className="items-center flex flex-wrap">
                            <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                                <div className="pr-12">
                                    <h1 className="text-white font-semibold text-5xl">
                                    Empower Your Future with Us
                                    </h1>
                                    <p className="mt-4 text-lg text-gray-200">
                                    "Explore tailored solutions in architecture, career development, and education support that empower your future."
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
                    <div className="container mx-auto px-4">
                        <div className="flex flex-wrap">
                            {[{
                                color: "bg-red-700", 
                                icon: "fas fa-award", 
                                title: "Architecture", 
                                text: "Divide details about your product or agency work into parts.", 
                                link: "/architectureportal"
                            }, {
                                color: "bg-teal-400", 
                                icon: "fas fa-retweet", 
                                title: "HR Consultancy Services", 
                                text: "Keep users engaged by providing meaningful information.", 
                                link: "/jobportal"
                            }, {
                                color: "bg-yellow-500", 
                                icon: "fas fa-fingerprint", 
                                title: "Education Support Activities", 
                                text: "Providing personalized tutoring and learning resources for success.",
                                 
                                link: "/educationportal"
                            }].map((item, index) => (
                                <div key={index} className="w-full md:w-4/12 px-4 text-center pt-6">
                                    <Link to={item.link}>
                                        <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg cursor-pointer hover:shadow-xl transition-shadow duration-300">
                                            <div className="px-4 py-5 flex-auto">
                                                <div className={`text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full ${item.color}`}>
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
{/* TWO */}
<section className="bg-white">
    <div className="max-w-5xl px-6 py-16 mx-auto">
        <div className="md:flex md:justify-between">
            <h2 className="text-3xl font-semibold text-gray-800 md:text-4xl">
                Empowering Learning, Design, and Career Growth
            </h2>
            <a href="#" className="block mt-6 text-indigo-700 underline md:mt-0">
                Learn More
            </a>
        </div>

        <div className="grid gap-4 sm:gap-6 md:gap-8 mt-10 md:grid-cols-2 lg:grid-cols-3">
            <div className="px-6 py-8 overflow-hidden bg-white rounded-md shadow-md">
                <h2 className="text-xl font-medium text-gray-800">Education</h2>
                <p className="max-w-md mt-4 text-gray-400">
                    Advancing knowledge through innovation and modern and modern and modern teaching.
                </p>
            </div>

            <div className="px-6 py-8 overflow-hidden bg-white rounded-md shadow-md">
                <h2 className="text-xl font-medium text-gray-800">Architecture</h2>
                <p className="max-w-md mt-4 text-gray-400">
                    Crafting visionary spaces with creative and smart  and smart and smart design.
                </p>
            </div>

            <div className="px-6 py-8 overflow-hidden bg-white rounded-md shadow-md">
                <h2 className="text-xl font-medium text-gray-800">HR Consultancy</h2>
                <p className="max-w-md mt-4 text-gray-400">
                    Building careers with expert guidance and guidance and guidance and recruitment.
                </p>
            </div>
        </div>
    </div>
</section>

{/* THREE */}

<section className="bg-white">
    <div className="max-w-5xl px-6 py-16 mx-auto space-y-8 md:flex md:items-center md:space-y-0">
        <div className="md:w-2/3">
            <div className="hidden md:flex md:items-center md:space-x-10">
                <img className="object-cover object-center rounded-md shadow w-72 h-72"
                    src="https://images.unsplash.com/photo-1614030126544-b79b92e29e98?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"/>
                <img className="object-cover object-center w-64 h-96 rounded-md shadow"
                    src="https://images.unsplash.com/photo-1618506469810-282bef2b30b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"/>
            </div>
            <h2 className="text-3xl font-semibold text-gray-800 md:mt-6">Shaping the Future</h2>
<p className="max-w-lg mt-4 text-gray-600">
    Education fosters knowledge and skills for lifelong success. Architecture blends creativity with functionality to design inspiring spaces.  
    HR consultancy empowers businesses by connecting talent with the right opportunities, ensuring professional growth and efficiency.
</p>

        </div>
        <div className="md:w-1/3">
            <img className="object-cover object-center w-full rounded-md shadow h-72 md:h-96 lg:h-700" 
                src="https://images.unsplash.com/photo-1593352216840-1aee13f45818?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" />
        </div>
    </div>
</section>


        </>
    );
}

export default WelcomeHero;
