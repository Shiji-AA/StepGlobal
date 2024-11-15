import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

// eslint-disable-next-line react/prop-types
function PrivatePages({ isStudent }) {
  const user = useSelector((state) => state.auth.userdata);
  const recruiter = useSelector((state) => state.recruiter.recruiterdata);

  if (isStudent) {
  
    if (user) {
      return <Outlet />;
    } else {
      return <Navigate to="/login" />;
    }
  } else {  

    if (recruiter) {
      return <Outlet />;
    } else {
      return <Navigate to="/recruiterLogin" />;
    }
  }
}

export default PrivatePages;
