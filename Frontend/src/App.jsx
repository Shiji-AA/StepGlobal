import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {Toaster} from 'react-hot-toast';

//User side
import PrivatePages from "./Components/PrivatePages/PrivatePages";
import Register from "./Components/Users/Register/Register";
import LandingPage from "./Pages/Users/LandingPage/LandingPage";
import Login from "./Components/Users/Login/Login";
import HomePage from "./Pages/Users/HomePage/HomePage";
import ContactUs from "./Pages/Users/ContactUs/ContactUs";
import FindJobs from "./Pages/Users/FindJobs/FindJobs";
import Page from "./Pages/Users/Page/Page";
import ForgotPassword from "./Components/Users/Login/ForgotPassword";
import ResetPassword from "./Components/Users/Login/ResetPassword";
import Profile from "./Components/Users/Profile/Profile";
import EditProfile from "./Components/Users/Profile/Editprofile";
import ChangePassword from "./Components/Users/Profile/ChangePassword";
import AppliedJOBs from "./Pages/Users/AppliedJobs/AppliedJOBs";
import SavedJOBsPage from "./Pages/Users/SavedJobs/SavedJOBsPage";
import AboutUs from "./Components/Users/AboutUs/AboutUs";

//Recruiter side

import RecruiterRegister from "./Components/Recruiter/RecruiterRegister/RecruiterRegister";
import RecruiterLogin from "./Components/Recruiter/RecruiterLogin/RecruiterLogin";
import RecruiterDashBoard from "./Pages/Recruiter/RecruiterDashBoard/RecruiterDashBoard";
import ForgotPasswordRecruiter from "./Components/Recruiter/RecruiterLogin/ForgotPasswordRecruiter";
import ResetPasswordRecruiter from "./Components/Recruiter/RecruiterLogin/ResetPasswordRecruiter";
import PostJobs from "./Components/Recruiter/PostJobs/PostJobs";
import RecruiterProfile from "./Components/Recruiter/RecruitrProfile/RecruiterProfile";
import RecruiterEditProfile from "./Components/Recruiter/RecruitrProfile/RecruiterEditProfile.";
import ChangePasswordRecruiter from "./Components/Recruiter/RecruitrProfile/ChangePasswordRecruiter";

//Admin side

import AdminLogin from "./Components/Admin/AdminLogin/AdminLogin";
import AdminDashboard from "./Pages/Admin/AdminDashboard";
import PrivatePageAdmin from "./Components/PrivatePages/PrivatePageAdmin";
import UsersTable from "./Components/Admin/UsersList/UsersTable";
import RecruitersTable from "./Components/Admin/RecruitersList/RecruitersTable";
import Next from "./Components/Recruiter/PostJobs/Next";
import JobListingRecruiter from "./Components/Recruiter/PostJobs/JobListingRecruiter";
import EditJob from "./Components/Recruiter/PostJobs/EditJob";
import JobPostsList from "./Components/Admin/JobPostsList/JobPostsList";
import CategoryList from "./Components/Admin/CategoryList/CategoryList";
import AddCategory from "./Components/Admin/CategoryList/AddCategory";
import EditCategory from "./Components/Admin/CategoryList/EditCategory";
import ChangePasswordAdmin from "./Components/Admin/ChangePasswordAdmin/ChangePasswordAdmin";
import ApplicantsList from "./Components/Recruiter/ApplicantsList/ApplicantsList";
import FindJobsByCategory from "./Pages/Users/FindJobs/FindJobsByCategory";



function App() {
  return (
    <Router>
      <div className="min-h-screen overflow-x-hidden bg-gray-100">
      <Toaster position="top-right"/>
     <Routes>   
      {/* UserSide   */}
     <Route path="/" element={<LandingPage/>} />
     <Route path="/register" element={<Register/>} />
     <Route path="/login" element={<Login/>} />
     <Route path="/forgotpassword" element={<ForgotPassword/>} />
     <Route path="/reset_password/:id/:token" element={<ResetPassword/>} />
     <Route path="/contactus" element={<ContactUs/>} />
     <Route path="/aboutus" element={<AboutUs/>} />
     <Route path="/findjobs" element={<FindJobs/>} />  
     <Route path="/findjobsbycategory/:id" element={<FindJobsByCategory />} />


     <Route element={<PrivatePages isStudent={true}/>}> 

     <Route path="/home" element={<HomePage/>} />     
     <Route path="/page" element={<Page/>} />     
     <Route path="/profile" element={<Profile/>} />
     <Route path="/editprofile/:id" element={<EditProfile />} />
     <Route path="/changePassword" element={<ChangePassword />} />
     <Route path="/appliedJobs" element={<AppliedJOBs/>} />     
     <Route path="/savedJobs" element={<SavedJOBsPage/>} />
     </Route> 

      {/* RecruiterSide   */}     

       <Route path="/recruiterlogin" element={<RecruiterLogin />} />
       <Route path="/recruiterregister" element={<RecruiterRegister />} />  
       <Route path="/forgotpasswordrecruiter" element={<ForgotPasswordRecruiter/>} /> 
       <Route path="/reset_password-recruiter/:id/:token" element={<ResetPasswordRecruiter/>} />
       <Route element={<PrivatePages isStudent={false}/>}>
       <Route path="/recruiterdashboard" element={<RecruiterDashBoard/>} />
       <Route path="/recruiterprofile" element={<RecruiterProfile/>} />
       <Route path="/recruitereditprofile/:id" element={<RecruiterEditProfile/>} />
       <Route path="/recruiterchangepassword" element={<ChangePasswordRecruiter/>} />   
       <Route path="/postjobs" element={<PostJobs/>} />    
       <Route path="/postjobs/next" element={<Next/>} />  
       <Route path="/viewjobs" element={<JobListingRecruiter/>} /> 
       <Route path="/editjob/:id" element={<EditJob />} /> 
       <Route path="/applicantsList" element={<ApplicantsList />} /> 
       
      
        
       </Route>      

      {/* AdminSide   */}  
      <Route path="/admin" element={<AdminLogin />} />   
      <Route element={<PrivatePageAdmin/>}> 
      <Route path="/admindashboard" element={<AdminDashboard />} />
      <Route path="/users" element={<UsersTable />} />
      <Route path="/recruiters" element={<RecruitersTable />} />
      <Route path="/getallcategory" element={< CategoryList/>} />
      <Route path="/adminjoblist" element={<JobPostsList />} />
      <Route path="/addcategory" element={<AddCategory/>} />
      <Route path="/editcategory/:id" element={<EditCategory/>} />
      <Route path="/adminsettings" element={<ChangePasswordAdmin/>} />  

      </Route>          
      </Routes>  

      </div>
       
      </Router>
  )
}
export default App
