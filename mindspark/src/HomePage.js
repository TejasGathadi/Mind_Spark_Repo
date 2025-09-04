import Header from "./components/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import ContactUs from "./components/ContactUs";
import "./index.css";
import ProgressTrackingLogin from "./components/ProgressTrackingLogin";
import ProgressTrackingMainPage from "./components/ProgressTrackingMainPage";
import AddSchool from "./components/AddSchool";
import AllSchools from "./components/AllSchools";
import EditSchool from "./components/EditSchool";
import AllSchoolsForParents from "./components/AllSchoolsForParents";
import StudentsBySchool from "./components/StudentsBySchool";
import AddStudent from "./components/AddStudent";
import AllStudentsAdmin from "./components/AllStudentsAdmin";
import EditStudentAdmin from "./components/EditStudentAdmin";
import TempSchoolPage from "./components/TempSchoolPage";
import Careers from "./components/Careers";

export default function HomePage() {
  return (
    <>
      <BrowserRouter>
        <div className="app-container">
          <ContactUs />
          <Header />
          <Routes>
            <Route element={<LandingPage />} path="/" />
            <Route element={<AddSchool />} path="/add-school" />
            <Route element={<AllSchools />} path="/all-schools" />
            <Route element={<Careers />} path="/careers" />
            <Route element={<AddStudent />} path="/add-student/:id" />
            <Route element={<TempSchoolPage />} path="/temp-school" />
            <Route
              element={<EditStudentAdmin />}
              path="/edit-student/:schoolId/:studentId"
            />
            <Route
              element={<AllStudentsAdmin />}
              path="/all-students-admin/:id"
            />
            <Route
              element={<StudentsBySchool />}
              path="/student-by-school/:schoolId"
            />
            <Route
              element={<AllSchoolsForParents />}
              path="/all-schools-parents"
            />
            <Route element={<EditSchool />} path="/edit-school/:id" />
            <Route
              element={<ProgressTrackingMainPage />}
              path="/progress-tracking-main"
            />
            <Route
              element={<ProgressTrackingLogin />}
              path="/progress-tracking-login"
            />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}
