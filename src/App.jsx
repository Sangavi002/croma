import { Home } from "./Home";
import { Product } from "./product/product";
import { ProductDetail } from "./product/productDetail";
import { Login } from "./navbar/login";
import { Navbar } from "./navbar/Navbar"
import {Routes,Route} from "react-router-dom";
import "./App.css"
import { Cart } from "./cart/cart";
import { Footer } from "./Footer";
import { CheckOut } from "./CheckOut";
import {PrivateRoute} from "./PrivateRoute"
import { useDisclosure } from "@chakra-ui/react";

export const App = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return(
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/:item" element={<Product />} />
      <Route path="/:item/:id" element={<ProductDetail />} />
      <Route path="/cart" element={<Cart onOpen={onOpen}/>} />
      <Route path="/checkout" element={<PrivateRoute><CheckOut /></PrivateRoute>} />
    </Routes>
    <Footer />
    <Login isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
    </>
  )
}