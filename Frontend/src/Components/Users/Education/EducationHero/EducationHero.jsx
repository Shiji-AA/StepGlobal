import { Link } from "react-router-dom";

function EducationHero() {
    return (
        <section className="w-full px-6 pb-12 antialiased bg-blue-50">
            <div className="mx-auto max-w-7xl">
                {/* Main Hero Content */}
                <div className="container max-w-lg px-4 py-32 mx-auto text-left md:max-w-none md:text-center">
                    <h1 className="text-5xl font-extrabold leading-10 tracking-tight text-left text-gray-900 md:text-center sm:leading-none md:text-6xl lg:text-7xl">
                        <span className="inline md:block">Enhance Your Learning with</span>
                        <span className="relative mt-2 text-transparent bg-clip-text bg-gradient-to-br from-blue-600 to-blue-500 md:inline-block">
                            Quality Education
                        </span>
                    </h1>
                    <div className="mx-auto mt-5 text-gray-600 md:mt-12 md:max-w-lg md:text-center lg:text-lg">
                        Explore a wide range of courses designed to boost your skills and knowledge. Learn from top educators and advance your career today!
                    </div>
                    <div className="flex flex-col items-center mt-12 text-center">
                        <Link to="/courses" className="inline-flex items-center justify-center w-full px-8 py-4 text-base font-bold leading-6 text-white bg-blue-600 border border-transparent rounded-full md:w-auto hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600">
                            Explore Courses
                        </Link>
                        <Link to="/about" className="mt-3 text-sm text-blue-500 hover:underline">
                            Learn More About Us
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default EducationHero
