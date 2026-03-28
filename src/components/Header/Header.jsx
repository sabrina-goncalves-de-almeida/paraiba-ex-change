import { Link } from 'react-router-dom';
import { FiSearch, FiHeart, FiShoppingCart } from "react-icons/fi";
import Button from "../../components/Button/Button";
import pbxLogo from "../../assets/logo/1211 Sem Título_20260220094915.png";
import "./Header.css";

function Header(){
    return(
        <div>
            <header className="header">
                <div className="logo">
                    <img className="pbx-logo" src={pbxLogo} alt="" />
                </div>
                <div className="search-bar">
                    <input type="text" placeholder="Buscar produtos, casas..." />
                    <FiSearch className="search-icon" />
                </div>
                <div className="header-actions">
                    <div className="auth-buttons">
                        <Link to="/login">
                            <Button btnText={"Entrar"} variant={"White"}/>
                        </Link>
                        <Link to="/criar-conta">
                            <Button btnText={"Criar conta"} variant={"Orange"}/>
                        </Link>
                    </div>
                    <div className="header-icons">
                        <FiHeart />
                        <FiShoppingCart />
                    </div>
                </div>
            </header>
        </div>
    );
}

export default Header;
