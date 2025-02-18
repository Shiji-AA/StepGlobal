import WelcomeFooter from "../../../Components/Users/WelcomePage/WelcomeFooter/WelcomeFooter"
import WelcomeHero from "../../../Components/Users/WelcomePage/WelcomeHero/WelcomeHero"
import WelcomeHero2 from "../../../Components/Users/WelcomePage/WelcomeHero/WelcomeHero2"
import WelcomeNavbar from "../../../Components/Users/WelcomePage/WelcomeNavbar/WelcomeNavbar"
import WelcomeToolbar from "../../../Components/Users/WelcomePage/WelcomeToolbar/WelcomeToolbar"


function WelcomePage() {
    return (
        <>
    <WelcomeToolbar/>
    <WelcomeNavbar/>
    <WelcomeHero/>
    <WelcomeHero2/>
    <WelcomeFooter/>   
            
        </>
    )
}

export default WelcomePage
