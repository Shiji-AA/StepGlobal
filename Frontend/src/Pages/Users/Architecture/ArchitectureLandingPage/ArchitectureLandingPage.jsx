import  { Suspense, lazy } from 'react';

// Lazy load components
const ArchitectureNavbar = lazy(() => import('../../../../Components/Users/Architecture/ArchitectureNavbar/ArchitectureNavbar'));
const ArchitectureHero1 = lazy(() => import('../../../../Components/Users/Architecture/ArchitectureHero/ArchitectureHero1'));
const ArchitectureHero2 = lazy(() => import('../../../../Components/Users/Architecture/ArchitectureHero/ArchitectureHero2'));
const ArchitectureHero3 = lazy(() => import('../../../../Components/Users/Architecture/ArchitectureHero/ArchitectureHero3'));
const ArchitectureHero4 = lazy(() => import('../../../../Components/Users/Architecture/ArchitectureHero/ArchitectureHero4'));
const ArchitectureHero5 = lazy(() => import('../../../../Components/Users/Architecture/ArchitectureHero/ArchitectureHero5'));
const ArchitectureHero7 = lazy(() => import('../../../../Components/Users/Architecture/ArchitectureHero/ArchitectureHero7'));
const ArchitectureFooter = lazy(() => import('../../../../Components/Users/Architecture/ArchitectureFooter/ArchitectureFooter'));

function ArchitectureLandingPage() {
  return (
    <div>
      {/* Suspense wrapper with fallback UI while the components load */}
      <Suspense fallback={<div>Loading...</div>}>
        <ArchitectureNavbar />
        <ArchitectureHero1 />
        <ArchitectureHero2 />
        <ArchitectureHero3 />
        <ArchitectureHero4 />
        <ArchitectureHero5 />
        <ArchitectureHero7 />
        <ArchitectureFooter />
      </Suspense>
    </div>
  );
}

export default ArchitectureLandingPage;
