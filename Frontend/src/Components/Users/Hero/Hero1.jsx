import cat5 from '../../../assets/cat5.jpg'

function Hero1() {
    return (
        <>
            <div className="dark:bg-gray-900">
                <div className="container mx-auto py-9 md:py-12 lg:py-24">
                    <div className="flex flex-col lg:flex-row justify-center items-center mx-4 space-y-6 lg:space-y-0 lg:space-x-12">
                        
                        {/* Image Section */}
                        <div className="lg:w-6/12 w-full relative">
                            <img 
                                src={cat5} 
                                alt="A lounge sofa" 
                                role="img" 
                                className="w-full h-auto object-cover rounded-lg shadow-lg" 
                            />
                        </div>

                        {/* Text Section */}
                        <div className="lg:w-6/12 flex justify-center items-center">
                            <div className="text-center lg:text-left mb-24">
                                <h1 className="dark:text-white text-4xl md:text-5xl xl:text-6xl font-semibold text-gray-900">
                                    We help you to Get the Best Job
                                </h1>
                                <p className="dark:text-gray-300 mt-4 lg:mt-5 text-base md:text-lg text-gray-600">
                                    It is a long established fact that a reade more-or-less 
                                    normal a long established fact that a reade more-or-less normal 
                                    a long established fact that a reade more-or-less normal distribution 
                                    of letters, as opposed to using random text.
                                </p>
                                <button className=' mt-3 p-4 w-22  bg-green-500 text-white text-lg '>Read More</button>
                            </div>
                        </div>
                      
                    </div>
                  
                </div>
                
            </div>
            
        </>
    );
}

export default Hero1;
