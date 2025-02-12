import { lazy, Suspense } from "react";

// Lazy load components
const Navbar = lazy(() => import("../../../Components/Users/Navbar/Navbar"));
const Hero = lazy(() => import("../../../Components/Users/Hero/Hero"));
const Hero1 = lazy(() => import("../../../Components/Users/Hero/Hero1"));
const CategoryListing = lazy(() => import("../../../Components/Users/CategoryListing/CategoryListing"));
const Testimonials = lazy(() => import("../../../Components/Users/Testimonials/Testimonials"));
const Footer = lazy(() => import("../../../Components/Users/Footer/Footer"));

function HomePage() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Navbar />
            <Hero />
            <CategoryListing />
            <Hero1 />
            <Testimonials />
            <Footer />
        </Suspense>
    );
}

export default HomePage;
