import React, { createContext, useState } from "react";
import all_product from "../assets/allproducts";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  for (let index = 0; index < all_product.length + 1; index++) {
    cart[index] = 0;
  }
  return cart;
};

const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());

  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    toast.success("item added to cart");
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: Math.max(1, prev[itemId] - 1),
    }));
    toast.warning("Item Qty decreased from cart");
  };

  const deleteCartItem = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: 0 }));
    toast.error("Item removed from cart");
  };

  const grandCartTotal = () => {
    let total = 0;
    for (const itemId in cartItems) {
      const product = all_product.find((p) => p.id === Number(itemId));
      if (product && cartItems[itemId] > 0) {
        total += product.new_price * cartItems[itemId];
      }
    }
    return total;
  };

  const eachCartItem = () => {
    let count = 0;
    for (const itemId in cartItems) {
      if (cartItems[itemId] > 0) {
        count += 1;
      }
    }
    return count;
  };

  const totalCartItems = () => {
    let totalItems = 0;
    for (const itemId in cartItems) {
      if (cartItems[itemId] > 0) {
        totalItems += cartItems[itemId];
      }
    }
    return totalItems;
  };

  const contextValue = {
    all_product,
    cartItems,
    setCartItems,
    addToCart,
    removeFromCart,
    deleteCartItem,
    grandCartTotal,
    eachCartItem,
    totalCartItems,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
