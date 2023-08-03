import { Routes ,Route} from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Dashboard from "./pages/Dashboard";
import NoPage from "./pages/NoPage";
import { useState } from "react";
import PrivateRoute from "./components/PrivateRoute";
import ContactUs from "./pages/Contact";
import About from './pages/About';

function App() {
  const[isLoggedIn,setIsLoggedIn]=useState(false); 

  return (
    <div className="w-full min-h-screen bg-slate-900  flex flex-col  ">
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />

      <Routes>
        <Route path="/" element={ 
        <PrivateRoute isLoggedIn={isLoggedIn} >
             <Home/>
          </PrivateRoute>} />

        <Route path="/contactUs" element={
        <PrivateRoute isLoggedIn={isLoggedIn} >
             <ContactUs/>
          </PrivateRoute>} />

        <Route path="/about" element={ 
        <PrivateRoute isLoggedIn={isLoggedIn} >
             <About/>
          </PrivateRoute>} />

        <Route path="/login"  element={<Login setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/signup"  element={<SignUp setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/dashboard"  element={
          <PrivateRoute isLoggedIn={isLoggedIn} >
             <Dashboard/>
          </PrivateRoute>
        } />
        <Route path="*" element={<NoPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
