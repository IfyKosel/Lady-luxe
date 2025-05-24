import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import TopSection from "./Components/TopSection/TopSection";
import Home from "./Components/Home";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
import Cart from "./Components/Cart/Cart";
import NewProduct from "./Components/NewProduct";
import BestSeller from "./Components/BestSeller/BestSeller";
import Footer from "./Components/Footer/Footer";
import ShopCategory from "./Components/ShopCategory";
import Product from "./Components/Product";
import Checkout from "./Components/Checkout/Checkout";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <TopSection />
        <ToastContainer
          position="top-right"
          autoClose={4000}
          newestOnTop
          closeOnClick
          pauseOnHover
          draggable
        />
        <Routes>
          <Route path="/" element={<Home />}>
            <Route path="/" element={<NewProduct />} />
            {/* <Route path="/featuredproducts" element={<FeaturedProduct />} /> */}
            <Route
              path="/featuredproducts"
              element={<ShopCategory category="featuredproduct" />}
            />
            <Route path="/bestsellers" element={<BestSeller />} />
          </Route>
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/product" element={<Product />}>
            <Route path=":productId" element={<Product />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
