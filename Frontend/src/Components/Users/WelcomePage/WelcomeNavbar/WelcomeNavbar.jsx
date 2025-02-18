import { useState } from "react";
import logoArcite2 from "../../../../assets/logo/StepLogo.png"; // Make sure the logo path is correct

function WelcomeNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white text-white p-4 flex justify-between items-center">
      {/* Logo Image */}
      <img src={logoArcite2} alt="Step Global Logo" className="h-12 w-22" />

      {/* Mobile Menu Toggle Button */}
      <button onClick={() => setIsOpen(!isOpen)} className="md:hidden focus:outline-none">
        ☰
      </button>

      {/* Navigation Links */}
      {/* <nav className={`absolute top-16 left-0 w-full bg-black md:relative md:top-0 md:flex md:space-x-4 transition-all duration-300 ${isOpen ? "block" : "hidden"}`}>
        <a href="#" className="block px-6 py-2 md:inline hover:underline">Home</a>
        <a href="#" className="block px-6 py-2 md:inline hover:underline">Projects</a>
        <a href="#" className="block px-6 py-2 md:inline hover:underline">Contact</a>
      </nav> */}
    </header>
  );
}

export default WelcomeNavbar;
