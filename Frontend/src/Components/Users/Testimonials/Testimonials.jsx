import student1 from "../../../assets/images/stud1.jpg";
import student2 from '../../../assets/images/stud2.jpg';
import student3 from '../../../assets/images/stud3.jpg';
import student4 from '../../../assets/images/stud4.jpg';

function Testimonials() {
    return (
      <div>
        <div className="py-16 bg-white"> 
          <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
            <h2 className="font-custom font-weight-normal mb-12 text-center text-2xl text-gray-900 md:text-4xl">What Our Users Say</h2>
            <div className="grid gap-8 md:grid-rows-2 lg:grid-cols-2">
              
              <div className="p-6 border border-gray-100 rounded-xl bg-gray-50 sm:flex sm:space-x-8 sm:p-8">
                <img 
                  className="w-20 h-20 mx-auto rounded-full" 
                  src={student1}
                  alt="Avatar of Arjun Nair, Software Engineer" 
                  height="220" 
                  width="220" 
                  loading="lazy"
                />
                <div className="space-y-4 mt-4 text-center sm:mt-0 sm:text-left">
                  <p className="text-gray-600"> 
                    <span className="font-custom font-weight-normal ">"</span> StepGlobal helped me land my first software job in Kochi. The platform is user-friendly and has plenty of opportunities. <span className="font-serif">"</span>
                  </p>
                  <div>
                    <h6 className="font-custom font-weight-normal text-lg  leading-none text-gray-800">Arathi M</h6>
                    <span className="font-custom font-weight-normal text-xs text-gray-700">Software Engineer</span>
                  </div>
                </div>
              </div>

              <div className="p-6 border border-gray-100 rounded-xl bg-gray-50 sm:flex sm:space-x-8 sm:p-8">
                <img 
                  className="w-20 h-20 mx-auto rounded-full" 
                  src={student2}
                  alt="Avatar of Anjali Menon, Marketing Executive" 
                  height="220" 
                  width="220" 
                  loading="lazy"
                />
                <div className="space-y-4 mt-4 text-center sm:mt-0 sm:text-left">
                  <p className="text-gray-600"> 
                    <span className="font-custom font-weight-normal">"</span> I was able to switch my career successfully thanks to StepGlobal. The job alerts are very helpful. <span className="font-serif">"</span>
                  </p>
                  <div>
                    <h6 className="font-custom font-weight-normal text-lg  leading-none text-gray-800">Arjun K</h6>
                    <span className="font-custom font-weight-normal text-xs text-gray-700">Marketing Executive</span>
                  </div>
                </div>
              </div>
              
              <div className="p-6 border border-gray-100 rounded-xl bg-gray-50 sm:flex sm:space-x-8 sm:p-8">
                <img 
                  className="w-20 h-20 mx-auto rounded-full" 
                  src={student3}
                  alt="Avatar of Ramesh Pillai, Civil Engineer"  
                  height="220" 
                  width="220" 
                  loading="lazy"
                />
                <div className="space-y-4 mt-4 text-center sm:mt-0 sm:text-left">
                  <p className="text-gray-600"> 
                    <span className="font-custom font-weight-normal">"</span> The best platform for job seekers in Kerala. The category-wise filtering helped me find relevant openings quickly. <span className="font-serif">"</span>
                  </p>
                  <div>
                    <h6 className="font-custom font-weight-normal text-lg leading-none text-gray-800">Rithwik Roy</h6>
                    <span className="font-custom font-weight-normal text-xs text-gray-700">Civil Engineer</span>
                  </div>
                </div>
              </div>

              <div className="p-6 border border-gray-100 rounded-xl bg-gray-50 sm:flex sm:space-x-8 sm:p-8">
                <img 
                  className="w-20 h-20 mx-auto rounded-full" 
                  src={student4}
                  alt="Avatar of Meera Rajan, Data Analyst"  
                  height="220" 
                  width="220" 
                  loading="lazy"
                />
                <div className="space-y-4 mt-4 text-center sm:mt-0 sm:text-left">
                  <p className="text-gray-600"> 
                    <span className="font-custom font-weight-normal">"</span> I highly recommend StepGlobal for fresh graduates. It made my job search so much easier. <span className="font-serif">"</span>
                  </p>
                  <div>
                    <h6 className="font-custom font-weight-normal text-lg  leading-none text-gray-800" >Rijo Rajan</h6>
                    <span className="font-custom font-weight-normal text-xs text-gray-700">Data Analyst</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>  
      </div>
    );
  }
  
  export default Testimonials;
