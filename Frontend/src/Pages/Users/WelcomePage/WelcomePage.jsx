
import WelcomeFooter from "../../../Components/Users/WelcomePage/WelcomeFooter/WelcomeFooter"
import WelcomeContact from "../../../Components/Users/WelcomePage/WelcomeHero/WelcomeContact"
//import VERuthe from "../../../Components/Users/WelcomePage/WelcomeHero/VERuthe"
import WelcomeHero from "../../../Components/Users/WelcomePage/WelcomeHero/WelcomeHero"
import WelcomeHero1 from "../../../Components/Users/WelcomePage/WelcomeHero/WelcomeHero1"
import WelcomeHero2 from "../../../Components/Users/WelcomePage/WelcomeHero/WelcomeHero2"
import WelcomeNavbar from "../../../Components/Users/WelcomePage/WelcomeNavbar/WelcomeNavbar"



function WelcomePage() {
    return (
        <>

    <WelcomeNavbar/> 
    <WelcomeHero/>
    <WelcomeHero1/>
    <WelcomeHero2/>
    {/* <VERuthe/> */}
 
    <WelcomeContact/>
    <WelcomeFooter/>   
            
        </>
    )
}

export default WelcomePage
