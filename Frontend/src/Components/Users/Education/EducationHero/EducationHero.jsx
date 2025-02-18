import { Link } from "react-router-dom";
import tutor1 from '../../../../assets/images/stud1.jpg'
import tutor2 from '../../../../assets/images/stud2.jpg'
import tutor3 from '../../../../assets/images/stud3.jpg'
import tutor4 from '../../../../assets/images/stud4.jpg'

function EducationHero() {
    return (
        <>
         <section className="w-full px-6 pb-12 antialiased bg-teal-100">
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

{/* TWO */}
<section className="bg-white">
    <div className="max-w-5xl px-6 py-16 mx-auto">
        <div className="md:flex md:justify-between">
            <h2 className="text-3xl font-semibold text-gray-800 md:text-4xl">
                Learn new concepts, develop skills, <br /> and enhance your knowledge base
            </h2>
            <a href="#" className="block mt-6 text-indigo-700 underline md:mt-0">
                Expert Educators
            </a>
        </div>

        <div className="grid gap-4 sm:gap-6 md:gap-8 mt-10 md:grid-cols-2 lg:grid-cols-3">
            <div className="px-6 py-8 overflow-hidden bg-white rounded-md shadow-md">
                <h2 className="text-xl font-medium text-gray-800">Course Materials</h2>
                <p className="max-w-md mt-4 text-gray-400">
                    Explore comprehensive study resources, from books to online content, designed to support your learning.
                </p>
            </div>

            <div className="px-6 py-8 overflow-hidden bg-white rounded-md shadow-md">
                <h2 className="text-xl font-medium text-gray-800">Online Learning</h2>
                <p className="max-w-md mt-4 text-gray-400">
                    Engage with interactive tutorials and modules that provide a deeper understanding of your subject.
                </p>
            </div>

            <div className="px-6 py-8 overflow-hidden bg-white rounded-md shadow-md">
                <h2 className="text-xl font-medium text-gray-800">Tutoring Services</h2>
                <p className="max-w-md mt-4 text-gray-400">
                    Receive personalized academic support from experienced tutors to excel in your studies.
                </p>
            </div>
        </div>
    </div>
</section>


{/* THREE */}
<section className="bg-white">
    <div className="max-w-5xl px-6 py-16 mx-auto text-center">
        <h2 className="text-3xl font-semibold text-gray-800 md:text-4xl">
            Explore new learning opportunities, <br /> enhance your knowledge
        </h2>
        <p className="max-w-lg mx-auto mt-4 text-gray-600 lg:max-w-2xl">
            Expand your horizons with engaging courses, workshops, and expert-led sessions. Embrace the power of education
            to shape your future and achieve your academic goals.
        </p>

        <img 
            className="object-cover object-center w-full mt-16 rounded-md shadow h-72 md:h-80" 
            src="https://images.unsplash.com/photo-1600069226367-412873fb0637?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
            alt="education example"
        />
    </div>
</section>


{/* FOUR */}

<section className="bg-white">
    <div className="max-w-5xl px-6 py-16 mx-auto text-center">
        <h2 className="text-3xl font-semibold text-gray-800">Our Educators</h2>
        <p className="max-w-lg mx-auto mt-4 text-gray-600">Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
            deserunt mollit anim id est laborum.</p>
    
        <div className="grid gap-8 mt-6 md:grid-cols-2 lg:grid-cols-4">
            <div className="flex flex-col items-center">
                <img className="object-cover object-center w-full h-64 rounded-md shadow-md transition-transform duration-300 hover:scale-105"
                    src={tutor1}
                    alt="educator 1"/>
                <h3 className="mt-4 font-medium text-gray-700">Anna John </h3>
                <p className="text-sm text-gray-600">Lead Instructor</p>
            </div>
    
            <div className="flex flex-col items-center">
                <img className="object-cover object-center w-full h-64 rounded-md shadow-md transition-transform duration-300 hover:scale-105"
                    src={tutor2}
                    alt="educator 2"/>
                <h3 className="mt-4 font-medium text-gray-700">Jane Smith</h3>
                <p className="text-sm text-gray-600">Senior Educator</p>
            </div>
    
            <div className="flex flex-col items-center">
                <img className="object-cover object-center w-full h-64 rounded-md shadow-md transition-transform duration-300 hover:scale-105"
                      src={tutor3} alt="educator 3"
                   />
                <h3 className="mt-4 font-medium text-gray-700">John Lee</h3>
                <p className="text-sm text-gray-600">Curriculum Developer</p>
            </div>
    
            <div className="flex flex-col items-center">
                <img className="object-cover object-center w-full h-64 rounded-md shadow-md transition-transform duration-300 hover:scale-105"
                      src={tutor4} alt="educator 4"
                  />
                <h3 className="mt-4 font-medium text-gray-700">Michael Brown</h3>
                <p className="text-sm text-gray-600">Educational Consultant</p>
            </div>
        </div>
    </div>
</section>





{/* FIVE */}
<section className="bg-white">
    <div className="max-w-5xl px-6 py-16 mx-auto">
        <div className="px-8 py-12 bg-gray-800 rounded-md md:px-20 md:flex md:items-center md:justify-between">
            <div>
                <h3 className="text-2xl font-semibold text-white">Enhance Your Learning Journey</h3>
                <p className="max-w-md mt-4 text-gray-400">
                    Explore a wide range of educational resources, expert-led courses, and personalized learning opportunities
                    to advance your knowledge and skills.
                </p>
            </div>

            <a
                className="block px-8 py-2 mt-6 text-base font-medium text-center text-white transition-colors duration-300 transform bg-indigo-600 rounded md:mt-0 hover:bg-indigo-500"
                href="#"
            >
                Get Started
            </a>
        </div>
    </div>
</section>



        </>
       
    );
}

export default EducationHero
