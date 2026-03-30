import { useState, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { Link } from "react-router-dom";
import { BsArrowReturnLeft } from "react-icons/bs";
import { FaShoppingCart, FaTrashAlt } from "react-icons/fa";
import "./FavoriteItem.css";

function FavoriteItem({ item, price, imageProduct, onRemove, id }) {
  const [active, setActive] = useState(false);
  
  const { addToCart } = useContext(AuthContext);

  const formatedPrice = price.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  const handleAddToCart = (e) => {
  e.stopPropagation();
  
  const productToAdd = {
    id: id,            
    title: item,       
    price: price,
    image: imageProduct,
    amount: 1
  };

    addToCart(productToAdd);
    alert(`${item} adicionado ao carrinho!`);
  };

  return (
    <div onClick={() => setActive(!active)} className="button-container-item" role="button" tabIndex="0">
      <div className="container-item">
        <img className="img-product" src={imageProduct} alt={item} />

        <div className="container-info-buy">
          <span className="span-name-item">{item}</span>
          <div className="container-price-amount">
            <span className="span-name-item">{formatedPrice}</span>
          </div>
        </div>

        {active && (
          <div className="container-buttons">
            <button className="button-format-basic button-cart" onClick={handleAddToCart}>
              <FaShoppingCart />
            </button>
            <button className="button-format-basic button-trash" onClick={(e) =>{ e.stopPropagation(); onRemove()}}>
              <FaTrashAlt />
            </button>
            <Link to={`/info/${id}`} onClick={(e) => e.stopPropagation()}>
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

export default FavoriteItem;
