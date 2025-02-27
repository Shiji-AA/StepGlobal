
import ArchitectureFooter from '../../../../Components/Users/Architecture/ArchitectureFooter/ArchitectureFooter'
//import ArchitectureHero from '../../../../Components/Users/Architecture/ArchitectureHero/ArchitectureHero'
import ArchitectureHero1 from '../../../../Components/Users/Architecture/ArchitectureHero/ArchitectureHero1'
import ArchitectureHero2 from '../../../../Components/Users/Architecture/ArchitectureHero/ArchitectureHero2'
import ArchitectureHero3 from '../../../../Components/Users/Architecture/ArchitectureHero/ArchitectureHero3'
import ArchitectureHero4 from '../../../../Components/Users/Architecture/ArchitectureHero/ArchitectureHero4'
import ArchitectureHero5 from '../../../../Components/Users/Architecture/ArchitectureHero/ArchitectureHero5'
import ArchitectureHero7 from '../../../../Components/Users/Architecture/ArchitectureHero/ArchitectureHero7'
import ArchitectureNavbar from '../../../../Components/Users/Architecture/ArchitectureNavbar/ArchitectureNavbar'

function ArchitectureLandingPage() {
  return (
    <div>
      <ArchitectureNavbar/>
      <ArchitectureHero1/>
      <ArchitectureHero2/>
      <ArchitectureHero3/>
      <ArchitectureHero4/>
      <ArchitectureHero5/>    
      <ArchitectureHero7/>
     {/* <ArchitectureHero/> */}
      <ArchitectureFooter/>
      
    </div>
  )
}

export default ArchitectureLandingPage
