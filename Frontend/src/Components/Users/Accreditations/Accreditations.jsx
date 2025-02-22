import autodesk from '../../../assets/heroImages/autodesk.png';
import bentley from '../../../assets/heroImages/bentley.png';
import sketchup from '../../../assets/heroImages/sketchup.png';
import lightpink from '../../../assets/heroImages/lightpinkbg1.avif';
import '../../../index.css';

function Accreditations() {
  return (
    <div 
    
      className="bg-white p-4 md:p-16 text-gray-800 flex flex-col justify-center items-center  "
      style={{
        backgroundImage: `url(${lightpink})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      }}
    >
      {/* Heading Section */}
      <div className="w-full text-left md:text-center">
  <h3 className="font-heading text-lg md:text-2xl font-semibold mb-4 text-tealLight">
    YOUR TRUSTED SOURCE FOR EDUCATION
  </h3>
  <h1 className="font-body text-tealDark text-2xl md:text-4xl font-bold mb-8">
    Authorized Training From <span className="text-aqua">Industry Leaders</span>
  </h1>
</div>

      {/* Sliding Image Container */}
      <div className="font-custom overflow-hidden w-full">
        <div className="flex gap-8 animate-slide">
          {[autodesk, bentley, sketchup, autodesk, bentley, sketchup, autodesk, bentley, sketchup, autodesk, bentley, sketchup].map((src, index) => (
            <img 
              key={index} 
              src={src} 
              alt="Certification Logo"
              className="h-16 md:h-24 object-contain"
            />
          ))}
        </div>
      </div>

      <a 
  href="https://wa.me/919633221153?text=Hi%20there!%20I'm%20interested%20in%20your%20services." 
  target='_blank' 
  rel='noopener noreferrer'
>
<button className="font-custom bg-white border-2 border-teal-500 text-gray-500 py-2 px-6 md:py-2.5 md:px-10 rounded-full transition duration-300 mt-8 text-md md:text-xl 
  hover:bg-teal-600 hover:text-white">
  Contact Us
</button>

</a>

    </div>
  );
}

export default Accreditations;