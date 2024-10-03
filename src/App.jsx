import { Home } from "./Home";
import { Mobile } from "./mobile/mobile";
import { ProductDetail } from "./mobile/productDetail";
import { Login } from "./navbar/login";
import { Navbar } from "./navbar/Navbar"
import {Routes,Route} from "react-router-dom";
import "./App.css"
import { Cart } from "./cart/cart";
import { Footer } from "./Footer";

export const App = () => {
  return(
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/mobile" element={<Mobile />} />
      <Route path="/mobile/:id" element={<ProductDetail />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
    <Footer />
    </>
  )
}