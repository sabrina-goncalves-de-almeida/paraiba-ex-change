import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useContext, useMemo } from "react";
import { AuthContext } from "../../context/AuthContext";
import Button from "../../components/Button/Button";
import { BUTTON_VARIANTS } from "../../components/Button/buttonConfig";
import { LISTINGS_MOCK } from '../../data/listings';
import './Info.css';

import {  FiMessageSquare } from 'react-icons/fi';
import { FaShoppingCart } from "react-icons/fa";

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

      <main className="info-content">
        <div className="property-grid">

          <div className="property-visual">
            <ProductCarousel 
              id={currentProduct.id}
              name={currentProduct.name}
              price={currentProduct.price}
              product={currentProduct}
            />
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

            <Link to="/" className="link-formatation">
              <Button 
                variant={BUTTON_VARIANTS.ORANGE_ICON} 
                btnText="Chat com o vendedor" 
                icon={FiMessageSquare} 
              />
            </Link>
            <Button 
              variant={BUTTON_VARIANTS.ORANGE_ICON} 
              btnText="Adicionar ao Carrinho" 
              onClick={handleAddClick} 
              icon={FaShoppingCart}
            />
          </aside>

        </div>
      </main>
    </div>
  );
};

export default Info;