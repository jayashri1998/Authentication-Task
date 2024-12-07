import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from "./components/Login"
import Registration from "./components/Registration"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css";
import Profile from "./components/Profile";

function App() {
  return (
   <BrowserRouter>
   <Routes>
   <Route path="/profile" element={<Profile/>}/>
   <Route path="/" element={<Login/>}/>
   <Route path="/sign_up" element={<Registration/>}/>
   </Routes>
   <ToastContainer />
   </BrowserRouter>
  )
}

export default App
