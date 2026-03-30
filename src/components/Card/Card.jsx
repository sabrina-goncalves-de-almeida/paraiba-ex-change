import "./Card.css";
import { Link } from 'react-router-dom';
import { FiHeart } from "react-icons/fi";
import Button from "../Button/Button";

function Card({ 
    id,
    name, 
    price, 
    address, 
    imgBaseUrl,
    type
}) {
    const formattedPrice = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    }).format(price);

    const imagePath = `${imgBaseUrl}${id}.png`;

    return (
        <article id={`card-${id}`} className="container-card">
            <div className="container-img">
                <button className="container-heart" aria-label="Adicionar aos favoritos">
                    <FiHeart aria-hidden="true" className="heart-img"/>
                </button>
                <img className="image-product" src={imagePath} alt={`Foto do produto ${name}`} />
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