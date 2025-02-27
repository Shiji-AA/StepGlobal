import Navbar from "../../../Components/Users/Navbar/Navbar";
import Hero from "../../../Components/Users/Hero/Hero";

import Hero3 from "../../../Components/Users/Hero/Hero3";
import CategoryListing from "../../../Components/Users/CategoryListing/CategoryListing";
import Testimonials from "../../../Components/Users/Testimonials/Testimonials";
import Footer from "../../../Components/Users/Footer/Footer";
import Hero1 from "../../../Components/Users/Hero/Hero1";


function LandingPage() {
    return (
        <>
            <Navbar />
            <Hero />        
            <CategoryListing />  
            <Hero1/>    
            <Hero3/>      
            <Testimonials />
            <Footer /> 
        
        </>
    );
}

export default LandingPage;
