import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";
import ShopContextProvider from "./Components/ShopContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
    <ShopContextProvider>
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </ShopContextProvider>
);
