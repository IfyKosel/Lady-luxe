import React, { useContext } from "react";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faHeart,
  faRotate,
} from "@fortawesome/free-solid-svg-icons";
import "./ItemNew.css";
import { ShopContext } from "../ShopContext";
import Quickview from "../Quickview/Quickview";

const ItemNew = (props) => {
  const { addToCart } = useContext(ShopContext);

  const Toolhover = ({ id, children, title }) => (
    <OverlayTrigger overlay={<Tooltip id={id}>{title}</Tooltip>}>
      <span>{children}</span>
    </OverlayTrigger>
  );

  return (
    <div className="new-product-grid">
      <div className="product-grid mb-3">
        <div className="image-grid">
          {/* the (``) used below in the Link component is known as template literal and not quotation mark
                    the Link is navigating to the id of whatever item was clicked */}
          <Link to={`/product/${props.id}`}>
            <img src={props.image} alt="bag" className="w-100 mb-1" />
          </Link>
          <div className="d-flex justify-content-between top-tag">
            <div className="new-tag">
              <span className="text-white">NEW</span>
            </div>
            <h6 className="sale-tag">ON SALE</h6>
          </div>
          <div className="image-icon-div">
            <Toolhover title="Add to Cart" id="t-1">
              <FontAwesomeIcon
                icon={faCartShopping}
                className="image-icon cart"
                onClick={() => addToCart(props.id)}
              />
            </Toolhover>
            <br />
            <Toolhover title="Wishlist" id="t-2">
              <FontAwesomeIcon icon={faHeart} className="image-icon wishlist" />
            </Toolhover>
            <br />
            <Toolhover title="Quick view" id="t-3">
              <span className="image-icon quickview">
                <Quickview product={props} />
              </span>
            </Toolhover>
            <br />
            <Toolhover title="compare" id="t-4">
              <FontAwesomeIcon icon={faRotate} className="image-icon compare" />
            </Toolhover>
          </div>
          <Link to="" className="image-name">
            {props.name}
          </Link>
          <div className="image-price">
            <span className="image-bold-text">${props.new_price}</span>
            <span className="image-cancel-text">${props.old_price}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemNew;
