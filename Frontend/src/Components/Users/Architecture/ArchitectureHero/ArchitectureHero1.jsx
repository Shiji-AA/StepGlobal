import bg2 from '../../../../assets/architect/bg2.jpg'
import img1 from "../../../../assets/architect/1.jpg"
import img2 from "../../../../assets/architect/2.jpg"
import img3 from "../../../../assets/architect/3.jpg"
import img4 from "../../../../assets/architect/1.jpg"
import img5 from "../../../../assets/architect/2.jpg"
import img6 from "../../../../assets/architect/3.jpg"

function ArchitectureHero1() {
    return (
        <>
            {/* ONE */}
            <section className="h-screen overflow-hidden bg-cover bg-center" style={{ backgroundImage: `url(${bg2})` }}>
                <div className="flex flex-col lg:flex-row items-center justify-between h-full bg-black opacity-85">

                    {/* Left Side */}
                    <div className="p-6 sm:p-10 lg:p-20 flex-1 text-center lg:text-left">
                        <p className="font-custom text-3xl sm:text-4xl md:text-5xl lg:text-[5.5rem] leading-none mb-6 sm:mb-8 lg:mb-10 text-white">
                            The fastest <br /> on planet
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <button className="font-custom btn bg-teal-600 text-white w-full sm:w-auto">Request a call</button>
                            <button className="font-custom btn border border-gray-600 text-white w-full sm:w-auto">Get Consultation</button>
                        </div>
                    </div>

                    {/* Right Side (Images) */}
                    <div className="flex-1 flex flex-wrap justify-center gap-6 sm:gap-4 lg:gap-6">

                        <img className="img max-w-[40%] sm:max-w-[45%] lg:max-w-[30%]" src={img1} alt="img1" />
                        <img className="img max-w-[40%] sm:max-w-[45%] lg:max-w-[30%]" src={img2} alt="img2" />
                        <img className="img max-w-[40%] sm:max-w-[45%] lg:max-w-[30%]" src={img3} alt="img3" />
                        <img className="img max-w-[40%] sm:max-w-[45%] lg:max-w-[30%]" src={img4} alt="img4" />
                        <img className="img max-w-[40%] sm:max-w-[45%] lg:max-w-[30%]" src={img5} alt="img5" />
                        <img className="img max-w-[40%] sm:max-w-[45%] lg:max-w-[30%]" src={img6} alt="img6" />

                    </div>
                </div>
            </section>
        </>
    );
}

export default ArchitectureHero1;
