import Dashboard from "../Dashboard/Dashboard";
import Login from "../Login/Login";
import Progress from "../Progress/Progress";
import Signup from "../Signup/Signup";
import About from "../About/About";
import style from "./App.module.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import SharedRoute from "../SharedRoute/SharedRoute";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import { useEffect, useState } from "react";
import { TokenProvider } from "../../context/TokenContext";
import { ParentProvider } from "../../context/parentContext";
import Blog from "../Blog/Blog";
import ProgressCard from "../ProgressCard/ProgressCard";
import Meeting from "../../components/Meeting/Meeting";
import Appointment from "../Appointment/Appointment";

const App = () => {
  // const [token, setToken] = useState(localStorage.getItem("parent-token"));
  // const parentToken = localStorage.getItem("parent-token");

  return (
    <TokenProvider>
      <ParentProvider>
        <BrowserRouter>
          <Routes>
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<Signup />} />
            <Route path="/" element={<SharedRoute />}>
              <Route
                index
                element={
                  <ProtectedRoute>
                    <Dashboard />
                  </ProtectedRoute>
                }
              />
              <Route path="about" element={<About />} />
              <Route path="progress" element={<Progress />} />
              <Route path="meeting" element={<Appointment />} />
              <Route path="percent" element={<ProgressCard />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ParentProvider>
    </TokenProvider>
  );
};

export default App;
