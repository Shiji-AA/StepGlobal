import Admingraph from "../../Components/Admin/AdminDashboard/Admingraph"
import Adminstatistics from "../../Components/Admin/AdminDashboard/Adminstatistics"
import AdminNavbar from "../../Components/Admin/AdminNavbar/AdminNavbar"
import Footer from "../../Components/Users/Footer/Footer"

function AdminDashboard() {
    return (
        <div> 
           <AdminNavbar/>
           <Adminstatistics/>
           <br/><br/>
           <Admingraph/>            
           <br/><br/>      
            <Footer/>
        </div>
    )
}

export default AdminDashboard
