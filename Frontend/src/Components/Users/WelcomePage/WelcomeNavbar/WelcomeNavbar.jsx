import { useState, useEffect } from "react";
import logoArcite2 from "../../../../assets/logo/StepLogo.png"; // Ensure the path is correct

function WelcomeNavbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 p-4 flex justify-between items-center transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      {/* Logo Image */}
      <img src={logoArcite2} alt="Step Global Logo" className="h-12 w-22" />

      {/* Mobile Menu Toggle Button */}
      <button className="md:hidden focus:outline-none">☰</button>
    </header>
  );
}

export default WelcomeNavbar;
