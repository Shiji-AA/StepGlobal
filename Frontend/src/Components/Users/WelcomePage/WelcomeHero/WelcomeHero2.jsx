import hero from '../../../../assets/heroImages/hero13.jpg'
import hero10 from '../../../../assets/heroImages/hero10.png'
import hero9 from '../../../../assets/heroImages/hero9.jpg'
import hero8 from '../../../../assets/heroImages/hero7.png'
import hero12 from '../../../../assets/heroImages/hero12.png'
function WelcomeHero2() {
  return (
    <>
     <section>
    <div>
 
  <div
    className="bannerFondo bg-teal-800 bg-left-top bg-auto bg-repeat-x h-[400px] bg-[url('/img/continuartl_4.png')]"
  ></div>

  <div className="-mt-64">
    <div className="w-full text-center">
      <p className="text-sm tracking-widest text-white font-normal">Empowering Growth</p>
      <h1 className="font-normal text-4xl text-white">
        Education | Architecture | HR Consultancy
      </h1>
    </div>

    <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
    
    <div className="p-2 sm:p-10 text-center cursor-pointer">
  <div 
    className="py-16 max-w-sm rounded-lg overflow-hidden shadow-lg hover:bg-opacity-90 transition duration-500 bg-cover bg-center relative"
    style={{ backgroundImage: `url(${hero12})` }} 
  >
    
    <div className="absolute inset-0 bg-black bg-opacity-70 rounded-lg"></div>

    <div className="relative space-y-5 text-white">
      <i className="fa fa-spa text-4xl"></i>
      <div className="px-6 py-1">
        <div className="space-y-5">
          <div className="font-normal text-2xl">Education</div>
          <p className="font-normal">
            Innovative learning methods and resources. 
             
          </p>
        </div>
      </div>
    </div>
  </div>
</div>


<div className="p-2 sm:p-10 text-center cursor-pointer text-white">
  <div 
    className="py-16 max-w-sm rounded-lg overflow-hidden shadow-lg bg-cover bg-center relative transition duration-500 hover:bg-opacity-80"
    style={{ backgroundImage: `url(${hero9})` }} // Corrected background image
  >


    <div className="absolute inset-0 bg-black bg-opacity-70 rounded-lg"></div>

    <div className="relative space-y-5 text-white">
      <i className="fa fa-head-side-mask text-4xl"></i>
      <div className="px-6 py-1">
        <div className="space-y-5">
          <div className="font-normal text-2xl ">Architecture</div>
          <p className="font-normal">
            Modern designs and sustainable structures.
          </p>
        </div>
      </div>
    </div>
  </div>
</div>


  
<div className="p-2 sm:p-10 text-center cursor-pointer">
  <div 
    className="py-16 max-w-sm rounded-lg overflow-hidden shadow-lg bg-cover bg-center relative transition duration-500 hover:bg-opacity-80"
    style={{ backgroundImage: `url(${hero10})` }} // Ensure hero10 is imported correctly
  >

    <div className="absolute inset-0 bg-black bg-opacity-70 rounded-lg"></div>

    <div className="relative space-y-5 text-white">
      <i className="fa fa-swimmer text-4xl"></i>
      <div className="px-6 py-1">
        <div className="space-y-5">
          <div className="font-normal text-xl ">HR Consultancy</div>
          <p className="text-normal">
            Talent management and recruitment solutions.
          </p>
        </div>
      </div>
    </div>
  </div>
</div>



    </div>
  </div>
</div>
    </section> 
        

      {/* 1 DIV */}
<section className="bg-white h-full w-full flex justify-center  shadow-2xl shadow-blue-900/50">
  <div className="w-full max-w-8xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center ">

    {/* Right Side - Image */}
    <div className="flex justify-center lg:justify-start">
      <img
        src={hero9}
        alt="kids"
        className="max-w-full h-auto"
      />
    </div>

    {/* Left Side - Heading & Content */}
   {/* Left Side - Heading & Content */}
<div className="flex flex-col items-start text-left space-y-6 p-10 lg:p-16 w-full max-w-2xl ">
  <p className="text-lg font-normal text-gray-800 ">
    Workmonitor 2025
  </p>

  <h1 className="font-normal text-2xl leading-none md:text-4xl xl:text-5xl text-gray-900">
   
    innovative Solutions for education
  </h1>

  <p className="font-normal text-gray-700 md:text-lg sm:text-lg ">
    Our Workmonitor 2025 report shows that a new workplace baseline is emerging — 
    where success is defined not just by what we do, but by why we do it, how we do it, 
    and who we do it with. Talent expectations are continuing to evolve, shaped by 
    economic uncertainty, technological advancements, and shifting social landscapes. 
    There’s a clear mission here for employers. By acknowledging the new baseline — the why, 
    who, and how — and closing the gaps in expectations between talent and employers, 
    organizations can gain trust and drive meaningful, talent-centric progress economic uncertainty, technological advancements, and shifting social landscapes. 
    There’s a clear mission here for employers. By acknowledging the new baseline — the why, 
    who, and how — and closing the gaps in expectations between talent and employers, 
    organizations can gain trust and drive meaningful, talent-centric progress.
  </p>

  {/* Button */}
  <div>
  <a
  href="#"
  className=" font-normal rounded-lg inline-flex items-center justify-center px-6 py-4 text-teal-700 border border-teal-300 
             hover:bg-teal-700 hover:text-white focus:ring-4 focus:ring-teal-100 
             "
>
  Speak to an Expert
</a>

  </div>
</div>


  </div>
</section>
 {/* 2 DIV */}
 <section className="bg-white  h-full w-full flex justify-center">
  <div className="w-full max-w-8xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center ">
    {/* Left Side - Heading & Content */}
   {/* Left Side - Heading & Content */}
<div className="flex flex-col items-start text-left space-y-6 p-10 lg:p-16 w-full max-w-2xl">
  <p className="text-lg font-normal text-gray-800 ">
    Workmonitor 2025
  </p>

  <h1 className=" font-normal text-2xl leading-none md:text-4xl xl:text-5xl text-gray-900 ">    
    innovative Solutions for education
  </h1>

  <p className="font-normal text-gray-700 md:text-sm lg:text-lg ">
    Our Workmonitor 2025 report shows that a new workplace baseline is emerging — 
    where success is defined not just by what we do, but by why we do it, how we do it, 
    and who we do it with. Talent expectations are continuing to evolve, shaped by 
    economic uncertainty, technological advancements, and shifting social landscapes. 
    There’s a clear mission here for employers. By acknowledging the new baseline — the why, 
    who,
    There’s a clear mission here for employers. By acknowledging the new baseline — the why, 
    who, and how — and closing the gaps in expectations between talent and employers, 
    organizations can gain trust and drive meaningful, talent-centric progress.
  </p>

  {/* Button */}
  <div>
  <a
  href="#"
  className=" font-normal rounded-lg inline-flex items-center justify-center px-6 py-4 text-teal-700 border border-teal-300 
             hover:bg-teal-700 hover:text-white focus:ring-4 focus:ring-teal-100 
             "
>
  Speak to an Expert
</a>
  </div>
</div>

    {/* Right Side - Image */}
    <div className="flex justify-center lg:justify-start">
      <img
        src={hero10}
        alt="kids"
        className="max-w-full h-auto"
      />
    </div>
  </div>
</section>
{/* 3 DIV*/}
<section className="bg-white  h-full w-full flex justify-center">
  <div className="w-full max-w-8xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center ">

    {/* Right Side - Image */}
    <div className="flex justify-center lg:justify-start">
      <img
        src={hero}
        alt="girls"
        className="max-w-full h-auto"
      />
    </div>

 
   {/* Left Side - Heading & Content */}
<div className="flex flex-col items-start text-left space-y-6 p-10 lg:p-16 w-full max-w-2xl">
  <p className="text-lg font-normal text-gray-800 ">
    Workmonitor 2025
  </p>

  <h1 className="font-normal text-2xl leading-none md:text-4xl xl:text-5xl text-gray-900 ">    
    innovative solutions for education
  </h1>

  <p className="font-normal text-gray-700 md:text-sm lg:text-lg ">
    Our Workmonitor 2025 report shows that a new workplace baseline is emerging — 
    where success is defined not just by what we do, but by why we do it, how we do it, 
    and who we do it with. Talent expectations are continuing to evolve, shaped by 
    economic uncertainty, technological advancements, and shifting social landscapes. 
    There’s a clear mission here for employers. By acknowledging the new baseline — the why, 
    who, and how — and closing the gaps in expectations between talent and employers, 
    organizations can gain trust and drive meaningful, talent-centric progress economic uncertainty, technological advancements, and shifting social landscapes. 
   
  </p>

  {/* Button */}
  <div>
  <a
  href="#"
  className=" font-normal rounded-lg inline-flex items-center justify-center px-6 py-4 text-teal-700 border border-teal-300 
             hover:bg-teal-700 hover:text-white focus:ring-4 focus:ring-teal-100 
             "
>
  Speak to an Expert
</a>

  </div>
</div>


  </div>
</section>
{/* 4 DIV*/}
<section className="bg-white  h-full w-full flex justify-center">
  <div className="w-full max-w-8xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center ">



    {/* Left Side - Heading & Content */}
   {/* Left Side - Heading & Content */}
<div className="flex flex-col items-start text-left space-y-6 p-10 lg:p-16 w-full max-w-2xl">
  <p className="text-lg font-normal text-gray-800 ">
    Workmonitor 2025
  </p>

  <h1 className="font-normal text-2xl leading-none md:text-4xl xl:text-5xl text-gray-900 ">
    innovative Solutions for education
  </h1>

  <p className="font-normal text-gray-700 md:text-sm lg:text-lg ">
    Our Workmonitor 2025 report shows that a new workplace baseline is emerging — 
    where success is defined not just by what we do, but by why we do it, how we do it, 
     the why, 
   
    organizations can gain trust and drive meaningful, talent-centric progress.
  </p>

  {/* Button */}
  <div>
  <a
  href="#"
  className="rounded-lg inline-flex items-center justify-center px-6 py-4 text-teal-700 border border-teal-300 
             hover:bg-teal-700 hover:text-white focus:ring-4 focus:ring-teal-100 
             "
>
  Speak to an Expert
</a>

  </div>
</div>

    {/* Right Side - Image */}
    <div className="flex justify-center lg:justify-start">
      <img
        src={hero8}
        alt="kids"
        className="max-w-full h-auto"
      />
    </div>


  </div>
</section>




  
    </>
  );
}

export default WelcomeHero2;
