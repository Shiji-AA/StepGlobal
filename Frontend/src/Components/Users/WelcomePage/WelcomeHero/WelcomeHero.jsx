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
                                color: "bg-red-400", 
                                icon: "fas fa-award", 
                                title: "Architecture", 
                                text: "Divide details about your product or agency work into parts.", 
                                link: "/architectureportal"
                            }, {
                                color: "bg-blue-400", 
                                icon: "fas fa-retweet", 
                                title: "HR Consultancy Services", 
                                text: "Keep users engaged by providing meaningful information.", 
                                link: "/jobportal"
                            }, {
                                color: "bg-green-400", 
                                icon: "fas fa-fingerprint", 
                                title: "Education Support Activities", 
                                text: "Write a few lines about each feature.", 
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

                    <footer className="relative pt-8 pb-6 mt-1">
                        <div className="container mx-auto px-4">
                            <div className="flex flex-wrap items-center justify-center">
                                <div className="w-full md:w-6/12 px-4 mx-auto text-center"> 
                                    <div className="text-sm text-gray-500 font-semibold py-1">
                                        Made with <a href="https://www.creative-tim.com/product/notus-js" className="text-gray-500 hover:text-gray-800" target="_blank" rel="noopener noreferrer">React JS</a> by 
                                        <a href="https://www.creative-tim.com" className="text-gray-500 hover:text-gray-800" target="_blank" rel="noopener noreferrer"> Creative Team</a>.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </footer>
                </section>
            </section>
        </>
    );
}

export default WelcomeHero;
