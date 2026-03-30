import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useContext, useMemo } from "react";
import { AuthContext } from "../../context/AuthContext";
import Button from "../../components/Button/Button";
import { BUTTON_VARIANTS } from "../../components/Button/buttonConfig";
import { LISTINGS_MOCK } from '../../data/listings';
import './Info.css';

import {  FiMessageSquare } from 'react-icons/fi';

import Header from '../../components/Header/Header';
import ProductCarousel from '../../components/CarouselProduct/ProductCarousel';

const Info = ({ product }) => {
  const { addToCart, user } = useContext(AuthContext);
  const { id } = useParams();

  const currentProduct = useMemo(() => {
    return LISTINGS_MOCK.find(item => String(item.id) === String(id));
  }, [id]);

  if (!currentProduct) {
    return (
      <div className="info-container">
        <Header />
        <h2>Ops! Esse anúncio não foi encontrado.</h2>
      </div>
    );
  }

  const imovel = {
    id: id,
    images: [
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=600",
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=400",
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=600"
    ]
  };

  const handleAddClick = () => {
    if (!user) {
      alert("Você precisa estar logado para adicionar itens ao carrinho!");
      return;
    }

    addToCart(currentProduct);
    alert(`${currentProduct.title} adicionado ao carrinho!`);
  };
  return (
    <div className="info-container">
      <Header />
      {/* <header className="info-header">
        <div className="header-limit">
          <div className="logo-area">
            <img src={LogoPBX} alt="Logo PBX" />
          </div>

          <div className="search-box">
            <input type="text" placeholder="Buscar produtos, casas..." />
            <FiSearch className="search-btn-icon" />
          </div>

          <div className="nav-icons">
            <FiHeart className="nav-icon" />
            <FiShoppingCart className="nav-icon" />
            <div className="profile-avatar">
              <FiUser />
            </div>
          </div>
        </div>
      </header> */}

      <main className="info-content">
        <div className="property-grid">

          <div className="property-visual">
            <ProductCarousel product={currentProduct} />
            {/* <div className="main-image-wrapper">
              <img 
                src="https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=400" 
                alt="Apartamento" 
              />
              <button className="slide-arrow left"><FiChevronLeft /></button>
              <button className="slide-arrow right"><FiChevronRight /></button>
              <FiHeart className="floating-heart" />
            </div> */}

            <section className="description-area">
              <h2>{currentProduct.title}</h2>
              <p>
                {currentProduct.description}
              </p>
            </section>
          </div>

          <aside className="property-details">
            <div className="price-tag">
              <span className="symbol">R$</span>
              <span className="value">{currentProduct.price.toLocaleString('pt-BR')}</span>
            </div>
            <p className="category">{currentProduct.type === 'property' ? 'Aluguel' : 'Venda'}</p>
            
            <div className="contact-info">
              <p>Local: {currentProduct.local}</p>
              <p>E-mail: samuel21@hotmail.com</p>
              <p>Telefone/WhatsApp: (83) 91546-2356</p>
            </div>

            <Link to="/shopping-cart" className="link-formatation">
              <button className="btn-chat">
                <FiMessageSquare />
                Chat com o vendedor
              </button>
            </Link>
            <Button 
              variant={BUTTON_VARIANTS.ORANGE_ICON} 
              btnText="Adicionar ao Carrinho" 
              onClick={handleAddClick} 
            />
          </aside>

        </div>
      </main>
    </div>
  );
};

export default Info;