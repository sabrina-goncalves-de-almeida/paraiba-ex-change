import "./Card.css";
import { Link } from 'react-router-dom';
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { FiHeart } from "react-icons/fi";
import { FaHeart } from "react-icons/fa";
import Button from "../Button/Button";

function Card({ 
    id,
    name, 
    price, 
    address, 
    imgBaseUrl,
    type
}) {
    const { user, addToFavorites, removeFromFavorites } = useContext(AuthContext);
    
    const isFavorite = user?.favorites?.some(fav => fav.id === id);

    const handleFavoriteClick = () => {
        if (!user) {
            alert("Faça login para favoritar!");
            return;
        }

        if (isFavorite) {
            removeFromFavorites(id);
        } else {
            addToFavorites({ id, title: name, price, image: `${imgBaseUrl}${id}.png` });
        }
    };
    const formattedPrice = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    }).format(price);

    const imagePath = `${imgBaseUrl}${id}.png`;

    return (
        <article id={`card-${id}`} className="container-card">
            <div className="container-img">
                <button 
                    className="container-heart" 
                    aria-label="Adicionar aos favoritos" 
                    onClick={handleFavoriteClick}
                    style={{ cursor: 'pointer' }}
                >
                    {isFavorite ? 
                        <FaHeart className="heart-img heart-full"/> : 
                        <FiHeart aria-hidden="true" className="heart-img"/>
                    }
                </button>
                <img className="image-product" src={imagePath} alt={name} />
            </div>

            <div className="container-info-product">
                <h3 className="name-product">{name}</h3>
                <p className="price-product">
                    {formattedPrice}
                    {type === 'property' && <span className="unit"> /mês</span>}
                </p>
                <p className="address-seller">{address}</p>
            </div>
            
            <div className="container-button">
                <Link to={`/info/${id}`} className="link-details">
                    <Button 
                        btnText="Saiba mais"
                        variant="Orange"
                    />
                </Link>
            </div>
        </article>
    );
}

export default Card;
