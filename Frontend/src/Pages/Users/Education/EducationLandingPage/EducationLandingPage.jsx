import { Suspense, lazy } from 'react';

// Lazy load components
const EducationNavbar = lazy(() => import("../../../../Components/Users/Education/EducationNavbar/EducationNavbar"));
const EducationHero = lazy(() => import("../../../../Components/Users/Education/EducationHero/EducationHero"));
const EducationHero2 = lazy(() => import("../../../../Components/Users/Education/EducationHero/EducationHero2"));
const EducationHero3 = lazy(() => import("../../../../Components/Users/Education/EducationHero/EducationHero3"));
const EducationHero4 = lazy(() => import("../../../../Components/Users/Education/EducationHero/EducationHero4"));
const EducationHero5 = lazy(() => import("../../../../Components/Users/Education/EducationHero/EducationHero5"));
const EducationHero6 = lazy(() => import("../../../../Components/Users/Education/EducationHero/EducationHero6"));
const EducationHero7 = lazy(() => import("../../../../Components/Users/Education/EducationHero/EducationHero7"));
const EducationFooter = lazy(() => import("../../../../Components/Users/Education/EducationFooter/EducationFooter"));

function EducationLandingPage() {
    return (
        <>
            {/* Suspense wrapper with a fallback while the components load */}
            <Suspense fallback={<div>Loading...</div>}>
                <EducationNavbar />
                <EducationHero />
                <EducationHero2 />
                <EducationHero3 />
                <EducationHero4 />
                <EducationHero5 />
                <EducationHero6 />
                <EducationHero7 />
                <EducationFooter />
            </Suspense>
        </>
    );
}

export default EducationLandingPage;
