//import Accreditations from "../../../Components/Users/Accreditations/Accreditations"
import WelcomeFooter from "../../../Components/Users/WelcomePage/WelcomeFooter/WelcomeFooter"
//import VERuthe from "../../../Components/Users/WelcomePage/WelcomeHero/VERuthe"
import WelcomeHero from "../../../Components/Users/WelcomePage/WelcomeHero/WelcomeHero"
import WelcomeHero1 from "../../../Components/Users/WelcomePage/WelcomeHero/WelcomeHero1"
import WelcomeHero2 from "../../../Components/Users/WelcomePage/WelcomeHero/WelcomeHero2"
import WelcomeNavbar from "../../../Components/Users/WelcomePage/WelcomeNavbar/WelcomeNavbar"
//import WelcomeToolbar from "../../../Components/Users/WelcomePage/WelcomeToolbar/WelcomeToolbar"


function WelcomePage() {
    return (
        <>
    {/* <WelcomeToolbar/> */}
    <WelcomeNavbar/>
 
    <WelcomeHero/>
    <WelcomeHero1/>
    <WelcomeHero2/>
    {/* <VERuthe/> */}
    {/* <Accreditations/> */}
    <WelcomeFooter/>   
            
        </>
    )
}

export default WelcomePage
