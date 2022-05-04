import "./App.css";
import Loginform from "./components/Loginform";
import Register from "./components/Register";
//import Header from "./components/Header";
import DisplayCourse from "./components/DisplayCourse";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserProfile from "./components/UserProfile";
import Enrollment from "./components/Enrollment";
import DeleteEnrollment from "./components/DeleteEnrollment";
import Home from "./components/Home";
import LoggedIn from "./components/LoggedIn";


function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        {/* <Header /> */}
        <div>
          
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sign-in" element={<Loginform />} />
            <Route path="/sign-up" element={<Register />} />
            <Route path="/loggedIn" element={<LoggedIn />} />
            <Route path="/courses" element={<DisplayCourse />} />
            <Route path="/userprofile" element={<UserProfile />} />
            <Route path="/enroll" element={<Enrollment />} />
            <Route path="/delete" element={<DeleteEnrollment />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
