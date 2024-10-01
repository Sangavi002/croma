import { Home } from "./Home";
import { Mobile } from "./mobile/mobile";
import { Login } from "./navbar/login";
import { Navbar } from "./navbar/Navbar"
import {Routes,Route} from "react-router-dom";
import "./App.css"

export const App = () => {
  return(
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/mobile" element={<Mobile />} />
    </Routes>
    </>
  )
}