import bg from "../../../../assets/architect/bg.jpeg";

function ArchitectHero4() {
    return (
        <section 
            className="w-full min-h-[250px] sm:min-h-[250px] md:min-h-[450px] flex items-center justify-center bg-cover bg-center relative p-6 sm:p-8 md:p-10"
            style={{ backgroundImage: `url(${bg})` }}
        >
            {/* Black Overlay with Opacity */}
            <div className="absolute inset-0 bg-black opacity-70"></div>

            {/* Content Box */}
            <div className="w-full relative text-center max-w-3xl p-6 sm:p-8 md:p-10">
                <h1 className="font-custom text-2xl sm:text-4xl md:text-5xl font-normal text-white leading-tight">
                    Learn more about
                </h1>

                {/* Wider <p> tag */}
                <p className="font-custom font-normal text-white leading-relaxed mt-4 text-base sm:text-lg md:text-xl max-w-3xl mx-auto">
                    Lorem ipsum dolor sit amet consectetur beatae et, inventore hic error suscipit tempore ducimus quia quis architecto quaerat tenetur, eveniet accusantium laborum?
                </p>

                {/* Button */}
                <div className="mt-6">
                    <button className="font-custom px-6 sm:px-8 py-2 sm:py-3 bg-teal-600 text-white font-medium rounded-lg hover:bg-teal-700 transition duration-300 text-sm sm:text-base">
                        Learn More
                    </button>
                </div>
            </div>
        </section>
    );
}

export default ArchitectHero4;
