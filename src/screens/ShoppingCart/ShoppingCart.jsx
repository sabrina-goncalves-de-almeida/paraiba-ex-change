import { useContext, useMemo } from "react";
import { AuthContext } from "../../context/AuthContext";
import { Link } from "react-router-dom";
import Button from "../../components/Button/Button";
import { BUTTON_VARIANTS } from "../../components/Button/buttonConfig";
import Header from "../../components/Header/Header";
import ShoppingCartItem from "../../components/ShoppingCartItem/ShoppingCartItem";
import { FaShoppingCart } from "react-icons/fa";
import "./ShoppingCart.css";

function ShoppingCart() {
  const { user, removeFromCart, decreaseQuantity } = useContext(AuthContext);

  const cartItems = user?.cart || [];

  const totalValue = useMemo(() => {
    return cartItems.reduce((acc, product) => acc + (product.price * product.amount), 0);
  }, [cartItems]);

  const totalPriceFormatted = totalValue.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  if (!user) {
    return <h2>Por favor, faça login para ver seu carrinho.</h2>;
  }
  return (
    <div className="container-shopping-cart-and-header">
      <Header />
      <div className="container-shopping-cart">
        <h1>Carrinho de {user.name}</h1>
        
        <div className="container-itens-shopping-cart">
          {cartItems.length > 0 ? (
            cartItems.map((product, index) => (
              <ShoppingCartItem 
                key={`${product.id}-${index}`}
                id={product.id} 
                item={product.title} 
                price={product.price} 
                amount={product.amount} 
                imageProduct={product.image}
                onRemove={() => removeFromCart(product.id)}
                onDecrease={() => decreaseQuantity(product.id)}
              />
            ))
          ) : (
            <p>Seu carrinho está vazio.</p>
          )}
        </div>

        <div className="container-titles-table-prices">
          <h2 className="container-titles-table-text">Total</h2>
          <h2 className="container-titles-table-total">{totalPriceFormatted}</h2>
        </div>
        
        <div className="container-buttons-buying">
          <Link to="/checkout">
            <Button variant={BUTTON_VARIANTS.WHITE} btnText="Finalizar compra" />
          </Link>
          
          <Link to="/" className="link-formatation">
            <Button 
              variant={BUTTON_VARIANTS.ORANGE_ICON} 
              btnText="Continuar comprando" 
              icon={FaShoppingCart} 
            />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ShoppingCart;
