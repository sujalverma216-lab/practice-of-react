import { Routes,Route } from "react-router-dom";
import Header from "./Components/Header.jsx";
import Home from "./Components/Home.jsx";
import Courses from "./Components/Courses.jsx";
import About from "./Components/About.jsx";
import Contact from "./Components/Contact.jsx";
import Form from "./Components/Form.jsx";
import Login from "./Components/Login.jsx";
import Signup from "./Components/Signup.jsx";
import ForgetPassword from "./Components/ForgetPassword.jsx";
import CoursePAT from "./Components/CoursePAT.jsx";
import CourseCM from "./Components/CourseCM.jsx";
import CourseTA from "./Components/CourseTA.jsx";
import CourseRM from "./Components/CourseRM.jsx";
import CourseIT from "./Components/CourseIT.jsx";
import CourseTP from "./Components/CourseTP.jsx"; 
import Workspace from "./Components/Workspace.jsx"; 





function App() {
  return (
    <> 
      <Header/>

      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="courses" element={<Courses/>} />
        <Route path="about" element={<About/>} />
        <Route path="contact" element={<Contact/>} />
        <Route path="Form" element={<Form/>} />
        <Route path="Login" element={<Login/>} />
        <Route path="Signup" element={<Signup/>} />
        <Route path="ForgetPassword" element={<ForgetPassword/>} />
        <Route path="CoursePAT" element={<CoursePAT/>} />
        <Route path="CourseCM" element={<CourseCM/>} />
        <Route path="CourseTA" element={<CourseTA/>} />
        <Route path="CourseRM" element={<CourseRM/>} />
        <Route path="CourseIT" element={<CourseIT/>} />
        <Route path="CourseTP" element={<CourseTP/>} />
        <Route path="Workspace" element={<Workspace/>} />


        

      </Routes>
    </>
  );
}

export default App;
