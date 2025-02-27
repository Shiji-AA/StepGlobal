//import heroimage from '../../../assets/heroImages/hero1.jpg';
import hero from '../../../assets/heroImages/hero14.jpg'
import { Link } from 'react-router-dom';
const Hero = () => {
  return (
    <div className="relative w-full h-screen bg-gray-800 flex items-center justify-center text-white text-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40" 
        style={{ backgroundImage: `url(${hero})` }}
      ></div>
      
      {/* Content */}
      <div className="relative z-10 px-6 md:px-12 lg:px-24">
        <h1 className="font-custom font-normal text-4xl md:text-6xl mb-4 text-white">Find Your Dream Job Today!</h1>
        <p className="font-custom font-normal text-lg md:text-xl mb-6 text-white">Browse thousands of jobs across multiple industries and locations.</p>
        
        {/* Search Bar */}
        <div className="bg-white p-2 rounded-lg shadow-md flex items-center w-full max-w-2xl mx-auto">
          <input type="text" placeholder="Job title, keyword..." className="flex-1 p-3 text-gray-700 outline-none" />
          <Link to="/findjobs">
          <button className="font-custom font-normal bg-tealDark text-white px-6 py-3 rounded-lg hover:bg-tealLight transition">Search</button>
          </Link>
         
        </div>
        
        {/* Call-to-Action Buttons */}
        <div className="mt-6 flex gap-4 justify-center">
        <Link to="/recruiterlogin">
          <button className="font-custom font-normal bg-tealLight text-white px-6 py-3 rounded-lg hover:bg-tealDark transition shadow-lg">Post a Job</button> 
          </Link>
        <Link to ='/login'>  
        <button className="font-custom font-normal bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-900 transition shadow-lg">Job Seeker</button>
        </Link>
         

        </div>
      </div>
    </div>
  );
};

export default Hero;
