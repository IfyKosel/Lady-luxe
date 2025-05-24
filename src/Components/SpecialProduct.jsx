import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductCategory from "./ProductCategory";

function SpecialProduct() {
    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path="/newproducts"
                    element={<ProductCategory category="newproduct" />}
                />
                <Route
                    path="/featuredproducts"
                    element={<ProductCategory category="featuredproduct" />}
                />
                <Route
                    path="/bestsellers"
                    element={<ProductCategory category="bestseller" />}
                />
            </Routes>
        </BrowserRouter>
    );
}

export default SpecialProduct;
