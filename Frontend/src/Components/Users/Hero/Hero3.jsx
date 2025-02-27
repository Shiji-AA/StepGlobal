import paypal from "../../../assets/images/paypal.webp";

function Hero3() {
  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-6">
        {/* Heading Section */}
        <div className="text-center mb-10">
          <h2 className="font-custom font-weight-normal text-3xl text-gray-900 mb-4">
            Companies We have Helped
          </h2>
          <p className="font-custom font-weight-normal text-lg text-gray-700 max-w-2xl mx-auto">
            We have collaborated with top companies to provide the best solutions. 
            Here are some of the industry leaders we have worked with.
          </p>
        </div>

        {/* Grid for Logos */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 justify-items-center">
          {[...Array(8)].map((_, index) => (
            <div key={index} className="flex justify-center">
              <img
                src={paypal}
                alt="Company Logo"
                className="w-24 h-24 md:w-32 md:h-32 object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Hero3;
