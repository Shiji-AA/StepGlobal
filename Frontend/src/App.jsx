import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {Toaster} from 'react-hot-toast';

//User side
import PrivatePages from "./Components/PrivatePages/PrivatePages";
import Register from "./Components/Users/Register/Register";
import LandingPage from "./Pages/Users/LandingPage/LandingPage";
import Login from "./Components/Users/Login/Login";
import HomePage from "./Pages/Users/HomePage/HomePage";
import AboutUs from "./Pages/Users/AboutUs/AboutUs";
import ContactUs from "./Pages/Users/ContactUs/ContactUs";
import FindJobs from "./Pages/Users/FindJobs/FindJobs";
import Page from "./Pages/Users/Page/Page";

//Recruiter side

import RecruiterRegister from "./Components/Recruiter/RecruiterRegister/RecruiterRegister";
import RecruiterLogin from "./Components/Recruiter/RecruiterLogin/RecruiterLogin";
import RecruiterDashBoard from "./Pages/Recruiter/RecruiterDashBoard/RecruiterDashBoard";

//Admin side

import AdminLogin from "./Components/Admin/AdminLogin/AdminLogin";
import AdminDashboard from "./Pages/Admin/AdminDashboard";
import PrivatePageAdmin from "./Components/PrivatePages/PrivatePageAdmin";


function App() {
  return (
    <Router>
     <Toaster position="top-right"/>
     <Routes>   
      {/* UserSide   */}
     <Route path="/" element={<LandingPage/>} />
     <Route path="/register" element={<Register/>} />
     <Route path="/login" element={<Login/>} />
     <Route element={<PrivatePages isStudent={true}/>}> 
     <Route path="/home" element={<HomePage/>} />
     <Route path="/aboutus" element={<AboutUs/>} />
     <Route path="/contactus" element={<ContactUs/>} />
     <Route path="/findjobs" element={<FindJobs/>} />
     <Route path="/page" element={<Page/>} />
     </Route> 

      {/* RecruiterSide   */}     

       <Route path="/recruiterlogin" element={<RecruiterLogin />} />
       <Route path="/recruiterregister" element={<RecruiterRegister />} />   
        <Route  element={<PrivatePages isStudent={false}/>}>
        <Route path="/recruiterdashboard" element={<RecruiterDashBoard/>} />
        </Route>
      

      {/* AdminSide   */}  
      <Route path="/admin" element={<AdminLogin />} />   
      <Route element={<PrivatePageAdmin/>}> 
      <Route path="/admindashboard" element={<AdminDashboard />} />
      </Route>          
      </Routes>       
      </Router>
  )
}
export default App
