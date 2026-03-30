import { useState } from "react";
import { Link } from "react-router-dom";
import { BsArrowReturnLeft } from "react-icons/bs";
import { FaMinus, FaTrashAlt } from "react-icons/fa";
import "./ShoppingCartItem.css";

function ShoppingCartItem({ item, price, amount, imageProduct }) {
  const [active, setActive] = useState(true);

  const totalPrice = (price * amount).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  const formattedAmount = String(amount).padStart(2, "0");

  return (
    <div onClick={() => setActive(!active)} className="button-container-item" role="button" 
      tabIndex="0">
      <div className="container-item">
        <img className="img-product" src={imageProduct} alt={item} />

        <div className="container-info-buy">
          <span className="span-name-item">{item}</span>
          <div className="container-price-amount">
            <span className="span-name-item">R${price}</span>
            <span className="span-amount-item">x {formattedAmount}</span>
          </div>
        </div>

        {active ? (
          <div>
            <span className="span-total-item">{totalPrice}</span>
          </div>
        ) : (
          <div className="container-buttons">
            <button className="button-format-basic button-minus" onClick={(e) => e.stopPropagation()}>
              <FaMinus />
            </button>
            <button className="button-format-basic button-trash" onClick={(e) => e.stopPropagation()}>
              <FaTrashAlt />
            </button>
            <Link to="/" onClick={(e) => e.stopPropagation()}>
              <div className="button-format-basic button-back">
                <BsArrowReturnLeft />
              </div>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default ShoppingCartItem;
