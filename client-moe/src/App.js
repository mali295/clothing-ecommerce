import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import Checkout from "./scenes/home/checkout/Checkout";
import Confirmation from "./scenes/home/checkout/Confirmation";
import CartMenu from "./scenes/home/global/CartMenu";
import Navbar from "./scenes/home/global/Navbar";
import Home from "./scenes/home/Home"
import ItemDetails from "./scenes/home/itemDetails/ItemDetails";
import Footer from "./scenes/home/global/Footer"

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0,0);
  }, [pathname])

  return null;
}


function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="item/:itemId" element={<ItemDetails />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="checkout/success" element={<Confirmation />} />
        </Routes>
        <CartMenu />
        <Footer />
      </BrowserRouter>

    </div>
  );
}

export default App;
