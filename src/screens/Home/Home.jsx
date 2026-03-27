import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../components/Button/Button';
import './Home.css'

const Home = () =>{
  return (
    <div>
      <h1>Página Inicial</h1>
      <nav className="container-nav">
        <Link to="/login">
            <Button btnText={"Login"} variant={"White"}/>
        </Link>
        <Link to="/criar-conta">
            <Button btnText={"Criar conta"} variant={"Orange"}/>
        </Link>
      </nav>
    </div>
  );
}

export default Home;
