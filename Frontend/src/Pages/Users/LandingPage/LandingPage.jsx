import CategoryListing from "../../../Components/Users/CategoryListing/CategoryListing"
import Footer from "../../../Components/Users/Footer/Footer"
import Hero from "../../../Components/Users/Hero/Hero"
import Hero1 from "../../../Components/Users/Hero/Hero1"
import JobListing from "../../../Components/Users/JobListing/JobListing"
import Navbar from "../../../Components/Users/Navbar/Navbar"
import Testimonials from "../../../Components/Users/Testimonials/Testimonials"


function LandingPage() {
    return (
        <div>
            <Navbar/>
            <Hero/>
            <CategoryListing/>
            <Hero1/>
            <JobListing/>
            <Testimonials/>
            <Footer/>
            
            
        </div>
    )
}

export default LandingPage
