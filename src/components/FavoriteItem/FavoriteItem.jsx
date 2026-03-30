import { useState, useContext } from "react"; // 1. Importe o useContext
import { AuthContext } from "../../context/AuthContext"; // 2. Importe o seu contexto
import { Link } from "react-router-dom";
import { BsArrowReturnLeft } from "react-icons/bs";
import { FaMinus, FaShoppingCart, FaTrashAlt } from "react-icons/fa";
import "./FavoriteItem.css";

// Adicione 'title' e 'image' às props se elas não estiverem vindo no objeto 'item'
function FavoriteItem({ item, price, amount, imageProduct, onRemove, id }) {
  const [active, setActive] = useState(true);
  
  // 3. Acesse a função addToCart do contexto
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
    alert(`${item} adicionado ao carrinho!`); // Opcional: apenas para feedback
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
            {/* Opção A: Apenas adiciona ao carrinho sem sair da página */}
            <button className="button-format-basic button-cart" onClick={handleAddToCart}>
              <FaShoppingCart />
            </button>

            {/* Opção B: Se quiser que ele adicione e JÁ VÁ para a tela do carrinho:
            <Link to="/shopping-cart" onClick={handleAddToCart}>
              <div className="button-format-basic button-cart">
                <FaShoppingCart />
              </div>
            </Link> 
            */}

            <button className="button-format-basic button-minus" onClick={(e) => e.stopPropagation()}>
              <FaMinus />
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
