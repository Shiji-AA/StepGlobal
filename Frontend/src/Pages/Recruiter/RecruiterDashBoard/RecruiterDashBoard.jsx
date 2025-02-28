import { Suspense, lazy } from 'react';

// Lazy load components
const RecruiterNavbar = lazy(() => import('../../../Components/Recruiter/RecruiterNavbar/RecruiterNavbar'));
const Banner = lazy(() => import('../../../Components/Recruiter/RecruiterDashboard/Banner'));
const RecruiterHero1 = lazy(() => import('../../../Components/Recruiter/RecruiterDashboard/RecruiterHero1'));
const RecruiterHero2 = lazy(() => import('../../../Components/Recruiter/RecruiterDashboard/RecruiterHero2'));
const RecruiterHero3 = lazy(() => import('../../../Components/Recruiter/RecruiterDashboard/RecruiterHero3'));
const Footer = lazy(() => import('../../../Components/Users/Footer/Footer'));

function RecruiterDashBoard() {
    return (
        <div>
            {/* Suspense wrapper with fallback UI while the components load */}
            <Suspense fallback={<div>Loading...</div>}>
                <RecruiterNavbar />
                <Banner />
                <RecruiterHero1 />
                <RecruiterHero2 />
                <RecruiterHero3 />
                <Footer />
            </Suspense>
        </div>
    );
}

export default RecruiterDashBoard;
