
import WelcomeFooter from "../../../Components/Users/WelcomePage/WelcomeFooter/WelcomeFooter"
import WelcomeContact from "../../../Components/Users/WelcomePage/WelcomeHero/WelcomeContact"

import WelcomeHero from "../../../Components/Users/WelcomePage/WelcomeHero/WelcomeHero"
import WelcomeHero1 from "../../../Components/Users/WelcomePage/WelcomeHero/WelcomeHero1"
import WelcomeHero2 from "../../../Components/Users/WelcomePage/WelcomeHero/WelcomeHero2"
import WelcomeHero3 from "../../../Components/Users/WelcomePage/WelcomeHero/WelcomeHero3"
import WelcomeNavbar from "../../../Components/Users/WelcomePage/WelcomeNavbar/WelcomeNavbar"



function WelcomePage() {
    return (
        <>

    <WelcomeNavbar/> 
    <WelcomeHero/>
    <WelcomeHero1/>
    <WelcomeHero3/>
    <WelcomeHero2/> 
    <WelcomeContact/>
    <WelcomeFooter/>   
            
        </>
    )
}

export default WelcomePage
