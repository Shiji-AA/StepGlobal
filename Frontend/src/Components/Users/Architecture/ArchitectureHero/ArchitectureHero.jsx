

const ArchitectureHero = () => {

    return (
      <div className="font-sans">
        {/* Header Section */}
    
  
        {/* Hero Section */}
        <section className="relative h-[500px] bg-cover bg-center flex items-center justify-center text-white text-center" style={{ backgroundImage: "url('https://source.unsplash.com/1600x900/?architecture')" }}>
          <div className="bg-black bg-opacity-50 p-8 rounded-lg">
            <h2 className="text-4xl font-bold">Designing the Future</h2>
            <p className="text-lg mt-2">Innovative and modern architectural solutions</p>
          </div>
        </section>
  
        {/* About Section */}
        <section className="p-10 text-center">
          <h3 className="text-3xl font-bold">Who We Are</h3>
          <p className="text-gray-600 mt-4">We are an award-winning architecture firm dedicated to designing extraordinary spaces.</p>
        </section>
  
        {/* Projects Section */}
        <section className="grid md:grid-cols-3 gap-6 p-10">
          <div className="shadow-lg rounded-lg overflow-hidden">
            <img src="https://source.unsplash.com/400x300/?building" alt="Architecture design" className="w-full" />
            <div className="p-4">
              <h4 className="text-xl font-semibold">Modern House</h4>
              <p className="text-gray-600">A minimalist house with a modern design.</p>
            </div>
          </div>
          <div className="shadow-lg rounded-lg overflow-hidden">
            <img src="https://source.unsplash.com/400x300/?city" alt="Architecture design" className="w-full" />
            <div className="p-4">
              <h4 className="text-xl font-semibold">Urban Planning</h4>
              <p className="text-gray-600">Creating sustainable urban environments.</p>
            </div>
          </div>
          <div className="shadow-lg rounded-lg overflow-hidden">
            <img src="https://source.unsplash.com/400x300/?interior" alt="Architecture design" className="w-full" />
            <div className="p-4">
              <h4 className="text-xl font-semibold">Interior Design</h4>
              <p className="text-gray-600">Elegant interiors designed for comfort.</p>
            </div>
          </div>
        </section>
  
    
      </div>
    );
  };
  
  export default ArchitectureHero;
  