import bg from "../../../../assets/architect/bg.jpg";


function ArchitectHero4() {
    return (
        <section 
            className="w-full h-[400px] flex items-center justify-center bg-cover bg-center relative p-1"
            style={{ backgroundImage: `url(${bg})` }}
        >
            {/* Black Overlay with Opacity */}
            <div className="absolute inset-0 bg-black opacity-80"></div>

            {/* Content Box */}
            <div className="w-full relative text-center bg-opacity-10 rounded-lg shadow-lg max-w-3xl p-6">
                <h1 className="font-custom text-5xl font-normal text-white leading-tight">
                    Learn more about
                </h1>

                {/* Wider <p> tag */}
                <p className="font-custom font-normal text-white leading-relaxed mt-4 max-w-3xl w-full mx-auto text-lg">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae cum consequatur laboriosam asperiores iusto beatae et, inventore hic error suscipit tempore ducimus quia quis architecto quaerat tenetur, eveniet accusantium laborum?
                    Perspiciatis quae et laboriosam quibusdam dicta voluptates eaque, voluptatem voluptatibus perferendis neque natus ab repellendus a saepe non accusamus provident fuga iure voluptas totam voluptatum.
                </p>

                <div className="mt-6">
                    <button className="font-custom px-8 py-3 bg-teal-600 text-white font-medium rounded-lg hover:bg-teal-700 transition duration-300">
                        Learn More
                    </button>
                </div>
            </div>
        </section>
    );
}

export default ArchitectHero4;
