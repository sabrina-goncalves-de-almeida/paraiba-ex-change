import React from 'react';
import './Favorites.css';
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { FaShoppingCart } from "react-icons/fa";
import Header from '../../components/Header/Header';
import Button from '../../components/Button/Button';
import { BUTTON_VARIANTS } from '../../components/Button/buttonConfig';
import { Link } from 'react-router-dom';
import FavoriteItem from '../../components/FavoriteItem/FavoriteItem';

const Favorites = () => {
  const { user, removeFromFavorites } = useContext(AuthContext);
  
  const favoriteItems = user?.favorites || [];

  if (!user) {
    return <h2>Por favor, faça login para ver sua lista de favoritos.</h2>;
  }
  return (
    <div className="fav-container">
      <Header />
      <main className="fav-content">
        <h1 className="main-title">Favoritos</h1>

        <div className="fav-grid">
          <div className="column-labels">
            <span className="label-produtos">Produtos</span>
            <span className="label-precos">Preços</span>
          </div>

          <div className="items-list">
            {favoriteItems.length > 0 ? (
              favoriteItems.map((product) => (
                <FavoriteItem 
                  key={product.id}
                  id={product.id} 
                  item={product.title} 
                  price={product.price} 
                  imageProduct={product.image}
                  onRemove={() => removeFromFavorites(product.id)}
                />
              ))
            ) : (
              <p>Você ainda não tem favoritos.</p>
            )}
          </div>
        </div>

        <Link to="/" className="link-formatation">
          <Button 
            variant={BUTTON_VARIANTS.ORANGE_ICON} 
            btnText={"Continuar comprando"}
            icon={FaShoppingCart}  
          />
        </Link>
      </main>
    </div>
  );
};

export default Favorites;
