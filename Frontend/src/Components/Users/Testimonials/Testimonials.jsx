function Testimonials() {
    return (
      <div>
        <div className="py-16 bg-white">  {/* Fixed background color class */}
          <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
            <h2 className="mb-12 text-center text-2xl text-gray-900 font-bold md:text-4xl">What our clients say!!!</h2>
            <div className="grid gap-8 md:grid-rows-2 lg:grid-cols-2">
              <div className="row-span-2 p-6 border border-gray-100 rounded-xl bg-gray-50 text-center sm:p-8">
                <div className="h-full flex flex-col justify-center space-y-4">
                  <img 
                    className="w-20 h-20 mx-auto rounded-full" 
                    src="https://tailus.io/sources/blocks/grid-cards/preview/images/avatars/second_user.webp" 
                    alt="Avatar of Jane Doe, Product Designer"  // Improved alt text
                    height="220" 
                    width="220" 
                    loading="lazy"
                  />
                  <p className="text-gray-600 md:text-xl"> 
                    <span className="font-serif">"</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat repellat perspiciatis excepturi est. Non ipsum iusto aliquam consequatur repellat provident, omnis ut, sapiente voluptates veritatis cum deleniti repudiandae ad doloribus. <span className="font-serif">"</span>
                  </p>
                  <div>
                    <h6 className="text-lg font-semibold leading-none">Jane Doe</h6>
                    <span className="text-xs text-gray-500">Product Designer</span>
                  </div>
                </div>
              </div>
  
              <div className="p-6 border border-gray-100 rounded-xl bg-gray-50 sm:flex sm:space-x-8 sm:p-8">
                <img 
                  className="w-20 h-20 mx-auto rounded-full" 
                  src="https://tailus.io/sources/blocks/grid-cards/preview/images/avatars/first_user.webp" 
                  alt="Avatar of John Smith, UI Designer" // Improved alt text
                  height="220" 
                  width="220" 
                  loading="lazy"
                />
                <div className="space-y-4 mt-4 text-center sm:mt-0 sm:text-left">
                  <p className="text-gray-600"> 
                    <span className="font-serif">"</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat repellat perspiciatis excepturi est. Non ipsum iusto aliquam consequatur repellat provident, omnis ut, sapiente voluptates veritatis cum deleniti repudiandae ad doloribus. <span className="font-serif">"</span>
                  </p>
                  <div>
                    <h6 className="text-lg font-semibold leading-none">John Smith</h6>
                    <span className="text-xs text-gray-500">UI Designer</span>
                  </div>
                </div>
              </div>
              <div className="p-6 border border-gray-100 rounded-xl bg-gray-50 sm:flex sm:space-x-8 sm:p-8">
                <img 
                  className="w-20 h-20 mx-auto rounded-full" 
                  src="https://tailus.io/sources/blocks/grid-cards/preview/images/avatars/third_user.webp" 
                  alt="Avatar of Sarah Lee, Developer"  // Improved alt text
                  height="220" 
                  width="220" 
                  loading="lazy"
                />
                <div className="space-y-4 mt-4 text-center sm:mt-0 sm:text-left">
                  <p className="text-gray-600"> 
                    <span className="font-serif">"</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat repellat perspiciatis excepturi est. Non ipsum iusto aliquam consequatur repellat provident, omnis ut, sapiente voluptates veritatis cum deleniti repudiandae ad doloribus. <span className="font-serif">"</span>
                  </p>
                  <div>
                    <h6 className="text-lg font-semibold leading-none">Sarah Lee</h6>
                    <span className="text-xs text-gray-500">Developer</span>
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
  