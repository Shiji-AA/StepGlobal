import { useState } from "react";
import home from '../../../../assets/images/home.png'

function ArchitectureNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-gray-900 text-white p-6 flex justify-between items-center">
      <h1 className="text-2xl font-bold">Architecture</h1>

      {/* Mobile Menu Toggle Button */}
      <button onClick={() => setIsOpen(!isOpen)} className="md:hidden focus:outline-none">
        ☰
      </button>

      {/* Navigation Links */}
      <nav className={`absolute top-16 left-0 w-full bg-gray-900 md:relative md:top-0 md:flex md:space-x-4 transition-all duration-300 ${isOpen ? "block" : "hidden"}`}>
      <a href="/" className="block px-6 py-2 md:inline hover:underline">
          <img src={home} alt="Home" className="h-8 w-8" />
        </a>
      </nav>
    </header>
  );
}

export default ArchitectureNavbar;
