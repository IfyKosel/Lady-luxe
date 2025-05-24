import React, { useContext } from "react";
import { ShopContext } from "./ShopContext";
import { useParams } from "react-router-dom";
import ProductPage from "./ProductPage/ProductPage";
import Navbar from "./Navbar/Navbar";
import PageBreadcrum from "./PageBreadcrum/PageBreadcrum";

function Product() {
  const { productId } = useParams();
  const { all_product, addToCart, cartItems, removeFromCart } =
    useContext(ShopContext);

  const product = all_product.find((e) => e.id === Number(productId));

  return (
    <div>
      <Navbar />
      <PageBreadcrum product={product} />
      <ProductPage
        product={product}
        all_product={all_product}
        addToCart={addToCart}
        cartItems={cartItems}
        removeFromCart={removeFromCart}
      />
    </div>
  );
}

export default Product;
