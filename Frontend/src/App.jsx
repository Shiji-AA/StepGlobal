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
import ForgotPassword from "./Components/Users/Login/ForgotPassword";
import ResetPassword from "./Components/Users/Login/ResetPassword";
import Profile from "./Components/Users/Profile/Profile";
import EditProfile from "./Components/Users/Profile/Editprofile";
// import ProfilePhoto from "./Components/Users/Profile/ProfilePhoto";

//Recruiter side

import RecruiterRegister from "./Components/Recruiter/RecruiterRegister/RecruiterRegister";
import RecruiterLogin from "./Components/Recruiter/RecruiterLogin/RecruiterLogin";
import RecruiterDashBoard from "./Pages/Recruiter/RecruiterDashBoard/RecruiterDashBoard";
import ForgotPasswordRecruiter from "./Components/Recruiter/RecruiterLogin/ForgotPasswordRecruiter";
import ResetPasswordRecruiter from "./Components/Recruiter/RecruiterLogin/ResetPasswordRecruiter";
//Admin side

import AdminLogin from "./Components/Admin/AdminLogin/AdminLogin";
import AdminDashboard from "./Pages/Admin/AdminDashboard";
import PrivatePageAdmin from "./Components/PrivatePages/PrivatePageAdmin";
import ChangePassword from "./Components/Users/Profile/ChangePassword";

function App() {
  return (
    <Router>
     <Toaster position="top-right"/>
     <Routes>   
      {/* UserSide   */}
     <Route path="/" element={<LandingPage/>} />
     <Route path="/register" element={<Register/>} />
     <Route path="/login" element={<Login/>} />
     <Route path="/forgotpassword" element={<ForgotPassword/>} />
     <Route path="/reset_password/:id/:token" element={<ResetPassword/>} />
     <Route element={<PrivatePages isStudent={true}/>}> 
     <Route path="/home" element={<HomePage/>} />    
     <Route path="/aboutus" element={<AboutUs/>} />
     <Route path="/contactus" element={<ContactUs/>} />
     <Route path="/findjobs" element={<FindJobs/>} />
     <Route path="/page" element={<Page/>} />     
     <Route path="/profile" element={<Profile/>} />
     <Route path="/editprofile/:id" element={<EditProfile />} />
     <Route path="/changePassword" element={<ChangePassword />} />

     </Route> 

      {/* RecruiterSide   */}     

       <Route path="/recruiterlogin" element={<RecruiterLogin />} />
       <Route path="/recruiterregister" element={<RecruiterRegister />} />  
       <Route path="/forgotpasswordrecruiter" element={<ForgotPasswordRecruiter/>} /> 
       <Route path="/reset_password-recruiter/:id/:token" element={<ResetPasswordRecruiter/>} />
       <Route element={<PrivatePages isStudent={false}/>}>
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
