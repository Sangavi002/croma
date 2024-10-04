import { createRoot } from 'react-dom/client'
import {App} from './App.jsx'
import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter } from 'react-router-dom'
import { CartProvider } from "./cart/CartContext.jsx";

createRoot(document.getElementById('root')).render(
  <ChakraProvider>
    <CartProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
   </CartProvider>
  </ChakraProvider>,
)
