import { Link } from "react-router-dom";
import Button from "../../components/Button/Button";
import { BUTTON_VARIANTS } from "../../components/Button/buttonConfig";
import Header from "../../components/Header/Header";
import ShoppingCartItem from "../../components/ShoppingCartItem/ShoppingCartItem";
import cart from "../../assets/shopping-cart/shopping-cart-white.png";
import "./ShoppingCart.css";

const productsData = [
    { id: 1, image: 'https://images.unsplash.com/photo-1671438118097-479e63198629?q=80&w=877&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', title: 'Camisa Polo - Cores', price: 50.00, local: 'Local - PB', amount: 2 },
    { id: 2, image: 'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=400', title: 'Camiseta V - Cores', price: 25.00, local: 'Local - PB', amount: 2 },
    { id: 3, image: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=400', title: 'Calça Jeans', price: 100.00, local: 'Local - PB', amount: 2 },
    { id: 4, image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', title: 'Casa - 150m²', price: 4750.00, local: 'Local - PB', amount: 2 },
    { id: 5, image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=400', title: 'Apartamento no centro - 70m²', price: 1999.00, local: 'Local - PB', amount: 2 },
    { id: 6, image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400', title: 'Casa com piscina - 270m²', price: 7000.00, local: 'Local - PB', amount: 2 },
];

function ShoppingCart(){
    let count = 0;
    
    productsData.map((product) => {
        count += product.price*product.amount;
    });

    const totalPriceFormated = (count).toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
    });

    return(
        <div className={"container-shopping-cart-and-header"}>
            <Header />
            <div className={"container-shopping-cart"}>
                <h1>Carrinho de Compras</h1>
                <div className={"container-titles-table-prices"}>
                    <h2>Produtos</h2>
                    <h2>Preços</h2>
                </div>
                <div  className={"container-itens-shopping-cart"}>
                    {productsData.map((product) => (
                        <ShoppingCartItem 
                            key={product.id} 
                            item={product.title} 
                            price={product.price} 
                            amount={product.amount} 
                            imageProduct={product.image}
                        />
                    ))}
                </div>
                <div className={"container-titles-table-prices"}>
                    <h2 className={"container-titles-table-text"}>Total</h2>
                    <h2 className={"container-titles-table-total"}>{totalPriceFormated}</h2>
                </div>
                <div className={"container-buttons-buying"}>
                    <Button variant={BUTTON_VARIANTS.WHITE} btnText={"Finalizar compra"}/>
                    <Link to="/" className="link-formatation">
                        <Button variant={BUTTON_VARIANTS.ORANGE_ICON} btnText={"Continuar comprando"} imageIcon={cart}/>
                    </Link>
                </div>
            </div>
            
        </div>
    );
}

export default ShoppingCart;
