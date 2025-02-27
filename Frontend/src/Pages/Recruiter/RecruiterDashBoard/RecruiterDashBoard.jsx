import Banner from '../../../Components/Recruiter/RecruiterDashboard/Banner'
import RecruiterHero1 from '../../../Components/Recruiter/RecruiterDashboard/RecruiterHero1'
import RecruiterHero2 from '../../../Components/Recruiter/RecruiterDashboard/RecruiterHero2'
import RecruiterHero3 from '../../../Components/Recruiter/RecruiterDashboard/RecruiterHero3'
import RecruiterNavbar from '../../../Components/Recruiter/RecruiterNavbar/RecruiterNavbar'
import Footer from '../../../Components/Users/Footer/Footer'

function RecruiterDashBoard() {
    return (
        <div>
            
            <RecruiterNavbar/>
            <Banner/>
            <RecruiterHero1/>
            <RecruiterHero2/>
            <RecruiterHero3/>
            <Footer/>
        </div>
    )
}

export default RecruiterDashBoard
