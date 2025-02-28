import { Suspense, lazy } from 'react';

// Lazy load components
const Navbar = lazy(() => import("../../../Components/Users/Navbar/Navbar"));
const Hero = lazy(() => import("../../../Components/Users/Hero/Hero"));
const Hero3 = lazy(() => import("../../../Components/Users/Hero/Hero3"));
const CategoryListing = lazy(() => import("../../../Components/Users/CategoryListing/CategoryListing"));
const Testimonials = lazy(() => import("../../../Components/Users/Testimonials/Testimonials"));
const Footer = lazy(() => import("../../../Components/Users/Footer/Footer"));
const Hero1 = lazy(() => import("../../../Components/Users/Hero/Hero1"));

function LandingPage() {
    return (
        <>
            {/* Suspense wrapper with fallback UI */}
            <Suspense fallback={<div>Loading...</div>}>
                <Navbar />
                <Hero />
                <CategoryListing />
                <Hero1 />
                <Hero3 />
                <Testimonials />
                <Footer />
            </Suspense>
        </>
    );
}

export default LandingPage;
