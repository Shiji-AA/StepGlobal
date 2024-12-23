
import CategoryListing from '../../../Components/Users/CategoryListing/CategoryListing'
import Footer from '../../../Components/Users/Footer/Footer'
import Hero from '../../../Components/Users/Hero/Hero'
import Hero1 from '../../../Components/Users/Hero/Hero1';
import Navbar from '../../../Components/Users/Navbar/Navbar'
import Testimonials from '../../../Components/Users/Testimonials/Testimonials'

function HomePage() {
    return (
        <div>
            <Navbar/>
             <Hero/>
             <CategoryListing/>
             <Hero1/>            
             <Testimonials/>
            <Footer/>
        </div>
    )
}

export default HomePage
