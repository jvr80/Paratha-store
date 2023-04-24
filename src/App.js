import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import ProductCard from "./components/ProductCard";
import CartPage from "./components/CartPage";



function App() {
  return (
    <BrowserRouter>
   <>
   <Navbar/>
   <Routes>
   <Route path="/" element={<ProductCard/>} />
   <Route path="/cart" element={<CartPage/>} />
   </Routes>
   
  

   </>
   </BrowserRouter>
  );
}

export default App;
