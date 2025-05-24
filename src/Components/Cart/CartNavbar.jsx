import React, { useContext, useEffect, useState } from "react";
import "./Cart.css";
import { ShopContext } from "../ShopContext";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faXmark,
  faAngleLeft,
  faAngleRight,
} from "@fortawesome/free-solid-svg-icons";

const CartNavbar = () => {
  const {
    all_product,
    cartItems,
    deleteCartItem,
    grandCartTotal,
    eachCartItem,
  } = useContext(ShopContext);

  return (
    <div className="">
      {eachCartItem() === 0 ? (
        <p className="mb-0">Your Cart is currently empty</p>
      ) : (
        <div>
          <table className="table-item border-bottom">
            <tbody className="text-black">
              {all_product.map((item) => {
                if (cartItems[item.id] > 0) {
                  return (
                    <tr key={item.id} className="text-center text-black">
                      <td scope="row" className="">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="image-col"
                        />
                      </td>
                      <td className="">
                        <div className="d-flex flex-column text-start text-secondary">
                          <span className="text-black">{item.name}</span>
                          <div className="d-flex align-items-center">
                            <span className="">
                              {cartItems[item.id]} X ${item.new_price}
                            </span>
                          </div>
                        </div>
                      </td>
                      <td className="d-flex justify-content-end">
                        <button
                          type="button"
                          onClick={() => deleteCartItem(item.id)}
                          className="bg-transparent text-secondary p-0"
                        >
                          <FontAwesomeIcon icon={faXmark} size="sm" />
                        </button>
                      </td>
                    </tr>
                  );
                }
              })}
            </tbody>
          </table>
          <div className="d-flex justify-content-between py-2 text-secondary border-bottom">
            <p className="mb-0">Subtotal:</p>
            <p className="mb-0">${grandCartTotal()}</p>
          </div>
          <div className="d-flex fw-semibold justify-content-between pt-2">
            <Link to="/cart" className="">
              View Cart
            </Link>
            <Link to="/checkout" className="">
              Check Out
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartNavbar;
