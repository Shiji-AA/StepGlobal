import  { Suspense, lazy } from 'react';

// Lazy load components
const WelcomeNavbar = lazy(() => import("../../../Components/Users/WelcomePage/WelcomeNavbar/WelcomeNavbar"));
const WelcomeHero = lazy(() => import("../../../Components/Users/WelcomePage/WelcomeHero/WelcomeHero"));
const WelcomeHero1 = lazy(() => import("../../../Components/Users/WelcomePage/WelcomeHero/WelcomeHero1"));
const WelcomeHero2 = lazy(() => import("../../../Components/Users/WelcomePage/WelcomeHero/WelcomeHero2"));
const WelcomeHero3 = lazy(() => import("../../../Components/Users/WelcomePage/WelcomeHero/WelcomeHero3"));
const WelcomeContact = lazy(() => import("../../../Components/Users/WelcomePage/WelcomeHero/WelcomeContact"));
const WelcomeFooter = lazy(() => import("../../../Components/Users/WelcomePage/WelcomeFooter/WelcomeFooter"));

function WelcomePage() {
    return (
        <>
            {/* Suspense wrapper with a fallback while the components load */}
            <Suspense fallback={<div>Loading...</div>}>
                <WelcomeNavbar />
                <WelcomeHero />
                <WelcomeHero1 />
                <WelcomeHero3 />
                <WelcomeHero2 />
                <WelcomeContact />
                <WelcomeFooter />
            </Suspense>
        </>
    );
}

export default WelcomePage;
