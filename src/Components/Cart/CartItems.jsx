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

const CartItems = () => {
  const [inputValues, setInputValues] = useState({});
  const {
    all_product,
    cartItems,
    setCartItems,
    removeFromCart,
    addToCart,
    deleteCartItem,
    grandCartTotal,
  } = useContext(ShopContext);

  const handleInputChange = (e, itemId) => {
    const value = e.target.value;
    if (/^\d*$/.test(value)) {
      setInputValues((prev) => ({
        ...prev,
        [itemId]: value,
      }));
    }
  };

  const handleInputBlur = (e, itemId) => {
    const value = parseInt(e.target.value);
    const validValue = isNaN(value) || value < 1 ? 1 : value;

    setCartItems((prev) => ({
      ...prev,
      [itemId]: validValue,
    }));

    setInputValues((prev) => ({
      ...prev,
      [itemId]: validValue,
    }));
  };

  const handleInputKeyDown = (e, id) => {
    if (e.key === "Enter") {
      e.target.blur();
    }
  };

  useEffect(() => {
    // sync input values when cartItems change (e.g. after addToCart)
    setInputValues(cartItems);
  }, [cartItems]);

  return (
    <div className="w-100">
      <table className="table-item">
        <thead className="text-center text-black border-bottom">
          <tr className="">
            <th scope="col" className="py-2">
              IMAGE
            </th>
            <th scope="col" className="product-head">
              PRODUCT NAME
            </th>
            <th scope="col" className="price-head">
              PRICE
            </th>
            <th scope="col" className="quantity-head">
              QUANTITY
            </th>
            <th scope="col" className="action-head">
              ACTION
            </th>
            <th scope="col" className="total-head">
              TOTAL
            </th>
          </tr>
        </thead>
        <tbody className="text-black">
          {all_product.map((item) => {
            if (cartItems[item.id] > 0) {
              return (
                <tr
                  key={item.id}
                  className="text-center text-black border-bottom"
                >
                  <td scope="row" className="w-25 w-sm-auto">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="image-col"
                    />
                  </td>
                  <td className="product-col">{item.name}</td>
                  <td className="price-col">${item.new_price}</td>
                  <td className="quantity-col">
                    <div className="d-flex justify-content-center">
                      <div className="quantity-div">
                        <div className="d-flex align-items-center justify-content-evenly border h-100">
                          <span
                            onClick={() => removeFromCart(item.id)}
                            style={{ cursor: "pointer" }}
                            className="d-sm-block d-none"
                          >
                            <FontAwesomeIcon icon={faAngleLeft} size="xs" />
                          </span>
                          <span className="bg-secondary-subtle h-100 px-4 d-flex align-items-center">
                            {cartItems[item.id]}
                          </span>
                          <span
                            onClick={() => addToCart(item.id)}
                            style={{ cursor: "pointer" }}
                            className="d-sm-block d-none"
                          >
                            <FontAwesomeIcon icon={faAngleRight} size="xs" />
                          </span>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="action-col">
                    <button
                      type="button"
                      onClick={() => deleteCartItem(item.id)}
                      className="bg-transparent text-secondary border-0"
                    >
                      <FontAwesomeIcon icon={faXmark} />
                    </button>
                  </td>
                  <td className="total-col">
                    ${cartItems[item.id] * item.new_price}
                  </td>

                  <td className="d-md-none h-100">
                    <div className="d-flex flex-column">
                      <span className="text-secondary">{item.name}</span>
                      <div className="d-flex justify-content-center align-items-center mt-2">
                        <span className="w-25">
                          <input
                            type="text"
                            min="1"
                            placeholder="Qty"
                            value={
                              inputValues[item.id] ?? cartItems[item.id] ?? 1
                            }
                            onChange={(e) => handleInputChange(e, item.id)}
                            onBlur={(e) => handleInputBlur(e, item.id)}
                            className="form-control rounded-0 mx-auto text-center border px-1 py-1 text-secondary"
                            style={{ width: "45px" }}
                          />
                        </span>
                        <span className="pe-4 total-sm">
                          ${cartItems[item.id] * item.new_price}
                        </span>
                        <button
                          type="button"
                          onClick={() => deleteCartItem(item.id)}
                          className="bg-transparent text-secondary p-0"
                          style={{ cursor: "pointer" }}
                        >
                          <FontAwesomeIcon icon={faXmark} />
                        </button>
                      </div>
                    </div>
                  </td>
                </tr>
              );
            }
          })}
        </tbody>
      </table>
      <div className="d-flex justify-content-end w-100 py-4 mr-3">
        <div className="d-flex align-items-center">
          <h5 className="pe-5">Total Price:</h5>
          <h3>${grandCartTotal()}</h3>
        </div>
      </div>
      <div className="d-flex w-100 justify-content-between">
        <Link>
          <button type="button" className="down-buttons">
            CONTIUNE SHOPPING
          </button>
        </Link>
        <Link to="/checkout">
          <button type="button" className="down-buttons">
            CHECK OUT
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CartItems;
